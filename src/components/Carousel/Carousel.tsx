import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import style from "./Carousel.module.scss"
import 'swiper/css';
import 'swiper/css/navigation';
import image1 from "../../assets/carousel/img1.jpg"
import image2 from "../../assets/carousel/img2.jpg"
const Carousel: React.FC = () => {
    return (  
        <section className={style.root}>
            <Swiper
            spaceBetween={-2}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            loop={true}
            speed={1000}
            allowTouchMove={false} // заборонити свайп мишкою
            >
            <SwiperSlide><img src={image1} alt="image1" /></SwiperSlide>
            <SwiperSlide><img src={image2} alt="image1" /></SwiperSlide>
            </Swiper>
        </section>
    );
}
 
export default Carousel;