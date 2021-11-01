import React, { Component, useState } from 'react';
import { DataContext } from '../Context';
import { Link } from 'react-router-dom';
import Sizepick from './Sizepick'
import '../css/Details.css'

function chech_click_drop() {
    const [selected, setSelected] = useState("")
}

export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item => {
                return item._id === this.props.match.params.id
            })
            //Goi den setState de cap nhat lai kho luu tru state vi khong the gian truc tiep vao state nhu cac bien thong thuong
            this.setState({product: data})
        }
    };

    componentDidMount(){
        this.getProduct()
    }

    

    render() {
        const {product} = this.state;
        
        return(
            <>
                {
                    product.map(product =>(
                        <div className="details" key={product._id}>
                            <img src={process.env.PUBLIC_URL + product.src} alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{product.title}</h2>
                                    <span>${product.price}</span>
                                </div>
                                <p>{product.Description}</p>
                                <p>{product.Content}</p>
                                <p>{
                                    product.count
                                }</p>
                                <p>Size</p>
                                <Sizepick size={product.size} />
                                <Link to="/cart" className="cart">
                                    Thêm vào giỏ
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Details