import React from 'react';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';

const CartDropdown = ({cartitems}) => {
    console.log("from cartDropdown",cartitems);
    return (
        <div className="cart-dropdown">
            <div className="cart-items"> 
            {cartitems.map(item => <CartItem key={item.id} {...item}/>)}
            </div>
        
            <button className="button">GO TO CHECKOUT</button>
        
        </div>
        );
}

const mapStateToProps = ({cart: {cartitems}}) => ({
    cartitems
})

export default connect(mapStateToProps)(CartDropdown);