import { useMutation } from "react-query";
import { createBedVariantById, updateBedVariantById } from "./api";
import axios from "./axios";
import { AccessoriesTypes, CreateBedVariantResponse, VariantsTypes, } from "./types"

export const useCreateNewBedVariant = (id: string) =>
    useMutation((props: VariantsTypes): Promise<CreateBedVariantResponse> =>
        createBedVariantById(id, props)
    )
// export const useCreateNewBedVariant = (id:string) => useMutation(
//     {color, storage, headboard, feet, mattress}:AccessoriesTypes):Promise<VariantsTypes> => createBedVariantById(id))


export const useUpdateBedVariant = (id: string) =>
    useMutation((props: VariantsTypes): Promise<CreateBedVariantResponse> =>
        updateBedVariantById(id, props)
    )

