import "../App.css";
import { Link } from "react-router-dom";
import logo from "../Images/venice-logo.png";
import { useCart } from "../Context/cartContext";
import { useWish } from "../Context/wishContext";

const Nav =() =>{
  const {cartstate,cartdispatch} = useCart();
  const {cartitems,cartprice} = cartstate;
    const {wishstate} = useWish();
    const {wishItems} = wishstate;
    return(
        <nav className="nav">
        <div className="left">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/" className="btn btn-link brand">
            Venice
          </Link>
        </div>
        <div className="right">
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
          <div className="badge">
            <Link to="/wishlist">
              <i className="fas fa-heart" />
              <div className="badge-icon">{wishItems}</div>
            </Link>
          </div>
          <div className="badge cart-icon">
            <Link to="/cart">
              <i className="fas fa-shopping-cart" />
              <div className="badge-icon">{cartitems}</div>
            </Link>
          </div>
        </div>
        </nav>
    );}

export default Nav;