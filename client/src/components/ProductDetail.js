import React from 'react';
import ProductColorsAndSizes from './ProductColorsAndSizes.js';
import Checkout from './Checkout.js';

const ProductDetail = (props) => {
    return (
        <div className="product-detail-box">
            <div className="product-name">{props.name}</div>
            <span className="product-price">{props.price}</span>
            <h2 className="wwmt">Why we made this</h2>
            <p className="product-description">{props.description}</p>
            <hr/>
            <ProductColorsAndSizes allColors={props.allColors} currentColor={props.currentColor}/>
            <Checkout />
        </div>
    )
}

export default ProductDetail;