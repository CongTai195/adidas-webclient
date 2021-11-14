import React, { Component } from 'react'
import { DataContext } from '../Context'
import '../css/Payment.css'

export class Payment extends Component {
    static contextType = DataContext;

    state = {
        user_name: "",
        user_email: "",
        user_address: "",
        user_phone: "",
        payment: "",
        shipping: "",

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
    payment_product = () => {

    }

    render() {
        const { cart, total, user } = this.context;
        //const total = this.context.total;
        //console.log("cart in payment: ", cart)
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
                            <input type="radio" className="dbt" value="dbt" /> Giao hàng nhanh
                        </div>
                        <h2>PHƯƠNG THỨC THANH TOÁN</h2>
                        <div className="row-radio-tt">
                            <input type="radio" className="dbt" value="dbt" /> Thanh toán trực tiếp khi giao hàng
                        </div>
                        <div className="row-radio">
                            <input type="radio" className="dbt" value="dbt" /> Thanh toán bằng thẻ quốc tế và nội địa (ATM)
                        </div>
                        <div className="row-radio">
                            <input type="radio" className="dbt" value="dbt" /> Thanh toán bằng ví MoMo
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
                            <button type="submit" className="btn btn-primary">HOÀN TẤT ĐẶT HÀNG</button>
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
                            <input type="text" className="form-control" placeholder="HỌ TÊN" value={user.name} />
                            <input type="text" className="form-control" placeholder="Số điện thoại" value={user.phone} />
                            <input type="text" className="form-control" placeholder="Email" value={user.email} />
                            <input type="text" className="form-control" placeholder="Địa chỉ" value={user.address} />
                        </div>
                        <h2>PHƯƠNG THỨC GIAO HÀNG</h2>
                        <div>
                            <input type="radio" className="dbt" value="dbt" /> Giao hàng nhanh
                        </div>
                        <h2>PHƯƠNG THỨC THANH TOÁN</h2>
                        <div className="row-radio-tt">
                            <input type="radio" className="dbt" value="dbt" /> Thanh toán trực tiếp khi giao hàng
                        </div>
                        <div className="row-radio">
                            <input type="radio" className="dbt" value="dbt" /> Thanh toán bằng thẻ quốc tế và nội địa (ATM)
                        </div>
                        <div className="row-radio">
                            <input type="radio" className="dbt" value="dbt" /> Thanh toán bằng ví MoMo
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
                            <button type="submit" className="btn btn-primary">HOÀN TẤT ĐẶT HÀNG</button>
                        </div>
                    </div>

                </div>
            )
        }
    }
}

export default Payment
