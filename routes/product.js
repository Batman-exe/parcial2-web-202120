var express = require('express');
const {getProducts, getProductByParam} = require("../controllers/product");
var router = express.Router();

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
router.get('/', function (req, res, next) {
  console.log(req.query.q)
  if (req.query.q != null)
    res.send(getProductByParam(req.query));
  else
    res.send(getProducts(req.params));
});

module.exports = router;
