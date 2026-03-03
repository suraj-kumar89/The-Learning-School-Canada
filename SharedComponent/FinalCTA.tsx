import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="w-full flex justify-center relative overflow-hidden bg-[#0E3E55] py-18 sm:py-16 md:py-30 lg:py-25">

      {/* DECORATIVE SHAPES */}

      {/* TOP LEFT BIG GREEN */}
      <div className="absolute -top-16 -left-16 sm:-top-24 sm:-left-24 w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] rounded-full bg-[#37D39A]" />

      {/* TOP LEFT SMALL CYAN */}
      <div className="absolute top-12 left-16 sm:top-16 sm:left-28 w-[28px] h-[28px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#3BC7D6]" />

      {/* RIGHT SIDE RED DOT */}
      <div className="absolute right-10 sm:right-32 md:right-44 top-1/2 w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] md:w-[22px] md:h-[22px] rounded-full bg-[#FF6B6B]" />

      {/* BOTTOM RIGHT PURPLE */}
      <div className="absolute -bottom-20 -right-20 sm:-bottom-28 sm:-right-28 md:-bottom-32 md:-right-32 w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] rounded-full bg-gradient-to-r from-[#5F65E6] to-[#6C5CE7]" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[900px] px-4 sm:px-6 flex flex-col items-center text-center gap-6 sm:gap-8">

        {/* HEADING */}
        <h2 className="font-display text-white text-[1.6rem] sm:text-[2rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-[125%] tracking-[-0.02em]">
          Start Your TEF Preparation
          <br />
          the Right Way.
        </h2>

        {/* CTA BUTTON */}
        <Link
          href="/tef-trial-clear-tef-in-120-days"
          className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#F2C811] hover:opacity-90 transition"
        >
          <span className="font-display text-[#211C03] text-sm sm:text-base md:text-[1.25rem] font-bold">
            Apply Now & Get 50% OFF
          </span>
        </Link >

        {/* SUBTEXT */}
        <p className="text-white/80 text-[0.65rem] sm:text-[0.75rem] tracking-[0.2em] uppercase">
          Limited Seats Per Batch
        </p>

      </div>
    </section>
  );
}