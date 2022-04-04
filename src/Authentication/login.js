import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import "./login.css";

export default function Login() {
  
  return (
    <>
      <Nav />
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
        <Link to="/signup" class="no-deco">
          <button className="btn btn-link">Or Signup</button>
        </Link>
      </div>
    </>
  );
}
