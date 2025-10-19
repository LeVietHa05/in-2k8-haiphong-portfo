import Link from "next/link"
import Image from "next/image"

const data = [
    {
        title: "Head of Media HAT",
        content: [],
        bgimgLink: "/media-bg-1.png",
        w: 365,
        h: 189,
        top: 318,
        left: 286,
        textPaddingTop: 72,
        textPaddingLeft: 42,
        textWidth: 500,
        href:"/"
    },
    {
        title: "“So Do II: Hy No ai o”",
        content: [],
        bgimgLink: "/media-bg-2.png",
        w: 360,
        h: 203,
        top: 296,
        left: 791,
        textPaddingTop: 48,
        textPaddingLeft: 32,
        textWidth: 469,
        href:"/"
    },
    {
        title: "TEN PLUS 2025 Orientation Camp",
        content: [],
        bgimgLink: "/media-bg-3.png",
        w: 365,
        h: 204,
        top: 650,
        left: 283,
        textPaddingTop: 72,
        textPaddingLeft: 24,
        textWidth: 358,
        href:"/"
    },
    {
        title: "Media Contributor CNN Music Club",
        content: [],
        bgimgLink: "/media-bg-4.png",
        w: 366,
        h: 200,
        top: 656,
        left: 781,
        textPaddingTop: 32,
        textPaddingLeft: 24,
        textWidth: 529,
        href:"/"
    },
]


export default function Media() {
    return (
        <div className="w-[1440] h-[1102px] mx-auto shadow-md/20 relative ">
            {/* nav */}
            <div className="relative z-1 flex justify-between px-20 p-10 *:w-92 *h-19 text-center font-[Instrument_Serif] text-[38px]">
                <Link className="border rounded-full bg-[#E4E0D5] hover:bg-gray-100" href={'/'} > Home</Link>
                <div className="border rounded-full bg-[#E4E0D5]" > Multimedia</div>
            </div>
            {/* background */}
            <Image src={'/media-bg.png'} className="z-0" alt="" fill></Image>
            {data.map((each, i) => {
                return (
                    <Link href={each.href} key={i} className={`absolute flex justify-center items-center`} style={{
                        top: each.top, left: each.left,
                        width: each.w, height: each.h, backgroundImage: `url(${each.bgimgLink})`,
                    }}
                    >
                        <div className="font-[Instrument_Serif] text-[32px]  text-white text-center">{each.title}</div>
                    </Link>
                )
            })
            }
        </div>
    )
}