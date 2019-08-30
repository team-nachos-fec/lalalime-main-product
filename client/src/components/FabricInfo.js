import React from 'react';

const FabricInfo = (props) => {
    return (
        <div className="fabric-info">
            <div className="fabric-box">
                <h3 className="fabric-text">Fabric</h3>
                <h3 className="fabric-plus">+</h3>
            </div>
            <div className="care-box">
                <h3 className="fabric-text">Care</h3>
                <h3 className="fabric-plus">+</h3>
            </div>
            <div className="features-box">
                <h3 className="fabric-text">Features</h3>
                <h3 className="fabric-plus">+</h3>
            </div>
        </div>
    )
}

export default FabricInfo;