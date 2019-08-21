import http from '@/utils/http';
export const apiArticleSave = (data: any, config: any) => {
    return http.post('article/save', data, config);
};
export const apiArticleList = (data: any, config: any) => {
    return http.post('article/list', data, config);
};
