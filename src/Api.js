import axios from 'axios'

const Api = axios.create({
    baseURL : '/api',
    headers: {
        Authorization : `Bearer ${localStorage.getItem('jwt')}`
    }
})

export default Api