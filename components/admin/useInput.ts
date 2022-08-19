import React from 'react';
import inputfieldSlice from './context/input';


/**
 * Custom hook for dynamic input fields
 */
const useInput = () => {
    const { actions, initialState, reducer } = inputfieldSlice

    const [state, dispatch] = React.useReducer(reducer, initialState);
    // ADD HANDLER

    const addField = () => {
        dispatch(actions.addField())
    }
    // REMOVE HANDLER

    const removeField = (id: string) => {
        dispatch(actions.removeField(id))
    }
    // UPDATE HANDLER

    const updateField = (index: number, e: any) => {
        const { value, name } = e.target;
        // dispatch(updateField({ id: i, value: value }));
        dispatch(actions.updateField({ id: index, [name]: value }))
    }

    console.table(state);
    // Return Values
    return {
        addField,
        removeField,
        updateField,
        inputState: state,
    }

}
export default useInput;