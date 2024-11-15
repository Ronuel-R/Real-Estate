import './css/index.css'
import LandingPage from './pages/landing_page.jsx'
import ProductPage from './pages/property_page.jsx';
import AdminPage from './pages/admin_dashboard.jsx'
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";  

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage  />,  
  },
  {
    path: "/admin",
    element: <AdminPage  />,  
  },
  {
    path: "/product/:id",
    element: <ProductPage  />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
