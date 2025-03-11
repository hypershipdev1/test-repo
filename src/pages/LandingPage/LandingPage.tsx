import "./LandingPage.css";
import HypershipLogo from "../../assets/logo.svg";

const LandingPage = () => {
  const comment = "Get the code for this deployed app";
  const command = `npx hypership init ${
    import.meta.env.VITE_HYPERSHIP_PUBLIC_KEY
  }`;

  return (
    <div className="landing-container">
      <div className="flex items-center">
        <img
          className="bobbing-logo"
          src={HypershipLogo}
          alt="Hypership Logo"
        />
      </div>

      <div className="terminal-card">
        <div className="gradient-top"></div>
        <div className="gradient-bottom"></div>

        <div className="card-header">
          <div className="browser-button red"></div>
          <div className="browser-button amber"></div>
          <div className="browser-button green"></div>
        </div>

        <code className="terminal-content">
          <pre>
            <span className="comment"># {comment}</span>
          </pre>
          <pre>
            <span className="dollar">$</span>{" "}
            <span className="command">{command}</span>
          </pre>
        </code>
      </div>

      {/* Section for links */}
      <div className="links-section">
        <a href="/auth" className="link">
          <div className="link-content">
            <span>Authentication Example</span>
            <code className="route-path">/auth</code>
          </div>
        </a>
        <a href="/analytics" className="link">
          <div className="link-content">
            <span>Analytics Example</span>
            <code className="route-path">/analytics</code>
          </div>
        </a>
        <a href="/events" className="link">
          <div className="link-content">
            <span>Events Example</span>
            <code className="route-path">/events</code>
          </div>
        </a>
      </div>

      {/* Section for README.md */}
      <div className="readme-section">
        <p>
          Check out the <code className="hypership-code">README.md</code> to
          learn about this template.
        </p>
      </div>

      <footer className="footer">
        <a
          href="https://hypership.dev"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with
          <span>
            <svg
              width="80"
              height="13"
              viewBox="0 0 116 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.578875 12V0.815999H2.46687V5.664H8.01888V0.815999H9.90687V12H8.01888V7.424H2.46687V12H0.578875ZM20.2964 12H18.3764V7.584L14.2164 0.815999H16.2804L19.3364 5.904L22.3924 0.815999H24.4564L20.2964 7.584V12ZM32.6007 0.815999C34.2968 0.815999 35.5341 1.14133 36.3127 1.792C37.0914 2.44267 37.4808 3.44533 37.4808 4.8C37.4808 6.15467 37.0808 7.14667 36.2808 7.776C35.4914 8.40533 34.2754 8.72 32.6328 8.72H30.6487V12H28.7607V0.815999H32.6007ZM32.8408 7.008C33.8861 7.008 34.5954 6.81067 34.9688 6.416C35.3528 6.01067 35.5448 5.424 35.5448 4.656C35.5448 3.87733 35.3048 3.328 34.8247 3.008C34.3448 2.688 33.5928 2.528 32.5687 2.528H30.6487V7.008H32.8408ZM50.4342 0.815999V2.592H44.4662V5.552H49.8262V7.232H44.4662V10.224H50.6262V12H42.5782V0.815999H50.4342ZM64.855 4.448C64.855 6.29333 64.0497 7.456 62.439 7.936L65.367 12H62.967L60.295 8.24H57.815V12H55.927V0.815999H60.087C61.7937 0.815999 63.015 1.104 63.751 1.68C64.487 2.256 64.855 3.17867 64.855 4.448ZM60.167 6.528C61.2337 6.528 61.959 6.36267 62.343 6.032C62.727 5.70133 62.919 5.17333 62.919 4.448C62.919 3.712 62.7217 3.21067 62.327 2.944C61.9323 2.66667 61.2283 2.528 60.215 2.528H57.815V6.528H60.167ZM73.8236 2.288C73.2796 2.288 72.8316 2.4 72.4796 2.624C72.1276 2.848 71.9516 3.18933 71.9516 3.648C71.9516 4.096 72.1276 4.44267 72.4796 4.688C72.8316 4.92267 73.5783 5.17867 74.7196 5.456C75.8716 5.73333 76.7356 6.12267 77.3116 6.624C77.8983 7.12533 78.1916 7.86667 78.1916 8.848C78.1916 9.81867 77.8236 10.608 77.0876 11.216C76.3516 11.824 75.3863 12.128 74.1916 12.128C72.4423 12.128 70.8903 11.5253 69.5356 10.32L70.7196 8.896C71.8503 9.87733 73.0236 10.368 74.2396 10.368C74.8476 10.368 75.3276 10.24 75.6796 9.984C76.0423 9.71733 76.2236 9.37067 76.2236 8.944C76.2236 8.50667 76.053 8.17067 75.7116 7.936C75.381 7.69067 74.805 7.472 73.9836 7.28C73.1623 7.07733 72.5383 6.896 72.1116 6.736C71.685 6.56533 71.3063 6.34667 70.9756 6.08C70.3143 5.57867 69.9836 4.81067 69.9836 3.776C69.9836 2.74133 70.357 1.94667 71.1036 1.392C71.861 0.826666 72.7943 0.544 73.9036 0.544C74.6183 0.544 75.3276 0.661333 76.0316 0.896C76.7356 1.13067 77.3436 1.46133 77.8556 1.888L76.8476 3.312C76.517 3.01333 76.069 2.768 75.5036 2.576C74.9383 2.384 74.3783 2.288 73.8236 2.288ZM83.4057 12V0.815999H85.2937V5.664H90.8457V0.815999H92.7337V12H90.8457V7.424H85.2937V12H83.4057ZM98.7232 0.815999H100.611V12H98.7232V0.815999ZM110.428 0.815999C112.124 0.815999 113.361 1.14133 114.14 1.792C114.918 2.44267 115.308 3.44533 115.308 4.8C115.308 6.15467 114.908 7.14667 114.108 7.776C113.318 8.40533 112.102 8.72 110.46 8.72H108.476V12H106.588V0.815999H110.428ZM110.668 7.008C111.713 7.008 112.422 6.81067 112.796 6.416C113.18 6.01067 113.372 5.424 113.372 4.656C113.372 3.87733 113.132 3.328 112.652 3.008C112.172 2.688 111.42 2.528 110.396 2.528H108.476V7.008H110.668Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </a>
      </footer>
    </div>
  );
};

export default LandingPage;
