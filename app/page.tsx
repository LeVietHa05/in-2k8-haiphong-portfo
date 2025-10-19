import Image from "next/image";
import Header from "./components/header";

const data = [
  {
    title: "Skateboarding",
    content: "At first I just wanted to play a sport. I’ve tried everything, tennis, basketball, football, badminton, volleyball,... None of them really got my interest. Like there’s something that they lack. One day, while I was doomscrolling on reels, I saw a skate clip and this definitely got my attention. I knew I had to try it. Skateboarding was definitely more challenging than the others since there were no trainers or teachers. I had to learn the basics myself. This really helped me improve my learning capabilities. Skateboarding also helped me step out of my comfort zone. Every time I do a trick, I need to commit, or else I would mess up and fall.",
    imgSrc: "/home-1.png"
  }, {
    title: "Photography",
    content: "I started taking photos ever since I got my first mobile phone. I loved snapping shots of the things happening around me. My first actual camera was a film camera, it was a birthday gift from my father and I loved it so much. Who doesn’t love the warmth and grain of good old film? That’s when photography became more just a hobby. I started learning about composition through that camera and experimenting with edits on my phone. After a while, I got my first mirrorless camera and that’s when my photography journey truly began to grow.",
    imgSrc: "/home-2.png"
  }, {
    title: "Community Service",
    content: "I’ve joined my mother in many charity activities ever since my early primary school years. Every year, we visit the National Children’s Hospital to spend time with children living with chronic illnesses.Over the years, these experiences have taught me compassion, empathy, and the importance of giving back to the community. They’ve also shaped the way I see the world, reminding me how small acts of kindness can make a big difference.",
    imgSrc: "/home-3.png"
  },
]

export default function Home() {
  return (
    <div className="w-[1440] mx-auto shadow-md/20 relative min-h-screen">
      {/* header */}
      <Header />
      <div className="flex px-30 pb-30 justify-between gap-6 text-justify">
        {data.map((each, i) => {
          return (
            <div key={i} className="w-86 flex justify-between flex-col gap-6">
              <div>
                <div className={`font-[Instrument_Serif] text-[37px] pb-3`}>{each.title}</div>
                <div className="leading-7 text-[20px]">{each.content}</div>
              </div>
              <Image src={each.imgSrc} alt="" width={343} height={613}></Image>
            </div>
          )
        })}
      </div>
    </div>
  );
}
