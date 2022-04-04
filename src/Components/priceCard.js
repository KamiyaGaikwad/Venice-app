import "../CartManagement/cart.css";
import { useCart } from "../Context/cartContext";
import { Link } from "react-router-dom";


export default function PriceCard(){
    const {cartstate} = useCart();
const {cartitems,cartprice} = cartstate;
    return(
<div className="cart-card cart-card-basic cart-card-text-only pa">
                <div className="cart-card-body">
                  <h3 className="cart-card-title cart-mb">Price Details</h3>
                  <hr className="cart-mb" />
                  <div className="cart-card-text cart-mb">
                    Price ({cartitems} items)<span className="cart-end">₹{cartprice}</span>
                  </div>
                  <div className="cart-card-text cart-mb">
                    Discount<span className="cart-end">-₹0</span>
                  </div>
                  <div className="cart-card-text cart-mb">
                    Delivery Charges<span className="cart-end">₹0</span>
                  </div>
                  <hr className="cart-mb" />
                  <h5 className="cart-card-subtitle">
                    TOTAL AMOUNT<span className="cart-end">₹{cartprice}</span>
                  </h5>
                  <hr className="cart-mb" />
                  <div className="cart-card-text cart-mb">
                    You will save ₹0 on this order
                  </div>
                  <div className="cart-card-actions cart-flex-container cart-flex-center">
                    <Link to="/" className="cart-card-btn-1 cart-pink cart-mb cart-cart-normal cart-no-deco">
                      Place Order
                    </Link>
                  </div>
                </div>
              </div>)
}