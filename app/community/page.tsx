
'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const data = [
    {
        title: "ARIA PROJECT",
        content: "A musical concert created by highschoolers for charity and spread culture values. We raised 50 million VND and donated to a local center supporting children with cerebral palsy; hosted Mid-Autumn Festival activities to engage and support the kids.",
        placeholder: false,
    }, {
        title: "I-HOPE:",
        content: "Educational support and thyroid screening for adolescents at SOS Children’s village at Vinh city. We organized an on-site visit providing educational support sessions and thyroid health screening for local adolescents, in collaboration with medical volunteers.",
        placeholder: false,
    }, {
        title: "Volunteer at National’s Children Hospital",
        content: "during Lunar New Year. I visit with my family to deliver food and gifts to children suffering from chronic diseases.",
        placeholder: false,
    }, {
        title: "Post-Yagi Storm Community Support Program",
        content: "Participated in a charity relief trip to support local neighborhoods affected by Typhoon Yagi.",
        placeholder: false,
    }, {
        title: "CampBlast (GHA)",
        content: "CampBlast is a non-profit annual summer camp for children aged 7–13, organized by the Green Hanoi-Amsterdam Club. The program promotes environmental awareness through fun, hands-on activities about recycling, sustainability, and keeping the environment clean.",
        placeholder: false,
    }, {
        title: "",
        content: "",
        placeholder: true,
    },
]

const dataSet = {
    aria: {
        bgimageLink: "/community-set-bg-1.png",
        imgLink: ["/gallery-set-1.png", "/gallery-set-2.png", "/gallery-set-3.png", "/gallery-set-4.png"],
    },
    ihope: {
        bgimageLink: "/community-set-bg-2.png",

        imgLink: ["/gallery-set-1.png", "/gallery-set-2.png", "/gallery-set-3.png", "/gallery-set-4.png"],
    },
    volunteer: {
        bgimageLink: "/community-set-bg-1.png",

        imgLink: ["/gallery-set-1.png", "/gallery-set-2.png", "/gallery-set-3.png", "/gallery-set-4.png"],
    },
    yagi: {
        bgimageLink: "/community-set-bg-3.png",

        imgLink: ["/gallery-set-1.png", "/gallery-set-2.png", "/gallery-set-3.png", "/gallery-set-4.png"],
    },
    campblast: {
        bgimageLink: "/community-set-bg-1.png",
        imgLink: ["/gallery-set-1.png", "/gallery-set-2.png", "/gallery-set-3.png", "/gallery-set-4.png"],
    }
}

export default function CommunityPage() {
    const [activeCarousel, setActiveCarousel] = useState<string | null>(null)

    const handleClick = (title: string) => {
        let key = title.toLowerCase().replace(/[^a-z]/g, '')
        if (key.includes('aria')) key = 'aria'
        else if (key.includes('hope')) key = 'ihope'
        else if (key.includes('volunteer')) key = 'volunteer'
        else if (key.includes('yagi')) key = 'yagi'
        else if (key.includes('campblast')) key = 'campblast'
        setActiveCarousel(key)
    }

    return (
        <div className="w-[1440] min-h-screen mx-auto shadow-md/20 relative ">
            {/* nav */}
            <div className="relative z-1 flex justify-between px-20 p-10 *:w-92 *h-19 text-center font-[Instrument_Serif] text-[38px]">
                <Link className="border rounded-full hover:bg-gray-100" href={'/'} > Home</Link>
                <div className="border rounded-full" > Community Service</div>
            </div>
            {/* background */}
            {/* <Image src={'/media-bg.png'} className="z-0" alt="" fill></Image> */}
            <div style={{
                height: 542
            }}>
                {!activeCarousel && (
                    <Image src={'/community-1.png'} className="mx-auto" alt="" width={812} height={542}></Image>

                )
                }
                {activeCarousel && (
                    <div className="w-[1138px] mx-auto mt-10 relative flex justify-center  items-center">
                        <div className="relative z-1">
                            <Image src={dataSet[activeCarousel as keyof typeof dataSet].bgimageLink} alt="" width={233} height={448}></Image>
                            <Image src={'/scroll.png'} className="ml-20" alt="" width={152} height={58}></Image>
                        </div>
                        <div className="flex  z-0 overflow-x-auto w-[900px]" style={{ top: 108, left: 131 }}>
                            {dataSet[activeCarousel as keyof typeof dataSet].imgLink.map((each, i) => {
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
                    </div>
                )}
            </div>

            <div className="grid grid-cols-2 w-[1138px] mx-auto gap-7 *:p-7 pb-10">
                {data.map((each, i) => {
                    if (each.placeholder) {
                        return (
                            <div key={i} className="text-center flex justify-center items-center border rounded-2xl text-gray-500" >
                                “CLICK ON CONTENT”
                            </div>
                        )
                    }
                    return (
                        <div key={i} className="border rounded-2xl hover:bg-gray-100 cursor-pointer" onClick={() => handleClick(each.title)}>
                            <div className="font-[Instrument_Serif] text-[32px]">{each.title}</div>
                            <div className="leading-5 mt-4">{each.content}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
