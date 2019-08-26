import React from 'react';

const ProductDetail = (props) => {
    return (
        <div>
            <div>{props.name}</div>
            <span>{props.price}</span>
            <h2>Why we made this</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default ProductDetail;