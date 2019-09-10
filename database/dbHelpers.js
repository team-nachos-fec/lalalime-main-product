const mongoose = require('mongoose');
const Product = require('./index.js');

const getProducts = () => {
    return Product.find({ property: 'bottom' });
}

// getAProduct

module.exports = {
    getProducts
};