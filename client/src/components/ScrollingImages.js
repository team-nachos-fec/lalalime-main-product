import React from 'react';

const ScrollingImages = (props) => {
    return (
        <div className="small-image-box">
            {props.currentImages.map((image, key) => {
                return <img src={image} key={key} className="small-images" />
            })}
        </div>
    )
}

export default ScrollingImages;