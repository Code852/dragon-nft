'use client'

import Image from "next/image";
import ImageLayer from "../ImageLayer/ImageLayer";
import ExecuteButton from "../Layout/ExecuteButton/ExecuteButton";
import ImageCombiner from "./FinalImage";
import { useState } from "react";

function GenerateImage() {

    const [background, setBackground] = useState("");
    const [teeth, setTeeth] = useState("");
    const [skin, setSkin] = useState("");
    const [upper, setUpper] = useState("");
    const [lower, setLower] = useState("");
    const [eye, setEye] = useState("")

    return (
        <div className="pt-14 bg-center max-w-[675px] max-h-[620px]" style={{ backgroundImage: 'url(/assets/total_background.png)' }}>
            <div className="grid grid-cols-4 md:grid-cols-8 min-h-screen py-12 px-3 mx-auto gap-2 xl:gap-20 m-auto">
                <div className=' text-white col-span-4 text-center'>
                    <div className="mt-3">
                        {/* <p className="text-left font-bold text-xl">Layers</p> */}
                        <ImageLayer setBackground={setBackground} setEye = {setEye} setTeeth = {setTeeth} setUpper = {setUpper} setSkin = {setSkin} setLower = {setLower} />
                    </div>
                    {/* <ExecuteButton /> */}
                </div>
                <div className='text-white col-span-4 text-center -mt-14 ml-4'>
                    <ImageCombiner background={background} eye={eye} teeth = {teeth} skin = {skin} upper = {upper} lower = {lower} />
                </div>

            </div>
        </div>
    )
}

export default GenerateImage;