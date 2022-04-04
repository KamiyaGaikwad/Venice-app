import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Context/cartContext";
import { WishProvider } from "./Context/wishContext";
import { ProductProvider } from "./Context/productContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
    <WishProvider>
    <CartProvider>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </CartProvider>
  </WishProvider>
  </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
