import { useEffect } from "react";
import logo from "../Images/venice-logo.png";
import "./login.css";

export default function Login() {
  useEffect(() => {
    document.title = "Venice | Login";
  }, []);
  return (
    <>
      <nav className="nav">
        <div className="left">
          <a href="https://venice-app.netlify.app/" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <a
            href="https://venice-app.netlify.app/#"
            className="btn btn-link brand"
          >
            Venice
          </a>
        </div>
        <div className="right">
          <div className="input-group search">
            <input type="text" placeholder="Search" />
          </div>
          <a href="https://venice-app.netlify.app/Authentication/login.html">
            <button className="btn btn-primary">Login</button>
          </a>
          <div className="badge">
            <a href="https://venice-app.netlify.app/wishManagement/wish.html">
              <i className="fas fa-heart" />
              <div className="badge-icon">0</div>
            </a>
          </div>
          <div className="badge cart-icon">
            <a href="https://venice-app.netlify.app/CartManagement/cart.html">
              <i className="fas fa-shopping-cart" />
              <div className="badge-icon">0</div>
            </a>
          </div>
        </div>
      </nav>
      <div className="white-box">
        <h2 className="pb">Login</h2>
        <div className="input-group">
          <label>Email-Id*</label>
          <input type="text" required />
        </div>
        <div className="input-group">
          <label>Password*</label>
          <input className="pwd" type="password" required />
        </div>
        <button className="btn btn-primary">Login</button>
        <a href="https://venice-app.netlify.app/Authentication/signup.html">
          <button className="btn btn-link">Or Signup</button>
        </a>
      </div>
    </>
  );
}
