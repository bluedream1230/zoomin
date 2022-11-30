import Api from 'services/api';
import { API_USER_SIGN_IN } from 'store/api';

export const login = async (data) => {
    return Api.post(API_USER_SIGN_IN, data);
};
