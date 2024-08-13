'use client'

import React, { useState } from 'react'; import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './style.css'

interface BackgroundProps {
    setBackground: (background: string) => void;
    setTeeth: (teeth: string) => void;
    setSkin: (skin: string) => void;
    setUpper: (upper: string) => void;
    setLower: (lower: string) => void;
    setEye: (eye: string) => void
}

const ImageLayer: React.FC<BackgroundProps> = ({ setBackground, setEye, setTeeth, setSkin, setUpper, setLower }) => {

    const handleBackground = (name: string) => {
        setBackground(name)
    }

    const handleTeeth = (name: string) => {
        setTeeth(name)
    }
    
    const handleSkin = (name: string) => {
        setSkin(name)
    }

    const handleUpper = (name: string) => {
        setUpper(name)
    }

    const handleLower = (name: string) => {
        setLower(name)
    }

    const handleEye = (name: string) => {
        setEye(name)
    }

    return (
        <>
            <div className="grid grid-cols-3 gap-4"> 
                <div>
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                >
                    <SwiperSlide><Image src="/assets/background_1.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => handleBackground('/assets/background_1.png')} /></SwiperSlide>
                    <SwiperSlide><Image src="/assets/background_2.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => handleBackground('/assets/background_2.png')}/></SwiperSlide>
                    <SwiperSlide><Image src="/assets/background_1.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => handleBackground('/assets/background_1.png')} /></SwiperSlide>
                    <SwiperSlide><Image src="/assets/background_1.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => handleBackground('/assets/background_1.png')} /></SwiperSlide>
                    <SwiperSlide><Image src="/assets/background_2.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => handleBackground('/assets/background_2.png')}/></SwiperSlide>
                    <SwiperSlide><Image src="/assets/background_1.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => handleBackground('/assets/background_1.png')}/></SwiperSlide>
                </Swiper>
                </div>
                

                <div className='ml-4'>
                    <Swiper
                        slidesPerView={1}
                        // spaceBetween={5}
                        loop={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><Image src="/assets/base-skin-trex.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleSkin('/assets/base-skin-trex.png') }}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/body_1.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleSkin('/assets/body_1.png') }}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/body_2.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleSkin('/assets/body_2.png') }} /></SwiperSlide>
                        <SwiperSlide><Image src="/assets/base-skin-trex.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleSkin('/assets/base-skin-trex.png') }}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/body_1.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleSkin('/assets/body_1.png') }}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/body_2.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleSkin('/assets/body_2.png') }}/></SwiperSlide>
                    </Swiper>
                </div>

                <div className='ml-10 -mt-8'>
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><Image src="/assets/teeth_1.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleTeeth('/assets/teeth_1.png') }}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/teeth_2.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleTeeth('/assets/teeth_2.png') }}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/teeth_1.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleTeeth('/assets/teeth_1.png') }}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/teeth_2.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleTeeth('/assets/teeth_2.png') }}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/teeth_1.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleTeeth('/assets/teeth_1.png') }}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/teeth_2.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleTeeth('/assets/teeth_2.png') }}/></SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className='mt-8 p-2'>
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><Image src="/assets/upper_1.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleUpper('/assets/upper_1.png') }}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/upper_2.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleUpper('/assets/upper_2.png') }}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/upper_1.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleUpper('/assets/upper_1.png') }}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/upper_2.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleUpper('/assets/upper_2.png') }}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/upper_1.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleUpper('/assets/upper_1.png') }}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/upper_2.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleUpper('/assets/upper_2.png') }}/></SwiperSlide>
                    </Swiper>
                </div>

                <div className='p-2'>
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><Image src="/assets/lower_1.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleLower('/assets/lower_1.png') }}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/lower_2.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleLower('/assets/lower_2.png') }}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/lower_1.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleLower('/assets/lower_1.png') }}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/lower_2.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleLower('/assets/lower_2.png') }}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/lower_1.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleLower('/assets/lower_1.png') }}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/lower_2.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleLower('/assets/lower_2.png') }}/></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default ImageLayer;
