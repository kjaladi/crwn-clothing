import {actionTypes} from './checkout.actiontypes';
import {incrementCartItem} from './checkout.utils';

const INITIAL_STATE = {
    checkoutItems: []
}

const checkoutReducer = (state=INITIAL_STATE,action) => {

    switch(action.type) {
        case actionTypes.INCREMENT_ITEM: 
            return {
                ...state,
                checkoutItems: incrementCartItem(state.checkoutItems,action.payload)
            }
            default: 
                return state;
    }
}

export default checkoutReducer;