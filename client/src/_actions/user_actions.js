import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    CHECK_ID,
    FIND_MEMBER_INFO,
    CHANGE_PWD,
    ADD_TO_CART
} from './types';
import { USER_SERVER } from '../components/Config.js';

export function registerUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/register`,dataToSubmit)
        .then(response => response.data);
    
    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function loginUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/login`,dataToSubmit)
                .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function auth(){
    const request = axios.get(`${USER_SERVER}/auth`)
    .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    }
}

export function logoutUser(){
    const request = axios.get(`${USER_SERVER}/logout`)
    .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}

export function checkId(compareId){
    const request = axios.post(`${USER_SERVER}/checkId`, compareId)
    .then(response => response.data);

    return {
        type: CHECK_ID,
        payload: request
    }
}

export function findMemberInfo(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/findMemberIndo`, dataToSubmit)
    .then(response => response.data);

    return {
        type: FIND_MEMBER_INFO,
        payload: request
    }
}

export function changePwd(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/changePwd`, dataToSubmit)
    .then(response => response.data);

    return {
        type: CHANGE_PWD,
        payload: request
    }
}

export function addToCart(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/addToCart`, dataToSubmit)
    .then(response => response.data);

    return {
        type: ADD_TO_CART,
        payload: request
    }
}

