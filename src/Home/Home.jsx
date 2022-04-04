import { Link } from "react-router-dom";
import "../App.css";
import Nav from "../Components/Nav";
import { useProducts } from "../Context/productContext";

export default function Home() {
  const {dispatch} = useProducts();
  
  return (
    <div className="grid-container">
      <Nav />
      <div className="alert-container">
        Select your favourite color Theme and get all the Jackets you vibe with
        <span>😊</span>
      </div>
      <h2 className="brand center">Jackets</h2>
      <div className="themes">
        <Link to="/product" className="theme-color theme-red tdn" onClick={()=>dispatch({ type: "BY_CATEGORY", payload: "Red" })}>
          <div className="theme-text">Red</div>
        </Link>
        <Link to="/product" className="theme-color theme-orange tdn"  onClick={()=>dispatch({ type: "BY_CATEGORY", payload: "Orange" })}>
          <div className="theme-text">Orange</div>
        </Link>
        <Link to="/product" className="theme-color theme-yellow tdn"  onClick={()=>dispatch({ type: "BY_CATEGORY", payload: "Yellow" })}>
          <div className="theme-text">Yellow</div>
        </Link>
        <Link to="/product" className="theme-color theme-green tdn"  onClick={()=>dispatch({ type: "BY_CATEGORY", payload: "Green" })}>
          <div className="theme-text">Green</div>
        </Link>
        <Link to="/product" className="theme-color theme-blue tdn"  onClick={()=>dispatch({ type: "BY_CATEGORY", payload: "Blue" })}>
          <div className="theme-text">Blue</div>
        </Link>
        <Link to="/product" className="theme-color theme-indigo tdn"  onClick={()=>dispatch({ type: "BY_CATEGORY", payload: "Indigo" })}>
          <div className="theme-text">Indigo</div>
        </Link>
        <Link to="/product" className="theme-color theme-violet tdn"  onClick={()=>dispatch({ type: "BY_CATEGORY", payload: "Violet" })}>
          <div className="theme-text">Violet</div>
        </Link>
      </div>
      <Link to="/product" className="tdn">
        <button className="btn btn-primary pink-big center">Shop Now!</button>
      </Link>
    </div>
  );
}
