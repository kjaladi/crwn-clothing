import React from 'react';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions'; 

const CartDropdown = ({cartitems,history,dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"> 
            {cartitems.length ?  cartitems.map(item => <CartItem key={item.id} {...item}/>) : <span className="empty-message">your cart is empty</span>}
            </div>
        
            <button className="button" onClick={() => {
                history.push("/checkout");
                dispatch(toggleCartHidden());
            }}> GO TO CHECKOUT</button>
        
        </div>
        );
}

const mapStateToProps = createStructuredSelector({
    cartitems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));  