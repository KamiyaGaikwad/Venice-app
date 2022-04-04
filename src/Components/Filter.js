import { useProducts } from "../Context/productContext";

export default function Filter(){
    const {state,dispatch} = useProducts();
    const {sortBy,priceRange,category,rating}  = state;
    return(
        <>
        <div className="flex-container flex-rows pb">
              <h2 className="pb">Filters</h2>
              <button className="btn btn-link" onClick={() => dispatch({ type: "CLEAR_FILTERS" })}>Clear</button>
            </div> 
            <div className="flex-container flex-columns pb">
               <h3 className="pb">Price</h3>
              <div className="slidecontainer mb">
                <pre>
                  50{"      "}100{"      "}150
                </pre>
                <input
                  type="range"
                  min="50"
                  max="150"
                  className="mb"
                  value={priceRange}
                  onChange={(e) =>
                    dispatch({
                    type: "BY_PRICE_RANGE",
                    payload: e.target.value
                  })}
                />
              </div>
              <div className="flex-container flex-columns pb">
                <h3 className="pb">Color Theme</h3>
                <div className="radio-container flex-container flex-columns pb mb">
                  <div className="radio-group">
                    <input
                      type="checkbox"
                      className="radio"
                      id="red"
                      name="Red"
                      onChange={(e)=>dispatch({ type: "BY_CATEGORY", payload: e.target.name })}
                      checked={category.includes("Red")}
                    />
                    <label htmlFor="red">Red</label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="checkbox"
                      className="radio"
                      id="orange"
                      name="Orange"
                      onChange={(e)=>dispatch({ type: "BY_CATEGORY", payload: e.target.name })}
                      checked={category.includes("Orange")}
                    />
                    <label htmlFor="orange">Orange</label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="checkbox"
                      className="radio"
                      id="yellow"
                      name="Yellow"
                      onChange={(e)=>dispatch({ type: "BY_CATEGORY", payload: e.target.name })}
                      checked={category.includes("Yellow")}
                    />
                    <label htmlFor="yellow">Yellow</label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="checkbox"
                      className="radio"
                      id="green"
                      name="Green"
                      onChange={(e)=>dispatch({ type: "BY_CATEGORY", payload: e.target.name })}
                      checked={category.includes("Green")}
                    />
                    <label htmlFor="green">Green</label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="checkbox"
                      className="radio"
                      id="blue"
                      name="Blue"
                      onChange={(e)=>dispatch({ type: "BY_CATEGORY", payload: e.target.name })}
                      checked={category.includes("Blue")}
                    />
                    <label htmlFor="blue">Blue</label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="checkbox"
                      className="radio"
                      id="indigo"
                      name="Indigo"
                      onChange={(e)=>dispatch({ type: "BY_CATEGORY", payload: e.target.name })}
                      checked={category.includes("Indigo")}
                    />
                    <label htmlFor="indigo">Indigo</label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="checkbox"
                      className="radio"
                      id="violet"
                      name="Violet"
                      onChange={(e)=>dispatch({ type: "BY_CATEGORY", payload: e.target.name })}
                      checked={category.includes("Violet")}
                    />
                    <label htmlFor="violet">Violet</label>
                  </div>
                </div>
              </div>
              <div className="flex-container flex-columns pb">
                <h3 className="pb">Rating</h3>
                <div className="radio-container  flex-container flex-columns pb mb">
                <div className="radio-group">
                    <input
                      type="radio"
                      className="radio"
                      id="5"
                      name="radio-btn"
                      value="5"
                      onClick={(e)=>dispatch({ type: "BY_RATING", payload: e.target.value })}
                      checked={rating === "5"}
                    />
                    <label htmlFor="5">5 stars</label>
                    </div>
                  <div className="radio-group">
                    <input
                      type="radio"
                      className="radio"
                      id="4+"
                      name="radio-btn"
                      value="4"
                      onClick={(e)=>dispatch({ type: "BY_RATING", payload: e.target.value })}
                      checked={rating === "4"}
                    />
                    <label htmlFor="4+">4 stars and above</label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="radio"
                      className="radio"
                      id="3+"
                      name="radio-btn"
                      value="3"
                      onClick={(e)=>dispatch({ type: "BY_RATING", payload: e.target.value })}
                      checked={rating === "3"}
                    />
                    <label htmlFor="3+">3 stars and above</label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="radio"
                      className="radio"
                      id="2+"
                      name="radio-btn"
                      value="2"
                      onClick={(e)=>dispatch({ type: "BY_RATING", payload: e.target.value })}
                      checked={rating === "2"}
                    />
                    <label htmlFor="2+">2 stars and above</label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="radio"
                      className="radio"
                      id="1+"
                      name="radio-btn"
                      value="1"
                      onClick={(e)=>dispatch({ type: "BY_RATING", payload: e.target.value })}
                      checked={rating === "1"}
                    />
                    <label htmlFor="1+">1 star and above</label>
                  </div>
                </div>
              </div>  
              <div className="flex-container flex-columns pb">
                <h3 className="pb">Sort By</h3>
                <div className="radio-container flex-container flex-columns pb mb">
                  <div className="radio-group">
                    <input
                      type="radio"
                      className="radio"
                      id="lth"
                      name="radio-btn1"
                      onChange={() =>dispatch({ type: "SORT_BY" , payload:"LOW_TO_HIGH"})}
                      checked={sortBy === "LOW_TO_HIGH"}
                    />
                    <label htmlFor="lth">Price-Low to High</label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="radio"
                      className="radio"
                      id="htl"
                      name="radio-btn1"
                      onChange={() =>dispatch({ type: "SORT_BY", payload:"HIGH_TO_LOW"})}
                      checked={sortBy === "HIGH_TO_LOW"}
                    />
                    <label htmlFor="htl">Price-High to Low</label>
                  </div>
                </div>
              </div>
            </div>
            </>)
}