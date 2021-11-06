import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {DataContext} from '../Context'
import '../css/Products.css'


export class Products extends Component {

    static contextType = DataContext;

    render() {
        const {products} = this.context
        return(
            <div id="product">
                {
                    products.map(product => (
                        <div className="card" key={product._id}>
                            <Link to={`/product/${product._id}`}>
                                <img src={process.env.PUBLIC_URL + product.src} />
                                
                            </Link>
                            <div>
                                <h3>
                                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                                </h3>
                                <span>${product.price}</span>
                                <p>{product.Description}</p>
                                {/* <button onClick={() => this.context.addCart(product._id)}>Thêm vào giỏ</button> */}

                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Products