
import Link from "next/link"
import Image from "next/image"

const data = [
    {
        text: "LANG LUA VAN PHUC",
        content: "One day, when I was wandering around my grandparents neighborhood, I stumbled across an embroidery village located in van phuc. So I decided to come visit and snap some pics.",
        bgimgLink: "/gallery-bg-1.png",
        href: "/gallery/langlua",
    }, {
        text: "LANG THEU DONG CUU",
        content: "Later on when I got to come to my hometown for a family gathering. I also got introduced to an embroidery village and also came there to snap some pics as well.",
        bgimgLink: "/gallery-bg-2.png",
        href: "/gallery/langtheu",
    }, {
        text: "LANG CHAI PHUOC HAI",
        content: "On family vacation at Vung Tau, we decided to wake up early one day and went to the beach to see the lives of the beach people. I was able to take some pics during the time",
        bgimgLink: "/gallery-bg-3.png",
        href: "/gallery/langchai",
    },
]

export default function GalleryPage() {
    return (
        <div className="w-[1440] min-h-screen mx-auto shadow-md/20 relative ">
            {/* nav */}
            <div className="relative z-1 flex justify-between px-20 p-10 *:w-92 *h-19 text-center font-[Instrument_Serif] text-[38px]">
                <Link className="border rounded-full hover:bg-gray-100" href={'/'} > Home</Link>
                <div className="border rounded-full " > Gallery</div>
            </div>
            {/* background */}
            {/* <Image src={'/media-bg.png'} className="z-0" alt="" fill></Image> */}

            <div className="w-full h-135 relative flex gap-8 p-8 pb-[29px]">
                <Image src={'/gallery-bg.png'} className="z-0" alt="" fill></Image>
                {data.map((each, i) => {
                    return (
                        <Link href={each.href} key={i} className="w-1/3 h-full relative group">
                            <Image src={each.bgimgLink} fill alt=""></Image>
                            <div className="hidden group-hover:flex text-white absolute inset-0 z-1 bg-black/30 backdrop-blur-sm rounded-xl justify-center items-center flex-col px-12">
                                <div className="font-[Instrument_Serif] text-[32px]">{each.text}</div>
                                <div className="text-justify">{each.content}</div>
                            </div>
                        </Link>
                    )
                })}
            </div>

        </div>
    )
}