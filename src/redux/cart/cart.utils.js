
export const groupCartItems = (currentItemsInCart, newItemToBeAdded) => {

    const isNewItemExists = currentItemsInCart.find(
        cartItem => cartItem.id === newItemToBeAdded.id
        );

    if (isNewItemExists) {

        return currentItemsInCart.map(cartItem =>
            cartItem.id === newItemToBeAdded.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
    }

    return [...currentItemsInCart, {...newItemToBeAdded, quantity: 1}];
}