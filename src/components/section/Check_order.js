import React, { Component } from 'react'
import { DataContext } from '../Context'
import axios from 'axios'
import iconCheck_Ok from '../img/check-ok-30.png'
import StarRating from './StarRating'
import { Toast } from '../utils'
import '../css/Check_order.css'

export class Check_order extends Component {
    static contextType = DataContext
    state = {
        transactions: [],
        orders: [],
        isActives: [],
        showRating: false,
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
                // console.log("Data transaction: ", res.data.results)
                const temp_orders = []
                const temp_isActive = []
                for (const [key, value] of Object.entries(res.data.results)) {
                    var temp_obj = {}
                    for (const [key1, value1] of Object.entries(value)) {
                        if (key1 == "orders") {
                            temp_orders.push(value1)
                            //console.log("temp_orders: ", value1)
                            temp_obj.isActive = false
                            temp_isActive.push(temp_obj)
                        }
                    }

                }

                this.setState({
                    transactions: res.data.results, orders: temp_orders, isActives: temp_isActive,
                });
            }).catch(err => {
                console.log("Err: ", err)
            });
    }
    cance_order(id) {
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
                //alert("H???y ????n th??nh c??ng")
                Toast("H???y ????n th??nh c??ng", "#3b741b", 4000)
            }).catch(err => {
                console.log("Loi huy don hang", err)
                //alert("H???y ????n th???t b???i")
                Toast("H???y ????n th???t b???i", "#f74747", 4000)
                
            });
    }
    // -------------------star rating------------
    openRatingStars = () => {
        const show = this.state.showRating
        this.setState({ showRating: !show })
    }
    //---------------------------------------
    //------------------check login -------------
    login_inPayment = (email, password) => {
        const data = { email, password }
        axios.post('login', data)
            .then(res => {
                if (res.data.status == "OK") {
                    console.log("Data login in payment", res.data.results.info)
                    //console.log("Thanh congggggggggg")
                    this.context.addUser(res.data.results.info)
                    //console.log("Token", res.data.results.token)
                    localStorage.setItem('token', res.data.results.token)
                    localStorage.setItem('user_local', JSON.stringify({ email: email, password: password }))
                }
            })
            .catch((err) => {
                console.log("Err login in payment", err)
            });

    }
    check_login = (email, pass, token) => {
        if (token != "" && email != "" && pass != "") {
            this.login_inPayment(email, pass)
        }
    }
    //--------------------------------------

    componentDidMount() {
        const token_user = localStorage.getItem('token')
        if(token_user != ""){
            const user_local = JSON.parse(localStorage.getItem('user_local'))
            if(user_local.email != "" && user_local.password != ""){
                this.check_login(user_local.email, user_local.password, token_user)
            }
        }
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
                        <h2 className="check-order-signup-col-label">T??M KI???M ????N H??NG</h2>
                        <form>
                            <div className="check-order-formfield">
                                <input type="text" className="check-order-form-control" placeholder="M?? ????n h??ng" />
                                <input type="text" className="check-order-form-control" placeholder="S??? ??i???n tho???i" />
                                <button className="check-order-signup-btn-search">T??M KI???M ????N</button>
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
                    <h2>????n h??ng c???a tui</h2>
                    {
                        transactions.map((item, index) => (

                            <div className="check-order-user-container-row" key={index} >
                                <div onClick={() => this.setIsActive(index)}>
                                    <div className="check-order-user-container-main-row-1">
                                        <img className="check-order-row-1-icon" src={iconCheck_Ok} alt="" />
                                        {/* {
                                        item.status == 1 ? <p className="check-order-row-1-status-time" style={{color: '#383737'}}>???? ch???t ????n</p> :
                                        item.status == 2 ? <p className="check-order-row-1-status-time" style={{color: '#383737'}}>??ang giao h??ng</p> :
                                        item.status == 3 ? <p className="check-order-row-1-status-time" style={{color: '#383737'}}>Giao h??ng th??nh c??ng</p> :
                                        <p className="check-order-row-1-status-time" style={{color: '#CF3232'}}>???? h???y ????n</p>
                                    } */}
                                        <p className="check-order-row-1-status-time" style={item.status == 0 ? { color: '#F80000' } : item.status == 2 ? { color: '#C99A1A' } : item.status == 3 ? { color: '#25AA19' } : { color: '#383737' }}>
                                            {item.status == 1 ? "???? ch???t ????n" :// mau vang dang giao hang : #FDFD02, #C99A1A} , giao thanh cong #25AA19
                                                item.status == 2 ? "??ang giao h??ng" :
                                                    item.status == 3 ? "Giao h??ng th??nh c??ng" : "???? h???y ????n"}{" || " + (item.created_at).slice(0, 10)}
                                        </p>
                                    </div>


                                    <div className="check-order-user-container-main-row-2">
                                        <p>
                                            {item.user_address}
                                        </p>
                                    </div>
                                    <div className="check-order-user-container-main-row-3">
                                        <p className="check-order-row-1-amount-coundorder">
                                            {(item.amount).toLocaleString('vi-VN') + " VN??"}{" || " + orders[index].length + " M??n"}
                                        </p>
                                    </div>
                                </div>
                                <div className="check-order-user-container-main-row-4">
                                    {item.status == 1 ? <div><button className="check-order-row-1-btn-canceorder"
                                        onClick={() => { this.cance_order(item.id) }}
                                    >H???y ????n h??ng</button><hr /> </div> : <hr />}
                                </div>
                                {isActives[index].isActive && (
                                    <div className="check-order-user-detail-container">
                                        <h3 className="check-order-user-detail-container-lable-details">Th??ng tin ????n h??ng</h3>
                                        <div className="check-order-user-detail-container-row-1">
                                            <p className="check-order-user-detail-container-lable">Th??ng tin giao nh???n</p>
                                            <div className="check-order-user-detail-container-row-1-1">
                                                <p>H??? t??n: {item.user_name}</p>
                                                <p>S??? ??i???n tho???i: {item.user_phone}</p>
                                                <p>Email: {item.user_email}</p>
                                                <p>?????a ch???: {item.user_address}</p>
                                            </div>
                                            <p className="check-order-user-detail-container-lable">Ph????ng th???c giao h??ng</p>
                                            <div className="check-order-user-detail-container-row-1-1">
                                                <p>{item.shipping}</p>
                                            </div>
                                            <p className="check-order-user-detail-container-lable">H??nh th???c thanh to??n</p>
                                            <div className="check-order-user-detail-container-row-1-1">
                                                <p>{item.payment}</p>
                                            </div>
                                        </div>
                                        <hr />

                                        <h3 className="check-order-user-detail-container-lable-details">Danh s??ch s???n ph???m</h3>
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
                                                                <h3 className="check-order-user-detail-detail-product-box-price">{(product.product.price).toLocaleString('vi-VN')}VN??</h3>
                                                            </div>
                                                            <div className="check-order-user-detail-detail-product-box-row-1">
                                                                <p>SIZE: {product.size}</p>
                                                                <p>S??? L?????NG: {product.quantity}</p>
                                                            </div>
                                                        </div>
                                                        {
                                                            item.status == 3  && product.is_comment == 0? 
                                                            <div className="check-order-user-container-main-row-4">
                                                                <div className="detail-user-commentfor-products-row">
                                                                    <p className="detail-user-commentfor-products-user-ratingstars"
                                                                        onClick={() => this.openRatingStars()}>Ph???n h???i...</p>
                                                                    <StarRating showRating={this.state.showRating} setShowRating={this.openRatingStars} order_id={product.id} id_product={product.product.id} callback_getTransactions={this.getListTransaction} />
                                                                </div>
                                                            </div> : null
                                                        }
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <hr />

                                        <h3 className="check-order-user-detail-container-lable-details">Thanh to??n</h3>
                                        <div className="check-order-user-detail-container-row-3">
                                            <p className="check-order-user-detail-container-lable-amount">T???ng ti???n: {(item.amount).toLocaleString('vi-VN')} VN??</p>
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
