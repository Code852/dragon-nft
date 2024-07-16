'use client'

import * as React from 'react';
import Image from 'next/image';

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
        <div>
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4 mt-6">
                <p className='items-center font-bold text-[10px] md:text-base sm:text-normal my-auto text-left'>BACKGROUND</p>
                <div>
                    <Image src="/assets/background_1.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => handleBackground('/assets/background_1.png')} />
                </div>
                <div>
                    <Image src="/assets/background_2.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => handleBackground('/assets/background_2.png')}/>
                </div>
                <div>
                    <Image src="/assets/background_1.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => handleBackground('/assets/background_1.png')}/>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
                <p className='items-center font-bold text-[10px] md:text-base sm:text-normal my-auto text-left'>SKIN</p>
                <div>
                    <Image src="/assets/base-skin-trex.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleSkin('/assets/base-skin-trex.png') }}/>
                </div>
                <div>
                    <Image src="/assets/body_1.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleSkin('/assets/body_1.png') }}/>
                </div>
                <div>
                    <Image src="/assets/body_2.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleSkin('/assets/body_2.png') }}/>
                </div>
            </div>
            {/* <div className="grid grid-cols-4 gap-4 mt-4">
                <p className='items-center font-bold text-[10px] md:text-base sm:text-normal my-auto text-left'>SKIN</p>
                <div>
                    <Image src="/assets/eye.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleSkin('/assets/base-skin-trex.png') }}/>
                </div>
            </div> */}
            <div className="grid grid-cols-4 gap-4 mt-4">
                <p className='items-center font-bold text-[10px] md:text-base sm:text-normal my-auto text-left'>TEETH</p>
                <div>
                    <Image src="/assets/teeth_1.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleTeeth('/assets/teeth_1.png') }}/>
                </div>
                <div>
                    <Image src="/assets/teeth_2.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleTeeth('/assets/teeth_2.png') }}/>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
                <p className='items-center font-bold text-[10px] md:text-base sm:text-normal my-auto text-left'>UPPER ARMOR</p>
                <div>
                    <Image src="/assets/upper_1.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleUpper('/assets/upper_1.png') }}/>
                </div>
                <div>
                    <Image src="/assets/upper_2.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleUpper('/assets/upper_2.png') }}/>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-4">
                <p className='items-center font-bold text-[10px] md:text-base sm:text-normal my-auto text-left'>LOWER ARMOR</p>
                <div>
                    <Image src="/assets/lower_1.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleLower('/assets/lower_1.png') }}/>
                </div>
                <div>
                    <Image src="/assets/lower_2.png" className='cursor-pointer' width={100} height={100} alt="" onClick={() => { handleLower('/assets/lower_2.png') }}/>
                </div>
            </div>
        </div>
    )
}

export default ImageLayer;
