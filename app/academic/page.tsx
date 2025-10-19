
import Image from "next/image"
import Link from "next/link"


const data = [
    {
        title: "Gold Prize – AIGC & ICAN (2025)",
        content: ["Research on Factors Affecting the Intention to Apply AI in Startup Activities of Young People in Vietnam", "The Relationship Between Past and Current Inflation in Vietnam: A Quantitative View"],
        bgimgLink: "/academic-bg-1.png",
        w: 676,
        h: 352,
        top: 232,
        left: 134,
        textPaddingTop: 72,
        textPaddingLeft: 42,
        textWidth: 500,
    },
    {
        title: "Research Projects",
        content: [
            "Transparency of the State Budget in Vietnam (2024) – Data analysis using OBI and POBI indices.",
            "Impulsive Buying Behavior Through E-Wallet Usage – Explored youth financial education.",
            "AI in Startup Activities – Surveyed founders and analyzed startup ecosystems.",
            "Inflation Trends in Vietnam (2012–2025) – Conducted econometric modeling using EViews.",
        ],
        bgimgLink: "/academic-bg-2.png",
        w: 540,
        h: 352,
        top: 512,
        left: 659,
        textPaddingTop: 48,
        textPaddingLeft: 32,
        textWidth: 469,
    },
    {
        title: "Translator – “Otzi” (2024)",
        content: ["Co-translated an Italian folklore into Vietnamese, maintaining cultural tone and meaning."],
        bgimgLink: "/academic-bg-3.png",
        w: 413,
        h: 352,
        top: 959,
        left: 364,
        textPaddingTop: 72,
        textPaddingLeft: 24,
        textWidth: 358,
    },
    {
        title: "Internship",
        content: ["<b>Business Intern – TAMICO Vietnam (2025)</b> <br> Learned about international trade, contracts, and oil industry operations. <br> Assisted in preparing LCs, TTs, and DP documents.",
            "<b>Intern – Vietnam Development Bank</b><br>Suported public investment evaluation (infrastructure, education, healthcare). <br> Gained insights into macroeconomic policy and public finance.",
            "<b>Research  Assistant</b> <br> Contributed to data collection, literature review, and report drafting for academic studies."
        ],
        bgimgLink: "/academic-bg-4.png",
        w: 576,
        h: 411,
        top: 1194,
        left: 760,
        textPaddingTop: 32,
        textPaddingLeft: 24,
        textWidth: 529,
    },
]

export default function Academic() {
    return (
        <div className="relative w-[1440px] h-[1771px] mx-auto">
            {/* bac */}
            <Image src={'/academic-bg.png'} className="z-0" alt="" fill></Image>
            {/* nav */}
            <div className="relative z-1 flex justify-between px-20 p-10 *:w-92 *h-19 text-center font-[Instrument_Serif] text-[38px]">
                <Link className="border rounded-full" href={'/'} > Home</Link>
                <div className="border rounded-full" > Academics</div>
            </div>
            {data.map((each, i) => {
                return (
                    <div key={i} className={`absolute`} style={{
                        top: each.top, left: each.left,
                        width: each.w, height: each.h, backgroundImage: `url(${each.bgimgLink})`,
                        paddingTop: each.textPaddingTop,
                        paddingLeft: each.textPaddingLeft
                    }}
                    >
                        <div className="font-[Instrument_Serif] text-[32px] mb-6">{each.title}</div>
                        <ul className="list-disc ml-7 text-[17px] leading-5" style={{ width: each.textWidth }}>
                            {each.content.map((ex, ix) => {
                                return (
                                    <li className="mb-2" key={ix} dangerouslySetInnerHTML={{__html: ex}}></li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })
            }
        </div>
    )
}           