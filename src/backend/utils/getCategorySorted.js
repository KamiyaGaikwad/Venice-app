export default function getCategorySorted(productList,categoryArray){
    let categorySortedArray = [];
    let productArray1 = [...productList];
    let productArray2 = [...productList];
    let productArray3 = [...productList];
    let productArray4 = [...productList];
    let productArray5 = [...productList];
    let productArray6 = [...productList];
    let productArray7 = [...productList];
if(categoryArray.includes("Red")){
    categorySortedArray.push(...productArray1.filter((item)=>item.category === "Red"))
}
if(categoryArray.includes("Orange")){
    
    categorySortedArray.push(...productArray2.filter((item)=>item.category === "Orange"))
}
if(categoryArray.includes("Green")){
    
    categorySortedArray.push(...productArray3.filter((item)=>item.category === "Green"))
}
if(categoryArray.includes("Yellow")){
    
    categorySortedArray.push(...productArray4.filter((item)=>item.category === "Yellow"))
}
if(categoryArray.includes("Blue")){
    
    categorySortedArray.push(...productArray5.filter((item)=>item.category === "Blue"))
}
if(categoryArray.includes("Indigo")){
    
    categorySortedArray.push(...productArray6.filter((item)=>item.category === "Indigo"))
}
if(categoryArray.includes("Violet")){
    
    categorySortedArray.push(...productArray7.filter((item)=>item.category === "Violet"))
}
if(categorySortedArray.length === 0){
    categorySortedArray = productList
}
return categorySortedArray;
}
