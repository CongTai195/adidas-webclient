import React, { Component } from "react";
import Iconuser from './svg/user-regular.svg'
// import Yourcart from './img/shopping-cart (1).png'
import Logo from './img/bieu-tuong-adidas.jpg'
import { Link } from "react-router-dom";
import { DataContext } from './Context'
import './css/Header.css'

export class Header extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    render() {
        const { toggle } = this.state;
        const { cart } = this.context;
        return (
            <header>
                <div className="header container">
                    <div className="header-menu">
                        <nav>
                            <ul className="menu">
                                <li><Link to="/checkorder">Tra cứu đơn hàng</Link></li>
                                <li>
                                    <div className="icon-cart">

                                        <Link to="/cart">Giỏ hàng</Link>
                                        <span>{cart.length}</span>
                                    </div>
                                </li>
                                <li>
                                    <img src={Iconuser} alt="" width="12" />
                                    <Link to="/login">Đăng nhập</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="navbar-center">
                        <div className="navbar-header-logo">
                            <img src={Logo} alt="" width="100" />
                        </div>
                        <div className="collapse-navbar-collapse">
                            <nav>
                                <ul className="nav navbar">
                                    <li>
                                        <Link to="/product">NAM</Link>
                                        {/* <img src={process.env.PUBLIC_URL + '/giay_nam_01.png'} alt=""/> */}
                                    </li>
                                    <li>
                                        <Link to="/">NỮ</Link>
                                    </li>
                                    {/* <li>
                                        <Link to="/">TRẺ EM</Link>
                                    </li> */}
                                </ul>
                            </nav>
                        </div>
                        <div className="button-search">
                            <img />
                            <input type="text" name="key" className="btn-search" placeholder="Tìm kiếm" />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header