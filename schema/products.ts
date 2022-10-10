import { Schema } from "mongoose";


interface SizeData {
    price: number;
    content: string;
    imageUrl: string;
    // iconUrl: string;
}

interface ProductTypes {
    id: string | number
    name: string;
    description: string;
    size: string;
    price: number;
    category: string;
    type: string;
    timestamps: boolean
    options: {
        bedSize: SizeData[];
        bedColor: SizeData[];
        bedHeadBoard: SizeData[];
        bedStorage: SizeData[];
        bedFeet: SizeData[];
        bedMatters: SizeData[];
    }
}



const productsSchema = new Schema<ProductTypes>({
    name: { type: String, required: false },
    description: { type: String, required: false },
    size: { type: String, required: false },
    price: { type: Number, required: false },
    // RELATED IMAGES
    category: { type: String, required: false },
    type: { type: String, required: false },
    // ANOTHER DATA
    // mattressesImages: { type: Array, required: false },
    // feetImages: { type: Array, required: false },
    // images: { type: Array, required: false },
    bedSizeData: {
        price: { type: Number }
    },
    bedColorData: {
        price: { type: Number },
        content: { type: String },
        imageUrl: { type: String },
        required: false,
    },
    bedHeadBoardData: {
        price: { type: Number },
        content: { type: String },
        imageUrl: { type: String },
        required: false,
    },
    bedStorageData: {
        price: { type: Number },
        content: { type: String },
        imageUrl: { type: String },
        required: false,
    },
    bedFeetData: {
        price: { type: Number },
        content: { type: String },
        imageUrl: { type: String },
        required: false,
    },
    bedMattersData: {
        price: { type: Number },
        content: { type: String },
        imageUrl: { type: String },
        required: false,
    },
    timestamps: true,


})

export default productsSchema;




const ProductDummyData = {
    name: "Product Name",
    description: "Product Name",
    size: '2ft',
    price: '£100',
    category: 'Divan Beds',
    bedSizeData: [
        {
            price: '£120',
            content: '3 feet Single',
            imageUrl: 'https://img',
            size: '2ft',
            iconUrl: 'https://'
        },
    ],
    bedColorData: [
        {
            price: '£120',
            content: 'Color Names',
            imageUrl: 'https://cdn.type.com/bed.png',
            iconUrl: 'https://cdn.type.com/grey-light.png',
        }
    ],
    bedHeadBoardData: [
        {
            price: '£120',
            content: 'string',
            imageUrl: 'string',
        }
    ],
    bedStorageData: [
        {
            price: '£120',
            content: 'string',
            imageUrl: 'string',
        }
    ],
    bedFeetData: [
        {
            price: '£120',
            content: 'string',
            imageUrl: 'string',
        }
    ],
    bedMattersData: [
        {
            price: '£120',
            content: 'string',
            imageUrl: 'string',
        }
    ],
    bedPriceData: [
        {
            price: '£120',
            content: 'string',
            imageUrl: 'string',
        }
    ],
}

