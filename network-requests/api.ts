import axios from "./axios";
import { AccessoriesTypes, Bed, BedResponse, CreateBedVariantResponse, GetAllBedsParams, UploadBedImage } from "./types"

export const getAllBeds = ({ pageParam = 1 }: GetAllBedsParams): Promise<BedResponse> =>
    axios.get<BedResponse>(`/beds?page=${pageParam}`).then(
        (response) => response.data
    ).catch(error => { throw error });


export const getBedById = (id: string): Promise<Bed> =>
    axios.get<Bed>(`/beds/${id}`).then(
        (response) => response.data
    ).catch(error => { throw error });



//POST REQUESTS
export const createBedVariantById = (id: string, payload: AccessoriesTypes): Promise<CreateBedVariantResponse> =>
    axios.post<CreateBedVariantResponse>(`/add-bed/${id}`, payload).then(
        (response) => response.data
    ).catch(error => { throw error });


export const uploadBedImage = async (image: Blob): Promise<UploadBedImage> => {
    console.log({ image });
    const formdata = new FormData();
    formdata.append("image", image);
    return await axios.post<UploadBedImage>(`/beds/upload-image`, image, {
        headers: {
            'content-type': 'multipart/form-data; boundary=<calculated when request is sent>' // do not forget this 
        }
    }).then(
        (response) => response.data
    ).catch(error => { throw error });
}

export const testpost = (): Promise<any> =>
    axios.post<any>(`/test`, { ok: "how are " }).then(
        (response) => response.data
    ).catch(error => { throw error });


