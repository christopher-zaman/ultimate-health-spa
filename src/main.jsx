
import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { initializeAnalytics } from "./lib/analytics";
import "./index.css";

// TEMPORARY SAFARI DEBUGGING
function showDebugError(type, error) {
  const message =
    error?.stack ||
    error?.message ||
    String(error || "Unknown error");

  let panel = document.getElementById("safari-debug-panel");

  if (!panel) {
    panel = document.createElement("div");
    panel.id = "safari-debug-panel";

    Object.assign(panel.style, {
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      maxHeight: "75vh",
      overflow: "auto",
      zIndex: "2147483647",
      background: "#7f1d1d",
      color: "#ffffff",
      padding: "20px",
      fontSize: "13px",
      fontFamily: "monospace",
      whiteSpace: "pre-wrap",
      overflowWrap: "anywhere",
    });

    document.body.appendChild(panel);
  }

  panel.textContent +=
    "\n\n[" + type + "]\n" + message;
}

window.addEventListener("error", (event) => {
  showDebugError(
    "JavaScript Error",
    event.error || event.message
  );
});

window.addEventListener("unhandledrejection", (event) => {
  showDebugError(
    "Unhandled Promise Rejection",
    event.reason
  );
});

initializeAnalytics();

const root = document.getElementById("root");

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app, {
    onRecoverableError(error) {
      showDebugError("React Hydration Error", error);
    },
    onUncaughtError(error) {
      showDebugError("React Uncaught Error", error);
    },
    onCaughtError(error) {
      showDebugError("React Caught Error", error);
    },
  });
} else {
  createRoot(root, {
    onUncaughtError(error) {
      showDebugError("React Uncaught Error", error);
    },
    onCaughtError(error) {
      showDebugError("React Caught Error", error);
    },
  }).render(app);
}
