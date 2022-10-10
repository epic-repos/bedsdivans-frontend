import { createSlice } from "@reduxjs/toolkit";
import { CartProductTypes } from "typings/product";

const initialState: CartProductTypes = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const addToCartSlice = createSlice({
    name: "Cart",
    initialState: initialState,
    reducers: {
        // ADD TO CART PRODUCT
        addToCart: (state, action) => {
            const itemInCart = state.cartItems.find(
                (item) => item.bed.id === action.payload.bed.id
            );
            if (itemInCart) {
                itemInCart.quantity = itemInCart.quantity + 1;
                state.cartTotalQuantity = state.cartTotalQuantity + 1;
                state.cartTotalAmount =
                    state.cartTotalAmount + action.payload.total;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 }) as any;
                state.cartTotalQuantity = 1 as number;
                state.cartTotalAmount =
                    state.cartTotalAmount + action.payload.total;
            }
        },
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find(
                (item) => item.bed.id === action.payload
            );
            if (item?.quantity !== undefined) {
                item.quantity = (item?.quantity + 1) as number;
                state.cartTotalQuantity = (state.cartTotalQuantity +
                    1) as number;
                state.cartTotalAmount = (state.cartTotalAmount +
                    item.total) as number;
            }
        },
        decreaseQuantity: (state, action) => {
            console.log({ id: action.payload });

            const item = state.cartItems.find(
                (item) => item.bed.id === action.payload
            );
            if (item?.quantity === 1) {
                item.quantity = 1;
            } else {
                if (item?.quantity) {
                    item.quantity = (item?.quantity - 1) as number;
                    state.cartTotalQuantity = (state.cartTotalQuantity -
                        1) as number;
                    state.cartTotalAmount = (state.cartTotalAmount -
                        item.total) as number;
                }
            }
        },
        removeFromCart: (state, action) => {
            const item = state.cartItems.find(
                (item) => item.bed.id === action.payload
            );
            if (!item) return;

            state.cartItems = state.cartItems.filter(
                (item) => item.bed.id !== action.payload
            );

            state.cartTotalQuantity = state.cartTotalQuantity - item.quantity;
            state.cartTotalAmount =
                state.cartTotalAmount -
                Number(item.total) * Number(item.quantity);
        },
    },
});

export default addToCartSlice;

// const getTotal = () => {
//   let totalQuantity = 0
//   let totalPrice = 0
//   cartItems.forEach(item => {
//     totalQuantity += item.quantity
//     totalPrice += item.price * item.quantity
//   })
//   return {totalPrice, totalQuantity}
// }

// price: {
//     base: NumberDecimal(9.99),
//     currency: "USD"
// },

const cartDummyData = {
    name: "Product One",
    quantity: 0,
    description: "Small description for product",
    categories: ["writing", "bestseller"],
    bedSize: "2ft",
    bedColor: "grey-light",
    bedHeadBoard: "no-headboard",
    bedStorage: "no",
    bedFeet: "no",
    bedMatters: "no",
    bedImage: "https://cdn.png.com/dummy-bed.png",
    bedPrice: 98.9,
};
// size: `2ft`,
// image: "items/journal.jpg",
// price: 9.99,  // base+currency = $9.99

const demo = {
    sku: "154A",
    price: {
        base: 9.99,
        currency: "USD",
    },
    quantity: 20,
    "bed-options": {
        size: { h: 14, l: 21, w: 1 },
        features: ["72 sheets of premium lined paper"],
        colors: ["brown", "red"],
        ruling: "wide",
        image: "images/journal1.jpg",
    },
};
