import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode} from "swiper";
import "swiper/css";
import "../../css/RandomImgSlider.css";
export function RandomImgSlider() {

    const img = ['lisa-fotios','cupcake','salmon-rost','lamb-stake','tanduri-chole','chicken-origano','rose-pattle','manchurian','chocolate-moose','potato-soup','sashmi-chicken','italian-cuisine-pizza','burrah-kabab','strawberry-pie','french-fries','kashmiri-kewa','north-pool'];

    return (
        <>
          <Swiper spaceBetween={30} centeredSlides={true} autoplay={{delay:1000, disableOnInteraction: false,}}
                  loop='true'
                  modules={[Autoplay, FreeMode]} className="mySwiper my-slider-home">
            <SwiperSlide className='my-swiper-slider-home'>
              <img src={require(`../../css/images/items/${img[0]}.jpg`)} className="my-img-home" alt={`${img[0]}`}/>
            </SwiperSlide>
            <SwiperSlide className='my-swiper-slider-home'>
              <img src={require(`../../css/images/items/${img[1]}.jpg`)} className="my-img-home" alt={`${img[1]}`}/>
            </SwiperSlide>
          
            <SwiperSlide className='my-swiper-slider-home'>
              <img src={require(`../../css/images/items/${img[2]}.jpg`)} className="my-img-home" alt={`${img[2]}`}/>
            </SwiperSlide>
          
            <SwiperSlide className='my-swiper-slider-home'>
              <img src={require(`../../css/images/items/${img[3]}.jpg`)} className="my-img-home" alt={`${img[3]}`}/>
            </SwiperSlide>
          
            <SwiperSlide className='my-swiper-slider-home'>
              <img src={require(`../../css/images/items/${img[4]}.jpg`)} className="my-img-home" alt={`${img[4]}`}/>
            </SwiperSlide>
          
            <SwiperSlide className='my-swiper-slider-home'>
              <img src={require(`../../css/images/items/${img[5]}.jpg`)} className="my-img-home" alt={`${img[5]}`}/>
            </SwiperSlide>
          
             <SwiperSlide className='my-swiper-slider-home'>
              <img src={require(`../../css/images/items/${img[6]}.jpg`)} className="my-img-home" alt={`${img[6]}`}/>
            </SwiperSlide>
          
            <SwiperSlide className='my-swiper-slider-home'>
              <img src={require(`../../css/images/items/${img[7]}.jpg`)} className="my-img-home" alt={`${img[7]}`}/>
            </SwiperSlide>
          
            <SwiperSlide className='my-swiper-slider-home'>
              <img src={require(`../../css/images/items/${img[8]}.jpg`)} className="my-img-home" alt={`${img[8]}`}/> 
            </SwiperSlide>

            <SwiperSlide className='my-swiper-slider-home'>
              <img src={require(`../../css/images/items/${img[9]}.jpg`)} className="my-img-home" alt={`${img[9]}`}/> 
            </SwiperSlide>

            <SwiperSlide className='my-swiper-slider-home'>
              <img src={require(`../../css/images/items/${img[10]}.jpg`)} className="my-img-home" alt={`${img[10]}`}/>
            </SwiperSlide>
          
            <SwiperSlide className='my-swiper-slider-home'>
              <img src={require(`../../css/images/items/${img[11]}.jpg`)} className="my-img-home" alt={`${img[11]}`}/> 
            </SwiperSlide>

            <SwiperSlide className='my-swiper-slider-home'>
              <img src={require(`../../css/images/items/${img[12]}.jpg`)} className="my-img-home" alt={`${img[12]}`}/> 
            </SwiperSlide>

            <SwiperSlide className='my-swiper-slider-home'>
              <img src={require(`../../css/images/items/${img[13]}.jpg`)} className="my-img-home" alt={`${img[13]}`}/>
            </SwiperSlide>
          
            <SwiperSlide className='my-swiper-slider-home'>
              <img src={require(`../../css/images/items/${img[14]}.jpg`)} className="my-img-home" alt={`${img[14]}`}/> 
            </SwiperSlide>

            <SwiperSlide className='my-swiper-slider-home'>
              <img src={require(`../../css/images/items/${img[15]}.jpg`)} className="my-img-home" alt={`${img[15]}`}/> 
            </SwiperSlide>

            <SwiperSlide className='my-swiper-slider-home'>
              <img src={require(`../../css/images/items/${img[16]}.jpg`)} className="my-img-home" alt={`${img[16]}`}/> 
            </SwiperSlide>

          </Swiper> 
        </>
    );
}
