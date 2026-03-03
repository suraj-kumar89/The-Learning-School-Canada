import Link from "next/link";
const assetPath = '/tef-trial-canada-clear-tef-in-120-days';
export default function Header() {
  return (
    <header className="w-full flex justify-center bg-[#FBF4D1] py-4 sm:py-5 lg:py-6">

      {/* Header Layout Container */}
      <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-0 flex justify-between items-center">

        {/* LOGO */}
        <div className="shrink-0 aspect-square w-12 h-12 sm:w-16 sm:h-16 lg:w-[95px] lg:h-[95px]">
          <img
            src={`${assetPath}/logo.svg`}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
        {/* BUTTON */}
        <Link
          href="/tef-trial-clear-tef-in-120-days"
          className="
            flex items-center gap-2
            rounded-xl lg:rounded-2xl
            bg-[#8C7810]
            text-[#FBF4D1]
            font-display font-bold

            px-4 py-2 text-sm
            sm:px-6 sm:py-3 sm:text-base
            lg:px-[28px] lg:py-[20px] lg:text-[24px] lg:leading-[30px]
  "
        >
          Book a Trial
        </Link>
      </div>
    </header>
  );
}