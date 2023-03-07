import { useUserAuth } from '@/stores/useUserAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function useAuth() {
    const router = useRouter();
    const { data: user, isLogged } = useUserAuth();

    useEffect(() => {
        if (!isLogged()) {
            router.push('/login');
        }
    }, [isLogged, router]);

    return { user };
}
