import React, { Component, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import '../css/Login.css'
import { DataContext } from "../Context";
import axios from 'axios';

//export class Login extends Component {
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const context = useContext(DataContext)
    const user = context.user
    
    function login() {
        console.warn(email, password)
        const data = { email, password }
        axios.post('login', data)
            .then(res => {
                context.addUser(res.data.results.info)
                localStorage.setItem('token', res.data.results.token);
                //console.log("login:", res.data.results.info)
            })
            .catch(err => {
                console.log("Err: ", err)
            });
    }
    function log_out(){
        const temp = []
        context.addUser(temp)
        //Xư lý tiếp 
    }

    if(user.length === 0 ){
        return (
            <div className="container">
                <form className="form-login">
                    <h1 className="label-login">ĐĂNG NHẬP</h1>
                    <div className="form-text">
                        <input type="text" placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} className="formcontrol" />
                    </div>
                    <div className="form-text">
                        <input type="text" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} className="formcontrol" />
                    </div>
                    <a className="btn-login" onClick={login} className="btn-login">ĐĂNG NHẬP</a>
                </form>
            </div>
        )
    }else{
        return(
            <div>
                Đã đăng nhập với user: {user.name}
                <button onClick={log_out}>Log out</button>
            </div>
        )
    }
}

export default Login