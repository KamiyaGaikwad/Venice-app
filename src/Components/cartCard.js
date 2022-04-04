import "../CartManagement/cart.css";
import { useCart } from "../Context/cartContext";
import { useWish } from "../Context/wishContext";


function CartCard(item){
  const {cartstate,cartdispatch} = useCart();
  const{wishdispatch} = useWish();
  console.log(item)

    return(
      
            <div className="card card-basic card-shadow">
                    <img src={item.imageURL} className="card-img-top" alt="jacket" />
                    <div className="card-body">
                      <h5 className="card-subtitle">{item.title}</h5>
                      <h3 className="card-title">₹{item.price}</h3>
                      <div className="card-text" />
                      <div className="cart-card-text cart-mb cart-text-big cart-mt">
                Quantity{" "}
                <button className="cart-btn cart-btn-success-outline cart-more" onClick={() => cartdispatch({ type: "REMOVE_FROM_CART", payload: item })}>-</button>
                <span className="cart-text-big"> {item.quantity} </span>
                <button className="cart-btn cart-btn-success-outline" onClick={() => cartdispatch({ type: "ADD_TO_CART", payload: item })}>+</button>
            </div>
                      <div className="card-actions flex-container flex-columns">
                        <a className="card-btn-1 cart-normal mb" onClick={() => cartdispatch({ type: "REMOVE_FROM_CART", payload: item })}>
                          Remove from Cart
                        </a>
                        <a className="card-btn-2 wish-normal"  onClick={() =>wishdispatch({ type: "ADD_TO_WISH", payload: item })}>
                          Move to Wishlist
                        </a>
                      </div>
                    </div>
            </div>

    );}
  // else{
  //   return null;
  // }}

    export default CartCard;