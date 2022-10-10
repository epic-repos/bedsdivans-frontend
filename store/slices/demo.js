import { combineReducers } from "redux";
import {
  GET_ALL_PRODUCT,
  GET_NUMBER_CART,
  ADD_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  DELETE_CART,
} from "../actions";

const initProduct = {
  cartTotalQuantity: 0,
  cartsItems: [],
  _products: [],
};

function todoProduct(state = initProduct, action) {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        _products: action.payload,
      };
    case GET_NUMBER_CART:
      return {
        ...state,
      };

    // ADD

    case ADD_CART:
      if (state.cartTotalQuantity == 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
        };
        state.cartsItems.push(cart);
      } else {
        let check = false;
        state.cartsItems.map((item, key) => {
          if (item.id == action.payload.id) {
            state.cartsItems[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            name: action.payload.name,
            image: action.payload.image,
            price: action.payload.price,
          };
          state.cartsItems.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.cartTotalQuantity + 1,
      };
    case INCREASE_QUANTITY:
      state.cartTotalQuantity++;
      state.cartsItems[action.payload].quantity++;
      return {
        ...state,
      };
    case DECREASE_QUANTITY:
      let quantity = state.cartsItems[action.payload].quantity;
      if (quantity > 1) {
        state.cartTotalQuantity--;
        state.cartsItems[action.payload].quantity--;
      }

      return {
        ...state,
      };
    case DELETE_CART:
      let quantity_ = state.cartsItems[action.payload].quantity;
      return {
        ...state,
        numberCart: state.cartTotalQuantity - quantity_,
        Carts: state.cartsItems.filter((item) => {
          return item.id != state.cartsItems[action.payload].id;
        }),
      };
    default:
      return state;
  }
}
const ShopApp = combineReducers({
  _todoProduct: todoProduct,
});
export default ShopApp;
