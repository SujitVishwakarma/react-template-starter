import React, { useState } from 'react';
import { Link ,useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaAngleRight, FaTimes } from 'react-icons/fa';
import { MdOutlineCircle } from "react-icons/md"
const Sidebar = ({ isOpen, toggleSidebar }) => {
  // State to control the dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility on button click
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'bg-gray-200' : '';
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 transition-all duration-300 ${isOpen ? 'w-72' : 'w-20'} bg-white text-black shadow-2xl`}
    >
      <div className="flex justify-between p-4 items-center">
        {/* Logo Section (Click the logo to toggle sidebar) */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleSidebar}>
          <img
            src="https://via.placeholder.com/40" // Placeholder image URL
            alt="Logo"
            className="rounded-full w-10 h-10"
          />
          {isOpen && <span className="text-lg font-semibold">Logo</span>}
        </div>

        {/* Close Icon Section (only show when the sidebar is open) */}
        {isOpen && (
          <div>
            <button onClick={toggleSidebar} className="text-black">
              <FaTimes size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Sidebar links */}
      <ul className="space-y-4 p-6">
        {/* Dropdown Button */}
        <li>
          <button
            onClick={toggleDropdown}
            className={`flex items-center space-x-2 p-2 rounded-md w-full text-left ${
              isOpen ? 'hover:bg-gray-100' : ''
            }`}
          >
            {isOpen && <FaHome />}
            {isOpen && <span>Dashboard</span>}
            {!isOpen && <FaHome />}
            {isOpen && <span className='flex w-[50%] items-end justify-end'><FaAngleRight className={` transition-transform ${isDropdownOpen ? 'rotate-90' : ''}`} /></span>}
          </button>
          {/* Dropdown Items */}
          {isDropdownOpen && isOpen && (
            <div className="pl-6 mt-2 space-y-2 font-ubuntu">
              <Link to="/analytics-dashboad" className={`block text-black p-2 rounded-md hover:bg-gray-200 ${isActive('/analytics-dashboad')}"`}>
                <span className='flex items-center gap-3'><MdOutlineCircle /><span>Analytics</span></span>
              </Link>
              <Link to="/crm-dashboard" className={`block text-black p-2 rounded-md hover:bg-gray-200 ${isActive('/analytics-dashboad')}"`}>
                <span className='flex items-center gap-3'><MdOutlineCircle /><span>CRM</span></span>
              </Link>
              <Link to="/ecommerce-dashboard" className={`block text-black p-2 rounded-md hover:bg-gray-200 ${isActive('/analytics-dashboad')}"`}>
                <span className='flex items-center gap-3'><MdOutlineCircle /><span>eCommerce</span></span>
              </Link>
              <Link to="/logistics-dashboard" className={`block text-black p-2 rounded-md hover:bg-gray-200 ${isActive('/analytics-dashboad')}"`}>
                <span className='flex items-center gap-3'><MdOutlineCircle /><span>Logistics</span></span>
              </Link>
            </div>
          )}
        </li>

        {/* Other Sidebar Links */}
        <li>
          <Link to="/users" className="flex items-center space-x-2 p-2 rounded-md">
            {isOpen && <FaUser />}
            {isOpen && <span>Users</span>}
            {!isOpen && <FaUser />}
          </Link>
        </li>
        <li>
          <Link to="/settings" className="flex items-center space-x-2 p-2 rounded-md">
            {isOpen && <FaCog />}
            {isOpen && <span>Settings</span>}
            {!isOpen && <FaCog />}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
