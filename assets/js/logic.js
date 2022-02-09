function filterByCategory(arr, category) {
  const filteredArr = arr.filter(
    product => product.category.toLowerCase() === category.toLowerCase()
  );
  return filteredArr;
}

function filterByPrice(arr, price) {
  const filteredArr = arr.filter(product => product.price <= price);
  return filteredArr;
}

function searchProducts(arr, str) {
  const searchArr = arr.filter(product =>
    product.name.toLowerCase().includes(str.toLowerCase())
  );

  return searchArr;
}

function addToCart(arr, product) {
  arr.push(product);
  return arr;
}

export {filterByCategory, filterByPrice, searchProducts, addToCart};
//To test Uncomment the following code:
// module.exports = {filterByCategory, filterByPrice, searchProducts, addToCart};

