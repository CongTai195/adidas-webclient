import React from 'react'

function Rating(props) {
    const value = props.value
    const val_width = props.val_width

    function getStars(value) {
        const stars = []
        const [whole, part] = (parseFloat(value).toFixed(1)).toString().split(".");
        if(parseInt(whole) != 0){
            for (let i = 0; i < whole; i++) stars.push(100);
        }
        else{
            for (let i = 0; i < 5; i++) stars.push(0);
        }
        if (parseInt(part)) {
            stars.push(parseInt(part) * 10)
        }
        if (stars.length < 5) {
            for (let i = 0; i < 5 - stars.length; i++) stars.push(i*0);
        }
        return stars
    }

    return (
        <div>
            {
                getStars(value).map((value, index) => (
                    //process.env.PUBLIC_URL +
                    //window.location.origin +
                    <img key={index} src={process.env.PUBLIC_URL + `/img/star_png/star_${value}.png`} width={val_width} />
                ))
            }
        </div>
    )

}

export default Rating
