import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { MAIN } from './Data';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Autoplay, Navigation, Pagination]);


const MainVisual = ({ word }) => {
    const [idxn, setIdxn] = useState();
    const MS = useRef(null);

    return (
        <section className='MainVisual'>
            <Swiper
                slidesPerView={1}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                // autoplay={{
                //     delay: 3000,
                //     disableOnInteraction: false,
                // }}
                // breakpoints={{
                //     768: {
                //         slidesPerView: 7,
                //     },
                // }}
            >

            {
                MAIN.map((it, idx) => {
                    return (
                        <SwiperSlide>
                            <div className="SlideItm">
                                <img src={process.env.PUBLIC_URL + "/img/main_visual_0" + it.id + ".jpg"} alt="" />
                                <div className="des">
                                    <div className='tit'>{it.tit}</div>
                                    <p>{it.con}</p>
                                    <a href="#!">{it.btn}</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }


        </Swiper>

        </section >
    )
}

export default MainVisual