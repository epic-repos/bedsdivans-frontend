// FOR BED SELECT BY OPTIONS

import { createSlice } from "@reduxjs/toolkit";

interface BedTypes {
    bedSize: string;
    bedColor: string;
    bedHeadBoard: string;
    bedStorage: string;
    bedFeet: string;
    bedMatters: string;
    bedImage: string;
    bedPrice: string;
}

const initialState: BedTypes = {
    bedSize: `(2'6" x 6')- Small Single`,
    bedColor: 'grey linen',
    bedHeadBoard: '',
    bedStorage: '',
    bedFeet: 'Free Castor Wheels',
    bedMatters: '',
    bedImage: '/product/color/greylinen.png',
    bedPrice: '£89'
}

const selectbedSlice = createSlice({
    name: 'Select Bed',
    initialState: initialState,
    reducers: {
        setBedSize: (state, action) => {
            state.bedSize = action.payload
        },
        setBedColor: (state, action) => {
            state.bedColor = action.payload
        },
        setBedHeadBoard: (state, action) => {
            state.bedHeadBoard = action.payload
        },
        setBedStorage: (state, action) => {
            state.bedStorage = action.payload
        },
        setBedFeet: (state, action) => {
            state.bedFeet = action.payload
        },
        setBedMatters: (state, action) => {
            state.bedMatters = action.payload
        },
        setBedImage: (state, action) => {
            state.bedImage = action.payload
        },
        setBedPrice: (state, action) => {
            state.bedPrice = action.payload
        },
    }
})


export default selectbedSlice;