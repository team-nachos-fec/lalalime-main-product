import React from 'react';

const Breadcrumbs = (props) => {
    return (
        <div className="crumb-box">
            <span className="crumb">Women</span>
            {props.breadcrumbs.map((crumb, key) => {
                return <span className="crumb" key={key}> > {crumb}</span>
            })}
        </div>
    )
}

export default Breadcrumbs;