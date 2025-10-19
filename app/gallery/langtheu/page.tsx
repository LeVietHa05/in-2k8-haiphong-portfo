
'use client'
import Link from "next/link"
import Image from "next/image"
import { useRef, useEffect } from "react"

const data = [
    "/gallery-set-3-1.png",
    "/gallery-set-3-2.png",
    "/gallery-set-3-3.png",
    "/gallery-set-3-4.png",
    "/gallery-set-3-5.png",
    "/gallery-set-3-6.png",
    "/gallery-set-3-7.png",
    "/gallery-set-3-8.png",
    "/gallery-set-3-9.png",
    "/gallery-set-3-10.png",
    "/gallery-set-3-11.png",
    "/gallery-set-3-12.png",
    "/gallery-set-3-13.png",
    "/gallery-set-3-14.png",
    "/gallery-set-3-15.png",
    "/gallery-set-3-16.png",
    "/gallery-set-3-17.png",
    "/gallery-set-3-18.png",
    "/gallery-set-3-19.png",
    "/gallery-set-3-20.png",
    "/gallery-set-3-21.png",
    "/gallery-set-3-22.png",
    "/gallery-set-3-23.png",
]

export default function LangChaiPage() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const handleWheel = (e: React.WheelEvent) => {
        if (scrollRef.current) {
            e.preventDefault()
            scrollRef.current.scrollLeft += e.deltaY
        }
    }

    useEffect(() => {
        const handleGlobalWheel = (e: WheelEvent) => {
            if (scrollRef.current && scrollRef.current.contains(e.target as Node)) {
                e.preventDefault()
                scrollRef.current.scrollLeft += e.deltaY
            }
        }

        document.addEventListener('wheel', handleGlobalWheel, { passive: false })
        return () => document.removeEventListener('wheel', handleGlobalWheel)
    }, [])

    return (
        <div className="w-[1440] h-[1160px] mx-auto shadow-md/20 relative overflow-hidden">
            {/* nav */}
            <div className="relative z-1 flex justify-between px-20 p-10 text-center font-[Instrument_Serif] text-[38px]">
                <Link className="border rounded-full w-92 hover:bg-gray-100" href={'/'} > Home</Link>
                <Link className="border rounded-full w-125 hover:bg-gray-100" href={'/gallery'}> Lang Theu Dong Chu</Link>
            </div>
            {/* background */}
            <Image src={'/gallery-inner-bg.png'} className="z-0" alt="" fill></Image>
            {/* main */}
            <div className="absolute " style={{ top: 319, left: 131 }}>
                <div className="relative z-1">
                    <Image src={'/gallery-inner-bg-2.png'} alt="" width={263} height={520}></Image>
                    <Image src={'/scroll.png'} className="ml-10" alt="" width={152} height={58}></Image>
                </div>
                {/* setimage */}
                <div ref={scrollRef} onWheel={handleWheel} className="setimage flex  absolute z-0 overflow-x-auto w-[1050px]" style={{ top: 129, left: 255 }}>
                    {data.map((each, i) => {
                        return (
                            <div className="relative shrink-0" key={i} style={{ width: 305, height: 301 }}>
                                <Image src={'/gallery-inner-bg-special.png'} alt="" fill></Image>
                                <div className="absolute" style={{ width: 290, height: 207, top: 48, left: 8 }}>
                                    <Image src={each} alt="" fill></Image>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <style jsx>{`
                    .setimage {
                        scrollbar-width: none; /* Firefox */
                    }
                    .setimage::-webkit-scrollbar {
                        display: none; /* Chrome, Safari, Edge */
                    }
                `}</style>
            </div>
        </div>
    )
}