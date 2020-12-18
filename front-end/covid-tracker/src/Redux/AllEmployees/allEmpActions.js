import {ALL_EMP_REQUEST, ALL_EMP_SUCCESS, ALL_EMP_FAILURE} from "./allEmpActionTypes"
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