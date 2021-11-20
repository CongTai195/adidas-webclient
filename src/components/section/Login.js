import React, { Component, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import '../css/Login.css'
import { DataContext } from "../Context";
import axios from 'axios';

//export class Login extends Component {
function Login() {
    const context = useContext(DataContext)
    const user = context.user
    const cart = context.cart

    // -------------login-----------------
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // ---------------register----------------
    const [name_regis, setName_regis] = useState("");
    const [email_regis, setEmail_regis] = useState("");
    const [password_regis, setPassword_regis] = useState("");
    const [gender_regis, setGender_regis] = useState(0);
    const [address_regis, setAddress_regis] = useState("");
    const [phone_regis, setPhone_regis] = useState("");



    function register() {
        if (name_regis != "" || email_regis != "" || password_regis != "" ||
            address_regis != "" || phone_regis != "") {
            if (phone_regis.length == 10) {
                const name = name_regis;
                const email = email_regis;
                const password = password_regis;
                const gender = gender_regis;
                const address = address_regis;
                const phone = phone_regis;

                const data = { name, email, password, gender, address, phone }
                axios.post('register', data)
                    .then(() => {
                        alert("Tạo thành công")
                    })
                    .catch(() => {
                        alert("Tạo không thành công")
                        //console.log("Err: ", err)
                    });
            }
            else{
                alert("Vui lòng nhập đúng số điện thoại")
            }
        } else {
            alert("Vui lòng nhập đầy đủ thông tin")
        }


    }

    function login() {
        //console.warn(email, password)
        const data = { email, password }

        //console.log("login data moi nhap sau khi warn 2:", data)
        axios.post('login', data)
            .then(res => {
                if (res.data.status == "OK") {
                    // Kiểm tra đăng nhập, add user vào context, lưu token vào tròn localStorage,
                    // kiểm tra xem người dùng có thêm sản phẩm nào vào giỏ hàng trước đó không
                    // nếu có thì add vào database và rest cart trong context lại, và load lại giỏ hàng từ db
                    // xuống rồi add vào lại context
                    // Nếu không thì thì get cart từ db xuống
                    console.log("Thanh congggggggggg")
                    context.addUser(res.data.results.info)
                    localStorage.setItem('token', res.data.results.token);



                    if (cart.length != 0) {
                        if (window.confirm("Bạn có muốn thêm các sản phẩm đã chọn trước đó vào giỏ hàng không. " + res.data.results.info.name)) {
                            for (const [, value] of Object.entries(cart)) {
                                const temp = {}
                                temp.user_id = res.data.results.info.id
                                for (const [key1, value1] of Object.entries(value)) {
                                    if (key1 == "id")
                                        temp.product_id = value1
                                    if (key1 == "quantity")
                                        temp.quantity = value1
                                    if (key1 == "size")
                                        temp.size = value1
                                }
                                context.addCartforUser(temp)
                            }
                            context.resetCart(res.data.status)
                            context.getCartuser()
                        }
                        else {
                            context.resetCart(res.data.status)
                            context.getCartuser()
                        }

                    }
                    else {
                        context.getCartuser()
                    }
                }
            })
            .catch(() => {
                alert("Đăng nhập không thanh công. Vui lòng thử lại mật khẩu hoặc email")
                //console.log("Err: ", err)
            });
    }

    if (user.length === 0) {
        return (
            <div className="container">
                <div className="container-login">
                    <form className="form-login">
                        <h1 className="label-login">ĐĂNG NHẬP</h1>
                        <div className="form-text">
                            <input type="text" placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)} className="formcontrol" required />
                        </div>
                        <div className="form-text">
                            <input type="text" placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)} className="formcontrol" required />
                        </div>
                        <a className="btn-login" onClick={login}>ĐĂNG NHẬP</a>
                    </form>
                </div>
                {/* --------------------------------Đăng ký------------------------------------- */}

                <div className="container-register">
                    <div className="title-register">
                        <h2>REGISTER</h2>
                        <form className="form-register">
                            <div className="user-register">
                                <div className="input-box">
                                    <span className="label-text-register">Họ và tên</span>
                                    <input type="text" placeholder="Nhập họ tên" className="form-register-control"
                                        onChange={(e) => setName_regis(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="user-register">
                                <div className="input-box">
                                    <span className="label-text-register">Số điện thoại</span>
                                    <input type="text" placeholder="Nhập số điện thoại" className="form-register-control"
                                        onChange={(e) => setPhone_regis(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="user-register">
                                <div className="input-radio-box">
                                    <span className="label-text-register">Giới tính</span>
                                    <input type="radio" className="register_radio" name="gender"
                                        onChange={(e) => setGender_regis(e.target.value)}
                                        value={1} />Nam
                                    <input type="radio" className="register_radio" name="gender"
                                        onChange={(e) => setGender_regis(e.target.value)}
                                        value={0} />Nữ
                                </div>
                            </div>
                            <div className="user-register">
                                <div className="input-box">
                                    <span className="label-text-register">Địa chỉ</span>
                                    <input type="text" placeholder="Nhập địa chỉ" className="form-register-control"
                                        onChange={(e) => setAddress_regis(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="user-register">
                                <div className="input-box">
                                    <span className="label-text-register">Chi tiết đăng nhập</span>
                                    <input type="text" placeholder="Nhập email" className="form-register-control"
                                        onChange={(e) => setEmail_regis(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="user-register">
                                <div className="input-box">
                                    <span className="label-text-register">Password</span>
                                    <input type="text" placeholder="Nhập nhật khẩu" className="form-register-control"
                                        onChange={(e) => setPassword_regis(e.target.value)}
                                    />
                                </div>
                            </div>
                            <a className="btn-register" onClick={register}>ĐĂNG KÝ</a>
                        </form>
                    </div>
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