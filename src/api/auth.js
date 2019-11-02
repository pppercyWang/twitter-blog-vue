import http from '@/utils/http';
export const apiGetUserInfo = (data, config) => {
    return http.post('auth/user/info', data, config);
};
