import React from 'react';

const ProductColorsAndSizes = (props) => {
    return (
        <div>
            <div className="color-box">
            {props.allColors.map((image, key) => {
                return <img src={image[1]} key={key}/>
            })}
            <p className="color-name">{props.currentColor[0]}</p>
            </div>
            <div className="sizes-box" onClick={props.toggleSizes}>
                <label>Size</label>
                <span>Select Size ></span>
                <div id="sizes-dropdown" className="sizes-content">
                    {props.sizes.map((size, key) => {
                        return <div className="size-number">{size}</div>
                    })}
                </div>
            </div>
            <span className="size-guide">Size guide</span>
            <div className="model-info">Sydney is 5’9” and wears a size 4</div>
        </div>
    )
}

export default ProductColorsAndSizes;