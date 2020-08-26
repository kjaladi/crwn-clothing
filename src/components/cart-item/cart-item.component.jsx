import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ name, quantity, price, imageUrl, totalItems }) => {
    console.log("from CartItem", quantity);
    return (
        <div className="cart-item">
            <img className="img" src={imageUrl} alt="cartItem" />
            <div className="item-details">
                <span>{quantity} x ${price}</span>
                <span>{name}</span>
            </div>

        </div>
    );
}


export default CartItem;