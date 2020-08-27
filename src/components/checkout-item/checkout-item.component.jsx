import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { removeItem, addItem, decreaseItemByOne } from '../../redux/cart/cart.actions';


const CheckoutItem = ({ item, removeItem, increaseItemByOne, decreaseItemByOne }) => {

    const { imageUrl, name, quantity, price } = item;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img className="img" src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <div className="arrow" onClick={() => decreaseItemByOne(item)}>&#10094;</div>
                <span className="value"> {quantity} </span>
                <div className="arrow" onClick={() => increaseItemByOne(item)}>&#10095;</div>
            </div>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => removeItem(item)}>&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    increaseItemByOne: item => dispatch(addItem(item)),
    decreaseItemByOne: item => dispatch(decreaseItemByOne(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);