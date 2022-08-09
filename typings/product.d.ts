import React from 'react';

type Both = string | number
// TYPES FOR BED SIZE
interface ItemTypes {
    id?: Both;
    price?: Both;
    content: any;
    imageUrl: string;
}
interface BedSizeProps {
    value: any;
    items: ItemTypes[];
    onClickItem: (value: ItemTypes) => void;
}

// TYPES FOR BED COLOR
interface BedColorProps {
    value: any;
    items: ItemTypes[];
    onClickItem: (value: ItemTypes) => void;
}
// TYPES FOR BED HEAD BOARD

interface BedHeadBoardProps {
    value: any;
    items: ItemTypes[];
    onClickItem: (value: ItemTypes) => void;
}
// TYPES FOR BED STORAGE

interface BedStorageProps {
    value: any;
    items: ItemTypes[];
    onClickItem: (value: ItemTypes) => void;
}
// TYPES FOR BED FEET

interface BedFeetProps {
    value: any;
    items: ItemTypes[];
    onClickItem: (value: ItemTypes) => void;
}
// TYPES FOR BED MATTRESS

interface BedMattressProps {
    value: any;
    items: ItemTypes[];
    onClickItem: (value: ItemTypes) => void;
}