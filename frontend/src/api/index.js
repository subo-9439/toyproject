import { axiosInstance } from './axiosInstance';

export const getHello = async () => {
  const res = await axiosInstance.get('/test/hello');
  return res.data;
};
export const loginFn = async (payload) => {
  const res = await axiosInstance.post('/test/post', payload);
  return res.data;
};
