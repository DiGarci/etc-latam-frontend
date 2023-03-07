import { getTicket } from "@/requests/tickets";
import { useQuery } from "@tanstack/react-query";

export function useGetTicket(id: string) {
    return useQuery(["ticket", id], () => getTicket(id));
}
