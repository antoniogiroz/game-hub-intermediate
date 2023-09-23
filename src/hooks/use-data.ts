import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

export function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;

        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [endpoint]);

  return { data, error, isLoading };
}
