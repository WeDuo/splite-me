import React from "react";
import ReactDOM from "react-dom/client"; // Use the new ReactDOM API
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css';
const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
root.render(
 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
);