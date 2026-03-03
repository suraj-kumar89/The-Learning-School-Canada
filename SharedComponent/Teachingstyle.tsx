const assetPath = '/tef-trial-canada-clear-tef-in-120-days';

export default function TeachingStyle() {
  const styles = [
    {
      icon: `${assetPath}/teaching/icon1.svg`,
      text: "Structured lessons. No random topics.",
    },
    {
      icon: `${assetPath}/teaching/icon2.svg`,
      text: "Live speaking correction during class",
    },
    {
      icon: `${assetPath}/teaching/icon3.svg`,
      text: "Practical exam-based simulations",
    },
    {
      icon: `${assetPath}/teaching/icon4.svg`,
      text: "Clear weekly targets and progress tracking",
    },
    {
      icon: `${assetPath}/teaching/icon5.svg`,
      text: "Continuous evaluation and performance feedback",
    },
  ];

  return (
    <section className="w-full flex justify-center py-1 sm:py-2 md:py-3 lg:py-6">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center gap-8 sm:gap-10 md:gap-12">

        {/* HEADING */}
        <h2 className="font-display text-black text-center text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-[125%] tracking-[-0.04rem]">
          Our Teaching Style
        </h2>

        {/* CARDS WRAPPER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 w-full">

          {styles.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center sm:items-start sm:text-left gap-4 p-4 rounded-[1.5rem] bg-[#FEFCF1]"
            >
              {/* ICON */}
              <img
                src={item.icon}
                alt="teaching style"
                className="w-8 h-8 sm:w-[2.5rem] sm:h-[2.5rem] aspect-square object-contain"
              />

              {/* TEXT */}
              <p className="font-display text-black text-sm sm:text-[0.875rem] md:text-[1rem] font-medium leading-[1.5rem] tracking-[-0.0125rem]">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}