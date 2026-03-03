import Link from "next/link";
const assetPath = '/tef-trial-canada-clear-tef-in-120-days';
export default function Hero() {
  return (
    <section className="relative w-full bg-[#FBF4D1] flex justify-center items-start overflow-hidden">

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1280px] px-4 sm:px-6 lg:px-12 pt-4 sm:pt-12 md:pt-1 lg:pt-1 pb-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

        {/* LEFT CONTENT */}
        <div className="w-full max-w-xl flex flex-col gap-5 md:gap-7 text-center lg:text-left">

          {/* HEADING */}
          <h1 className="font-display font-bold tracking-[-0.02em] leading-tight">
            <span className="text-[#007AD2] text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] block">
              Clear TEF <span className="text-black">in</span>
            </span>

            <span className="text-black text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] block">
              120 Days
            </span>
          </h1>

          {/* PARAGRAPH */}
          <p className="font-text text-[#464646] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
            Get a personalised TEF roadmap and see how French can improve your CRS score.
          </p>

          {/* STATS */}
          <div className="flex justify-center lg:justify-start gap-6 sm:gap-8 font-display flex-wrap">
            {[
              { value: "1000+", label: "Students Trained" },
              { value: "4.9★", label: "Student Rating" },
              { value: "Real exam-focused", label: "Preparation" },
            ].map((item) => (
              <div key={item.value} className="flex flex-col gap-1">
                <p className="text-[#0D7CC1] font-semibold text-base md:text-lg">
                  {item.value}
                </p>
                <p className="text-[#464646] text-xs sm:text-sm capitalize">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
         <Link
  href="/tef-trial-clear-tef-in-120-days"
  className="mx-auto lg:mx-0 w-fit px-6 md:px-8 py-3 md:py-4 rounded-full bg-[#E9C81A] text-[#211C03] font-display text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:scale-105 transition inline-block"
>
  Apply Now and Get 50% OFF
</Link>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[42rem] -mb-10 sm:-mb-12 md:-mb-16">

          {/* HERO IMAGE */}
          <img
            src={`${assetPath}/hero/heroImage.svg`}
            alt="Student"
            className="w-full h-auto object-contain"
          />

          {/* FLOATING ICON */}
          <img
            src={`${assetPath}/hero/heroicon.svg`}
            alt="stats icon"
            className="absolute top-[10%] right-[8%] w-7 sm:w-9 md:w-12"
          />

          {/* BADGE 1 */}
          <div className="absolute top-[38%] left-0 sm:left-[-5%] flex px-3 sm:px-4 py-2 items-center gap-3 rounded-xl bg-white/70 backdrop-blur-md font-display shadow-md">
            <img
              src={`${assetPath}/hero/icon1.svg`}
              alt="chart"
              className="w-7 sm:w-9 md:w-10"
            />
            <div>
              <p className="text-[#464646] font-bold text-sm md:text-base">
                92%
              </p>
              <p className="text-[#545567] text-xs sm:text-sm whitespace-nowrap">
                Target CLB Achieved
              </p>
            </div>
          </div>

          {/* BADGE 2 */}
          <div className="absolute bottom-[20%] right-0 sm:right-[-5%] flex px-3 sm:px-4 py-2 items-center gap-3 rounded-xl bg-white/70 backdrop-blur-md font-display shadow-md">
            <img
              src={`${assetPath}/hero/icon2.svg`}
              alt="flash"
              className="w-7 sm:w-9 md:w-10"
            />
            <div>
              <p className="text-[#464646] font-bold text-sm md:text-base">
                Fast Track Intake Closing
              </p>
              <p className="text-[#545567] text-xs sm:text-sm">
                Limited Seats Remaining
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CURVED BOTTOM BACKGROUND (TOUCHES IMAGE ALWAYS) */}
      <div className="absolute -bottom-2 sm:-bottom-5 md:-bottom-4 lg:-bottom-3 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          {/* Blue curve line */}
          <path
            d="M0,40 C300,120 1140,120 1440,40"
            fill="transparent"
            stroke="#f0f0f0"
            strokeWidth="3"
          />

          {/* White section below */}
          <path
            d="M0,40 C300,120 1140,120 1440,40 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

    </section>
  );
}