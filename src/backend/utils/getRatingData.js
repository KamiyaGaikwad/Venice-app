export default function getRatingData(productList,rating){
    if(Number(rating)===0){
        return productList;
    }
    else{
    return productList.filter((item) => Number(item.rating) < (Number(rating)+1) && Number(item.rating) >= Number(rating));
    }}