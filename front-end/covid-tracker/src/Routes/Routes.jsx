import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import Login from "../Components/Login/Login";


function Routes()
{
    return(
        <>
            <Switch>
                <Route exact path="/" render={() => <Login/>} />
                <Route path="/dashboard" render={() => <Dashboard/> }  />
            </Switch>
        </>
    )
}

export default Routes