import React from 'react';

const SocialMedia = (props) => {
    return (
        <div className="social-media-box">
            <img src="https://cdn0.iconfinder.com/data/icons/feather/96/591236-share-512.png" />
            <button type="button" className="social-media-button"> Share</button>
            <span className="vertical-line"> </span>
            <img src="https://image.flaticon.com/icons/svg/69/69425.svg" />
            <button type="button" className="social-media-button"> Live Chat</button>
            <span className="vertical-line"> </span>
            <img src="https://icon-library.net/images/star-icon-svg/star-icon-svg-0.jpg" />
            <button type="button" className="social-media-button"> Reviews</button>
        </div>
    )
}

export default SocialMedia;