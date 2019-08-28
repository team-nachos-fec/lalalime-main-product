import React from 'react';

const Checkout = (props) => {
    return (
        <div className="checkout-box">
            <label>
                <input type="radio" />
                <span className="radio-button first-button"></span>
                <span className="checkout-option"> Ship</span>
            </label>
            <label>
                <input type="radio" />
                <span className="radio-button second-button"></span>
                <span className="checkout-option"> Pick up in store</span>
            </label>
            <div className="order-5pm">
                <span>Order before 5pm and pick up today.</span> 
                <div className="find-store-button">Find in Store</div>
            </div>
            <div className="add-to-bag">
                ADD TO BAG
            </div>
        </div>
    )
}

export default Checkout;