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
    path: "https://nikhilsingh137.github.io/React-setup/",
    element: <HomePage />,
  },
  {
    path: "https://nikhilsingh137.github.io/React-setup/about",
    element: <AboutPage />,
  },
  {
    path: "https://nikhilsingh137.github.io/React-setup/service",
    element: <ServicePage />,
  },
  {
    path: "https://nikhilsingh137.github.io/React-setup/service/:ServiceId",
    element: <ServiceFilterData />,
  },
  {
    path: "https://nikhilsingh137.github.io/React-setup/contact",
    element: <ContactPage />,
  },
  {
    path: "https://nikhilsingh137.github.io/React-setup/pricing",
    element: <PricingPage />,
  },
  {
    path: "https://nikhilsingh137.github.io/React-setup/:userId",
    element: <FormFilterData />,
  },
  {
    path: "*",
    element: <ExtraDataFilter />,
  },
]);

export default router;
