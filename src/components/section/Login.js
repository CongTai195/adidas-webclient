import React, { Component, useState, useContext } from 'react';
import '../css/Login.css'
import { DataContext } from '../Context';
import axios from 'axios';
import Verify from '../Verify'


import Icon_done from '../img/icons8-done-30.png'

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
    // ---------------------switch to form---------------------------
    const [isActive_login, setIsActive_login] = useState(true);
    const [isActive_register, setIsActive_register] = useState(false);
    // ---------------------switch to verify---------------------------
    const [show_Verify, setShow_Verify] = useState(false);
    const [id_Verify, setId_Verify] = useState();


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
                    .then(res => {
                        if (res.data.status == "OK") {
                            console.log("resgister: ", res.data.results)
                            setId_Verify(res.data.results.id)
                            setShow_Verify(!show_Verify)
                            //alert("Tạo thành công")
                        }
                        else {

                        }
                    })
                    .catch(err => {
                        alert("Tạo không thành công")
                        //console.log("Err: ", err)
                    });
            }
            else {
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
                    //console.log("Data", res.data)
                    //console.log("Thanh congggggggggg")
                    context.addUser(res.data.results.info)
                    //console.log("Token", res.data.results.token)
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
            .catch((err) => {
                alert("Đăng nhập không thanh công. Vui lòng thử lại mật khẩu hoặc email")
                console.log("Err: ", err)
            });
    }

    function logout() {
        const authAxios = axios.create({
            baseURL: axios.baseURL,//"https://shop-adidas.herokuapp.com/api/",//http://127.0.0.1:8000/api/
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },

        });
        authAxios.get('logout')
            .then(res => {
                if (res.data.status == "OK") {
                    console.log("Log out hanh congggggggggg")
                    context.resetUser(res.data.status)
                    context.resetCart(res.data.status)
                    localStorage.setItem('token', "");
                    alert("Đăng xuất thành công.")
                }
            })
            .catch(() => {
                alert("Đăng xuất không thành công.")
                //console.log("Err: ", err)
            });
    }

    if (user.length === 0) {
        return (
            <div className="container">
                {isActive_login ? (
                    <div className="container-login">
                        <form className="form-login">
                            <h1 className="label-login">ĐĂNG NHẬP</h1>
                            <div className="form-text">
                                <input type="text" placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)} className="formcontrol" required />
                            </div>
                            <div className="form-text">
                                <input type="password" placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)} className="formcontrol1" required />
                            </div>
                            <div className="btn-submit">
                                <a className="btn-login" onClick={login}>ĐĂNG NHẬP</a>
                                <a className="btn-forget-password">Quên mật khẩu</a>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="container-login-1">
                        <h2>ĐĂNG NHẬP</h2>
                        <p className="container-login-1-label">Hãy đăng nhập và trải nghiệm nào</p>
                        <a className="btn-login" onClick={(e) => { setIsActive_register(!isActive_register), setIsActive_login(!isActive_login) }}>ĐĂNG NHẬP</a>
                    </div>

                )}

                {/* --------------------------------Đăng ký------------------------------------- */}

                <div className="container-register">
                    {isActive_register ? (
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
                            <Verify id={id_Verify} showVerify={show_Verify} setShow_Verify={setShow_Verify} setIsActive_login={setIsActive_login} setIsActive_register={setIsActive_register} />
                        </div>
                    ) : (
                        <div className="title-register-2">
                            <h2>TẠO MỘT TÀI KHOẢN</h2>
                            <p className="title-register-2-lis-label-1">Thật dễ dàng tạo một tài khoản. Hãy nhập địa chỉ email của bạn và điền vào mẫu trên trang tiếp theo và tận hưởng những lợi ích của việc sở hữu một tài khoản.</p>
                            <div className="title-register-2-lis-label-2">
                                <div className="title-register-2-lis-label-2-chil">
                                    <img src={Icon_done} alt="" width="25" />
                                    <p>Tổng quan đơn giản về thông tin cá nhân của bạn</p>
                                </div>
                                <div className="title-register-2-lis-label-2-chil">
                                    <img src={Icon_done} alt="" width="25" />
                                    <p>Thanh toán nhanh hơn</p>
                                </div>
                                <div className="title-register-2-lis-label-2-chil">
                                    <img src={Icon_done} alt="" width="25" />
                                    <p>Một lần đăng nhập chung duy nhất để tương tác với các sản phẩm và dịch vụ của adidas</p>
                                </div>
                                <div className="title-register-2-lis-label-2-chil">
                                    <img src={Icon_done} alt="" width="25" />
                                    <p>Ưu đãi và khuyến mãi độc quyền</p>
                                </div>
                                <div className="title-register-2-lis-label-2-chil">
                                    <img src={Icon_done} alt="" width="25" />
                                    <p>Các sản phẩm mới nhất</p>
                                </div>
                                <div className="title-register-2-lis-label-2-chil">
                                    <img src={Icon_done} alt="" width="25" />
                                    <p>Các bộ sưu tập giới hạn và bộ sưu tập theo mùa mới</p>
                                </div>
                                <div className="title-register-2-lis-label-2-chil">
                                    <img src={Icon_done} alt="" width="25" />
                                    <p>Các sự kiện sắp tới</p>
                                </div>
                            </div>
                            <a className="btn-register" onClick={(e) => { setIsActive_register(!isActive_register), setIsActive_login(!isActive_login) }}>ĐĂNG KÝ</a>
                        </div>
                    )}

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
                            <h4>Tên:</h4>
                            <p >{user.name}</p>
                        </div>
                        <div className="info-data-detail">
                            <h4>Email:</h4>
                            <p>{user.email}</p>
                        </div>
                        <div className="info-data-detail">
                            <h4>Giới tính:</h4>
                            <p>{user.gender == 1 ? "Nam" : "Nữ"}</p>
                        </div>
                        <div className="info-data-detail">
                            <h4>Địa chỉ:</h4>
                            <p>{user.address}</p>
                        </div>
                        <button className="info-data-btn-logout" onClick={logout}>Đăng xuất</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login