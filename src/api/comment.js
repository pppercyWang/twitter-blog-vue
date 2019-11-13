import http from '@/utils/http';
export const apiCommentSave = (data, config) => {
    return http.post('comment/save', data, config);
};
export const apiCommentList = (data, config) => {
    return http.post('comment/list', data, config);
};

