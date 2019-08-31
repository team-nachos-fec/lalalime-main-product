import React from 'react';

const SocialMedia = (props) => {
    return (
        <div className="social-media-box">
            <img src="https://cdn0.iconfinder.com/data/icons/feather/96/591236-share-512.png" />
            <button type="button" className="social-media-button" onClick={props.toggleSocialMedia}> Share</button>
            <span className="vertical-line"> </span>
            <img src="https://image.flaticon.com/icons/svg/69/69425.svg" />
            <button type="button" className="social-media-button"> Live Chat</button>
            <span className="vertical-line"> </span>
            <img src="https://icon-library.net/images/star-icon-svg/star-icon-svg-0.jpg" />
            <button type="button" className="social-media-button"> Reviews</button>
            <div id="social-media-links" className="social-media-icons">
                <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-512.png" />
                <img src="https://image.flaticon.com/icons/svg/54/54879.svg" />
                <img src="https://cdn0.iconfinder.com/data/icons/social-glyph/30/pinterest-480.png" />
                <img src="http://cdn.onlinewebfonts.com/svg/img_432884.png" />
                <img src="https://image.flaticon.com/icons/svg/33/33700.svg" />
            </div>
        </div>
    )
}

export default SocialMedia;