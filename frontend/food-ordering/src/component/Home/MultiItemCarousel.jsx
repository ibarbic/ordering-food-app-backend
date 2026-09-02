import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "./CarouselItem";
import { TopMeals } from "./TopMeals";

const Slider = SliderImport.default || SliderImport;

const MultiItemCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        
    };

    return (
        <div>
        
            <Slider {...settings}>
                {TopMeals.map((item) => (
                    <CarouselItem image = {item.image} title = {item.title}/>
                ))}
            </Slider>
        
        </div>
  )
}

export default MultiItemCarousel