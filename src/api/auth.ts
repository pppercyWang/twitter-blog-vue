import http from '@/utils/http';
export const apiLogin = (data: any, config: any) => {
    return http.post('user/login', data, config);
};
