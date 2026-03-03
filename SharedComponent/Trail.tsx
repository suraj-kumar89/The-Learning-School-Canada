
const assetPath = '/tef-trial-canada-clear-tef-in-120-days';
export default function TrialSection() {
  const cards = [
    {
      icon: `${assetPath}/trail/icon1.svg`,
      title: "Diagnose Your Current Level",
      points: [
        " Identify your exact TEF level (A1 to B2)",
        "Map required CLB for CRS improvemen",
        "Set a realistic 90–120 day roadmap",
      ],
      dark: false,
    },
    {
      icon: `${assetPath}/trail/icon2.svg`,
      title: "Build Your Target CLB Plan",
      points: [
        " Listening, Reading, Writing & Speaking framework",
        " Score maximisation techniques",
        "Avoid common TEF scoring mistakes",
      ],
      dark: false,
    },
    {
      icon: `${assetPath}/trail/icon3.svg`,
      title: "Execute With Exam-Focused Coaching",
      points: [
        "Live interactive sessions",
        "Real TEF pattern practice",
        "Continuous mini-assessments",
        " Focused resources & templates",
      ],
      dark: true,
    },
  ];

  return (
    <section className="w-full flex justify-center  sm:-mt-2 md:-mt-2 pb-12 sm:pb-2 md:pb-2 bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col items-center gap-10 md:gap-12">

        {/* SECTION HEADER */}
        <div className="max-w-[900px] flex flex-col items-center text-center gap-4 sm:gap-6">

          <h2 className="font-display text-black text-[1.8rem] sm:text-[2.2rem] md:text-[2.75rem] font-bold leading-tight md:leading-[3rem] tracking-[-0.02rem]">
            How We Help <br />You Reach Target CLB Faster
          </h2>

          <p className="font-text text-[#464646] text-sm sm:text-base leading-[160%] tracking-[-0.015rem]">
            We evaluate your current TEF level and create
            <br className="hidden sm:block" />
            a structured plan to help you improve your CRS score.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">

          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-6 sm:gap-8 p-6 sm:p-8 rounded-[1.5rem]
              ${card.dark ? "bg-[#084A74]" : "bg-[#FDFAE9]"}`}
            >
              {/* ICON */}
              <div className="flex items-center justify-center w-16 h-16 sm:w-[5.5rem] sm:h-[5.5rem]">
                <img
                  src={card.icon}
                  alt="icon"
                  className="w-12 sm:w-[4.5rem] h-12 sm:h-[4.5rem] aspect-square"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col items-center text-center gap-6 sm:gap-8">

                {/* TITLE */}
                <h3
                  className={`font-display text-[1.3rem] sm:text-[1.5rem] md:text-[1.75rem] font-bold leading-tight tracking-[-0.0225rem]
                  ${card.dark ? "text-white" : "text-black"}`}
                >
                  {card.title}
                </h3>

                {/* POINTS */}
                <div className="flex flex-col gap-4 sm:gap-6">

                  {card.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 text-left">

                      {/* CHECK ICON */}
                      <svg
                        viewBox="0 0 32 32"
                        className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                        fill="none"
                      >
                        <rect x="7.48" y="7.81" width="17" height="17" fill="#E9C81A" />
                        <path
                          d="M21.5867 2.66699H10.4134C5.56002 2.66699 2.66669 5.56033 2.66669 10.4137V21.5737C2.66669 26.4403 5.56002 29.3337 10.4134 29.3337H21.5734C26.4267 29.3337 29.32 26.4403 29.32 21.587V10.4137C29.3334 5.56033 26.44 2.66699 21.5867 2.66699ZM22.3734 12.9337L14.8134 20.4937C14.6267 20.6803 14.3734 20.787 14.1067 20.787C13.84 20.787 13.5867 20.6803 13.4 20.4937L9.62669 16.7203C9.24002 16.3337 9.24002 15.6937 9.62669 15.307C10.0134 14.9203 10.6534 14.9203 11.04 15.307L14.1067 18.3737L20.96 11.5203C21.3467 11.1337 21.9867 11.1337 22.3734 11.5203C22.76 11.907 22.76 12.5337 22.3734 12.9337Z"
                          fill="#0D7CC1"
                        />
                      </svg>

                      <p
                        className={`font-display text-sm sm:text-base leading-[1.5rem] tracking-[-0.015rem]
                        ${card.dark ? "text-white" : "text-[#464646]"}`}
                      >
                        {point}
                      </p>

                    </div>
                  ))}

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}