import axios from "./axios";
import { Bed, BedResponse, GetAllBedsParams } from "./types"

export const getAllBeds = ({ pageParam = 1 }: GetAllBedsParams): Promise<BedResponse> =>
    axios.get<BedResponse>(`/beds?page=${pageParam}`).then(
        (response) => response.data
    ).catch(error => { throw error });


export const getBedById = (id: string): Promise<Bed> =>
    axios.get<Bed>(`/beds/${id}`).then(
        (response) => response.data
    ).catch(error => { throw error });