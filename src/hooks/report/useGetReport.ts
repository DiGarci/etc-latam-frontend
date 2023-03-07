import { getReport } from "@/requests/reports";
import { useQuery } from "@tanstack/react-query";

export function useGetReport(id: string) {
    return useQuery(["report", id], () => getReport(id));
}
