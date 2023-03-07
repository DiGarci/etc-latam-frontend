import { getCountries } from '@/requests/countries';
import { useQuery } from '@tanstack/react-query';

export function useGetCountries() {
    return useQuery(["countries"], getCountries);
}
