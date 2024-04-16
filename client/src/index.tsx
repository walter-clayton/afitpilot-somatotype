import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-VE6XKWVTFG";
ReactGA.initialize(GA_MEASUREMENT_ID);

if (process.env.REACT_APP_ENVIRONMENT === "staging") {
  const username = prompt("Enter username");
  const password = prompt("Enter password");

  const expectedUsername = "afitpilot";
  const expectedPassword = "staging";

  if (username !== expectedUsername || password !== expectedPassword) {
    alert("Invalid credentials");
    window.close();
  } else {
    const root = ReactDOM.createRoot(
      document.getElementById("root") as HTMLElement
    );
    root.render(<App />);
  }
} else {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(<App />);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
