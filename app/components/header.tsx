'use client'
import Image from "next/image"
import { useState } from "react"
import { Instrument_Serif } from "next/font/google"
import Link from "next/link"

const instrument_Serif = Instrument_Serif({
    weight: '400',
})

interface NavLink {
    text: string;
    link: string | null;
}

const Links: NavLink[] = [
    {
        text: "Click on Shutter dial",
        link: null
    },
    {
        text: "Academics",
        link: '/academic'
    },
    {
        text: "Multimedia",
        link: '/media'
    },
    {
        text: "Gallery",
        link: '/gallery'
    },
    {
        text: "Community Service",
        link: '/community'
    },
]

export default function Header() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleClickShutter = () => {
        if (currentIndex <= Links.length - 2)
            setCurrentIndex(currentIndex + 1)
        else
            setCurrentIndex(0)
    }
    return (
        <div className="w-[1440] mx-auto relative h-230">
            {/* intro */}
            <div className="w-54 text-justify absolute top-12  left-1/5">
                <div className={`${instrument_Serif.className} text-[36px]`}>Introduction</div>
                <div>Hey there! I’m Phan Hải Phong, a student who loves turning ideas into action, from leading charity initiatives and environmental projects to creating visual stories and exploring economic research. I’m driven by a simple goal: to make learning, art, and service connect meaningfully.</div>
            </div>
            {/* nav */}
            <div className="absolute top-1/3 left-20 z-3">
                <Image src={'/cam.png'} width={741} height={494} alt=""></Image>
            </div>
            {/* clickable shutter dial */}
            <div className="size-34 rounded-full hover:bg-white/10 hover:scale-110 hover:backdrop-blur-xs absolute top-62/100 left-47/100 z-3 transition-all duration-300" onClick={handleClickShutter}> </div>
            <div className={`${instrument_Serif.className} flex flex-col justify-end items-end absolute z-2 top-39/100 right-20 h-91 w-254 bg-[#E0E1E1] text-right text-[56px] pr-4 pb-14 `}>
                {Links[currentIndex].link ? (
                    <Link href={Links[currentIndex].link}>{Links[currentIndex].text}</Link>
                ) :

                    <> {Links[currentIndex].text}
                        < Image src={'/Vector.png'} alt="" width={500} height={40} /></>
                }
            </div>
            {/* image */}
            <Image className="absolute top-0 right-0 z-1" src={'/header-bg.png'} width={700} height={741} alt=""></Image>
        </div >
    )
}