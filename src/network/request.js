import Axios from 'axios'

export function request(config) {
  const instance = Axios.create({
    // baseURL : "http://123.207.32.32:8000/api/wh",
    baseURL: "http://106.54.54.237:8000/api/wh",
    timeout: 10000
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  return instance(config);
}
