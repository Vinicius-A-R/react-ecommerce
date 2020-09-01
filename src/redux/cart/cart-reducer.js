import CartActionTypes from './cart-types';
import { addItemsToCart } from './cart-utils';

const INITIAL_STATE = {
  hidden: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case CartActionTypes.'TOGGLE_CART_HIDDEN':
    case 'TOGGLE_CART_HIDDEN':
      return {
        ...state,
        hidden: !state.hidden,
      };

    // case CartActionTypes.ADD_ITEM:
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload),
      };
    case 'CLEAR_ITEM_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => {
          return cartItem.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
