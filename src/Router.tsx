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
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:userId",
    element: <FormFilterData />,
  },
  {
    path: "/:userId/:userId",
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
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "*",
    element: <ExtraDataFilter />,
  },
  {
    path: "service/:ServiceId",
    element: <ServiceFilterData />,
  },
]);

export default router;
