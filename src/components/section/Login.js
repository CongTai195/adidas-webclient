import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

//export class Login extends Component {
function Login() {
    //render () {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const history = useHistory();

        
        async function login(){
            console.warn(email, password)
            let item = {email, password}
            let result = await fetch("", {
                method:'POST',
                headers:{
                    
                }
            })
        }
        // useEffect(() => {
            

        //     if(localStorage.getItem('user-info')){
        //         history.push("/add")
        //     }
        // })

        return(
            <div>
                <h1>Login</h1>
                <input type="text" placeholder="email" 
                onChange={(e)=>setEmail(e.target.value)} className="formcontrol"/>
                <br/>
                <input type="text" placeholder="password"
                onChange={(e)=>setPassword(e.target.value)} className="formcontrol"/>
                <br/>
                <button onClick={login} className="btn-login">Login</button>
            </div>
        )
    //}

}

export default Login