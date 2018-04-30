import React from 'react';
import Slider from 'react-slick';


const settings = {
    arrows:false,
    dots:false,
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidestoScroll:1

}

//slides is in props.slides, can use {slides} to access directly
const generateSlides = ({slides}) => {
    if(slides) {
        return(
            <Slider {...settings}>
                {slides.map((item)=>{
                    return(
                        <div key={item.id} className="no-style">
                            <div className="item_slider" style={{background:`url(/images/covers/${item.cover})`}}>
                                <div className="caption">
                                    <h4>{item.topic}</h4>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        )
    }
}

// props here is the data that we're going to put into the slider
const Featured = (props) => {
    console.log(props)
    console.log

    return(
        <div>
            {generateSlides(props)}
        </div>
    )
}

export default Featured;
