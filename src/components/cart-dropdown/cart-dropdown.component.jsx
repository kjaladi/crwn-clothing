import React from 'react';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import Checkout from '../../pages/checkout/checkout.component';
import {withRouter} from 'react-router-dom';

const CartDropdown = ({cartitems,history}) => {
    console.log("from cartDropdown",cartitems);
    return (
        <div className="cart-dropdown">
            <div className="cart-items"> 
            {cartitems.length ?  cartitems.map(item => <CartItem key={item.id} {...item}/>) : <span className="empty-message">your cart is empty</span>}
            </div>
        
            <button className="button" onClick={() => history.push("/checkout")}>GO TO CHECKOUT</button>
        
        </div>
        );
}

const mapStateToProps = createStructuredSelector({
    cartitems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));  