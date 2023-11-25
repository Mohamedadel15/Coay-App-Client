import { useState, useEffect  } from "react";
import { getData } from "../utils/api";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function useGetData(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false)
  useEffect(()=>{
    setIsLoading(true);
    try{
      getData(url).then((data)=>{
        setData(data.data.data);
        setIsLoading(false);
      })

    }
    catch(error){
      setError(error);
      setIsLoading(false);
    }
    },[]);

    return {
      data,
      isLoading,
      error
    }

}
