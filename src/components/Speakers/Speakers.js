import React from 'react'
import "./Speakers.css"
import {Dataspeakers} from "../Dataforspeakers.js"
import { Autoplay,Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/pagination';

export default function Speakers() {
  return (
    <div className="crspeakers">
 <div className='creative'>
        <h3>        Creative <span>speakers</span>
</h3>
<p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet.

</p>



    </div>
    <div className="container">
    <div className="speakers">

    <Swiper
     breakpoints={{
      0: {
        slidesPerView: 1,
      },
      400:{
        slidesPerView:1,
      },
      639: {
        slidesPerView: 2,
      },
      865:{
        slidesPerView:3
      }
    ,
  900:{
    slidesPerView:3

  },
  1024:{
    slidesPerView:3

  },
  1280:{
    slidesPerView:4

  }
  }}
    
      spaceBetween={50}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
       {Dataspeakers.map(spe=>{
        return(
          <SwiperSlide key={spe.id}>     
             
            <div className="speaker">
<img src={spe.image} alt=" " />
            <div className="text-speaker">
            
            <h4>{spe.title}</h4>
            <p className='spe-desc'>{spe.description}</p>
            </div>
            </div> 
          </SwiperSlide>
        )
    })}
     
    </Swiper>










     
    </div>
    </div>
    </div>
  )
}
