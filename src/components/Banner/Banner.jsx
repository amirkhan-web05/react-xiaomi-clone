import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay, EffectFade,Navigation,Pagination} from 'swiper';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import styles from './Banner.module.scss'

SwiperCore.use([EffectFade,Navigation,Pagination, Autoplay]);

const Banner = () => {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return (
        <Swiper 
            spaceBetween={30} 
            effect={'fade'} 
            autoplay={{
                delay:2000,
                disableOnInteraction: false
            }}
            className="mySwiper">
            <SwiperSlide>
                <img width={'100%'} height={'615vh'} src='https://i02.appmifile.com/376_operator_in/13/10/2021/c4ea0fbabcf3c6bd639ac8d441918a22.png' alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img width={'100%'} height={'615vh'} src='https://i02.appmifile.com/959_operator_in/19/10/2021/308ff32ffbc9ef50520440912a9cb247.jpg' alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img width={'100%'} height={'615vh'} src='https://i02.appmifile.com/613_operator_in/18/10/2021/0c3f90b2064347e706e2d97ec142bf01.jpg' alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img width={'100%'} height={'615vh'} src='https://i02.appmifile.com/451_operator_in/24/08/2021/2a76db13048ccc3d1496cdff58661357.png' alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img width={'100%'} height={'615vh'} src='https://i02.appmifile.com/663_operator_in/14/10/2021/0c3aa2a942b06988e369c8ff9869eed8.jpg' alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img width={'100%'} height={'615vh'} src='https://i02.appmifile.com/624_operator_in/15/10/2021/a31e2b93425811aed897e8fd9e9462a6.jpg' alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img width={'100%'} height={'615vh'} src='https://i01.appmifile.com/webfile/globalimg/chewing/1920_770.png' alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img width={'100%'} height={'615vh'} src='https://i02.appmifile.com/864_operator_in/13/10/2021/7f801f56f4a0ff39e40f87fa68069938.jpg' alt="" />
            </SwiperSlide>
            <div style={{position:'relative', top:'-300px', zIndex:'1000'}}>
                <div className={styles.swiper_slide_next} ref={navigationNextRef} />
                <div className={styles.swiper_slide_prev} ref={navigationPrevRef} />
            </div>
        </Swiper>
    )
}

export default Banner