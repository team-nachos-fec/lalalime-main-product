import React from 'react';

const ProductColors = (props) => {
    return (
        <div>
            <div className="color-box">
            {props.allColors.map((image, key) => {
                return <img src={image[1]} />
            })}
            <p className="color-name">{props.currentColor[0]}</p>
            </div>
        </div>
    )
}

export default ProductColors;