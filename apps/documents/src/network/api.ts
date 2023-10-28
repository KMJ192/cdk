import axios, { AxiosRequestConfig } from 'axios';

type ResponseModel<T> = {
  status: number;
  data: T | null;
  isSuccess: boolean;
  message: string;
};

const METHOD = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
};

const FETCHER = async <T>(
  params: AxiosRequestConfig,
): Promise<ResponseModel<T>> => {
  const response: ResponseModel<T> = await axios({
    ...params,
  })
    .then((res) => ({
      status: res.status,
      data: res.data,
      isSuccess: true,
      message: '',
    }))
    .catch((e) => {
      const tmp = e.response?.data?.message ?? '';
      let message = '';
      if (typeof tmp === 'string') {
        message = tmp;
      } else if (Array.isArray(tmp)) {
        message = tmp.join(', ');
      }

      return {
        status: e.response?.data?.statusCode ?? 500,
        message,
        data: null,
        isSuccess: false,
      };
    });

  return response;
};

export { METHOD, FETCHER };
export type { ResponseModel };
