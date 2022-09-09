import React from 'react';

type Both = string | number
// TYPES FOR BED SIZE
interface ProductDataTypes {
    id?: Both;
    content: any;
    iconUrl?: string;
    imageUrl?: string;
    price: Both;
}
interface BedSizeProps {
    value: any;
    items: any;
    onClickItem: (value: ProductDataTypes) => void;
}



interface CartProductTypes {
    cartItems: {
        id: number | string;
        name: string;
        description: string;
        categories: string[];
        quantity: number;
        price: number;
        totalPrice: number
        options: {
            image: string;
            size: string;
            color: string;
            headBoard: string;
            storage: string;
            feet: string;
            matters: string;
        };
    }[];
    cartTotalQuantity: number;
    cartTotalAmount: number;
}


interface ProductProperties {
    price: string | number;
    size?: number | string;
    content: string;
    imageUrl: string;
    iconUrl: string;
}


// PRODUCT API DATA TYPES
interface SingleProductTypes {
    name: string;
    description: string;
    category: string;
    options: {
        bedSize: ProductProperties[]
        bedColor: ProductProperties[]
        // NO Need Image URL
        bedHeadBoard: ProductProperties[]
        bedStorage: ProductProperties[]
        bedFeet: ProductProperties[]
        bedMatters: ProductProperties[]
    };
}