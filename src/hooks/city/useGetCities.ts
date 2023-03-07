import { getCities } from '@/requests/cities';
import { useQuery } from '@tanstack/react-query';

export function useGetCities() {
    return useQuery(["cities"], getCities);
}
