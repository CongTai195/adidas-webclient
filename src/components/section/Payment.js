import React, { Component } from 'react'
import { DataContext } from '../Context'
import '../css/Payment.css'
import axios from 'axios';

export class Payment extends Component {
    static contextType = DataContext;

    state = {
        user_name: "",
        user_email: "",
        user_address: "",
        user_phone: "",
        payment: "",
        shipping: "Giao hàng nhanh",

    }
    componentDidMount() {

    }
    setName = (name) => {
        this.setState({ user_name: name })
    }
    setPhone = (phone) => {
        this.setState({ user_phone: phone })
    }
    setEmail = (email) => {
        this.setState({ user_email: email })
    }
    setAddress = (address) => {
        this.setState({ user_address: address })
    }
    setPayment = (payment) => {
        this.setState({ payment: payment })
    }
    setShipping = (shipping) => {
        this.setState({ shipping: shipping })
    }
    add_Transaction() {
        const cart = this.context.cart
        // 
        var user_name = this.state.user_name
        var user_email = this.state.user_email
        var user_address = this.state.user_address
        var user_phone = this.state.user_phone
        var amount = this.context.total
        var payment = this.state.payment
        var shipping = this.state.shipping
        var products = []
        // 
        for (const [key, val] of Object.entries(cart)) {
            const temp = {}
            //console.log("aaa", val)
            for (const [key1, val1] of Object.entries(val)) {
                if(key1 == "product_id"){
                    temp.id= val1
                }
                if (key1 == "quantity" || key1 == "size") {
                    temp[key1] = val1
                }
            }
            products.push(temp)
        }

        const data = { user_name, user_email, user_address, user_phone, amount, payment, shipping, products }
        return data
    }
    post_transaction = () => {
        const data = this.add_Transaction()
        const user = this.context.user
        const cart = this.context.cart
        console.log("data transaction: ", data)
        if(user.length == 0){
            axios.post('/transaction', data)
            .then(res => {
                if (res.data.status == "OK") {
                    this.context.resetCart(res.data.status)
                    alert("Thanh toán thành công")
                    console.log("post_transaction THANH CONG")
                    
                }
                //console.log("login:", res.data.results.info)
            })
            .catch(err => {
                alert("Thanh toán thất bại")
                console.log("post_transaction THAT BAI", err)
            });
        }
        else{
            //Bearer như là cấp quyền truy cập cho người mang mã thông báo này
            const authAxios = axios.create({
                baseURL: axios.baseURL,//"https://shop-adidas.herokuapp.com/api/",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },

            });
            authAxios.post('/transaction', data)
            .then(res => {
                if (res.data.status == "OK") {
                    for (const [key, val] of Object.entries(cart)) {
                        this.context.delete_cartuser(val.id)
                    }
                    this.context.resetCart(res.data.status)
                    console.log("post_transaction THANH CONG")
                    alert("Thanh toán thành công")
                }
                //console.log("login:", res.data.results.info)
            })
            .catch(err => {
                alert("Thanh toán thất bại")
                console.log("post_transaction THAT BAI", err)
            });
        }
    }

    render() {
        const { cart, total, user } = this.context;
        //const total = this.context.total;
        // console.log("cart in payment: ", cart)
        if (user.length === 0) {
            return (
                <div className="payment">
                    <form className="orderForm">
                        <h2>THÔNG TIN GIAO HÀNG</h2>
                        <div className="">
                            <input type="text" className="form-control" placeholder="HỌ TÊN"
                                onChange={(e) => this.setName(e.target.value)} />
                            <input type="text" className="form-control" placeholder="Số điện thoại"
                                onChange={(e) => this.setPhone(e.target.value)} />
                            <input type="text" className="form-control" placeholder="Email"
                                onChange={(e) => this.setEmail(e.target.value)} />
                            <input type="text" className="form-control" placeholder="Địa chỉ"
                                onChange={(e) => this.setAddress(e.target.value)} />
                        </div>
                        <h2>PHƯƠNG THỨC GIAO HÀNG</h2>
                        <div>
                            <input type="radio" id="shipping-payment" value="Giao hàng nhanh" checked="checked"
                                onChange={(e) => this.setShipping(e.target.value)}
                            /> Giao hàng nhanh
                        </div>
                        <h2>PHƯƠNG THỨC THANH TOÁN</h2>
                        <div className="row-radio-tt">
                            <input type="radio" name="gender" id="payment-direct" value="Thanh toán trực tiếp khi giao hàng"
                                onChange={(e) => this.setPayment(e.target.value)}
                            /> Thanh toán trực tiếp khi giao hàng
                        </div>
                        <div className="row-radio-tt">
                            <input type="radio" name="gender" id="payment-mastercart" value="Thanh toán bằng thẻ quốc tế và nội địa (ATM)"
                                onChange={(e) => this.setPayment(e.target.value)}
                            /> Thanh toán bằng thẻ quốc tế và nội địa (ATM)
                        </div>
                        <div className="row-radio-tt">
                            <input type="radio" name="gender" id="payment-momo" value="Thanh toán bằng ví MoMo"
                                onChange={(e) => this.setPayment(e.target.value)}
                            /> Thanh toán bằng ví MoMo
                        </div>
                    </form>
                    <div className="your-order">
                        <h2>ĐƠN HÀNG</h2>
                        {
                            cart.map(item => (
                                <div className="row">
                                    <div className="row-1">
                                        <p>{item.name}</p>
                                        <p>{(item.price).toLocaleString('vi-VN')} VNĐ</p>
                                    </div>
                                    <div className="row-2">
                                        <p>{item.size}</p>
                                        <p>x {item.quantity}</p>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="row-3">
                            <p>Đơn hàng</p>
                            <p>{total.toLocaleString('vi-VN')} VNĐ</p>
                        </div>
                        <div className="row-4">
                            <p>Giảm </p>
                            <p>- 0 VNĐ</p>
                        </div>
                        <div className="row-5">
                            <p>TỔNG CỘNG</p>
                            <p>{total.toLocaleString('vi-VN')} VNĐ</p>
                        </div>
                        <div>
                            <button className="btn-btn-primary"
                                // this.post_transaction() == true ? restCart : alert("Thanh toán không thành công")
                                onClick={() => { this.post_transaction() }}
                            >HOÀN TẤT ĐẶT HÀNG</button>
                        </div>
                    </div>

                </div>
            )
        } else {
            return (
                <div className="payment">
                    <form className="orderForm">
                        <h2>THÔNG TIN GIAO HÀNG</h2>
                        <div className="">
                            <input type="text" className="form-control" placeholder="HỌ TÊN" value={user.name}
                                onChange={(e) => this.setName(e.target.value)} />
                            <input type="text" className="form-control" placeholder="Số điện thoại" value={user.phone}
                                onChange={(e) => this.setPhone(e.target.value)} />
                            <input type="text" className="form-control" placeholder="Email" value={user.email}
                                onChange={(e) => this.setEmail(e.target.value)} />
                            <input type="text" className="form-control" placeholder="Địa chỉ" value={user.address}
                                onChange={(e) => this.setAddress(e.target.value)} />
                        </div>
                        <h2>PHƯƠNG THỨC GIAO HÀNG</h2>
                        <div>
                            <input type="radio" className="dbt" value="Giao hàng nhanh" checked="checked" 
                                onChange={(e) => this.setShipping(e.target.value)}
                            /> Giao hàng nhanh
                        </div>
                        <h2>PHƯƠNG THỨC THANH TOÁN</h2>
                        <div className="row-radio-tt">
                            <input type="radio" name="gender" className="dbt" value="Thanh toán trực tiếp khi giao hàng" 
                                onChange={(e) => this.setPayment(e.target.value)}
                            /> Thanh toán trực tiếp khi giao hàng
                        </div>
                        <div className="row-radio-tt">
                            <input type="radio" name="gender" className="dbt" value="Thanh toán bằng thẻ quốc tế và nội địa (ATM)" 
                                onChange={(e) => this.setPayment(e.target.value)}
                            /> Thanh toán bằng thẻ quốc tế và nội địa (ATM)
                        </div>
                        <div className="row-radio-tt">
                            <input type="radio" name="gender" className="dbt" value="Thanh toán bằng ví MoMo" 
                                onChange={(e) => this.setPayment(e.target.value)}
                            /> Thanh toán bằng ví MoMo
                        </div>
                    </form>
                    <div className="your-order">
                        <h2>ĐƠN HÀNG</h2>
                        {
                            cart.map((item, index) => (
                                <div className="row" key={index}>
                                    <div className="row-1">
                                        <p>{item.name}</p>
                                        <p>{(item.price).toLocaleString('vi-VN')} VNĐ</p>
                                    </div>
                                    <div className="row-2">
                                        <p>{item.size}</p>
                                        <p>x {item.quantity}</p>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="row-3">
                            <p>Đơn hàng</p>
                            <p>{total.toLocaleString('vi-VN')} VNĐ</p>
                        </div>
                        <div className="row-4">
                            <p>Giảm </p>
                            <p>- 0 VNĐ</p>
                        </div>
                        <div className="row-5">
                            <p>TỔNG CỘNG</p>
                            <p>{total.toLocaleString('vi-VN')} VNĐ</p>
                        </div>
                        <div>
                            <button className="btn-btn-primary"
                                // == true ? this.context.restCart : alert("Thanh toán không thành công")
                                onClick={() => { this.post_transaction() }}
                            >HOÀN TẤT ĐẶT HÀNG</button>
                        </div>
                    </div>

                </div>
            )
        }
    }
}

export default Payment
