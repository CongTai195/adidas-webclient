import React, { Component } from 'react'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'
import Sizepick from './Sizepick'
import '../css/Details.css'

export class Cart extends Component {
    static contextType = DataContext;

    render() {
        const { cart, removeProduct } = this.context;
        if (cart.length === 0) {
            return <h2 style={{ textAlign: "center" }}>Giỏ hàng</h2>
        }
        else {
            return (
                <>
                    {
                        cart.map(product => (
                            <div className="details" key={product._id}>
                                <img src={process.env.PUBLIC_URL + product.src} alt="" />
                                <div className="box">
                                    <div className="row">
                                        <h2>{product.title}</h2>
                                        <span>${product.price}</span>
                                    </div>
                                    <p>{product.Description}</p>
                                    <p>{product.Content}</p>
                                    <p>SIZE: {product.size}</p>
                                    <p>Số lượng: {product.count}</p>
                                </div>
                                <div className="delete" onClick={() => removeProduct(product._id)}>X</div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <h3>Tổng tiền: </h3>
                        <Link to="/payment">Thanh toán</Link>
                    </div>
                </>
            )
        }

    }
}

export default Cart

