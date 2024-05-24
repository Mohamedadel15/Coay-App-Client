import { useState, useEffect } from "react";
import { postData } from "../utils/api";

export default function UsePostData(url, body) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false)
    useEffect(() => {
        setIsLoading(true);
        try {
            postData(url, body).then((data) => {
                setData(data.data.data);
                setIsLoading(false);
            })
        }
        catch (error) {
            setError(error);
            setIsLoading(false);
        }
    }, []);

    return {
        data,
        isLoading,
        error
    }
}
