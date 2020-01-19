import { useState, useEffect, useContext } from 'react';
import { authContext } from '../context/authStore';
import { processOperation } from './apiCallFunctions'

export const useApi = (operationType, initialData) => {

    const [{ token },] = useContext(authContext)
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [resultData, setResultData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            processOperation(token, operationType, data)
                .then(response => {
                    console.log("response ::", response)
                    //console.log("response.data ::", response.data)
                    //setResultData(response)
                    setIsSuccess(true)
                    
                })
                .catch(error => {
                    console.log("Error:", error)
                    setIsError(true)
                    setResultData(error)
                })

            setIsLoading(false);
        };

        if (Object.keys(data).length) {
            fetchData();
        }

    }, [data, token, operationType]);
    return [[isLoading, isSuccess, isError, resultData], setData];
};