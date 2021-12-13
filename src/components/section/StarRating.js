import React, { Component, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import '../css/StarRating.css'


function StarRating(props) {

    const stars = Array(5).fill(0);
    const showRating = props.showRating

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);

    const handleClick = (value) => {
        setCurrentValue(value)
    }

    const handleMouseOver = (value) => {
        setHoverValue(value)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9",
    }

    const styles = {

    }
    const main = {}
    return (
        <>
            {showRating ?
                <div className="star-rating-container">
                    <div className="star-rating">
                        <p className="star-rating-label">Bình luận</p>
                        <div className="star-rating-selected">
                            {stars.map((_, index) => {
                                return (
                                    <FaStar key={index} size={25}
                                        // style={{
                                        //     marginRight: 3,
                                        //     cursor: "pointer"
                                        // }}
                                        color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                        onClick={() => handleClick(index + 1)}
                                        onMouseOver={() => handleMouseOver(index + 1)}
                                        onMouseLeave={handleMouseLeave}>
                                    </FaStar>
                                )
                            })}
                        </div>
                        <textarea className="star-rating-comment-user" placeholder="What's your feedback">

                        </textarea>
                        <button className="star-rating-button-submit" >Submit</button>
                        <p className="close-star-rating" onClick={() => props.setShowRating()}>X</p>
                    </div>

                </div>
                : null}

        </>
    )

}

export default StarRating

