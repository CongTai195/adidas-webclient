import React, { Component, useContext, useState } from 'react';
import { DataContext } from '../Context';
import { Link } from 'react-router-dom';
import Sizepick from './Sizepick'
import Colors from './Colors';
import Quantity from './Quantity';
import '../css/Details.css'


export class Details extends Component {
    static contextType = DataContext;
    //useContext(DataContext)
    state = {
        product: [],
        size: [],
        quantity: [],
        select_size: 0,
        select_quantity: 0,
        quantity_afchoo_size: 0
    }

    getProduct = () => {
        if (this.props.match.params.id) {
            const res = this.context.products;
            
            const arr = []
            const obj_temp_quanti = {}
            var temp_size = 0
            const data = res.filter(item => {
                return item.id == this.props.match.params.id
            })
            
            for (const [key, val] of Object.entries(data)) {
                for (const [key1, val1] of Object.entries(val)){
                    if(key1 == "detail_products"){
                        for (const [key2, val2] of Object.entries(val1)){
                            //Vao trong tung item cua list detail_products
                            for (const [key3, val3] of Object.entries(val2)){
                            
                                if(key3 == "size"){
                                    arr.push(val3)
                                    temp_size = val3
                                }
                                if(key3 == "quantity")
                                    obj_temp_quanti[temp_size] = val3
                            }
                        }
                    }
                }
            }
            this.setState({ product: data, size: arr, quantity: obj_temp_quanti })
            //console.log("quanti:  ", this.state.quantity)
        }
    };

    getQuantity = (size) => {
        if(size != 0){
            for (const [key, val] of Object.entries(this.state.quantity)) {
                if(key == size){
                    //console.log("so luong sau khi chon size: ", val)
                    this.setState({quantity_afchoo_size: val})
                    
                    this.setState({select_size: size})
                    //return val
                }
            }
        }
    }
    select_quantity = (quantity) =>{
        if(quantity != 0){
            this.setState({select_quantity: quantity})
        }
    }

    componentDidMount() {
        this.getProduct()
        
        
    }
    // componentDidUpdate(){
    //     this.getQuantity()
    // }
    render() {
        const { product } = this.state;
        //this.getQuantity()
        //console.log("detail: ", this.state.product)
        //console.log("quantity after seleted size: ", this.state.quantity_afchoo_size)
        
        return (
            <>
                {
                    product.map(product => (
                        <div className="details" key={product.id}>
                            <img className="image-details" src={product.image} alt="" />
                            <div className="box">
                                <div className="row">
                                    <h2>{product.name}</h2>
                                    <span>{(product.price).toLocaleString('vi-VN')} VNĐ</span>
                                </div>
                                <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                                <p>{product.description}</p>
                                {/* <p>{product.Content}</p> */}
                                {/* <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p> */}
                                {/* <p>Color: </p> */}
                                {/* <Colors colors={product.colors} /> */}
                                <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                                <div className="row-pick">
                                    <p>SIZE:{this.context.selected_size}</p>
                                    <Sizepick size={this.state.size} sizeCallback={this.getQuantity} >
                                    </Sizepick>
                                    <p>SỐ LƯỢNG</p>
                                    <Quantity quantity={this.state.quantity_afchoo_size} quantityCallback={this.select_quantity}/>
                                </div>

                                <div className="btn_addcart">
                                    <button onClick={() => { this.context.addCart(product.id, this.state.select_size, this.state.select_quantity) }}>Thêm vào giỏ</button>
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