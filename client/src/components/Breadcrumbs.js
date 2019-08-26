import React from 'react';

const Breadcrumbs = (props) => {
    return (
        <div>
            <span>Women</span>
            {props.breadcrumbs.map((crumb, key) => {
                return <span> > {crumb}</span>
            })}
        </div>
    )
}

export default Breadcrumbs;