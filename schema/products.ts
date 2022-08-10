import { Schema } from "mongoose";


interface SizeData {
    price: number;
    content: string;
    imageUrl: string;
    // iconUrl: string;
}

interface ProductTypes {
    name: string;
    description: string;
    size: string;
    price: number;
    category: string;
    type: string;
    bedSizeData: SizeData[];
    bedColorData: SizeData[];
    bedHeadBoardData: SizeData[];
    bedStorageData: SizeData[];
    bedFeetData: SizeData[];
    bedMattersData: SizeData[];
    // bedPriceData: SizeData[];
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
    bedSizeData: { type: Array, required: false },
    bedColorData: { type: Array, required: false },
    bedHeadBoardData: { type: Array, required: false },
    bedStorageData: { type: Array, required: false },
    bedFeetData: { type: Array, required: false },
    bedMattersData: { type: Array, required: false },
    bedPriceData: { type: Array, required: false },
    timestamps: true,
})

export default productsSchema;


// bedSize
// bedColor
// bedHeadBoard
// bedStorage
// bedFeet
// bedMatters
// bedImage
// bedPrice


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




// ProductDummyData.name
// ProductDummyData.description

// ProductDummyData.bedSizeData.map((data)=>{

// })