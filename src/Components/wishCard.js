import "../wishManagement/wish.css";
import { useWish } from "../Context/wishContext";
import { useCart } from "../Context/cartContext";


function WishCard(item){
  const {wishstate,wishdispatch} = useWish();
const {cartdispatch} = useCart();
  return(

<div className="card card-basic card-shadow">
                <img
                  src={item.imageURL}
                  className="card-img-top"
                  alt="jacket"
                />
                <div className="card-body">
                  <h5 className="card-subtitle">{item.title}</h5>
                  <h3 className="card-title">₹{item.price}</h3>
                  <div className="card-actions flex-container flex-columns">
                    <a className="card-btn-1 mb cart-normal" onClick={() => cartdispatch({ type: "ADD_TO_CART", payload: item })}>
                      Add to Cart
                    </a>
                    <a className="card-btn-2 wish-add"  onClick={() =>wishdispatch({ type: "REMOVE_FROM_WISH", payload: item })}>
                      Remove from Wishlist
                    </a>
                  </div>
                </div>
              </div>
  )}

  export default WishCard;