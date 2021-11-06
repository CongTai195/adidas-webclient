import React, { useContext, useState } from 'react'
import { DataContext } from '../Context';

function Quantity(props) {
    const context = useContext(DataContext)

    const count = Array.from({length: props.count}, (_, i) => i+1)

    const [isActive, setIsActive] = useState(false);
    const [choose_quantity, setQuantity] = useState("");

    return (
        <div className="quantity-dropdown">
            
            <div className="quantity-dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                {choose_quantity}</div>

            {isActive && (
                <div className="quantity-dropdown-content">
                    {
                        count.map((item) =>(
                            <button className="quantity-button-item"
                                onClick={(e) => {
                                    setIsActive(false);
                                    setQuantity(item);
                                    context.addQuantity(item);
                                }} key={item}>{item}</button>
                        ))
                    }
                </div>

            )}

        </div>
    )

}

export default Quantity