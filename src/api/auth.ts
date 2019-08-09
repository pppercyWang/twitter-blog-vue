import http from '@/utils/http';
export const apiSaveArticle = (data: any, config: any) => {
    return http.post('article/save', data, config);
};
