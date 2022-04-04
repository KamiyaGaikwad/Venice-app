import { Link } from "react-router-dom";
import { useState } from "react";
import Nav from "../Components/Nav";
import "./login.css";

export default function SignUp() {
  const [typeOfPassword,setTypeOfPassword] = useState("password"); 
  return (
    <>
      <Nav />
      <div className="white-box-signup">
        <h2 className="pb">SignUp</h2>
        <div className="input-group">
          <label>Email-Id*</label>
          <input type="text" required />
        </div>
        <div className="input-group">
          <label>FirstName*</label>
          <input type="text" required />
        </div>
        <div className="input-group">
          <label>LastName</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>Password*</label>
          <input className="pwd" type={typeOfPassword} required />
          <button className="btn btn-primary"  onClick={()=>typeOfPassword==="password"?setTypeOfPassword("text"):setTypeOfPassword("password")}>
            <i className={typeOfPassword==="password"?"fas fa-eye":"fas fa-eye-slash"} />
          </button>
        </div>
        <div className="input-group">
          <label>Confirm Password*</label>
          <input className="pwd" type="password" required />
        </div>
        <button className="btn btn-primary">SignUp</button>
        <Link to="/login" className="no-deco">
          <button className="btn btn-link">Or Login</button>
        </Link>
      </div>
      <div></div>
    </>
  );
}
