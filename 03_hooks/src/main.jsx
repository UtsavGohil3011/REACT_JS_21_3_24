import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Counter from "./Counter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App /> <br /> <br /> <hr /> <br /> <p>Below Counter Page --- "Counter.jsx"</p><br />
    <Counter />
  </>
);
