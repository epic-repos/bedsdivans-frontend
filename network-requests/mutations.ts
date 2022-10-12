import { useMutation } from "react-query";
import {
    createBed,
    createBedVariantById,
    createColorIcon,
    deleteBedById,
    deleteBedVariantById,
    login,
    logout,
    register,
    updateAccessoriesIcon,
    updateBedById,
    updateBedVariantById,
    verifyToken,
} from "./api";
import {
    AccessoriesTypes,
    Bed,
    BedRequestPayload,
    ColorIcon,
    CreateBedVariantResponse,
    Login,
    Register,
    UpdateColorIcon,
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
            createColorIcon(
                payload.image,
                payload.label,
                payload.value,
                payload.type
            )
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

export const useUpdateAccessoriesIcon = () =>
    useMutation(
        (payload: UpdateColorIcon): Promise<UploadBedImage> =>
            updateAccessoriesIcon(
                payload.id,
                payload.label,
                payload.value,
                payload.type,
                payload?.image
            )
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

export const useLogin = () =>
    useMutation(({ email, password }: Login) => login(email, password));

export const useLogout = () => useMutation(() => logout());

export const useRegister = () =>
    useMutation(({ email, password, name }: Register) =>
        register({ name, email, password })
    );

export const useVerifyToken = () =>
    useMutation((token: string) => verifyToken(token));
