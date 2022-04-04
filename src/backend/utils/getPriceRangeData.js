export default function getPriceRangeData(productList,priceRange){
    return productList.filter((item) => Number(item.price) <= Number(priceRange));
}