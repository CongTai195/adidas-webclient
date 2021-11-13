import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from '../Context'
import axios from 'axios';
import '../css/Category.css'
import '../css/bootstrap.css'


export class Category extends Component {
    static contextType = DataContext;
    state = {
        products: [],
    }

    componentDidMount() {
        //this.querydb();
        this.getproduct()
    }
    getproduct = () => {
        if (this.props.match.params.id){
            
            this.context.resultProductCategory(this.props.match.params.id)
        }
    }
    querydb = () => {
        //http://127.0.0.1:8000/api/category/10/product
        //http://127.0.0.1:8000/api/product
        const temp = []
        //this.context.addProductsforCate(temp)
        if (this.props.match.params.id) {
            axios.get('category/' + this.props.match.params.id + '/product')
                .then(res => {
                    // console.log("Data: ", res.length)
                    this.setState({
                        products: res.data.results
                    });
                    //this.context.addProductsforCate(res.data.results)
                    //console.log("Data: ", res.data.results)
                }).catch(err => {
                    console.log("Err: ", err)
                });
        }

    }

    render() {
        //this.setState({products: []})
        //const { products } = this.state
        const products = this.context.category_product;
        return (
            <div className="category-products d-flex container" >
                {
                    products.map(product => (
                        <div className="card-product col-3 p-4 " key={product.id}>
                            <Link to={`/product/${product.id}`}>
                                <img className="img-product" src={product.image} />
                            </Link>
                            <div className="content">
                                <Link to={`/product/${product.id}`}>{product.name}</Link>
                                <br></br>
                                <span>{(product.price).toLocaleString('vi-VN')} VNĐ</span>
                                {/* <p>{product.description}</p> */}
                                {/* <button onClick={() => this.context.addCart(product._id)}>Thêm vào giỏ</button> */}

                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Category
