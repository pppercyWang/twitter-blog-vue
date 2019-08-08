import axios from 'axios';
import qs from 'qs';
class Http {
    private service: any = null;
    constructor() {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        this.service = axios.create({
            baseURL: '/api/',
            timeout: 5000000
        });
        this.service.interceptors.request.use((config) => {
            // if(sessionStorage.getItem('token')){   带token
            config.headers.Authorization = 'BEARER ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjUyNjg0NjIsImlhdCI6MTU2NTIzMjQ2MiwiaWQiOjEsImlzcyI6IklyaXMiLCJqdGkiOiI5NTI3Iiwibmlja19uYW1lIjoicGVyY3kiLCJzZXNzaW9uIjoiIn0.1QSidzwgfRU-X3v19RNT8Wnw1RMxiMufb5VWlMBCXig';
            // };
            // config.data = qs.stringify(config.data);
            return config;
        }, (error) => Promise.reject(error));
        this.service.interceptors.response.use((response) => {
            if (response.status === 200) {
                if (response.data) {
                    if (response.data.Code === 0) {
                        return Promise.resolve(response.data || true);
                    }
                    return Promise.reject(response.data || true);
                }
                return Promise.resolve(response || false);
            }
            return Promise.reject(response || false);
        }, (error) => {
            return Promise.reject(error);
        });
    }
    public get(url, params = {}) {
        return this.service.get(`${url}`, { params });
    }
    public post(url, data = {}, config = {}) {
        return this.service.post(`${url}`, data, config);
    }
}
export default new Http();
