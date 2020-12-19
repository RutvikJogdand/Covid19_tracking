import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import allEmpReducer from "./AllEmployees/allEmpReducer"
import loginReducer from "./AdminLogin/AdminLoginReducer"


const rootReducer = combineReducers({
    allEmpRoot : allEmpReducer,
    loginRoot: loginReducer
  });

const composeEnhancers =
  (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);