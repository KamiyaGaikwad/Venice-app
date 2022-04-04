export function getSortedData(productList, sortBy) {
  if (sortBy && sortBy === "HIGH_TO_LOW") {
    return productList.sort((a, k) => k["price"] - a["price"]);
  }

  if (sortBy && sortBy === "LOW_TO_HIGH") {
    return productList.sort((a, k) => a["price"] - k["price"]);
  }
  return productList;
}