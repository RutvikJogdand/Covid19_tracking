import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from "./AdminLoginActionsTypes"

export const loginInitState = {

    login_status: false
    
}

const loginReducer = (state = loginInitState, action) => {

    switch(action.type)
    {
        case LOGIN_REQUEST:
            return{
                ...state,
                login_status: false
            }
        
        case LOGIN_SUCCESS:
            return{
                ...state,
                login_status: true
            }    

        case LOGIN_FAILURE:
            return{
                ...state,
               login_status: false
            }    

        default:
            return state    
    }
}

export default loginReducer