import Api from 'services/api';
import { LOG_OUT } from 'store/actions';
import { API_USER_SIGN_IN } from 'store/api';

export const login = async (data) => {
    return Api.post(API_USER_SIGN_IN, data);
};

export const logout = () => {
    return { type: LOG_OUT };
};
