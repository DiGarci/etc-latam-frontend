import { getRole } from "@/requests/roles";
import { useQuery } from "@tanstack/react-query";

export function useGetRole(id: string) {
    return useQuery(["role", id], () => getRole(id));
}
