import axios from "./axios";
import {
    Accessories,
    Bed,
    BedRequestPayload,
    BedResponse,
    BedWithSize,
    CreateBedVariantResponse,
    GetAllBedsParams,
    Register,
    UploadBedImage,
    VariantsTypes,
} from "./types";

// AUTH APIS
export const login = (email: string, password: string) => {
    return axios.post("/auth/login", { email, password });
};

export const register = ({ email, password, name }: Register) => {
    return axios.post("/auth/register", { email, password, name });
};

export const verifyToken = (token: string) => {
    return axios.post("/auth/verify-token", { token });
};

export const logout = () => {
    return axios.post("/auth/logout");
};

//USER APIS

export const getUser = () => {
    return axios
        .get("/user")
        .then((res) => res.data)
        .catch((err) => err);
};

//GET REQUESTS

export const getAllBeds = ({
    pageParam = 1,
}: GetAllBedsParams): Promise<BedResponse> =>
    axios
        .get<BedResponse>(`/beds?page=${pageParam}`)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });

//Beds With No Variants is not Returned Here
export const getAllBedsWithImage = ({
    pageParam = 1,
    category,
}: GetAllBedsParams): Promise<BedResponse> =>
    axios
        .get<BedResponse>(
            `/beds/get-all-beds-with-base-image?page=${pageParam}${
                category && `&category=${category}`
            }`
        )
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });

//headboard With No Variants when returnWhenNoVariants is false is not Returned Here
export const getAllHeadboardWithImage = ({
    pageParam = 1,
    category,
    returnWhenNoVariants,
}: GetAllBedsParams): Promise<BedResponse> =>
    axios
        .get<BedResponse>(
            `/headboard/get-headboard-with-image?page=${pageParam}${
                category ? `&category=${category} ` : ""
            }${returnWhenNoVariants ? "&returnWhenNoVariants=true" : ""}`
        )
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });

//Beds With No Variants is Also Returned Here
export const getAllBedsWithImageAdmin = ({
    pageParam = 1,
}: GetAllBedsParams): Promise<BedResponse> =>
    axios
        .get<BedResponse>(
            `/beds/get-all-beds-with-base-image-admin?page=${pageParam}`
        )
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });

// FOR SLUG BASED API

export const getBedBySlug = (slug: string): Promise<Bed> => {
    return axios
        .get<Bed>(`/beds/${slug}`)
        .then((response) => response.data)
        .catch((err) => {
            throw err;
        });
};

export const getBedById = (id: string): Promise<Bed> =>
    axios
        .get<Bed>(`/beds/${id}`)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });

export const getBedVariantById = (
    id: string,
    size?: string
): Promise<BedWithSize> => {
    if (size)
        return axios
            .get<BedWithSize>(`/beds/${id}?size=${size}`)
            .then((response) => response.data)
            .catch((error) => {
                throw error;
            });
    else
        return axios
            .get<BedWithSize>(`/beds/${id}`)
            .then((response) => response.data)
            .catch((error) => {
                throw error;
            });
};

export const getIconsByType = (type: string): Promise<Accessories[]> =>
    axios
        .get<Accessories[]>(`/icons/accessories/${type}`)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });

export const getIconById = (id: string): Promise<Accessories> =>
    axios
        .get<Accessories>(`/icons/${id}`)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });

//POST REQUESTS
export const createOrder = (data: any) =>
    axios
        .post("/order", data)
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        });

export const createBed = (
    payload: BedRequestPayload
): Promise<CreateBedVariantResponse> =>
    axios
        .post<CreateBedVariantResponse>(`/beds/create`, payload)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });

export const createBedVariantById = (
    id: string,
    payload: VariantsTypes
): Promise<CreateBedVariantResponse> =>
    axios
        .post<CreateBedVariantResponse>(`/beds/add-bed/${id}`, payload)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });

export const uploadBedImage = async (image: Blob): Promise<UploadBedImage> => {
    const formdata = new FormData();
    formdata.append("image", image);
    return await axios
        .post<UploadBedImage>(`/beds/upload-image`, formdata)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
};

//CREATE COLOR ICON
export const createColorIcon = async (
    image: Blob,
    label: string,
    value: string,
    type: string
): Promise<UploadBedImage> => {
    const formdata = new FormData();
    formdata.append("label", label);
    formdata.append("value", value);
    formdata.append("type", type);
    formdata.append("image", image);

    return await axios
        .postForm<UploadBedImage>(`/icons/accessories`, formdata)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
};

//PATCH REQUESTS
export const updateBedVariantById = (
    id: string,
    payload: VariantsTypes
): Promise<CreateBedVariantResponse> =>
    axios
        .patch<CreateBedVariantResponse>(
            `/beds/update-bed-variant/${id}`,
            payload
        )
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });

export const updateBedById = (
    id: string,
    payload: BedRequestPayload
): Promise<CreateBedVariantResponse> =>
    axios
        .patch<CreateBedVariantResponse>(`/beds/update-bed/${id}`, payload)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });

export const updateAccessoriesIcon = async (
    id: string,
    label: string,
    value: string,
    type: string,
    image?: Blob
): Promise<UploadBedImage> => {
    const formdata = new FormData();
    formdata.append("label", label);
    formdata.append("value", value);
    formdata.append("type", type);
    image && formdata.append("image", image);

    return await axios
        .patchForm<UploadBedImage>(`/icons/update/${id}`, formdata)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
};

//DELETE REQUESTS
export const deleteBedById = (id: string): Promise<CreateBedVariantResponse> =>
    axios
        .delete(`/beds/delete-bed/${id}`)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });

export const deleteBedVariantById = (
    id: string
): Promise<CreateBedVariantResponse> =>
    axios
        .delete(`/beds/delete-bed-variant/${id}`)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
