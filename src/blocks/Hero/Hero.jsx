import Text from "../../components/Text.jsx";
import Submit from "../../components/Submit.jsx";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Hero.scss"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
function Hero() {
    return (
        <section className={"hero"}>

            <div className={"container hero__con"}>
                <Swiper
                    // loop={true}
                    effect={'fade'}
                    speed={3000}
                    autoplay={{
                        delay: 3000
                    }}
                    modules={[Autoplay, FreeMode]}
                    className="swiper"
                >
                    <SwiperSlide ></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                </Swiper>
                <div className={"hero__content"}>
                    <Text As={"h1"} className={"hero__title"} size={56} color={"#fff"}>Стильные аксессуары для вашего идеального образа!</Text>
                    <Text As={"p"} className={"hero__descr"} size={24} color={"#fff"}>Мы предлагаем широкий выбор модных и качественных шапок,
                        платков, очков и других аксессуаров, чтобы подчеркнуть вашу уникальность и стиль. Найдите идеальное
                        дополнение к вашему образу в нашем магазине!</Text>
                    <Submit className={"hero__btn btn-reset"}/>
                </div>
            </div>
        </section>
    )
}

export default Hero;