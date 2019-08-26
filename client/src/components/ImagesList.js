import React from 'react';

const ImagesList = (props) => {
    return (
        <div>
        {props.currentImages.map((image, key) => {
            return <img src={image} key={key} className="large-images"/>
        })}
        </div>
    )
}

export default ImagesList;