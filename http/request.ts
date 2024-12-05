/* eslint-disable */
import axios from 'axios';

// 创建实例
const options = {
  baseURL: 'http://18.167.163.117:30000',
  timeout: 60000,
  timeoutErrorMessage: '接口请求超时，请联系后端！',
  headers: {
    'Content-Type': 'application/json'
  }
};
const HttpRequest = axios.create(options);
// http request拦截器
HttpRequest.interceptors.request.use(
  (prevConfigs: any): any => {
    console.log(prevConfigs, 'prevConfigs');
    const { headers: prevHeaders, ...restConfigs } = prevConfigs || {};
    const headers = {
      ...prevHeaders
      // Authorization: sessionStorage.getItem('@token')
    };
    const configs = {
      ...restConfigs,
      headers
    };
    return configs;
  },
  (error: any) => Promise.reject(error)
);

HttpRequest.interceptors.response.use((response: any): any => {
  const { data } = response || {};
  console.log(response, 'response');
  return data;
});
export default HttpRequest;
