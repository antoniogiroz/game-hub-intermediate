import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

export class ApiClient<T> {
  constructor(private endpoint: string) {}

  getAll = (config: AxiosRequestConfig = {}) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((response) => response.data);
  };

  get = (id: string | number, config: AxiosRequestConfig = {}) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`, config)
      .then((response) => response.data);
  };
}
