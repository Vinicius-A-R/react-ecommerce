export const addItemsToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const decreaseQuantityItem = (cartItem, id) => {
  return cartItem.quantity > 1
    ? { ...cartItem, quantity: --cartItem.quantity }
    : cartItem;
};

export const increaseQuantityItem = (cartItem) => {
  return cartItem.quantity > 0
    ? { ...cartItem, quantity: ++cartItem.quantity }
    : cartItem;
};
