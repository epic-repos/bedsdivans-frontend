import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
    id: 0,
    name: 'Product ONe '
}]

const addToCartSlice = createSlice({
    name: 'Add To Cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.filter((data) => data.id === action.payload)
        },
    }
})


export default addToCartSlice;