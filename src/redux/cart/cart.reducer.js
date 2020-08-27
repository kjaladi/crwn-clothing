import { cartActionTypes } from './cart.actiontypes';
import { groupCartItems,decreaseItemQtyByOne } from './cart.utils';

const INIITIAL_STATE = {
    hidden: true,
    cartitems: []
};

const cartReducer = (state = INIITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartitems: groupCartItems(state.cartitems, action.payload)
            }
        case cartActionTypes.REMOVE_ITEM:
            return {
                    ...state,
                    cartitems: state.cartitems.filter(item => item.id !== action.payload.id)
                }
        case cartActionTypes.DECREASE_ITEM_BY_ONE:
            return {
                ...state,
                cartitems: decreaseItemQtyByOne(state.cartitems,action.payload)
            }            
        default:
            return state;
    }
}

export default cartReducer;