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
            <div className="care-box" onClick={props.toggleCare}>
                <h3 className="fabric-text">Care</h3>
                <h3 className="fabric-plus">+</h3>
            </div>
            <div id="care-dropdown" className="care-content">
                <p className="wash-para">Wash with like colors</p>
                <div><img src="https://static.thenounproject.com/png/126125-200.png" className="care-img"/> <p className="care-para">Machine wash cold</p></div>
                <div><img src="https://cdn4.iconfinder.com/data/icons/fabric-care-1/512/23-512.png" className="care-img"/> <p className="care-para">Do not bleach</p></div>
                <div><img src="https://cdn0.iconfinder.com/data/icons/laundry-symbols-1/100/laundry-symbol-28-512.png" className="care-img"/> <p className="care-para">Tumble dry low</p></div>
                <div><img src="https://static.thenounproject.com/png/550928-200.png" className="care-img"/> <p className="care-para">Do not iron</p></div>
                <div><img src="https://static.thenounproject.com/png/617861-200.png" className="care-img"/> <p className="care-para">Do not dry clean</p></div>
                <div className="imported">Imported</div>
            </div>
            <div className="features-box">
                <h3 className="fabric-text">Features</h3>
                <h3 className="fabric-plus">+</h3>
            </div>
        </div>
    )
}

export default FabricInfo;