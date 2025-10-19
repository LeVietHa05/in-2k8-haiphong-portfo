
'use client'
import Link from "next/link"
import Image from "next/image"
import { useRef, useEffect } from "react"

const data = [
    "/gallery-set-1-1.png",
    "/gallery-set-1-2.png",
    "/gallery-set-1-3.png",
    "/gallery-set-1-4.png",
    "/gallery-set-1-5.png",
    "/gallery-set-1-6.png",
    "/gallery-set-1-7.png",
    "/gallery-set-1-8.png",
    "/gallery-set-1-9.png",
    "/gallery-set-1-10.png",
    "/gallery-set-1-11.png",
    "/gallery-set-1-12.png",
    "/gallery-set-1-13.png",
    "/gallery-set-1-14.png",
    "/gallery-set-1-15.png",
    "/gallery-set-1-16.png",
    "/gallery-set-1-17.png",
    "/gallery-set-1-18.png",
    "/gallery-set-1-19.png",
    "/gallery-set-1-20.png",
    "/gallery-set-1-21.png",
    "/gallery-set-1-22.png",
    "/gallery-set-1-23.png",
    "/gallery-set-1-24.png",
    "/gallery-set-1-25.png",
    "/gallery-set-1-26.png",
    "/gallery-set-1-27.png",
    "/gallery-set-1-28.png",
    "/gallery-set-1-29.png",
    "/gallery-set-1-30.png",
    "/gallery-set-1-31.png",
    "/gallery-set-1-32.png",
    "/gallery-set-1-33.png",
    "/gallery-set-1-34.png",
    "/gallery-set-1-35.png",
    "/gallery-set-1-36.png",
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
                <Link className="border rounded-full w-125 hover:bg-gray-100" href={'/gallery'}> Lang Chai Phuoc Hai</Link>
            </div>
            {/* background */}
            <Image src={'/gallery-inner-bg.png'} className="z-0" alt="" fill></Image>
            {/* main */}
            <div className="absolute " style={{ top: 319, left: 131 }}>
                <div className="relative z-1">
                    <Image src={'/gallery-inner-bg-1.png'} alt="" width={263} height={520}></Image>
                    <Image src={'/scroll.png'} className="ml-20" alt="" width={152} height={58}></Image>
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