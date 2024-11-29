import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Auth from "../_auth/Auth";
import AnalyticsDashboard from "../pages/dashboard/AnalyticsDashboard";
import CrmDashboard from "../pages/dashboard/CrmDashboard";
import EcommerceDashboard from "../pages/dashboard/EcommerceDashboard";
import LogistickDashboard from "../pages/dashboard/LogistickDashboard";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        index: true, // Default route when path is `/`
        element: <AnalyticsDashboard />,
      },
      {
        path:"/analytics-dashboad",
        element: <AnalyticsDashboard/>
      },
      {
        path:"/crm-dashboard",
        element: <CrmDashboard/>
      },
      {
        path:"/ecommerce-dashboard",
        element:<EcommerceDashboard/>
      },
      {
        path:"/logistics-dashboard",
        element:<LogistickDashboard/>
      },
    ]
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

export default AppRouter;
