import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";
import { HypershipAnalyticsProvider } from "@hypership/analytics-react";
import { HypershipEventsProvider } from "@hypership/events-react";
import { HypershipAuthProvider } from "@hypership/auth-react";
import "@hypership/auth-react/style";
import AppRoutes from "./Routes";

const App = () => {
  return (
    <StrictMode>
      <HypershipAuthProvider apiKey={import.meta.env.VITE_HYPERSHIP_PUBLIC_KEY}>
        <HypershipAnalyticsProvider
          apiKey={import.meta.env.VITE_HYPERSHIP_PUBLIC_KEY}
        />
        <HypershipEventsProvider
          apiKey={import.meta.env.VITE_HYPERSHIP_PUBLIC_KEY}
        >
          <Router>
            <AppRoutes />
          </Router>
        </HypershipEventsProvider>
      </HypershipAuthProvider>
    </StrictMode>
  );
};

export default App;
