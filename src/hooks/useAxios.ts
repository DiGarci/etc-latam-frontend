import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxios = (url: string) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(url);
                setIsLoading(false);
                setData(response.data);
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
                console.log(error);
            }
        };
    }, [url]);

    return { isLoading, isError, data };
};
