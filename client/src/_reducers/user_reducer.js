import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    CHECK_ID,
    FIND_MEMBER_INFO,
    CHANGE_PWD
} from '../_actions/types';
 

export default function(state={},action){
    switch(action.type){
        case REGISTER_USER:
            return {...state, register: action.payload }
        case LOGIN_USER:
            return { ...state, loginSucces: action.payload }
        case AUTH_USER:
            return {...state, userData: action.payload }
        case LOGOUT_USER:
            return {...state }
        case CHECK_ID:
            return {...state }
        case FIND_MEMBER_INFO:
            return {...state, findResult: action.payload}
        case CHANGE_PWD:
            return {...state }
        default:
            return state;
    }
}