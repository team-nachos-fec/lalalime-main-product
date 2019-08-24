const express = require('express');
const { getProductsController } = require('./controller.js');
const router = express.Router();

router.route('/products')
    .get(getProductsController)

module.exports = router;