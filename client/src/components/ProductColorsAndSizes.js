import React from 'react';

const ProductColorsAndSizes = (props) => {
    return (
        <div>
            <div className="color-box">
            {props.allColors.map((image, key) => {
                return <img src={image[1]} />
            })}
            <p className="color-name">{props.currentColor[0]}</p>
            </div>
            <div className="sizes-box">
                <label>Size</label>
                <span>Select Size ></span>
            </div>
        </div>
    )
}

export default ProductColorsAndSizes;