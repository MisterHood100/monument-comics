import { useState } from "react";
import "./carousel.css";

const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }

    return (
        <div className="carouselWrapper">
            <div className="carousel">
                <i className="fa-solid fa-circle-arrow-left carouselArrow carouselArrowLeft" onClick={prevSlide}></i>
                {data.map((item, id) => {
                    return (
                        <img src={item.image} alt={item.alt} key={item.id} className={slide === id ? "slide" : "slide slide-hidden"}></img>
                    )
                })}
                <i className="fa-solid fa-circle-arrow-right carouselArrow carouselArrowRight" onClick={nextSlide}></i>
                <span className="carouselIndicators">
                    {data.map((_, id) => {
                        return (
                            <button key={id} onClick={() => setSlide(id)} className={slide === id ? "carouselIndicator" : "carouselIndicator carouselIndicator-inactive"}></button>
                        )
                    })}
                </span>
            </div>
        </div>
    )
}

export default Carousel;