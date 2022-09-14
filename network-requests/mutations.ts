import { useMutation } from "react-query";
import {
    createBed,
    createBedVariantById,
    createColorIcon,
    deleteBedById,
    deleteBedVariantById,
    updateBedById,
    updateBedVariantById,
} from "./api";
import axios from "./axios";
import {
    AccessoriesTypes,
    Bed,
    BedRequestPayload,
    ColorIcon,
    CreateBedVariantResponse,
    UploadBedImage,
    VariantsTypes,
} from "./types";

//CREATE MUTATIONS
export const useCreateNewBed = () =>
    useMutation(
        (payload: BedRequestPayload): Promise<CreateBedVariantResponse> =>
            createBed(payload)
    );

export const useCreateNewBedVariant = (id: string) =>
    useMutation(
        (props: VariantsTypes): Promise<CreateBedVariantResponse> =>
            createBedVariantById(id, props)
    );

export const useCreateBedColor = () =>
    useMutation(
        (payload: ColorIcon): Promise<UploadBedImage> =>
            createColorIcon(payload.image, payload.label, payload.value)
    );

//UPDATE MUTATIONS
export const useUpdateBedVariant = (id: string) =>
    useMutation(
        (props: VariantsTypes): Promise<CreateBedVariantResponse> =>
            updateBedVariantById(id, props)
    );

export const useUpdateBed = (id: string) =>
    useMutation(
        (props: BedRequestPayload): Promise<CreateBedVariantResponse> =>
            updateBedById(id, props)
    );

//DELETE MUTATION
export const useDeleteBedById = () =>
    useMutation(
        (id: string): Promise<CreateBedVariantResponse> => deleteBedById(id)
    );

export const useDeleteBedVariantById = () =>
    useMutation(
        (id: string): Promise<CreateBedVariantResponse> =>
            deleteBedVariantById(id)
    );
