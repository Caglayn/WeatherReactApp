import axios from "axios";
import * as URL from './RestApiUrls';

export const setToken = (token) => {
    axios.defaults.headers['Authorization'] = token;
}

export const clearToken = () => {
    delete axios.defaults.headers['Authorization'];
}

export const loginWithUsername = (username, password) => {
    return axios.post(URL.USER_SERVICE + URL.LOGIN, 
        {username : username, 
        password : password}, {});
}

export const getUserInfo = () => {
    return axios.get(URL.USER_SERVICE + URL.GET_INFO);
}

export const logout = () => {
    return axios.get(URL.USER_SERVICE + URL.LOGOUT);
}