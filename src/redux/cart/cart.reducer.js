import {cartActionTypes} from './cart.actiontypes';

const INIITIAL_STATE = {
    hidden: true,
    cartitems: []
};

const cartReducer = (state=INIITIAL_STATE,action) => {
    switch(action.type) {
        case cartActionTypes.TOGGLE_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartitems: [...state.cartitems, action.payload]
            }
         default:
             return state;
    }
}

export default cartReducer;