
'use client'
import Link from "next/link"
import Image from "next/image"
import { useRef, useEffect } from "react"

const data = [
    "/gallery-set-2-1.png",
    "/gallery-set-2-2.png",
    "/gallery-set-2-3.png",
    "/gallery-set-2-4.png",
    "/gallery-set-2-5.png",
    "/gallery-set-2-6.png",
    "/gallery-set-2-7.png",
    "/gallery-set-2-8.png",
    "/gallery-set-2-9.png",
    "/gallery-set-2-10.png",
    "/gallery-set-2-11.png",
    "/gallery-set-2-12.png",
    "/gallery-set-2-13.png",
    "/gallery-set-2-14.png",
    "/gallery-set-2-15.png",
    "/gallery-set-2-16.png",
    "/gallery-set-2-17.png",
    "/gallery-set-2-18.png",
    "/gallery-set-2-19.png",
    "/gallery-set-2-20.png",
    "/gallery-set-2-21.png",
    "/gallery-set-2-22.png",
    "/gallery-set-2-23.png",
    "/gallery-set-2-24.png",
    "/gallery-set-2-25.png",
    "/gallery-set-2-26.png",
    "/gallery-set-2-27.png",
    "/gallery-set-2-28.png",
    "/gallery-set-2-29.png",
    "/gallery-set-2-30.png",
    "/gallery-set-2-31.png",
    "/gallery-set-2-32.png",
    "/gallery-set-2-33.png",
    "/gallery-set-2-34.png",
]

export default function LangLuaPage() {
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
                <Link className="border rounded-full w-125 hover:bg-gray-100" href={'/gallery'}> Lang Lua Van Phuc</Link>
            </div>
            {/* background */}
            <Image src={'/gallery-inner-bg.png'} className="z-0" alt="" fill></Image>
            {/* main */}
            <div className="absolute " style={{ top: 319, left: 50 }}>
                <div className="relative z-1">
                    <Image src={'/gallery-inner-bg-3.png'} alt="" width={540} height={576}></Image>
                    <Image src={'/scroll.png'} className="ml-45 -mt-10" alt="" width={152} height={58}></Image>
                </div>
                {/* setimage */}
                <div ref={scrollRef} onWheel={handleWheel} className="setimage flex  absolute z-0 overflow-x-auto w-[1020px]" style={{ top: 129, left: 370 }}>
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