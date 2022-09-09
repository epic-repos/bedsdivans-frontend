export type GetAllBedsParams = {
  pageParam: number;
};

interface ProductType {
  name?: string;
  image?: string;
  price?: string;
}

interface AccessoriesTypes {
  color?: ProductType[];
  storage?: ProductType[];
  feet?: ProductType[];
  headboard?: ProductType[];
  mattress?: ProductType[];
}
interface VariantsTypes {
  _id?: string;
  image: string | null;
  price: {
    basePrice: number;
    salePrice: number;
  };
  size?: string | number;
  accessories?: AccessoriesTypes;
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
};

interface BedRequestPayload {
  name: string;
  description: string;
  categories: string[];
}

export type BedResponse = {
  data: Bed[];
  totalPages: number;
  nextPage: number;
};

export type CreateBedVariantResponse = {
  message: string;
  data: VariantsTypes;
};

export type UploadBedImage = {
  success: boolean;
  message: string;
  url: string;
};
