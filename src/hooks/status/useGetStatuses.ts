import { getStatuses } from '@/requests/statuses';
import { useQuery } from '@tanstack/react-query';

export function useGetStatuses() {
    return useQuery(["statuses"], getStatuses);
}
