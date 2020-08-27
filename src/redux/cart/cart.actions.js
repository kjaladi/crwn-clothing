import {cartActionTypes} from './cart.actiontypes';

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_HIDDEN
})

export const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = (item) => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
})

export const decreaseItemByOne = (item) => ({
    type: cartActionTypes.DECREASE_ITEM_BY_ONE,
    payload: item
})