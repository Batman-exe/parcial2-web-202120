const data = require('../assets/data');

function getProducts(query) {
  return data;
}

function getProductByParam(query) {
  console.log('llega');
  let products = [];
  for (let i = 0; i < data.length; i++) {
    if(data[i].name.toLowerCase().includes(query.q)){
      products.push(data[i]);
    }
  }
  return products ;
}
module.exports = { getProducts, getProductByParam };
