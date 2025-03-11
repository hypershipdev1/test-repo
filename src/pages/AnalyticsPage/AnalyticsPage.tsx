import HypershipLogo from "../../assets/logo.svg";

const AnalyticsPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <div className="flex items-center" style={{ paddingBottom: "1rem" }}>
        <img className="bobbing-logo" src={HypershipLogo} alt="Logo" />
      </div>
      <p>
        By simply importing the{" "}
        <code className="hypership-code">&lt;HypershipAnalytics /&gt;</code>{" "}
        component, you can start logging page views and other metrics.
      </p>
      <p>
        Check the code in <code className="hypership-code">/src/App.tsx</code>{" "}
        to see how it works.
      </p>
      <p>
        Open the network tab in your browser and you'll see the page view events
        being logged.
      </p>
    </div>
  );
};

export default AnalyticsPage;
