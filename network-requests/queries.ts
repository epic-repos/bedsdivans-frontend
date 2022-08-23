import { useInfiniteQuery, useQuery } from "react-query";
import { getAllBeds, getBedById } from "./api";
import { Bed, BedResponse } from "./types";


export const useFetchAllBeds = () =>
    useInfiniteQuery("beds", ({ pageParam = 1 }): Promise<BedResponse> => getAllBeds({ pageParam }), {
        staleTime: 10000,
        getNextPageParam: (lastPage: any) => {
            if (lastPage.nextPage <= lastPage.totalPages)
                return lastPage.nextPage;
            return undefined;
        }
    },
    )

export const useFetchBedById = (id: string) =>
    useQuery(["bed", id], (): Promise<Bed> => getBedById(id));