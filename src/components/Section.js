import React, { Component } from 'react';
import Products from './section/Products';
import Details from './section/Details';
import Login from './section/Login';
import {Route} from "react-router-dom"


export class Section extends Component {
    render() {
        return(
            <section>
                <Route path="/product" component={Products} exact/>
                <Route path="/product/:id" component={Details}/>
                <Route path="/login" component={Login}/>
                
            </section>
        )
    }
}

export default Section