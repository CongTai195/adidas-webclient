import React, { Component } from 'react'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'
import Sizepick from './Sizepick'
//import '../css/Details.css'
import '../css/Cart.css'

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount() {
        this.context.getTotal();
    }

    render() {
        const { cart, removeProduct, total } = this.context;
        if (cart.length === 0) {
            return <h2 style={{ textAlign: "center" }}>Giỏ hàng</h2>
        }
        else {
            return (
                <div className="cart-product">
                    <div className="listcartproduct">
                        <div className="col-product">
                            {
                                cart.map(product => (
                                    <div className="details" key={product.id}>
                                        <div className="row-img">
                                            <img className="cart-product" src={product.image} alt="" />
                                        </div>
                                        <div className="box">
                                            <div className="row">
                                                <h3>{product.name}</h3>
                                                <h3>{(product.price).toLocaleString('vi-VN')}VNĐ</h3>
                                            </div>
                                            <p>{product.Description}</p>
                                            {/* <p>{product.Content}</p> */}
                                            <div className="row-1">
                                                <p>SIZE: {product.size}</p>
                                                <p>SỐ LƯỢNG: {product.quantity}</p>
                                            </div>
                                        </div>
                                        <div className="delete" onClick={() => removeProduct(product.id)}>X</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="total">
                        <div className="row-1">
                            <h3>TẠM TÍNH:</h3>
                            <h3>{total.toLocaleString('vi-VN')} VNĐ</h3>
                        </div>

                        <Link to="/payment" className="btn-primary">Thanh toán</Link>
                    </div>
                </div>
            )
        }

    }
}

export default Cart

