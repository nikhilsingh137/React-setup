import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import ServicePage from "./page/ServicePage";
import ContactPage from "./page/ContactPage";
import PricingPage from "./page/PricingPage";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/pricing" element={<PricingPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
