import { getUser } from "@/requests/users";
import { useQuery } from "@tanstack/react-query";

export function useGetCountry(id: string) {
    return useQuery(["user", id], () => getUser(id));
}
