import React from 'react';

const FabricInfo = (props) => {
    return (
        <div className="fabric-info-box">
            <div id="fabric-box" onClick={props.toggleFabric}>
                <h3 className="fabric-text">Fabric</h3>
                <h3 className="fabric-plus">+</h3>
            </div>
            <div id="fabric-dropdown" className="fabric-content">
                    <p className="trademark">Nulu™</p>
                    <p className="fabric-para">Lightweight, buttery-soft Nulu™ fabric wicks sweat and is four-way stretch</p>
                    <hr className="fabric-line"/>
                    <div className="fabric-list">
                        <div>Buttery-Soft Handfeel</div>
                        <div>Lightweight</div>
                        <div>Sweat-Wicking</div>
                        <div>Four-Way Stretch</div>
                    </div>
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