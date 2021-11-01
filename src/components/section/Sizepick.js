import React, { Component } from 'react'

export class Sizepick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            selected: ""
        };
    }
    render() {
        const { size } = this.props;

        return (
            <div className="dropdown">
                <div className="dropdown-btn" onClick={() => this.setState({isActive: !this.state.isActive})}>
                    {this.state.selected}</div>
                {this.state.isActive && (
                    <div className="dropdown-content">
                    {
                        size.map((size) => (
                            <button className="button-item"
                            onClick={() => this.setState({isActive: !this.state.isActive}, size = this.state.selected)} key={size}>{size}</button>
                        ))
                    }
                </div>
                )}
                
            </div>
        )
    }
}


export default Sizepick


// import React, { Component, useState } from 'react';

// function Sizepick() {
//         const {size} = this.props;
//         const [isActive, setIsActive] = useState(false);
//         return (
//             <div className="dropdown">
//                 <div className="dropdown-btn" onClick={e => setIsActive(!isActive) }>
//                     Choose Size</div>
//                 {isActive && (
//                     <div className="dropdown-content">
//                         {}
//                         <div onClick={e => setSelected(e.target.textContent)}
//                         className="dropdown-item">1</div>
//                     </div>
//                 )}
//             </div>

//         )
//     }

// export default Sizepick