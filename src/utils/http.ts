import axios from 'axios';
import qs from 'qs';
class Http {
    private service: any = null;
    constructor() {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        this.service = axios.create({
            baseURL: '/api/v1/',
            timeout: 5000000
        });
        this.service.interceptors.request.use((config) => {
            // if(sessionStorage.getItem('token')){   带token
            //     config.headers.Authorization = 'BEARER ' + sessionStorage.getItem('token');
            // };
            config.data = qs.stringify(config.data);  // form-data传参
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
