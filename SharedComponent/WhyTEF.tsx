const assetPath = '/tef-trial-canada-clear-tef-in-120-days';

export default function WhyTEF() {
  const features = [
    { icon: `${assetPath}/whyTEF/icon1.svg`, text: "120-Day structured roadmap to become TEF-ready" },
    { icon: `${assetPath}/whyTEF/icon2.svg`, text: "TEF-focused curriculum. Not general French." },
    { icon: `${assetPath}/whyTEF/icon3.svg`, text: "Clear understanding of the scoring system and exam pattern" },
    { icon: `${assetPath}/whyTEF/icon4.svg`, text: "Level-based batches so you don’t waste time" },
    { icon: `${assetPath}/whyTEF/icon5.svg`, text: "Flexible weekday and weekend options" },
    { icon: `${assetPath}/whyTEF/icon6.svg`, text: "Live classes with real speaking correction" },
    { icon: `${assetPath}/whyTEF/icon7.svg`, text: "Certified trainers with 15+ years of experience" },
  ];

  return (
    <section className="w-full flex justify-center py-16 md:py-24">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-[10rem] flex flex-col items-center gap-12">

        {/* HEADING */}
        <h2 className="font-display text-black text-center font-bold text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
          Why TEF With TLS
        </h2>

        {/* FLEX WRAP — AUTO CENTERED ROWS */}
        <div className="flex flex-wrap justify-center gap-y-10 gap-x-7 w-full">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 w-[45%] md:w-[30%] lg:w-[22%]"
            >
              {/* ICON */}
              <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-[#F2EEDB]">
                <img src={item.icon} alt="feature icon" className="w-16 h-16" />
              </div>

              {/* TEXT */}
              <p className="text-[#464646] text-sm md:text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}