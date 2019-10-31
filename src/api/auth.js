import http from '@/utils/http';
export const apiLogin = (data, config) => {
    return http.post('user/login', data, config);
};
