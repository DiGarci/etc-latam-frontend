import { getTickets } from '@/requests/tickets';
import { useQuery } from '@tanstack/react-query';

export function useGetTickets() {
    return useQuery(["tickets"], getTickets);
}
