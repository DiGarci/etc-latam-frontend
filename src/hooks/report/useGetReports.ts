import { getReports } from '@/requests/reports';
import { useQuery } from '@tanstack/react-query';

export function useGetReports() {
    return useQuery(["reports"], getReports);
}
