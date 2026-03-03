"use client";

import Header from "@/SharedComponent/Header";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#FBF4D1] flex flex-col">
      {/* Header */}
      <Header />

      {/* 1. Changed items-center to items-start to allow manual downward movement
          2. Added pt-32 (padding-top) to move content down
      */}
      <div className="flex-1 flex items-start justify-center pt-32 md:pt-48 px-6">

        <div className="text-center max-w-5xl w-full">

          {/* BIGGER HEADING: text-5xl to text-8xl */}
          <h1 
  style={{ fontSize: '65px', marginTop:"100px", color: '#007AD2', fontWeight: 'bold' }}
  className="leading-tight mb-12 text-center"
>
  🎉 Thank You for Submitting!
</h1>

          {/* BIGGER PARAGRAPH: text-2xl to text-4xl */}
          <p className="text-2xl sm:text-2xl md:text-3xl text-[#464646] font-medium leading-relaxed mb-16"  style={{marginTop:"30px"}}>
            We have received your details successfully.
            <br className="hidden md:block" />
            Our team will contact you shortly to guide you further.
          </p>

          {/* BUTTON WRAPPER */}
          <div className="flex justify-center">
            <Link
              href="/"
              className="
                inline-flex items-center justify-center
                rounded-2xl
                bg-[#8C7810]
                text-[#FBF4D1]
                font-display font-bold
                px-12 py-5
                sm:px-16 sm:py-6
                text-2xl sm:text-2xl lg:text-3xl
                transition-all duration-300
                hover:scale-105
                shadow-xl
              "
              style={{marginTop:"30px"}}
            >
              Back to Home
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}