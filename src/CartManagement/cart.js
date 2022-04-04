import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "../Images/venice-logo.png";
import "./cart.css";
import { useCart } from "../Context/cartContext";
import Nav from "../Components/Nav";
import CartCard from "../Components/cartCard";
import PriceCard from "../Components/priceCard";

export default function Cart() {

  const {cartstate,cartdispatch} = useCart();
  const {cart,cartitems,cartprice} = cartstate;

  return (
    <>
      <div className="cart-flex-container cart-flex-columns">
        <Nav />
        <div className="cart-flex-container">
          <main className="cart-ml cart-mt cart-flex-container cart-flex-columns cart-flex-center">
            <h2 className="cart-brand">
              My Cart<span className="cart-text-small">({cartitems})</span>
            </h2>
            <div id="cart-card-container" className="cart-mt cart-flex-rows">
              <div className="cart-cart-card-grid">
              {cart.map((item)=>(<CartCard key={item._id} title={item.title} price={item.price} imageURL={item.imageURL} quantity={item.quantity}/>))}
              </div>
              {cart.length>0?<PriceCard />:null}
              
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
