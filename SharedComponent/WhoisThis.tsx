const assetPath = '/tef-trial-canada-clear-tef-in-120-days';

export default function WhoIsThisFor() {
  const goodFor = [
    "Express Entry applicants preparing for Canada PR",
    "Spouse applicants looking to increase CRS score",
    "IELTS maxed candidates aiming for additional CRS points",
    "Candidates who failed TEF earlier and want a structured plan",
    "Working professionals with limited preparation time",
    "Students stuck at A2 or B1 level",
    "Serious learners committed to clearing TEF in 120 days",
  ];

  const notFor = [
    "Casual language learners",
    "Hobby French learners",
    "People without clear PR goals",
    "Those exploring without commitment",
  ];

  return (
    <section className="w-full flex justify-center py-1 sm:py-2 md:py-2 lg:py-2">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col gap-8 sm:gap-10 md:gap-12">

        {/* SECTION HEADING */}
        <h2 className="font-display text-black text-center text-[1.75rem] sm:text-[2rem] md:text-[2.75rem] lg:text-[3rem] font-bold leading-[125%]">
          Who Is This For
        </h2>

        {/* CARDS WRAPPER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {/* LEFT CARD — THIS IS FOR */}
          <div className="flex flex-col items-start gap-8 sm:gap-10 md:gap-12 p-6 sm:p-8 md:p-10 rounded-[1.5rem] bg-[#FDFAE9]">

            {/* HEADER */}
            <div className="flex items-center gap-3 sm:gap-4">

              <div className="w-12 h-12 sm:w-[3.75rem] sm:h-[3.75rem] flex items-center justify-center">
                <img
                  src={`${assetPath}/whoisthis/icon1.svg`}
                  alt="check"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="font-display text-black text-[1.4rem] sm:text-[1.6rem] md:text-[1.75rem] font-bold">
                This Is For:
              </h3>
            </div>

            {/* LIST */}
            <div className="flex flex-col gap-4 sm:gap-5 w-full">
              {goodFor.map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">

                  <div className="w-6 h-6 sm:w-8 sm:h-8 min-w-[1.5rem] sm:min-w-[2rem] flex items-center justify-center flex-shrink-0">
                    <img
                      src={`${assetPath}/whoisthis/icon3.svg`}
                      alt="tick"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <p className="font-display text-[#464646] text-sm sm:text-base leading-[1.5rem]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD — NOT FOR */}
          <div className="flex flex-col items-start gap-8 sm:gap-10 md:gap-12 p-6 sm:p-8 md:p-10 rounded-[1.5rem] bg-gray-100">

            {/* HEADER */}
            <div className="flex items-center gap-3 sm:gap-4">

              <div className="w-12 h-12 sm:w-[3.75rem] sm:h-[3.75rem] flex items-center justify-center">
                <img
                  src={`${assetPath}/whoisthis/icon2.svg`}
                  alt="cross"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="font-display text-black text-[1.4rem] sm:text-[1.6rem] md:text-[1.75rem] font-bold">
                This Is Not For:
              </h3>
            </div>

            {/* LIST */}
            <div className="flex flex-col gap-4 sm:gap-5 w-full">
              {notFor.map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">

                  <div className="w-6 h-6 sm:w-8 sm:h-8 min-w-[1.5rem] sm:min-w-[2rem] flex items-center justify-center flex-shrink-0">
                    <img
                      src={`${assetPath}/whoisthis/icon4.svg`}
                      alt="cross"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <p className="font-display text-[#464646] text-sm sm:text-base leading-[1.5rem]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}