import Link from "next/link";
const assetPath = '/tef-trial-canada-clear-tef-in-120-days';
export default function Journey() {
  const stages = [
    {
      number: "01",
      icon: `${assetPath}/journey/icon1.svg`,
      title: "Foundation Stage",
      border: "border-[#A88E0A]",
      textColor: "text-[#A88E0A]",
      tickBg: "bg-[#A88E0A]",
      points: [
        "Understanding A1–A2 concepts in TEF context",
        "Core grammar, vocabulary and sentence structure",
        "Listening and reading fundamentals",
        "Speaking confidence building",
      ],
    },
    {
      number: "02",
      icon: `${assetPath}/journey/icon2.svg`,
      title: "Intermediate Stage",
      border: "border-[#1F75AF]",
      textColor: "text-[#1F75AF]",
      tickBg: "bg-[#1F75AF]",
      points: [
        "B1 to B2 level strengthening in TEF context",
        "Structured writing formats for TEF",
        "Listening strategy and pattern recognition",
        "Speaking correction with structured responses",
        "Timed practice and evaluation",
      ],
    },
    {
      number: "03",
      icon: `${assetPath}/journey/icon3.svg`,
      title: "Advanced Stage",
      border: "border-[#F04444]",
      textColor: "text-[#F04444]",
      tickBg: "bg-[#F04444]",
      points: [
        "Advanced TEF preparation for maximum CRS score",
        "B2 refinement for higher band performance",
        "Advanced speaking strategy with mock tests",
        "Writing structuring for higher band answers",
        "Final exam readiness and assessment",
      ],
    },
  ];

  return (
    <section className="w-full flex justify-center py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col gap-8 sm:gap-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <h2 className="font-display text-black text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-tight md:leading-[3rem] lg:leading-[4rem] tracking-[-0.04rem] text-center lg:text-left">
            Your TEF Preparation <br /> Journey
          </h2>

          <Link
            href="/tef-trial-clear-tef-in-120-days"
            className="flex shrink-0 px-6 py-3 sm:px-[1.5rem] sm:py-[1rem] items-center gap-[0.5rem] rounded-[3.875rem] bg-[#E9C81A] whitespace-nowrap"
          >
            <span className="font-display text-[#211C03] text-sm sm:text-base font-semibold">
              Apply Now and Get 50% OFF
            </span>
          </Link>
        </div>

        {/* STAGE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {stages.map((stage, index) => (
            <div
              key={index}
              className={`relative pt-10 pb-8 px-6 sm:px-8 rounded-[2rem] border-[3px] ${stage.border} flex flex-col gap-4`}
            >
              {/* STAGE BADGE */}
              <div className="absolute -top-6 left-0 sm:left-0 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]">

                <img
                  src={stage.icon}
                  alt="stage icon"
                  className="w-full h-full"
                />

                <span className="absolute -top-[-5px] left-6 -translate-x-1/2 font-display text-white text-[22px] sm:text-[30px] font-bold">
                  {stage.number}
                </span>
              </div>

              {/* TITLE */}
              <h3
                className={`font-display text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] font-bold leading-tight tracking-[-0.02em] ${stage.textColor}`}
              >
                {stage.title}
              </h3>

              {/* POINTS */}
              <div className="flex flex-col gap-3">
                {stage.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">

                    {/* TICK */}
                    <div
                      className={`w-[18px] h-[18px] min-w-[18px] min-h-[18px] flex-shrink-0 rounded-sm flex items-center justify-center text-white text-[12px] ${stage.tickBg}`}
                    >
                      ✓
                    </div>

                    <p className="font-display text-[#464646] text-sm sm:text-base leading-[1.5rem] tracking-[-0.015rem]">
                      {point}
                    </p>

                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}