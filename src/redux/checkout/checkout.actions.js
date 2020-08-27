import {actionTypes} from './checkout.actiontypes';

export const incrementItem = (item) => ({
    type: actionTypes.INCREMENT_ITEM,
    payload: item
})

export const decrementItem = (item) => ({
    type: actionTypes.decrementItem,
    payload: item
})