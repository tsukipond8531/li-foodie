import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode} from "swiper";
import "swiper/css";
import "../css/RandomImgSlider.css";
export function RandomImgSlider() {

    const img = [];

    return (
        <>
          <Swiper spaceBetween={30} centeredSlides={true} autoplay={{delay:1000, disableOnInteraction: false,}}
                  loop='true'
                  modules={[Autoplay, FreeMode]} className="mySwiper my-slider-home">
            <SwiperSlide className='my-swiper-slider-home'>
              <img src={img[0]} className="my-img-home" alt={`${img[0]}`}/>
            </SwiperSlide>
            <SwiperSlide className='my-swiper-slider-home'>
              <img src={img[1]} className="my-img-home" alt={`${img[1]}`}/>
            </SwiperSlide>
          
            <SwiperSlide className='my-swiper-slider-home'>
              <img src={img[2]} className="my-img-home" alt={`${img[2]}`}/>
            </SwiperSlide>
          
            <SwiperSlide className='my-swiper-slider-home'>
              <img src={img[3]} className="my-img-home" alt={`${img[3]}`}/>
            </SwiperSlide>
          
            <SwiperSlide className='my-swiper-slider-home'>
              <img src={img[4]} className="my-img-home" alt={`${img[4]}`}/>
            </SwiperSlide>
          
            <SwiperSlide className='my-swiper-slider-home'>
              <img src={img[5]} className="my-img-home" alt={`${img[5]}`}/>
            </SwiperSlide>
          
             <SwiperSlide className='my-swiper-slider-home'>
              <img src={img[6]} className="my-img-home" alt={`${img[6]}`}/>
            </SwiperSlide>
          
            <SwiperSlide className='my-swiper-slider-home'>
              <img src={img[7]} className="my-img-home" alt={`${img[7]}`}/>
            </SwiperSlide>
          
            <SwiperSlide className='my-swiper-slider-home'>
              <img src={img[8]} className="my-img-home" alt={`${img[8]}`}/> 
            </SwiperSlide>

            <SwiperSlide className='my-swiper-slider-home'>
              <img src={img[9]} className="my-img-home" alt={`${img[9]}`}/> 
            </SwiperSlide>

            <SwiperSlide className='my-swiper-slider-home'>
              <img src={img[10]} className="my-img-home" alt={`${img[10]}`}/>
            </SwiperSlide>
          
            <SwiperSlide className='my-swiper-slider-home'>
              <img src={img[11]} className="my-img-home" alt={`${img[11]}`}/> 
            </SwiperSlide>

            <SwiperSlide className='my-swiper-slider-home'>
              <img src={img[12]} className="my-img-home" alt={`${img[12]}`}/> 
            </SwiperSlide>

            <SwiperSlide className='my-swiper-slider-home'>
              <img src={img[13]} className="my-img-home" alt={`${img[13]}`}/>
            </SwiperSlide>
          
            <SwiperSlide className='my-swiper-slider-home'>
              <img src={img[14]} className="my-img-home" alt={`${img[14]}`}/> 
            </SwiperSlide>

            <SwiperSlide className='my-swiper-slider-home'>
              <img src={img[15]} className="my-img-home" alt={`${img[15]}`}/> 
            </SwiperSlide>

            <SwiperSlide className='my-swiper-slider-home'>
              <img src={img[16]} className="my-img-home" alt={`${img[16]}`}/> 
            </SwiperSlide>

          </Swiper> 
        </>
    );
}
