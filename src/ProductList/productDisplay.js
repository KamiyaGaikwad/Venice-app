import "./product.css";
import Nav from "../Components/Nav"
// import products1 from "./products";
import ProductCard from "../Components/ProductCard";
import { useProducts } from "../Context/productContext";
import { getSortedData } from "../backend/utils/getPriceSorted";
import Filter from "../Components/Filter";
import getPriceRangeData from "../backend/utils/getPriceRangeData";
import getRatingData from "../backend/utils/getRatingData";
import getCategorySorted from "../backend/utils/getCategorySorted";

export default function ProductList() {

    const{state,dispatch}  = useProducts();
    const{products,sortBy,priceRange,rating,category} = state;
    let productList = [...products];
    const sortedData = getSortedData(productList, sortBy);
    console.log(priceRange,"priceRange")
    const priceRangeSorted = getPriceRangeData(sortedData,priceRange)
    console.log(priceRangeSorted);
    const ratingSorted = getRatingData(priceRangeSorted,rating)
    console.log(ratingSorted);
    const categorySorted = getCategorySorted(ratingSorted,category)
    console.log(categorySorted);
  return (
    <> 
      <div className="flex-container flex-columns">
        <Nav/>
        <div className="flex-container">
          <nav className="flex-container flex-columns nav-vertical">
            <Filter />
          </nav> 
          <main className="ml mt flex-container flex-columns">
            <h2 className="brand">
              Showing All products
              <span className="text-small">
                (Showing {categorySorted.length} {categorySorted.length==1?"product":"products"})
              </span>
            </h2>
            <div id="card-container" className="mt flex-columns">
              {categorySorted.map(( item ) =>(
                  <ProductCard key={item._id} title={item.title} price={item.price} imageURL={item.imageURL} />
                ))
              }
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

