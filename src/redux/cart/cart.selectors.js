import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.cartitems);

export const selectCartItemsCount = createSelector([selectCartItems], cartItems => {
    return cartItems.reduce((accumulator,currentItem) => accumulator + currentItem.quantity,0);
});

export const selectCartHidden = createSelector([selectCart], cart => cart.hidden);