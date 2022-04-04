import "./wish.css";
import { useWish } from "../Context/wishContext";
import Nav from "../Components/Nav";
import WishCard from "../Components/wishCard";

export default function WishList() {
  const {wishstate} = useWish();
const {wish,wishItems} = wishstate

  return (
    <>
      <div className="flex-container flex-columns">
        <Nav />
        <div className="flex-container">
          <main className="ml mt flex-container flex-columns flex-center">
            <h2 className="brand">
              My WishList
              <span className="text-small">(Showing {wishItems} products)</span>
            </h2>
            <div id="card-container" className="mt flex-columns">
              {wish.map((item)=>(
                <WishCard title={item.title} price={item.price} imageURL={item.imageURL}/>
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
