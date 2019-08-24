const express = require('express');
const { getProducts } = require('../database/dbHelpers.js');

const getProductsController = (req, res) => {
    getProducts()
    .then((data) => {
        res.status(200).send(data);
    })
    .catch((err) => {
        res.status(400).send(err);
    })
}

module.exports = {
    getProductsController
}