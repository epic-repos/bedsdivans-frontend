import { useMutation } from "react-query";
import {
  createBed,
  createBedVariantById,
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
  CreateBedVariantResponse,
  VariantsTypes,
} from "./types";

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
    (id: string): Promise<CreateBedVariantResponse> => deleteBedVariantById(id)
  );
