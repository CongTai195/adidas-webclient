import React, { useState, useContext, useEffect } from 'react';
import '../css/Login.css'
import { DataContext } from '../Context';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Verify from '../Verify'
import ForgotPassword from '../page/ForgotPassword'
import Cart from './Cart';


import { Toast } from '../utils'
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

    // ---------------------switch to forgot password-----------------
    const [showForgot, setShowForgot] = useState(false)


    function register() {
        // if (name_regis != "" || email_regis != "" || password_regis != "" ||
        //     address_regis != "" || phone_regis != "") {
        //     if (phone_regis.length == 10) {
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
                    Toast("T???o th??nh c??ng", "#3b741b", 4000)
                }
            })
            .catch(err => {
                if (err.response.data.status == "NG") {
                    const errors = err.response.data.errors

                    for (const [key, val] of Object.entries(errors)) {
                        if (key == "name") {
                            var element = document.getElementById("id-name-register")
                                element.setAttribute("style", "border: 2px solid #e70f0f;")
                        }
                        else if (key == "phone") {
                            if (val == "The phone must be 10 digits.") {
                                Toast("S??? ??i???n tho???i ????? ch??? 10 s???", "#f74747", 4000)
                                var element = document.getElementById("id-email-register")
                                element.setAttribute("style", "border: 2px solid #e70f0f;")
                            }
                            else {
                                var element = document.getElementById("id-phone-register")
                                element.setAttribute("style", "border: 2px solid #e70f0f;")
                            }
                        }
                        else if (key == "address") {
                            var element = document.getElementById("id-address-register")
                            element.setAttribute("style", "border: 2px solid #e70f0f;")
                        }
                        else if (key == "email") {
                            Toast("Email l?? m???t ?????a ch??? email h???p l???", "#f74747", 4000)
                            var element = document.getElementById("id-email-register")
                            element.setAttribute("style", "border: 2px solid #e70f0f;")
                        }
                        else if (key == "password") {
                            var element = document.getElementById("id-password-register")
                            element.setAttribute("style", "border: 2px solid #e70f0f;")
                        }
                    }
                }

            });


    }

    const login = (email, password) => {
        if (email != "" || password != "") {

            const data = { email, password }
            axios.post('login', data)
                .then(res => {
                    if (res.data.status == "OK") {
                        // Ki???m tra ????ng nh???p, add user v??o context, l??u token v??o tr??n localStorage,
                        // ki???m tra xem ng?????i d??ng c?? th??m s???n ph???m n??o v??o gi??? h??ng tr?????c ???? kh??ng
                        // n???u c?? th?? add v??o database v?? rest cart trong context l???i, v?? load l???i gi??? h??ng t??? db
                        // xu???ng r???i add v??o l???i context
                        // N???u kh??ng th?? th?? get cart t??? db xu???ng
                        console.log("Data", res.data.results.info)
                        //console.log("Thanh congggggggggg")
                        context.addUser(res.data.results.info)
                        //console.log("Token", res.data.results.token)
                        localStorage.setItem('token', res.data.results.token)
                        localStorage.setItem('user_local', JSON.stringify({ email: email, password: password }))
                        // localStorage.setItem('user_local', JSON.stringify({
                        //     id: res.data.results.info.id,
                        //     name: res.data.results.info.name,
                        //     email: res.data.results.info.email,
                        //     gender: res.data.results.info.gender,
                        //     address: res.data.results.info.address,
                        //     phone: res.data.results.info.phone,
                        //     created_at: res.data.results.info.created_at,
                        //     updated_ad: res.data.results.info.updated_ad,
                        // }));
                        if (cart.length != 0) {
                            if (window.confirm("B???n c?? mu???n th??m c??c s???n ph???m ???? ch???n tr?????c ???? v??o gi??? h??ng kh??ng. " + res.data.results.info.name)) {
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
                    // alert("????ng nh???p kh??ng thanh c??ng. Vui l??ng th??? l???i m???t kh???u ho???c email")
                    Toast("????ng nh???p kh??ng th??nh c??ng. Vui l??ng th??? l???i m???t kh???u ho???c email", "#f74747", 4000)
                    console.log("Err: ", err)
                });
        } else {
            if (email == "")
                Toast("Vui l??ng nh???p Email", "#f74747", 4000)
            else
                Toast("Vui l??ng nh???p Password", "#f74747", 4000)
        }
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
                    // localStorage.clear()
                    localStorage.setItem('token', "")
                    localStorage.setItem('user_local', "")
                    Toast("????ng xu???t th??nh c??ng", "#3b741b", 4000)
                    setEmail("")
                    setPassword("")
                }
            })
            .catch(() => {
                //alert("????ng xu???t kh??ng th??nh c??ng.")
                //console.log("Err: ", err)
                Toast("????ng xu???t kh??ng th??nh c??ng", "#f74747", 4000)
            });
    }

    useEffect(() => {
        // const data = JSON.parse(localStorage.getItem('user_local'))
        // //console.log("dataa", data)
        // const user = context.user
        // if (data !== null && user.length === 0) {
        //     if (data.email != "", data.password != "") {
        //         const email_local = data.email
        //         const password_local = data.password
        //         //console.log("Da luu tai khoan| email: ", data.email," type: ", typeof(data.email) ," | password: ", data.password, " type: ", typeof(data.password))
        //         {login(email_local, password_local)}
        //     }
        // }
    })

    if (user.length !== 0) {
        return (
            <div className="right">
                <div className="info">
                    <h3>Th??ng tin chi ti???t</h3>
                    <div className="info-data">
                        <div className="info-data-detail">
                            <h4>T??n:</h4>
                            <p >{user.name}</p>
                        </div>
                        <div className="info-data-detail">
                            <h4>Email:</h4>
                            <p>{user.email}</p>
                        </div>
                        <div className="info-data-detail">
                            <h4>Gi???i t??nh:</h4>
                            <p>{user.gender == 1 ? "Nam" : "N???"}</p>
                        </div>
                        <div className="info-data-detail">
                            <h4>?????a ch???:</h4>
                            <p>{user.address}</p>
                        </div>
                        <button className="info-data-btn-logout" onClick={logout}>????ng xu???t</button>
                    </div>
                </div>
            </div>
        )
    } else {

        return (
            <div className="container">
                {isActive_login ? (
                    <div className="container-login">
                        <form className="form-login">
                            <h1 className="label-login">????NG NH???P</h1>
                            <div className="form-text">
                                <input type="text" placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)} className="formcontrol" required />
                            </div>
                            <div className="form-text">
                                <input type="password" placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)} className="formcontrol1" required />
                            </div>
                            <div className="btn-submit">
                                <a className="btn-login" onClick={() => login(email, password)}>????NG NH???P</a>
                                {/* <a className="btn-login" onClick={() => Toast("????ng xu???t th??nh c??ng", "#f74747", 5000)}>????NG NH???P</a> */}
                                <a className="btn-forget-password" onClick={() => setShowForgot(!showForgot)}>Qu??n m???t kh???u</a>
                            </div>

                        </form>
                        <ForgotPassword showForgot={showForgot} setShowForgot={setShowForgot} email={email} />

                    </div>
                ) : (
                    <div className="container-login-1">
                        <h2>????NG NH???P</h2>
                        <p className="container-login-1-label">H??y ????ng nh???p v?? tr???i nghi???m n??o</p>
                        <a className="btn-login" onClick={(e) => { setIsActive_register(!isActive_register), setIsActive_login(!isActive_login) }}>????NG NH???P</a>

                    </div>

                )}

                {/* --------------------------------????ng k??------------------------------------- */}

                <div className="container-register">
                    {isActive_register ? (
                        <div className="title-register">
                            <h2>REGISTER</h2>
                            <form className="form-register">
                                <div className="user-register">
                                    <div className="input-box">
                                        <span className="label-text-register">H??? v?? t??n</span>
                                        <input id="id-name-register" type="text" placeholder="Nh???p h??? t??n" className="form-register-control"
                                            style={name_regis != "" ? {border: '2px solid rgb(44, 42, 42)'} : null}
                                            onChange={(e) => setName_regis(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="user-register">
                                    <div className="input-box">
                                        <span className="label-text-register">S??? ??i???n tho???i</span>
                                        <input id="id-phone-register" type="text" placeholder="Nh???p s??? ??i???n tho???i" className="form-register-control"
                                            style={phone_regis != "" ? {border: '2px solid rgb(44, 42, 42)'} : null}
                                            onChange={(e) => setPhone_regis(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="user-register">
                                    <div className="input-radio-box">
                                        <span className="label-text-register">Gi???i t??nh</span>
                                        <input type="radio" className="register_radio" name="gender"
                                            onChange={(e) => setGender_regis(e.target.value)}
                                            value={1} />Nam
                                        <input type="radio" className="register_radio" name="gender"
                                            onChange={(e) => setGender_regis(e.target.value)}
                                            value={0} />N???
                                    </div>
                                </div>
                                <div className="user-register">
                                    <div className="input-box">
                                        <span className="label-text-register">?????a ch???</span>
                                        <input id="id-address-register" type="text" placeholder="Nh???p ?????a ch???" className="form-register-control"
                                            style={address_regis != "" ? {border: '2px solid rgb(44, 42, 42)'} : null}
                                            onChange={(e) => setAddress_regis(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="user-register">
                                    <div className="input-box">
                                        <span className="label-text-register">Chi ti???t ????ng nh???p</span>
                                        <input id="id-email-register" type="text" placeholder="Nh???p email" className="form-register-control"
                                            style={email_regis != "" ? {border: '2px solid rgb(44, 42, 42)'} : null}
                                            onChange={(e) => setEmail_regis(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="user-register">
                                    <div className="input-box">
                                        <span className="label-text-register">Password</span>
                                        <input id="id-password-register" type="password" placeholder="Nh???p nh???t kh???u" className="form-register-control"
                                            style={password_regis != "" ? {border: '2px solid rgb(44, 42, 42)'} : null}
                                            onChange={(e) => setPassword_regis(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <a className="btn-register" onClick={register}>????NG K??</a>
                            </form>
                            <Verify id={id_Verify} showVerify={show_Verify} setShow_Verify={setShow_Verify} setIsActive_login={setIsActive_login} setIsActive_register={setIsActive_register} setShowForgot={setShowForgot}/>
                        </div>
                    ) : (
                        <div className="title-register-2">
                            <h2>T???O M???T T??I KHO???N</h2>
                            <p className="title-register-2-lis-label-1">Th???t d??? d??ng t???o m???t t??i kho???n. H??y nh???p ?????a ch??? email c???a b???n v?? ??i???n v??o m???u tr??n trang ti???p theo v?? t???n h?????ng nh???ng l???i ??ch c???a vi???c s??? h???u m???t t??i kho???n.</p>
                            <div className="title-register-2-lis-label-2">
                                <div className="title-register-2-lis-label-2-chil">
                                    <img src={Icon_done} alt="" width="25" />
                                    <p>T???ng quan ????n gi???n v??? th??ng tin c?? nh??n c???a b???n</p>
                                </div>
                                <div className="title-register-2-lis-label-2-chil">
                                    <img src={Icon_done} alt="" width="25" />
                                    <p>Thanh to??n nhanh h??n</p>
                                </div>
                                <div className="title-register-2-lis-label-2-chil">
                                    <img src={Icon_done} alt="" width="25" />
                                    <p>M???t l???n ????ng nh???p chung duy nh???t ????? t????ng t??c v???i c??c s???n ph???m v?? d???ch v??? c???a adidas</p>
                                </div>
                                <div className="title-register-2-lis-label-2-chil">
                                    <img src={Icon_done} alt="" width="25" />
                                    <p>??u ????i v?? khuy???n m??i ?????c quy???n</p>
                                </div>
                                <div className="title-register-2-lis-label-2-chil">
                                    <img src={Icon_done} alt="" width="25" />
                                    <p>C??c s???n ph???m m???i nh???t</p>
                                </div>
                                <div className="title-register-2-lis-label-2-chil">
                                    <img src={Icon_done} alt="" width="25" />
                                    <p>C??c b??? s??u t???p gi???i h???n v?? b??? s??u t???p theo m??a m???i</p>
                                </div>
                                <div className="title-register-2-lis-label-2-chil">
                                    <img src={Icon_done} alt="" width="25" />
                                    <p>C??c s??? ki???n s???p t???i</p>
                                </div>
                            </div>
                            <a className="btn-register" onClick={(e) => { setIsActive_register(!isActive_register), setIsActive_login(!isActive_login) }}>????NG K??</a>
                        </div>
                    )}

                </div>
            </div>
        )

    }
}

export default Login