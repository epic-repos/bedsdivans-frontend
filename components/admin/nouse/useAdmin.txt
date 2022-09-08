import React from "react";
import { randomBytes } from "crypto";
import adminSlice from "./state";


type E = React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;
type EFORM = React.FormEvent<HTMLFormElement>;


const useAdminPanel = () => {
    const { actions, init, reducer } = adminSlice;
    const [state, dispatch] = React.useReducer(reducer, init);
    // COLOR STATE
    const [colorFieldsArray, setColorFieldsArray] = React.useState<any>([]);
    const [colorFields, setColorFields] = React.useState({});
    // COLOR START
    const colorHandler = (name: string, value: any) => {
        setColorFields({
            ...colorFields,
            [name]: value,
        });
    };

    // ADD COLOR NEW FIELD
    const addColorField = () => {
        const data = {
            id: randomBytes(4).toString("hex"),
            ...colorFields,
        };
        setColorFieldsArray((old: any) => [...old, data]);
    };

    // DELETE FIELD BY ID
    const deleteField = (id: string) => {
        setColorFieldsArray(colorFieldsArray.filter((data: any) => data.id !== id));
    };
    // COLOR END
    const onChangeInputs = React.useCallback(
        (e: E) => {
            const { name, value } = e.target;
            dispatch(actions.addInputValue(name, value));
        },
        [actions]
    );

    //  SUBMIT DATA TO DATABASE
    const onSubmitData = async (e: EFORM) => {
        e.preventDefault();
        // if (window.confirm("Are you sure to upload product")) {
        //   try {
        //     axios
        //       .post("http://localhost:5000/beds/create", state)
        //       .then((res) => console.log({ res }));
        //   } catch (error) {
        //     console.log(error);
        //   }
        // }

        console.log(colorFieldsArray);
        // console.log(state);
    };



    // DYNAMIC FIELDS FOR CONTENT
    return {
        state,
        colorFieldsArray,
        addColorField,
        deleteField,
        onChangeInputs,
        onSubmitData,
        colorHandler,
        // FOR INPUT
    };
};

export default useAdminPanel;