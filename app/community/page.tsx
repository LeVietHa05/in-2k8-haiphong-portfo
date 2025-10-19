
import Link from "next/link"
import Image from "next/image"

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
        bgimageLink: "",
        imgLink: [],
    },
    ihope: {
        bgimageLink: "",
        imgLink: [],
    },
    volunteer: {
        bgimageLink: "",
        imgLink: [],
    },
    yagi: {
        bgimageLink: "",
        imgLink: [],
    },
    campblast: {
        bgimageLink: "",
        imgLink: [],
    }
}

export default function CommunityPage() {
    return (
        <div className="w-[1440] min-h-screen mx-auto shadow-md/20 relative ">
            {/* nav */}
            <div className="relative z-1 flex justify-between px-20 p-10 *:w-92 *h-19 text-center font-[Instrument_Serif] text-[38px]">
                <Link className="border rounded-full hover:bg-gray-100" href={'/'} > Home</Link>
                <div className="border rounded-full" > Community Service</div>
            </div>
            {/* background */}
            {/* <Image src={'/media-bg.png'} className="z-0" alt="" fill></Image> */}
            {/* carosel here */}
            <Image src={'/community-1.png'} className="mx-auto" alt="" width={812} height={542}></Image>

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
                        <div key={i} className="border rounded-2xl hover:bg-gray-100">
                            <div className="font-[Instrument_Serif] text-[32px]">{each.title}</div>
                            <div className="leading-5 mt-4">{each.content}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}