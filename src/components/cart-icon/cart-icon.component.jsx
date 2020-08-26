import React from 'react';
import { ReactComponent as CartSvgIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';


const CartIcon = ({ toggleCartHidden, totalItems }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <CartSvgIcon className="shopping-icon" />
        <span className="item-count">{totalItems}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    totalItems: selectCartItemsCount
});


const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
