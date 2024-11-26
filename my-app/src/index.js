import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/output.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; // Redux Provider for state management
import { Store } from "./ReduxTool/Store"; // Redux Store for global state

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
      <Provider store={Store}>
        {/* Main App component */}
        <App />
      </Provider>
    </BrowserRouter>
  </>
);
