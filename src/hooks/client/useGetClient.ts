import { getClient } from "@/requests/clients";
import { useQuery } from "@tanstack/react-query";

export function useGetClient(id: string) {
    return useQuery(["client", id], () => getClient(id));
}
