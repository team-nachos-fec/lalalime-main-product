import React from 'react';

const ImagesList = (props) => {
    return (
        <div>
        {props.images.map((image, key) => {
            return <img src={image} key={key}/>
        })}
        </div>
    )
}

export default ImagesList;