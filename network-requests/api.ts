import axios from "./axios";
import {
  AccessoriesTypes,
  Bed,
  BedRequestPayload,
  BedResponse,
  BedWithImage,
  CreateBedVariantResponse,
  GetAllBedsParams,
  UploadBedImage,
  VariantsTypes,
} from "./types";

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
export const getAllBedsWithImage = ({
  pageParam = 1,
}: GetAllBedsParams): Promise<BedResponse> =>
  axios
    .get<BedResponse>(`/beds/get-all-beds-with-base-image?page=${pageParam}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export const getBedById = (id: string): Promise<Bed> =>
  axios
    .get<Bed>(`/beds/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export const getBedVariantById = (id: string, size?: string | undefined): Promise<BedWithImage> => {
  if (size)
    return axios
      .get<BedWithImage>(`/beds/get-bed-variant/${id}?size=${size}`)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  else
    return axios
      .get<BedWithImage>(`/beds/get-bed-variant/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
}

//POST REQUESTS
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

//PATCH REQUESTS
export const updateBedVariantById = (
  id: string,
  payload: VariantsTypes
): Promise<CreateBedVariantResponse> =>
  axios
    .patch<CreateBedVariantResponse>(`/beds/update-bed-variant/${id}`, payload)
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
