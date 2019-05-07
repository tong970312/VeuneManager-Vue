import  axios from 'axios'

//创建axios实例
const service = axios.create({
  baseURL:process.env.TEST_URL

});

export  default service
