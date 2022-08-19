import { nanoid } from "@reduxjs/toolkit";

const ADD = `ADD`
const REMOVE = `REMOVE`
const UPDATE = `UPDATE`


interface ActionTypes {
    type: string;
    payload: any;
    [key: string]: any
}

const obj = {
    index: 0,
    // name: null,
    // value: null,
    // image: null
}

const initialState = [{ ...obj }]

const inputfieldSlice = {
    initialState,
    reducer: (state: any[], action: ActionTypes) => {

        switch (action.type) {
            case ADD:
                return [...state, action.payload];
            case REMOVE:
                // state.splice(action.payload.id, 1);
                return state.filter((data) => data.index !== action.payload)
            case UPDATE:
                state[action.payload.index] = action.payload.value;
                return [...state];
            default:
                return state;
        }
    },
    actions: {
        addField: () => ({ type: ADD, payload: { ...obj, index: obj.index + 1 } }),
        removeField: (payload: any) => ({ type: REMOVE, payload: payload }),
        updateField: (payload: any) => ({ type: UPDATE, payload: payload }),
    },
};

export default inputfieldSlice
