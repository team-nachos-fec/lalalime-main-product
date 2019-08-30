import React from 'react';

const Breadcrumbs = (props) => {
    return (
        <div className="crumb-box">
            <span className="crumb">Women's Clothes</span>
            <span className="crumb-line"></span>
            <span className="crumb"> {props.breadcrumbs[1]}</span>
        </div>
    )
}

export default Breadcrumbs;