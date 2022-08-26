export type GetAllBedsParams = {
    pageParam: number
}


interface ProductType {
    name?: string;
    image?: string;
    price?: string;
}


interface AccessoriesTypes {
    color: ProductType[];
    storage: ProductType[];
    feet: ProductType[];
    headboard: ProductType[];
    mattress: ProductType[];
}
interface VariantsTypes {
    _id: string;
    price: string | number;
    size: string | number;
    accessories: AccessoriesTypes;
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


export type CreateBedVariantResponse = {
    message: string;
    data: VariantsTypes;
}

export type UploadBedImage = {
    success: boolean;
    message: string;
    url: string
}