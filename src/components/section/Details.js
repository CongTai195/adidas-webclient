import React, { Component, useState } from 'react';
import { DataContext } from '../Context';
import { Link } from 'react-router-dom';
import Sizepick from './Sizepick'
import Colors from './Colors';
import Quantity from './Quantity';
import '../css/Details.css'


export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: [],
        selectd_size: ""
    }

    getProduct = () => {
        if (this.props.match.params.id) {
            const res = this.context.products;
            const data = res.filter(item => {
                return item._id === this.props.match.params.id
            })
            //Goi den setState de cap nhat lai kho luu tru state vi khong the gian truc tiep vao state nhu cac bien thong thuong
            this.setState({ product: data })
        }
    };

    componentDidMount() {
        this.getProduct()
    }



    render() {
        const { product } = this.state;

        return (
            <>
                {
                    product.map(product => (
                        <div className="details" key={product._id}>
                            <img src={process.env.PUBLIC_URL + product.src} alt="" />
                            <div className="box">
                                <div className="row">
                                    <h2>{product.title}</h2>
                                    <span>${product.price}</span>
                                </div>
                                <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                                <p>{product.Description}</p>
                                <p>{product.Content}</p>
                                <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                                <p>Color: </p>
                                <Colors colors={product.colors} />
                                <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                                <p>SIZE</p>
                                <Sizepick size={product.size} id={product._id}>
                                </Sizepick>
                                <p>Số lượng</p>
                                <Quantity count={product.count} />
                                <div className="btn_addcart">
                                    <button onClick={() => { this.context.addCart(product._id) }}>Thêm vào giỏ</button>
                                </div>
                                {/* <Link onClick={() => this.context.addCart(product._id)} to="/cart" className="cart">
                                    Thêm vào giỏ
                                </Link> */}
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Details