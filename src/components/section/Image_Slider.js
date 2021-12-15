import React from 'react'
import Slider from 'react-slick';

function Image_Slider(props) {
    const string_image = props.list_image
    const image_list = cutUrl(string_image)
    const imageCallback = props.imageCallback
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        color: "black",
    };
    function cutUrl(string) {
        var list_index = []
        var temp = string
        while (true) {
            var len = temp.length;
            var a = 0
            var b = temp.search(".jpg")
            if (b == -1) {
                break;
            }
            list_index.push(temp.slice(a, b + 4))
            temp = temp.slice(b + 5, len)
        }
        return list_index
    }

    return (
        <div className="image-slider-container">
            <Slider {...settings}>
                {
                    image_list.map((item, index) => (
                        <div className="image-slider-container-colums" key={index} onClick={(e) => { imageCallback(item) }}>
                            <img  className="image-slider-container-img" src={item} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Image_Slider
