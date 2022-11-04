import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { NEWS } from './Data'

const News = () => {
    return (
        <section className='News sc'>
            <div className="inner">
                <h2>OCI NEWS</h2>
            </div>

            <Swiper
                slidesPerView={5}
                loop={true}
                centeredSlides={true}
                spaceBetween={50}
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
                    NEWS.map((it, idx) => {
                        return (
                            <SwiperSlide>
                                <div className='NewsBox'>
                                    <Link to='/sub04'>
                                        <span>{it.date}</span>
                                        <strong>{it.day}</strong>
                                        <figure>
                                            <img src={process.env.PUBLIC_URL + "/img/news_0" + it.id + ".jpg"} alt="" />
                                        </figure>
                                        <div className="des">{it.des}</div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>

    )
}

export default News
