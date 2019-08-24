const mongoose = require('mongoose');
const Product = require('./index.js');

const getProducts = () => {
    return Product.find({});
}

// getAProduct

module.exports = {
    getProducts
};