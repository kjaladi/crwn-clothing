import {cartActionTypes} from './cart.actiontypes';

const INIITIAL_STATE = {
    hidden: true
};

const cartReducer = (state=INIITIAL_STATE,action) => {
    switch(action.type) {
        case cartActionTypes.TOGGLE_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
         default:
             return state;
    }
}

export default cartReducer;