import { createBrowserRouter, createHashRouter } from "react-router-dom";
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
    path: "/React-setup",
    element: <HomePage />,
  },
  {
    path: "/React-setup/about",
    element: <AboutPage />,
  },
  {
    path: "/React-setup/service",
    element: <ServicePage />,
  },
  {
    path: "/React-setup/service/:ServiceId",
    element: <ServiceFilterData />,
  },
  {
    path: "/React-setup/contact",
    element: <ContactPage />,
  },
  {
    path: "/React-setup/pricing",
    element: <PricingPage />,
  },
  {
    path: "/React-setup/:userId",
    element: <FormFilterData />,
  },
  {
    path: "*",
    element: <ExtraDataFilter />,
  },
]);

export default router;
