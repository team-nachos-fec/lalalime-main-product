import React from 'react';

const ProductColorsAndSizes = (props) => {
    return (
        <div>
            <div className="color-box">
            {props.firstColor.map((image, key) => {
                return <img src={image[1]} key={key} onClick={props.firstBox}/>
            })}
            {props.secondColor.map((image, key) => {
                return <img src={image[1]} key={key} onClick={props.secondBox}/>
            })}
            {props.thirdColor.map((image, key) => {
                return <img src={image[1]} key={key} onClick={props.thirdBox}/>
            })}
            <p className="color-name">{props.currentColor[0]}</p>
            </div>
            <div className="sizes-box" onClick={props.toggleSizes}>
                <label>Size</label>
                <span>{props.currentSize} ></span>
                <div id="sizes-dropdown" className="sizes-content">
                    {props.sizes.map((size, key) => {
                        return <div className="size-number" key={key} onClick={props.onClickSize}>{size}</div>
                    })}
                </div>
            </div>
            <span className="size-guide">Size guide</span>
            <div className="model-info">Sydney is 5’9” and wears a size 4</div>
        </div>
    )
}

export default ProductColorsAndSizes;