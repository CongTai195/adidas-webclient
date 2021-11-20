import React, { Component, useContext } from 'react'
import { Link } from 'react-router-dom'
import '../css/List_product.css'
import { DataContext } from '../Context';

function List_products(props) {
    const list_product = props.search_autocomplete;
    return (
        <div className="list-product-container">
            {
                list_product.map((product, index) => (
                    <Link to={`/product/${product.id}`} className="list-product-url">
                        <div className="list-product-container-detail" key={index}>
                            <img className="list-product-container-detail-img" src={product.image} alt="" />
                            <div className="list-product-container-box">
                                <div className="list-product-row">
                                    <h3>{product.name}</h3>
                                    <h3 className="list-product-row-price">{(product.price).toLocaleString('vi-VN')}VNĐ</h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default List_products
