import { getCity } from "@/requests/cities";
import { useQuery } from "@tanstack/react-query";

export function useGetCity(id: string) {
    return useQuery(["city", id], () => getCity(id));
}
