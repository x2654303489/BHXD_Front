import axios,{AxiosInstance} from 'axios';  
import { Configuration} from '../configuration';

export const config = new Configuration({  
  // 这里你可以根据需要设置sessionStorage（或重命名后的属性）、basePath和baseOptions  
  // 但注意，sessionStorage应该是一个函数，用于在需要时返回token  
  sessionStorage: (name?: string, scopes?: string[]) => {  
      // 假设你的token存储在localStorage中，并且没有使用scopes参数  
      return localStorage.getItem('token') || '';  
  },  
  basePath: 'http://localhost:6060', 
   
  // 你可以在这里添加任何Axios需要的baseOptions  
  // 但通常对于简单的用途，你可能不需要这个  
});  

// 创建 Axios 实例并配置请求拦截器  
  
const token: AxiosInstance = axios.create({  
  // 可以在这里添加其他Axios配置，如headers、timeout等  
  // 但这些通常不会直接从Configuration实例中读取，除非你有特定的需求  
});  

// 添加请求拦截器  
token.interceptors.request.use(config => {  
  // 从 localStorage 获取 token  
  const token = localStorage.getItem('token');  
  
  // 判断 token 是否存在  
  if (token) {  
    // 如果存在，则添加到请求的 Authorization 头部（根据后端要求，可能需要 Bearer 前缀）  
    config.headers.sessionStorage = `${token}`;  
  }  
  // console.log(config)
  // 返回修改后的配置  
  return config;  
}, error => {  
  // 处理请求错误  
  return Promise.reject(error);  
});  

export default token;
 