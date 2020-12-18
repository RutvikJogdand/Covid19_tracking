import {ALL_EMP_REQUEST, ALL_EMP_SUCCESS, ALL_EMP_FAILURE} from "./allEmpActionTypes"

export const allEmpInitState = {

    all_emp_arr: [],
    err_message: ""
}

const allEmpReducer = (state = allEmpInitState, action) => {

    switch(action.type)
    {
        case ALL_EMP_REQUEST:
            return{
                ...state,
                all_emp_arr: []
            }
        
        case ALL_EMP_SUCCESS:
            return{
                ...state,
                all_emp_arr: action.payload
            }    

        case ALL_EMP_FAILURE:
            return{
                ...state,
                err_message: "error getting employees data"
            }    

        default:
            return state    
    }
}

export default allEmpReducer