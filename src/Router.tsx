// import { createBrowserRouter } from "react-router-dom";
// import HomePage from "./page/HomePage";
// import FormFilterData from "./component/FormFilterData";
// import AboutPage from "./page/AboutPage";
// import ExtraDataFilter from "./component/ExtraDataFilter";
// import ServicePage from "./page/ServicePage";
// import ServiceFilterData from "./component/ServiceFilterData";
// import ContactPage from "./page/ContactPage";
// import PricingPage from "./page/PricingPage";

// const router = createBrowserRouter([
//   {
//     path: "/React-setup",
//     element: <HomePage />,
//   },
//   {
//     path: "/React-setup/about",
//     element: <AboutPage />,
//   },
//   {
//     path: "/React-setup/service",
//     element: <ServicePage />,
//   },
//   {
//     path: "/React-setup/service/:ServiceId",
//     element: <ServiceFilterData />,
//   },
//   {
//     path: "/React-setup/contact",
//     element: <ContactPage />,
//   },
//   {
//     path: "/React-setup/pricing",
//     element: <PricingPage />,
//   },
//   {
//     path: "/React-setup/:userId",
//     element: <FormFilterData />,
//   },
//   {
//     path: "*",
//     element: <ExtraDataFilter />,
//   },
// ]);

// export default router;

import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import ServicePage from "./page/ServicePage";
import ContactPage from "./page/ContactPage";
import PricingPage from "./page/PricingPage";

const Router = () => {
  return (
    <div>
      <HashRouter basename="/React-setup">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/service" element={<ServicePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/pricing" element={<PricingPage />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Router;
