import { getClients } from '@/requests/clients';
import { useQuery } from '@tanstack/react-query';

export function useGetClients() {
    return useQuery(["clients"], getClients);
}
