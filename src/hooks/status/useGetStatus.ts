import { getStatus } from "@/requests/statuses";
import { useQuery } from "@tanstack/react-query";

export function useGetStatus(id: string) {
    return useQuery(["status", id], () => getStatus(id));
}
