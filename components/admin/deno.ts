interface ProductType {
    name?: string;
    image?: string;
    price?: string;
}
interface intiTypes {
    name: string;
    description: string;
    categories: any[];
    // variants: {
    //     feetState: any[];
    //     colorState: any[];
    //     headboardState: any[];
    //     mattressState: any[];
    //     storageState: any[];
    // };
}

const BASICINPUT = 'BASICINPUT'
// CATEGORIES
const ADDCATEGORY = 'ADDCATEGORY'
const UPDATECATEGORY = 'UPDATECATEGORY'
const REMOVECATEGORY = 'REMOVECATEGORY'

const inti: intiTypes = {
    name: "Basic Name",
    description: "Basic Description",
    categories: ['ONE'],
    // variants: {
    //     // DYNAMIC STATE 
    //     feetState: [{}],
    //     colorState: [{}],
    //     headboardState: [{}],
    //     mattressState: [{}],
    //     storageState: [{}],
    // },

};

interface ActionTypes {
    type: string;
    payload: {
        index: number;
        name: number | string;
        value: number | string;
    }
}

const denoSlice = {
    initialState: inti,
    reducer: (state: intiTypes, action: ActionTypes) => {
        const catDraft = [...state.categories]
        switch (action.type) {
            case BASICINPUT:
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                }
            // FOR CATEGORIES
            case ADDCATEGORY:
                return {
                    ...state,
                    categories: action.payload
                }
            case UPDATECATEGORY:
                catDraft[action.payload.index] = action.payload.value
                return {
                    ...state,
                    categories: catDraft
                }
            case REMOVECATEGORY:
                const filtered = catDraft.filter((v) => v !== action.payload.value)
                return {
                    ...state,
                    categories: filtered
                }
            default:
                return state
        }
    },

    actions: {
        basicInput: (payload: any) =>
            ({ type: BASICINPUT, payload: payload }),
        addCategory: (payload: any) =>
            ({ type: ADDCATEGORY, payload: payload }),
        removeCategory: (payload: any) =>
            ({ type: UPDATECATEGORY, payload: payload }),
        updateCategory: (payload: any) =>
            ({ type: REMOVECATEGORY, payload: payload }),
    }
}



export default denoSlice;