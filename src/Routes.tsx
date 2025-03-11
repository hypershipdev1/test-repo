import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import AnalyticsPage from "./pages/AnalyticsPage/AnalyticsPage";
import PrivatePage from "./pages/PrivatePage/PrivatePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/private" element={<PrivatePage />} />
    </Routes>
  );
};

export default AppRoutes;
