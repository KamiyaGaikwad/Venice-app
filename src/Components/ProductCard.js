import "../ProductList/product.css";
import { useCart } from "../Context/cartContext";
import { useWish } from "../Context/wishContext";


function ProductCard( item ){
  const {cartstate,cartdispatch} = useCart();
  const{wishstate, wishdispatch} = useWish();
    return(
            <div className="card card-basic card-shadow">
                    <img src={item.imageURL} className="card-img-top" alt="jacket" />
                    <div className="card-body">
                      <h5 className="card-subtitle">{item.title}</h5>
                      <h3 className="card-title">₹{item.price}</h3>
                      <div className="card-text" />
                      <div className="card-actions flex-container flex-columns">
                        <a className="card-btn-1 cart-normal mb" onClick={() => cartdispatch({ type: "ADD_TO_CART", payload: item })}>
                          Add to Cart
                        </a>
                        <a className="card-btn-2 wish-normal" onClick={() =>wishdispatch({ type: "ADD_TO_WISH", payload: item })}>
                          Add to Wishlist
                        </a>
                      </div>
                    </div>
            </div>

    );}

    export default ProductCard;