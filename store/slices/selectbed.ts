// FOR BED SELECT BY OPTIONS

import { createSlice } from "@reduxjs/toolkit";

interface BedTypes {
    bedSize: number;
    bedColor: string;
    bedHeadBoard: string;
    bedStorage: string;
    bedFeet: string;
    bedMatters: string;
}

const initialState: BedTypes = {
    bedSize: 2.6,
    bedColor: 'grey linen',
    bedHeadBoard: '',
    bedStorage: '',
    bedFeet: 'Free Castor Wheels',
    bedMatters: '',
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
    }
})


export default selectbedSlice;