
import Link from "next/link"
import Image from "next/image"

const data = [
    "/media-set-1-1.png",
    "/media-set-1-2.png",
    "/media-set-1-3.png",
    "/media-set-1-4.png",
    "/media-set-1-5.png",
    "/media-set-1-6.png",
    "/media-set-1-7.png",
    "/media-set-1-8.png",
]

export default function HeadMedia() {
    return (
        <div className="w-[1440] h-[1395px]  mx-auto shadow-md/20 relative bg-[#F9FAFC]">
            {/* nav */}
            <div className="relative z-1 flex justify-between px-20 p-10 *:w-92 *h-19 text-center font-[Instrument_Serif] text-[38px]">
                <Link className="border rounded-full  hover:bg-gray-100" href={'/'} > Home</Link>
                <Link className="border rounded-full " href={'/media'}> Multimedia</Link>
            </div>
            {/* background */}
            {/* <Image src={'/media-bg.png'} className="z-0" alt="" fill></Image> */}

            {/* main */}
            <div className="mx-auto " style={{ width: 813 }}>
                {/* title */}
                <div className="text-[96px] font-[Instrument_Serif] text-center  leading-none">Head of Media - HAT</div>

                <div>
                    <div className="relative z-1 flex flex-col items-center ">
                        <Image src={'/scroll-down.png'} className="" alt="" width={152} height={58}></Image>
                        <Image src={'/media-set-1-bg.png'} alt="" width={813} height={469}></Image>
                    </div>
                    <div className="grid grid-cols-1 h-123 overflow-y-auto">
                        {data.map((each, i) => {
                            return (
                                <div key={i} className="flex items-center justify-center">
                                    <Image src={each} alt="" width={460} height={442}></Image>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}