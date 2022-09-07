import axios from "./axios";
import { AccessoriesTypes, Bed, BedResponse, CreateBedVariantResponse, GetAllBedsParams, UploadBedImage, VariantsTypes } from "./types"

export const getAllBeds = ({ pageParam = 1 }: GetAllBedsParams): Promise<BedResponse> =>
    axios.get<BedResponse>(`/beds?page=${pageParam}`).then(
        (response) => response.data
    ).catch(error => { throw error });


export const getBedById = (id: string): Promise<Bed> =>
    axios.get<Bed>(`/beds/${id}`).then(
        (response) => response.data
    ).catch(error => { throw error });


export const getBedVariantById = (id: string): Promise<VariantsTypes> =>
    axios.get<VariantsTypes>(`/beds/get-bed-variant/${id}`).then(
        (response) => response.data
    ).catch(error => { throw error });



//POST REQUESTS
export const createBedVariantById = (id: string, payload: VariantsTypes): Promise<CreateBedVariantResponse> =>
    axios.post<CreateBedVariantResponse>(`/beds/add-bed/${id}`, payload).then(
        (response) => response.data
    ).catch(error => { throw error });


export const uploadBedImage = async (image: Blob): Promise<UploadBedImage> => {
    const formdata = new FormData();
    formdata.append("image", image);
    return await axios.post<UploadBedImage>(`/beds/upload-image`, formdata
    ).then(
        (response) => {
            console.log(response.data);
            return response.data
        }
    ).catch(error => { throw error });
}


//PATCH REQUESTS
export const updateBedVariantById = (id: string, payload: VariantsTypes): Promise<CreateBedVariantResponse> =>
    axios.patch<CreateBedVariantResponse>(`/beds/update-bed/${id}`, payload).then(
        (response) => response.data
    ).catch(error => { throw error });



