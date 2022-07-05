import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const dispose = new AbortController();
        
        fetch(url, {signal: dispose.signal})
            .then(res => {
                if(!res.ok){
                    throw Error("Failed to fetch data");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setError(null);
                setIsLoading(false);
            })
            .catch(err => {
                if(err.name !== 'AbortError'){
                    setIsLoading(false);
                    setError(err.message);
                }
            })
        return () =>  dispose.abort();
    }, [url]);

    return {data, isLoading, error}
}

export default useFetch;