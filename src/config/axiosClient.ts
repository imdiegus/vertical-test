import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { authorization: localStorage.getItem('diegoEmailToken') },
})
export default axiosClient
