import React, { Component } from 'react'
import { DataContext } from '../Context'
import '../css/Payment.css'

export class Payment extends Component {
    static contextType = DataContext;



    render() {
        const { cart, total, user } = this.context;
        //const total = this.context.total;
        //console.log("cart in payment: ", cart)
        return (
            <div className="payment">
                <form className="orderForm">
                    <h2>THÔNG TIN GIAO HÀNG</h2>
                    <div className="">
                        <input type="text" className="form-control" placeholder="HỌ TÊN" value={user.length === 0 ? "" : user.name} />
                        <input type="text" className="form-control" placeholder="Số điện thoại" value={user.length === 0 ? "" : user.phone}/>
                        <input type="text" className="form-control" placeholder="Email" value={user.length === 0 ? "" : user.email}/>
                        <input type="text" className="form-control" placeholder="Địa chỉ" value={user.length === 0 ? "" : user.address}/>
                    </div>
                    <h2>PHƯƠNG THỨC GIAO HÀNG</h2>
                    <div>
                        <input type="radio" className="dbt" value="dbt"/> Giao hàng nhanh
                    </div>
                    <h2>PHƯƠNG THỨC THANH TOÁN</h2>
                    <div className="row-radio-tt">
                        <input type="radio" className="dbt" value="dbt" /> Thanh toán trực tiếp khi giao hàng
                    </div>
                    <div className="row-radio">
                        <input type="radio" className="dbt" value="dbt"/> Thanh toán bằng thẻ quốc tế và nội địa (ATM)
                    </div>
                    <div className="row-radio">
                        <input type="radio" className="dbt" value="dbt"/> Thanh toán bằng ví MoMo
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

export default Payment
