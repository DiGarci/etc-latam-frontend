import { getRoles } from '@/requests/roles';
import { useQuery } from '@tanstack/react-query';

export function useGetRoles() {
    return useQuery(["roles"], getRoles);
}
