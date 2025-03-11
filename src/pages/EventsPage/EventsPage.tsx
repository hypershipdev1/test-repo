import { useHypershipEvents } from "@hypership/events-react";
import HypershipLogo from "../../assets/logo.svg";

const EventsPage = () => {
  const { trackEvent } = useHypershipEvents();

  const handleClick = () => {
    // This is the event key you created in your hypership project dashboard
    // you can pass any data you want to the event as metadata
    trackEvent("test-event", {
      button_text: "Trigger Event",
      additional_data: "This is some additional data",
      nested_data: {
        nested_key: "nested_value",
      },
    });
    alert(
      "Event triggered successfully! Check your Hypership dashboard to see the event."
    );
  };

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
      <div className="flex items-center" style={{ padding: "1rem" }}>
        <img className="bobbing-logo" src={HypershipLogo} alt="Logo" />
      </div>
      <p>
        The <code className="hypership-code">test-event</code> is already
        created in your Hypership project's dashboard. Click the button below to
        trigger it.
      </p>
      <p style={{ paddingBottom: "1rem" }}>
        Check this code in{" "}
        <code className="hypership-code">
          src/pages/EventsPage/EventsPage.tsx
        </code>{" "}
        to see how it works.
      </p>
      <button onClick={handleClick} className="button-primary">
        Trigger Event
      </button>
    </div>
  );
};

export default EventsPage;
