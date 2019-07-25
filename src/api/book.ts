import http from '@/utils/http';
export const apiGetBookList = (data: any, config: any) => {
    return http.post('book/list', data, config);
};
export const apiSaveBook = (data: any, config: any) => {
    return http.post('book/save', data, config);
};
export const apiDelBook = (data: any, config: any) => {
    return http.post('book/del', data, config);
};

