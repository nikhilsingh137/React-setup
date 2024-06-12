import { createHashRouter } from "react-router-dom";
import HomePage from "./page/HomePage";
import FormFilterData from "./component/FormFilterData";
import AboutPage from "./page/AboutPage";
import ExtraDataFilter from "./component/ExtraDataFilter";
import ServicePage from "./page/ServicePage";
import ServiceFilterData from "./component/ServiceFilterData";
import ContactPage from "./page/ContactPage";
import PricingPage from "./page/PricingPage";

const router = createHashRouter([
  {
    path: "/React-setup/",
    element: <HomePage />,
  },
  {
    path: "/React-setup/:userId",
    element: <FormFilterData />,
  },
  {
    path: "/React-setup/:userId/:userId",
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
    path: "/React-setup/contact",
    element: <ContactPage />,
  },
  {
    path: "/React-setup/pricing",
    element: <PricingPage />,
  },
  {
    path: "*",
    element: <ExtraDataFilter />,
  },
  {
    path: "/React-setup/service/:ServiceId",
    element: <ServiceFilterData />,
  },
]);

export default router;
