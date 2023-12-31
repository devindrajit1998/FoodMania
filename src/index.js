import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductProvider } from "./contexAPI/ProductContex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <ProductProvider>
      <App />
    </ProductProvider>
 
);

reportWebVitals();
