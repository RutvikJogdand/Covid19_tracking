import React, {useState} from "react"
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {admin_login} from "./../../Redux/AdminLogin/AdminLoginActions"
import Alert from '@material-ui/lab/Alert';
import styles from "./Login.module.css"

function Login()
{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [status, setStatus] = useState(false)
    const loginStatus = useSelector(state => state.loginRoot.login_status)

    const dispatch = useDispatch()
    
    const history = useHistory()
    

    const handleUsernameChange = (event) => {

        setUsername(event.target.value)
        setStatus(false)
    }

    const handlePasswordChange = (event) =>{

        setPassword(event.target.value)
        setStatus(false)
    }

    const handleFromSubmit = (event) => {

        event.preventDefault()
        // alert("Pressed")
        setStatus(true)
        const loginDetails = {
            username,
            password
        }

        if(loginDetails.username && loginDetails.password)
        {
            dispatch( admin_login(loginDetails) )

        }


    }

    if(loginStatus)
    {
        history.push(`/dashboard`)
    }
   

    


    return(
        <>
            <div style={{marginTop: "200px"}}>
                <h1>Login</h1>
                 <form >
                    <TextField name="username" onChange={ handleUsernameChange} label="Username"  variant="outlined" required={true} />
                    <br/>
                    <br/>
                    <TextField type="password" name="password" onChange={handlePasswordChange} label="Password"  variant="outlined" required={true}/>
                    <br/>
                    <br/>
                    <button className="btn btn-dark" onClick={handleFromSubmit}>Submit</button>
                </form>

                {
                    username && password && (loginStatus === false) && status ?
                    <div className={styles.alertBox}>
                        <Alert severity="error">Wrong Credentials</Alert>
                    </div>
                    :
                    ""
                }
            </div>
           
           
        </>
    )
}

export default Login