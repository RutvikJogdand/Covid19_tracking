import {ALL_EMP_REQUEST, ALL_EMP_SUCCESS, ALL_EMP_FAILURE,
    COV_POS_REQUEST, COV_POS_SUCCESS, COV_POS_FAILURE, 
    COV_NEG_REQUEST, COV_NEG_SUCCESS, COV_NEG_FAILURE} from "./allEmpActionTypes"
import axios from "axios"

export const all_emp_req = () => ({
    type: ALL_EMP_REQUEST
})

export const all_emp_success = (payload) => ({
    type: ALL_EMP_SUCCESS,
    payload
})

export const all_emp_failure = (payload) => ({
    type: ALL_EMP_FAILURE,
    payload
})

export const get_all_emp = () => (dispatch) => {

    dispatch(all_emp_req())
    axios
    .get("http://localhost:5000/api/get-all/employees-list")
    .then((res) => {

        dispatch(all_emp_success(res.data))
    })
    .catch((err) => {

        dispatch(all_emp_failure(err))
    })
}

// Make employee covid positive actions:

export const cov_pos_req = () => ({
    type: COV_POS_REQUEST
})

export const cov_pos_success = (payload) => ({
    type: COV_POS_SUCCESS,
    payload
})

export const cov_pos_failure = (payload) => ({
    type: COV_POS_FAILURE,
    payload
})

export const cov_pos = (payload) => (dispatch) => {

    dispatch(cov_pos_req())
    console.log(payload)
    axios
    .put(`http://localhost:5000/api/mark-covid-positive/set-covid-positive/${payload}`,{

        id: payload
    })
    .then((res) => {

        dispatch(cov_pos_success(res.data))
        dispatch(get_all_emp())
    })
    .catch((err) => {

        dispatch(cov_pos_failure(err))
    })
}

// Make employee recovered actions:
export const cov_neg_req = () => ({
    type: COV_NEG_REQUEST
})

export const cov_neg_success = (payload) => ({
    type: COV_NEG_SUCCESS,
    payload
})

export const cov_neg_failure = (payload) => ({
    type: COV_NEG_FAILURE,
    payload
})

export const cov_neg = (payload) => (dispatch) => {

    dispatch(cov_neg_req())
    console.log(payload)
    axios
    .put(`http://localhost:5000/api/make-covid-negative/set-covid-negative/${payload}`,{

        id: payload
    })
    .then((res) => {

        dispatch(cov_neg_success(res.data))
        dispatch(get_all_emp())
    })
    .catch((err) => {

        dispatch(cov_neg_failure(err))
    })
}
