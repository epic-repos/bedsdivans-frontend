import React from 'react';

type Both = string | number
// TYPES FOR BED SIZE
interface ProductDataTypes {
    id?: Both;
    price?: Both;
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

// TYPES FOR BED COLOR
interface BedColorProps {
    value: any;
    items: ProductDataTypes[];
    onClickItem: (value: ProductDataTypes) => void;
}
// TYPES FOR BED HEAD BOARD

interface BedHeadBoardProps {
    value: any;
    items: ProductDataTypes[];
    onClickItem: (value: ProductDataTypes) => void;
}
// TYPES FOR BED STORAGE

interface BedStorageProps {
    value: any;
    items: ProductDataTypes[];
    onClickItem: (value: ProductDataTypes) => void;
}
// TYPES FOR BED FEET

interface BedFeetProps {
    value: any;
    items: ProductDataTypes[];
    onClickItem: (value: ProductDataTypes) => void;
}
// TYPES FOR BED MATTRESS

interface BedMattressProps {
    value: any;
    items: ProductDataTypes[];
    onClickItem: (value: ProductDataTypes) => void;
}