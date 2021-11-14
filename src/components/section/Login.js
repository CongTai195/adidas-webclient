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
        console.log("login data moi nhap sau khi warn 2:", data)
        axios.post('login', data)
            .then(res => {
                if (res.data.status == "OK") {
                    console.log("Thanh congggggggggg")
                    context.addUser(res.data.results.info)
                    localStorage.setItem('token', res.data.results.token);
                }
                if (res.data.status == "NG") {
                    console.log("Saiiiiiiiiiiiiiiiiiiiii")
                }
                //console.log("login:", res.data.results.info)
            })
            .catch(err => {
                console.log("Err: ", err)
            });
    }
    function log_out() {
        const temp = []
        context.addUser(temp)
        //Xư lý tiếp 
    }

    if (user.length === 0) {
        return (
            <div className="container">
                <div className="container-login">
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
                        <a className="btn-login" onClick={login}>ĐĂNG NHẬP</a>
                    </form>
                </div>
                {/* --------------------------------Đăng ký------------------------------------- */}
                <div className="container-register">
                    <div className="title-register">Register</div>
                    <form className="form-register">
                        <div className="user-register">
                            <div className="input-box">
                                <span className="label-text-register">Họ và tên</span>
                                <input type="text" placeholder="Nhập họ tên" />
                            </div>
                        </div>
                        <div className="user-register">
                            <div className="input-box">
                                <span className="label-text-register">Email</span>
                                <input type="text" placeholder="Nhập email" />
                            </div>
                        </div>
                        <div className="user-register">
                            <div className="input-box">
                                <span className="label-text-register">Số điện thoại</span>
                                <input type="text" placeholder="Nhập số điện thoại" />
                            </div>
                        </div>
                        <div className="user-register">
                            <div className="input-box">
                                <span className="label-text-register">Password</span>
                                <input type="text" placeholder="Nhập nhật khẩu" />
                            </div>
                        </div>
                        <div className="user-register">
                            <div className="input-box">
                                <span className="label-text-register">Confirm password</span>
                                <input type="text" placeholder="Nhập lại nhật khẩu" />
                            </div>
                        </div>
                        <a className="btn-register">ĐĂNG KÝ</a>
                    </form>
                </div>
            </div>
        )
    } else {
        return (
            <div className="right">
                <div className="info">
                    <h3>Thông tin chi tiết</h3>
                    <div className="info-data">
                        <div className="info-data-detail">
                            <h4>Tên</h4>
                            <p>{user.name}</p>
                        </div>
                        <div className="info-data-detail">
                            <h4>Email</h4>
                            <p>{user.email}</p>
                        </div>
                        <div className="info-data-detail">
                            <h4>Giới tính</h4>
                            <p>{user.gender == 1 ? "Nam" : "Nữ"}</p>
                        </div>
                        <div className="info-data-detail">
                            <h4>Địa chỉ</h4>
                            <p>{user.address}</p>
                        </div>
                        <div className="info-data-detail">
                            <h4>Thay đổi mật khẩu</h4>
                            <p>HERE</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login