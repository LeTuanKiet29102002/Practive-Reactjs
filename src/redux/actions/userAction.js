import { toast } from 'react-toastify';
import { LoginApi } from '../../services/UserServices';


export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_REFRESH = 'USER_REFRESH';
export const FETCH_USER_LOGIN = 'FETCH_USER_LOGIN';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';


export const handleLoginRedux = (email, password) => {
    return async (dispatch, getState) => {

        dispatch({ type: FETCH_USER_LOGIN });
        let res = await LoginApi(email.trim(), password);

        localStorage.setItem('token',res.token);
        localStorage.setItem('email',email.trim());
        if (res && res.token) {
            dispatch({ type: FETCH_USER_SUCCESS, data: { email: email.trim(), token: res.token } });

            // loginContext(email, res.token);
            // navigate('/');

        } else {
            if (res && res.status === 400) {
                toast.error(res.data.error);
            }
            dispatch({ type: FETCH_USER_ERROR });

        }
    }
}

export const handleLogoutRedux = ()=>{
    return (dispatch, getState)=>{
        dispatch({ type: USER_LOGOUT});
    }
}

export const handleRefresh = ()=>{
    return (dispatch, getState)=>{
        dispatch({ type: USER_REFRESH});
    }
}