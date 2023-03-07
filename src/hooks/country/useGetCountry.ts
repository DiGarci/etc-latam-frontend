import { getCountry } from "@/requests/countries";
import { useQuery } from "@tanstack/react-query";

export function useGetCountry(id: string) {
    return useQuery(["country", id], () => getCountry(id));
}
