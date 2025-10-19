

import Link from "next/link"
import Image from "next/image"

const data = [
    "/gallery-set-1.png",
    "/gallery-set-2.png",
    "/gallery-set-3.png",
    "/gallery-set-4.png",
]

export default function LangChaiPage() {
    return (
        <div className="w-[1440] h-[1160px] mx-auto shadow-md/20 relative overflow-hidden">
            {/* nav */}
            <div className="relative z-1 flex justify-between px-20 p-10  *h-19 text-center font-[Instrument_Serif] text-[38px]">
                <Link className="border rounded-full w-92" href={'/'} > Home</Link>
                <div className="border rounded-full w-125" > Lang Chai Phuoc Hai</div>
            </div>
            {/* background */}
            <Image src={'/gallery-inner-bg.png'} className="z-0" alt="" fill></Image>
            {/* main */}
            <div className="absolute " style={{ top: 319, left: 131 }}>
                <div className="relative z-1">
                    <Image src={'/gallery-inner-bg-1.png'} alt="" width={263} height={520}></Image>
                </div>
                {/* setimage */}
                <div className="flex absolute z-0 overflow-x-auto" style={{ top: 129, left: 255 }}>
                    {data.map((each, i) => {
                        return (
                            <div className="relative" key={i} style={{ width: 305, height: 301 }}>
                                <Image src={'/gallery-inner-bg-special.png'} alt="" fill></Image>
                                <div className="absolute" style={{ width: 290, height: 207, top: 48, left: 8 }}>
                                    <Image src={each} alt="" fill></Image>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}