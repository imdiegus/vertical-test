import axios from 'axios'
import string from '../constants/strings'

const axiosClient = () =>
  axios.create({
    baseURL: 'http://localhost:3000',
    headers: { authorization: localStorage.getItem(string.locaStorageToken) },
  })
export default axiosClient
