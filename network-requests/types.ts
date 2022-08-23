export type GetAllBedsParams = {
    pageParam: number
}


interface ProductType {
    name?: string;
    image?: string;
    price?: string;
}

interface VariantsTypes {
    _id: string;
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

export type Bed = {
    _id: string;
    name: string;
    description: string;
    variants: VariantsTypes[];
    categories: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export type BedResponse = {
    data: Bed[];
    totalPages: number;
    nextPage: number;
}