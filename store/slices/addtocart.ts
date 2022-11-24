import { createSlice } from "@reduxjs/toolkit";
import { CartProductTypes } from "typings/product";

const cartInitial =
    typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("cart") || "[]")
        : [];

const initialState: CartProductTypes = {
    cartItems: cartInitial?.cartItems || [],
    cartTotalQuantity: cartInitial?.cartTotalQuantity || 0,
    cartTotalAmount: cartInitial?.cartTotalAmount || 0,
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
                itemInCart.total = 100;
                state.cartTotalQuantity = state.cartTotalQuantity + 1;
                state.cartTotalAmount = Number(
                    state.cartTotalAmount + action.payload.total
                );
            } else {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1,
                    total: 100,
                }) as any;
                state.cartTotalQuantity = 1 as number;
                state.cartTotalAmount = Number(
                    state.cartTotalAmount + action.payload.total
                );
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
                state.cartTotalAmount = Number(
                    state.cartTotalAmount + item.total
                ) as number;
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
                    state.cartTotalAmount = Number(
                        state.cartTotalAmount - item.total
                    ) as number;
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
                Number(state.cartTotalAmount) -
                Number(item.total) * Number(item.quantity);
        },
    },
});

export default addToCartSlice;
