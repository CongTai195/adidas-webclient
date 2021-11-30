import React, { Component } from 'react'
import { DataContext } from '../Context'
import axios from 'axios'
import iconCheck_Ok from '../img/check-ok-30.png'
import '../css/Check_order.css'

export class Check_order extends Component {
    static contextType = DataContext
    state = {
        transactions: [],
        orders: [],
        isActives: [],

    }
    setIsActive(index) {
        const isActives = this.state.isActives
        const setIsActive = isActives[index].isActive
        isActives[index].isActive = !setIsActive
        this.setState({ isActives: isActives })
        //console.log("here: ", this.state.isActives)
    }
    getListTransaction = () => {
        const user = this.context.user
        // const id = user.id

        const authAxios = axios.create({
            baseURL: axios.baseURL, //"https://shop-adidas.herokuapp.com/api/",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },

        });
        authAxios.get('transaction')
            .then(res => {
                console.log("Data transaction: ", res.data.results)
                const temp_orders = []
                const temp_isActive = []
                for (const [key, value] of Object.entries(res.data.results)) {
                    var temp_obj = {}
                    for (const [key1, value1] of Object.entries(value)) {
                        if (key1 == "orders") {
                            temp_orders.push(value1)
                            temp_obj.isActive = false
                            temp_isActive.push(temp_obj)
                        }
                    }

                }

                this.setState({
                    transactions: res.data.results, orders: temp_orders, isActives: temp_isActive,
                });
                console.log("Orders:  ", this.state.orders)
                //console.log("data: ", res.data.results)
            }).catch(err => {
                console.log("Err: ", err)
            });
    }
    cance_order(id){
        const data = { status: 0 }
        const authAxios = axios.create({
            baseURL: axios.baseURL, //"https://shop-adidas.herokuapp.com/api/",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },

        });
        authAxios.put('transaction/' + id, data)
            .then(res => {
                this.getListTransaction()
                console.log("Huy don thanh cong")
            }).catch(err => {
                console.log("Loi huy don hang", err)
            });
    }
    componentDidMount() {
        this.getListTransaction()
    }

    render() {
        const user = this.context.user
        const transactions = this.state.transactions
        const orders = this.state.orders
        const isActives = this.state.isActives
        // khi nguoi dung ko dang nhap
        if (user.length == 0) {
            return (
                <div className="check-order-signup">
                    <div className="check-order-signup-col">
                        <h2 className="check-order-signup-col-label">TÌM KIẾM ĐƠN HÀNG</h2>
                        <form>
                            <div className="check-order-formfield">
                                <input type="text" className="check-order-form-control" placeholder="Mã đơn hàng" />
                                <input type="text" className="check-order-form-control" placeholder="Số điện thoại" />
                                <button className="check-order-signup-btn-search">TÌM KIẾM ĐƠN</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
        //Khi nguoi dung dang nhap
        else {
            return (
                <div className="check-order-user-container">
                    <h2>Đơn hàng của tui</h2>
                    {
                        transactions.map((item, index) => (

                            <div className="check-order-user-container-row" key={index} onClick={() => this.setIsActive(index)}>
                                <div className="check-order-user-container-main-row-1">
                                    <img className="check-order-row-1-icon" src={iconCheck_Ok} alt="" />
                                    {/* {
                                        item.status == 1 ? <p className="check-order-row-1-status-time" style={{color: '#383737'}}>Đã chốt đơn</p> :
                                        item.status == 2 ? <p className="check-order-row-1-status-time" style={{color: '#383737'}}>Đang giao hàng</p> :
                                        item.status == 3 ? <p className="check-order-row-1-status-time" style={{color: '#383737'}}>Giao hàng thành công</p> :
                                        <p className="check-order-row-1-status-time" style={{color: '#CF3232'}}>Đã hủy đơn</p>
                                    } */}
                                    <p className="check-order-row-1-status-time" style={item.status == 0? {color: '#F80000'} : item.status == 2 ? {color: '#C99A1A'} : item.status == 3 ? {color: '#25AA19'} : {color: '#383737'}}>
                                        {item.status == 1 ? "Đã chốt đơn" :// mau vang dang giao hang : #FDFD02, #C99A1A} , giao thanh cong #25AA19
                                            item.status == 2 ? "Đang giao hàng" :
                                                item.status == 3 ? "Giao hàng thành công" : "Đã hủy đơn"}{" || " + (item.created_at).slice(0, 10)}
                                    </p>
                                </div>


                                <div className="check-order-user-container-main-row-2">
                                    <p>
                                        {item.user_address}
                                    </p>
                                </div>
                                <div className="check-order-user-container-main-row-3">
                                    <p className="check-order-row-1-amount-coundorder">
                                        {(item.amount).toLocaleString('vi-VN') + " VNĐ"}{" || " + orders[index].length + " Món"}
                                    </p>
                                </div>
                                <div className="check-order-user-container-main-row-4">
                                    {item.status == 1 ? <div><button className="check-order-row-1-btn-canceorder"
                                        onClick={() => {this.cance_order(item.id)}}
                                    >Hủy đơn hàng</button><hr /> </div> : <hr />}
                                </div>
                                {isActives[index].isActive && (
                                    <div className="check-order-user-detail-container">
                                        <h3 className="check-order-user-detail-container-lable-details">Thông tin đơn hàng</h3>
                                        <div className="check-order-user-detail-container-row-1">
                                            <p className="check-order-user-detail-container-lable">Thông tin giao nhận</p>
                                            <div className="check-order-user-detail-container-row-1-1">
                                                <p>Họ tên: {item.user_name}</p>
                                                <p>Số điện thoại: {item.user_phone}</p>
                                                <p>Email: {item.user_email}</p>
                                                <p>Địa chỉ: {item.user_address}</p>
                                            </div>
                                            <p className="check-order-user-detail-container-lable">Phương thức giao hàng</p>
                                            <div className="check-order-user-detail-container-row-1-1">
                                                <p>{item.shipping}</p>
                                            </div>
                                            <p className="check-order-user-detail-container-lable">Hình thức thanh toán</p>
                                            <div className="check-order-user-detail-container-row-1-1">
                                                <p>{item.payment}</p>
                                            </div>
                                        </div>
                                        <hr />

                                        <h3 className="check-order-user-detail-container-lable-details">Danh sách sản phẩm</h3>
                                        <div className="check-order-user-detail-container-row-2">
                                            <div className="check-order-user-detail-list-product">
                                                {orders[index].map((product, i) => (
                                                    <div className="check-order-user-detail-detail-product" key={i}>
                                                        <div>
                                                            <img className="check-order-user-detail-detail-product-img" src={product.product.image} alt="" />
                                                        </div>

                                                        <div className="check-order-user-detail-detail-product-box">
                                                            <div className="check-order-user-detail-detail-product-box-row">
                                                                <h3>{product.product.name}</h3>
                                                                <h3 className="check-order-user-detail-detail-product-box-price">{(product.product.price).toLocaleString('vi-VN')}VNĐ</h3>
                                                            </div>
                                                            <div className="check-order-user-detail-detail-product-box-row-1">
                                                                <p>SIZE: {product.size}</p>
                                                                <p>SỐ LƯỢNG: {product.quantity}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <hr />

                                        <h3 className="check-order-user-detail-container-lable-details">Thanh toán</h3>
                                        <div className="check-order-user-detail-container-row-3">
                                            <p className="check-order-user-detail-container-lable-amount">Tổng tiền: {(item.amount).toLocaleString('vi-VN')} VNĐ</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    }
                </div>
            )
        }
    }
}

export default Check_order
