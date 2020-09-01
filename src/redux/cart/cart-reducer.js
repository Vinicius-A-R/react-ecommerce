// import CartActionTypes from './cart-types';
import {
  addItemsToCart,
  decreaseQuantityItem,
  increaseQuantityItem,
} from './cart-utils';

const INITIAL_STATE = {
  hidden: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_CART_HIDDEN':
      return {
        ...state,
        hidden: !state.hidden,
      };

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
    case 'DECREASE_ITEM_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.id === action.payload) {
            return decreaseQuantityItem(cartItem);
          }
          return cartItem;
        }),
      };
    case 'INCREASE_ITEM_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.id === action.payload) {
            return increaseQuantityItem(cartItem);
          }
          return cartItem;
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
