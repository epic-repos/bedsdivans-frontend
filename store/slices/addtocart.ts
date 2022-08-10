import { createSlice } from '@reduxjs/toolkit';
import { CartProductTypes } from 'typings/product';



const initialState: CartProductTypes = {
    cartItems: [
        {
            id: 0,
            name: "Product One",
            description: "Small description for product",
            categories: ["writing", "bestseller"],
            quantity: 0,
            price: 98.9,
            options: {
                image: 'no',
                size: '2ft',
                color: 'grey light',
                headBoard: 'no',
                storage: 'single',
                feet: 'no',
                matters: 'no',
            }
        }
    ],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}


const addToCartSlice = createSlice({
    name: 'Cart',
    initialState: initialState,
    reducers: {
        // ADD TO CART PRODUCT
        addToCart: (state, action) => {
            const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity + 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
            state.cartTotalQuantity = itemInCart?.quantity as number
            // state.cartTotalAmount = state.cartItems.forEach((item) => {
            //     return item.price * item.quantity
            // })

        },
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload);
            if (item?.quantity)
                item?.quantity + 1
            state.cartTotalQuantity = item?.quantity as number

        },
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload);
            if (item?.quantity === 1) {
                item.quantity = 1
            } else {
                if (item?.quantity)
                    item?.quantity - 1
                state.cartTotalQuantity = item?.quantity as number

            }
        },
        removeFromCart: (state, action) => {
            state.cartItems.filter((item) => item.id !== action.payload);
        },
    },
})


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
    bedSize: '2ft',
    bedColor: 'grey-light',
    bedHeadBoard: 'no-headboard',
    bedStorage: 'no',
    bedFeet: 'no',
    bedMatters: 'no',
    bedImage: 'https://cdn.png.com/dummy-bed.png',
    bedPrice: 98.90,
}
// size: `2ft`,
// image: "items/journal.jpg",
// price: 9.99,  // base+currency = $9.99


const demo = {
    sku: "154A",
    price: {
        base: 9.99,
        currency: "USD"
    },
    quantity: 20,
    "bed-options": {
        size: { h: 14, l: 21, w: 1 },
        features: ["72 sheets of premium lined paper"],
        colors: ["brown", "red"],
        ruling: "wide",
        image: "images/journal1.jpg"
    }
}

