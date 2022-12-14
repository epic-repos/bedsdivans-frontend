// FOR BED SELECT BY OPTIONS

import { createSlice } from "@reduxjs/toolkit";

interface ActionTypes {
    type: string;
    payload: any;
    [K: string]: any
}



interface BedTypes {
    bed: {
        id: string;
        name: string;
        image: string;
        price: number;
        size: string;
    };
    accessories: {
        color: {
            name: string | any;
            image: string;

        };
        storage: {
            name: string | any;
            price: number | any;
            value: string;
        };
        feet: {
            name: string | any;
            price: number;
            value: string;

        };
        headboard: {
            name: string | any;
            price: number | any;
            value: string;

        };
        mattress: {
            name: string | any;
            price: number | any;
            value: string;

        };
    };
    total: number;
}

const initialState: BedTypes = {
    bed: {
        id: "",
        size: "",
        name: "",
        image: "",
        price: 0,
    },
    accessories: {
        color: {
            name: "",
            image: "",
        },
        headboard: {
            name: "",
            price: 0,
            value: ''
        },
        storage: {
            name: "",
            price: 0,
            value: ''
        },
        feet: {
            name: "",
            price: 0,
            value: ''
        },
        mattress: {
            name: "",
            price: 0,
            value: ''
        },
    },
    total: 0,
};

const productSlice = createSlice({
    name: "Select Bed",
    initialState: initialState,
    reducers: {
        setBed: (state, action: ActionTypes) => {
            state.bed = action.payload
        },
        setAccessories: (state, action: ActionTypes) => {
            // @ts-expect-error
            state.accessories[action.payload.key] = action.payload.value
        },
        setTotal: (state, action: ActionTypes) => {
            state.total = action.payload
        }
    },
});

export default productSlice;
