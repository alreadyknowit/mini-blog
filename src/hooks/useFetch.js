import {useState, useEffect} from "react";

const useFetch = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setTimeout(
            () => fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw Error("Couldn't fetch the data. Something went wrong.");
                    }
                    return response.json();
                })
                .then((data) => {
                    setData(data);
                    setIsLoaded(true);
                })
                .catch((err) => setError(err.message)), 1000
        );

    }, [url]);

    return {data, isLoaded, error};
};

export default useFetch;
