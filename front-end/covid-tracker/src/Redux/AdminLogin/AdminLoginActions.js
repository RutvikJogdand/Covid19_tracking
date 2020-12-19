import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from "./AdminLoginActionsTypes"
import axios from "axios"

export const login_req = () => ({
    type: LOGIN_REQUEST
})

export const login_success = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
})

export const login_failure = (payload) => ({
    type: LOGIN_FAILURE,
    payload
})

export const admin_login = (payload) => (dispatch) => {

    dispatch(login_req())
    axios
    .post("http://localhost:5000/api/admin-login/login",{

        username: payload.username,
        password: payload.password        
    })
    .then((res) => {

        dispatch(login_success(res.data))
    })
    .catch((err) => {

        dispatch(login_failure(err))
    })
}