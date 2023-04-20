import axios from 'axios';

// Função que adiciona os headers de authorization com as credenciais do usuário
function addAuthorizationHeaders(config) {
    const credentials = localStorage.getItem('credentials');
    if (credentials) {
        config.headers.Authorization = `Basic ${btoa(credentials)}`;
    }
}

//axios.defaults.headers.common['Authorization'] = `Basic ${btoa('felipe:senha123')}`;
const api = axios.create({
    baseURL:'http://localhost:8080/parking-spot/'
})

// Intercepta todas as solicitações e adiciona os headers de authorization
api.interceptors.request.use(
    (config) => {
        addAuthorizationHeaders(config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;