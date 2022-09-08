interface ProductType {
    name?: string;
    image?: string;
    price?: string;
}

interface VariantsTypes {
    price: string | number;
    size: string | number;
    accessories: {
        color: ProductType[];
        storage: ProductType[];
        feet: ProductType[];
        headboard: ProductType[];
        mattress: ProductType[];
    };
}
interface StateTypes {
    name: string;
    description: string;
    categories?: string[];
    variants?: VariantsTypes[];
}
interface ActionTypes {
    type: string;
    payload: {
        name: string;
        value: string;
        [key: string]: any;
    };
}

const init: StateTypes = {
    name: "",
    description: "",
    // categories: [],
    // variants: [],
};

const adminSlice = {
    init,
    reducer: (state: StateTypes, action: ActionTypes) => {
        switch (action.type) {
            case "InputField":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                };
            default:
                return state;
        }
    },
    actions: {
        addInputValue: (name: string, value: any) => ({
            type: "InputField",
            payload: { name, value },
        }),
    },
};

export default adminSlice;




// const x = {
//     data: {
//         _id: "62fa5b0682d30bb5709e4775",
//         name: "Product Test One  ",
//         description: "Product Test One =====  ",
//         variants: [
//             {
//                 accessories: {
//                     color: [
//                         {
//                             name: "gray",
//                             image: "/test.png",
//                             _id: "62fa5e5e39836909d19797d4",
//                         },
//                         {
//                             name: "black",
//                             image: "/test.png",
//                             _id: "62fa5e5e39836909d19797d5",
//                         },
//                     ],
//                     storage: [],
//                     feet: [],
//                     headboard: [],
//                     mattress: [],
//                 },
//                 _id: "62fa5e5e39836909d19797d3",
//                 price: "98.9",
//                 size: "2",
//                 createdAt: "2022-08-15T14:55:26.209Z",
//                 updatedAt: "2022-08-15T14:55:26.209Z",
//                 __v: 0,
//             },
//         ],
//         categories: [],
//         createdAt: "2022-08-15T14:41:10.157Z",
//         updatedAt: "2022-08-15T14:55:26.296Z",
//         __v: 0,
//     },
// };



// const dynamicFieldsSlice = {
//     init: [
//         {}
//     ],
//     reducer: (state: any, action: ActionTypes) => {
//         switch (action.type) {
//             case "AddInputField":
//                 return [...state, action.payload];
//             case "RemoveInputField":
//                 // state.splice(action.payload.index, 1);
//                 // return [...state];
//                 return state.filter((data: any, index: number) => index !== action.payload.index)
//             case "UpdateInputField":
//                 state[action.payload.index]["value"] = action.payload.value;
//                 return [...state];
//             default:
//                 return state;
//         }
//     },

//     actions: {
//         AddInputField: (payload: any) =>
//             ({ type: 'AddInputField', payload: payload }),
//         RemoveInputField: (index: number) =>
//             ({ type: 'RemoveInputField', payload: index }),
//         UpdateInputField: (index: number, value: any) =>
//             ({ type: 'UpdateInputField', payload: { index: index, value: value } }),
//     }
// }

// export { dynamicFieldsSlice }
