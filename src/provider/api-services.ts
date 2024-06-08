import { EndPoints } from '../constant';
import API, { ApiMethodType } from './api-config';

/**
 * get post List
 * @returns Api Response
 */
export const getPosts = async () => {
    return new Promise(async (resolve, reject) => {
        const res = await API.request<any, any>(
            EndPoints.posts,
            ApiMethodType.get,
            {}
        );
        if (res.code == 200) {
            resolve(res.data);
        }
        resolve({});
    });
};