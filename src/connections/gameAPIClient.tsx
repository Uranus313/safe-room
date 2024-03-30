// import axios from "axios";
// export  interface FetchedData<T>{
//     count : number;
//     next : string | null;
//     results : T[];
//   }
// export default axios.create({
//     baseURL : "https://api.rawg.io/api",
//     params : {key : "378c2f8e44cf4c8388d1f6e292b04015"}
// })
// import axios, { AxiosRequestConfig } from 'axios';

// export interface FetchResponse<T> {
//   count: number;
//   next: string | null;
//   results: T[];
// }

// const axiosInstance = axios.create({
//   baseURL: 'https://api.rawg.io/api',
//   params: {
//     key: 'e53bba19d7914970889f528d70c8e06d',
//   },
// });

import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'e53bba19d7914970889f528d70c8e06d',
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + '/' + id)
      .then((res) => res.data);
  };
}

export default APIClient;