import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import FormFilterData from "./component/FormFilterData";
import AboutPage from "./page/AboutPage";
import ExtraDataFilter from "./component/ExtraDataFilter";
import ServicePage from "./page/ServicePage";
import ServiceFilterData from "./component/ServiceFilterData";
import ContactPage from "./page/ContactPage";
import PricingPage from "./page/PricingPage";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/service/:ServiceId" element={<ServiceFilterData />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/:userId" element={<FormFilterData />} />
        <Route path="*" element={<ExtraDataFilter />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
