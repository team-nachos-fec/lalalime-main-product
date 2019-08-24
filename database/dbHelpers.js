const mongoose = require('mongoose');
const Product = require('./index.js');

const getProducts = (req, res) => {
    return Product.find();
}

// getAProduct

module.exports = {
    getProducts
};