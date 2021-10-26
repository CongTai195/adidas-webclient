import React, { Component } from 'react';
import { DataContext } from '../Context';

export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
        }
        console.log(res)
    }

    render() {
        return(
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}

export default Details