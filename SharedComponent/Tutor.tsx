import Link from "next/link";
const assetPath = '/tef-trial-canada-clear-tef-in-120-days';
export default function Tutors() {
  const tutors = [
    { name: "Riya Mahendru", image: `${assetPath}/tutor/tutor1.svg` },
    { name: "Nidhi Gupta", image: `${assetPath}/tutor/tutor5.svg` },
    { name: "Mokshika", image: `${assetPath}/tutor/tutor4.svg` },
    { name: "Aruneshwar", image: `${assetPath}/tutor/tutor3.svg` },
    { name: "Kashish", image: `${assetPath}/tutor/tutor2.svg` },
    { name: "Tanya Singh", image: `${assetPath}/tutor/tutor6.svg` },
  ];

  // duplicate for infinite loop
  const scrollingTutors = [...tutors, ...tutors];

  return (
 <section className="w-full flex justify-center pt-4 pb-16 md:pt-6 md:pb-16 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col gap-8 md:gap-12">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6">

          <h2 className="w-full max-w-[49.375rem] font-display font-bold text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-tight md:leading-[3.5rem] lg:leading-[3.75rem] tracking-[-0.04rem] text-center lg:text-left">
            <span className="text-[#007AD2]">Learn From</span>{" "}
            <span className="text-black">
              Experienced & Certified TEF Tutors
            </span>
          </h2>

          <Link
            href="/tef-trial-clear-tef-in-120-days"
            className="flex shrink-0 px-[2rem] py-[1.25rem] items-center gap-[0.5rem] rounded-[3.875rem] bg-[#E9C81A] whitespace-nowrap"
          >
            <span className="font-display text-[#211C03] text-[0.9rem] sm:text-[1rem] font-bold leading-[1.71875rem]">
              Apply Now and Get 50% OFF
            </span>
          </Link>

        </div>

        {/* AUTO SCROLL CARDS */}
        <div className="w-full overflow-hidden">
          <div className="flex gap-4 sm:gap-6 tutor-scroll w-max">

            {scrollingTutors.map((tutor, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-[2rem] overflow-hidden bg-[#F7E7A9] w-[9rem] sm:w-[11rem] md:w-[14rem] lg:w-[16rem] flex-shrink-0"
              >
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-full aspect-square object-cover"
                />

                <div className="w-full bg-white py-3 flex justify-center items-center">
                  <p className="font-display text-black text-xs sm:text-sm md:text-base font-medium text-center px-2">
                    {tutor.name}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}