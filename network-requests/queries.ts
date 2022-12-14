import { useInfiniteQuery, useQuery } from "react-query";
import {
    getAllBeds,
    getAllBedsWithImage,
    getAllBedsWithImageAdmin,
    getAllHeadboardWithImage,
    getBedById,
    getBedBySlug,
    getBedVariantById,
    getIconById,
    getIconsByType,
    getUser,
} from "./api";
import {
    Accessories,
    Bed,
    BedResponse,
    BedWithImage,
    BedWithSize,
    VariantsTypes,
} from "./types";

export const useFetchAllBeds = () =>
    useInfiniteQuery(
        "beds",
        ({ pageParam = 1 }): Promise<BedResponse> => getAllBeds({ pageParam }),
        {
            refetchOnMount: true,
            getNextPageParam: (lastPage: any) => {
                if (lastPage.nextPage <= lastPage.totalPages)
                    return lastPage.nextPage;
                return undefined;
            },
        }
    );

export const useFetchAllBedsWithImage = (category?: string) =>
    useInfiniteQuery(
        ["beds-image", category],
        ({ pageParam = 1 }): Promise<BedResponse> =>
            getAllBedsWithImage({ pageParam, category }),
        {
            refetchOnMount: true,
            getNextPageParam: (lastPage: any) => {
                if (lastPage.nextPage <= lastPage.totalPages)
                    return lastPage.nextPage;
                return undefined;
            },
        }
    );
export const useFetchAllHeadboardWithImage = (category?: string) =>
    useInfiniteQuery(
        ["headboard-image", category],
        ({ pageParam = 1 }): Promise<BedResponse> =>
            getAllHeadboardWithImage({ pageParam, category }),
        {
            refetchOnMount: true,
            getNextPageParam: (lastPage: any) => {
                if (lastPage.nextPage <= lastPage.totalPages)
                    return lastPage.nextPage;
                return undefined;
            },
        }
    );

export const useFetchAllBedsWithImageAdmin = () =>
    useInfiniteQuery(
        "beds-image-admin",
        ({ pageParam = 1 }): Promise<BedResponse> =>
            getAllBedsWithImageAdmin({ pageParam }),
        {
            refetchOnMount: true,
            getNextPageParam: (lastPage: any) => {
                if (lastPage.nextPage <= lastPage.totalPages)
                    return lastPage.nextPage;
                return undefined;
            },
        }
    );

export const useFetchBedById = (id: string) =>
    useQuery(["bed", id], (): Promise<Bed> => getBedById(id));
export const useFetchBedBySlug = (slug: string) =>
    useQuery(["bed", slug], (): Promise<Bed> => getBedBySlug(slug));

export const useFetchBedVariantsById = (id: string) =>
    useQuery(
        ["bed-variant", id],
        (): Promise<BedWithImage> => getBedVariantById(id)
    );

export const useFetchBedVariantsByIdAndSize = (id: string, size: string) =>
    useQuery(
        ["bed-variant", id, size],
        (): Promise<BedWithSize> => getBedVariantById(id, size),
        {
            enabled: !!id && !!size,
        }
    );

export const useFetchIconsByType = (type: string) =>
    useQuery(
        ["icons", type],
        (): Promise<Accessories[]> => getIconsByType(type),
        {
            refetchOnMount: true,
        }
    );

export const useFetchIconById = (id: string) =>
    useQuery(["icon", id], (): Promise<Accessories> => getIconById(id), {
        refetchOnMount: true,
    });

//GET USER DATA
export const useFetchUser = () =>
    useQuery("user", getUser, {
        refetchOnMount: true,
    });
