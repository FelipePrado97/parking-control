import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:8080/parking-spot/'
})

export default api;