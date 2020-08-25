import {cartActionTypes} from './cart.actiontypes';

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_HIDDEN
})

export const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})
