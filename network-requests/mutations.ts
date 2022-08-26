import { useMutation } from "react-query";
import { createBedVariantById } from "./api";
import axios from "./axios";
import { AccessoriesTypes, CreateBedVariantResponse, } from "./types"

export const useCreateNewBedVariant = (id: string) =>
    useMutation((props: AccessoriesTypes): Promise<CreateBedVariantResponse> =>
        createBedVariantById(id, props)
    )
// export const useCreateNewBedVariant = (id:string) => useMutation(
//     {color, storage, headboard, feet, mattress}:AccessoriesTypes):Promise<VariantsTypes> => createBedVariantById(id))

