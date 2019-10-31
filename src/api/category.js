import http from '@/utils/http';
export const apiGetCategoryList = (data, config) => {
    return http.post('category/list', data, config);
};
export const apiSaveCategory = (data, config) => {
    return http.post('category/save', data, config);
};

