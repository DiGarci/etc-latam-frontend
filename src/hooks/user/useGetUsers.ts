import { getUsers } from '@/requests/users';
import { useQuery } from '@tanstack/react-query';

export function useGetUsers() {
    return useQuery(["users"], getUsers);
}
