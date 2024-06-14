import { createBrowserRouter } from "react-router-dom";
import HomePage from "./page/HomePage";
import FormFilterData from "./component/FormFilterData";
import AboutPage from "./page/AboutPage";
import ExtraDataFilter from "./component/ExtraDataFilter";
import ServicePage from "./page/ServicePage";
import ServiceFilterData from "./component/ServiceFilterData";
import ContactPage from "./page/ContactPage";
import PricingPage from "./page/PricingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/service",
    element: <ServicePage />,
  },
  {
    path: "/service/:ServiceId",
    element: <ServiceFilterData />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "/:userId",
    element: <FormFilterData />,
  },
  {
    path: "*",
    element: <ExtraDataFilter />,
  },
]);

export default router;
