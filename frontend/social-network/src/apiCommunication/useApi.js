import { useState, useEffect, useContext } from 'react';
import { authContext } from '../context/authStore';
import { processOperation } from './apiCallFunctions'

export const useApi = (operationType, initialData) => {

    const [{ token },] = useContext(authContext)
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            processOperation(token, operationType, data)
                .then(response => {
                    setIsSuccess(true)
                })
                .catch(error => {
                    setIsError(true)
                })

            setIsLoading(false);
        };

        if (Object.keys(data).length) {
            fetchData();
        }

    }, [data, token, operationType]);
    return [[isLoading, isSuccess, isError], setData];
};