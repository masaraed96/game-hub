import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

  
  interface FetchedResponse<T> {
    results: T[];
    count: number;
  }

const useGames = <T>(endpoint: string, params?: AxiosRequestConfig, dependecies?: any[])=>{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
      apiClient
        .get<FetchedResponse<T>>(endpoint, {signal: controller.signal, ...params})
        .then((res) => {setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);});
        return ()=> controller.abort();
    }, dependecies? [...dependecies]: []);

    return {data, error, isLoading};
}

export default useGames;