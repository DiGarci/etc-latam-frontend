import { deleteReport } from '@/requests/reports';
import { QueryCache, useMutation, useQuery } from '@tanstack/react-query';

export function useDeleteReport(id: string) {
    return useMutation(deleteReport)
    // return useQuery(["reports", id], deleteReport);
}

// https://github.com/webmasterdevlin/zustand-immer-react-query-course/blob/master/src/features/heroes/hooks/useRemoveHero.ts
