import React from 'react';

type Both = string | number
// TYPES FOR BED SIZE
interface ProductDataTypes {
    id?: Both;
    content: any;
    iconUrl: string;
    imageUrl: string;
    price: Both
}
interface BedSizeProps {
    value: any;
    items: ProductDataTypes[];
    onClickItem: (value: ProductDataTypes) => void;
}


interface CartProductTypes {
    cartItems: {
        id: number;
        name: string;
        description: string;
        categories: string[];
        quantity: number;
        price: number;
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