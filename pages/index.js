import Image from 'next/image'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./_app.js"; // make sure App is .js
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App, null)
  )
);



