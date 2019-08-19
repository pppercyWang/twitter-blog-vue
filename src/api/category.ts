import http from '@/utils/http';
export const apiGetCategoryList = (data: any, config: any) => {
    return http.post('category/list', data, config);
};
export const apiSaveCategory = (data: any, config: any) => {
    return http.post('category/save', data, config);
};

