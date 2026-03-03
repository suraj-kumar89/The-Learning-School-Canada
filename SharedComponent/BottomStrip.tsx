"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Bottomestrip() {
  const [showStrip, setShowStrip] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowStrip(window.scrollY > 350);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`bottomstrip-wrapper ${showStrip ? "active" : ""}`}>
        
        {/* MAIN TEXT */}
        <div className="bs-price-section">
          Add Up To 50 CRS Points
        </div>

        {/* SUB TEXT */}
        <div className="bs-features">
          <div className="bs-feature">
            Structured TEF Coaching
          </div>

          <div className="bs-feature">
            Built for Working Professionals
          </div>
        </div>

      <Link
  href="/tef-trial-clear-tef-in-120-days"
  className="mx-auto lg:mx-0 w-fit px-6 md:px-8 py-3 md:py-4 rounded-full bg-[#E9C81A] text-[#211C03] font-display text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:scale-105 transition inline-block"
>
  Book your seat now
</Link>
      </div>

      <style jsx>{`
        .bottomstrip-wrapper {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 999;

          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6rem;

          padding: 1.5rem 8rem;

          backdrop-filter: blur(16px);
          background: rgba(251, 244, 209, 0.65);

          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .bottomstrip-wrapper.active {
          opacity: 1;
        }

        .bs-price-section {
          font-size: 15px;
          font-weight: 700;
          color: #111;
        }

        .bs-features {
          display: flex;
          gap: 3rem;
          align-items: center;
          font-size: 15px;
          font-weight: 700;
          color: #111;
        }

        .bs-feature {
          display: flex;
          gap: 3rem;
          align-items: center;
          font-size: 15px;
          font-weight: 700;
          color: #111;
        }

  transition: transform 0.2s ease;
}
        
        /* MOBILE */
        @media (max-width: 768px) {
          .bottomstrip-wrapper {
            padding: 0.8rem 1rem;
            gap: 1rem;
            justify-content: space-between;
            align-items: center;
          }

       
        }
      `}</style>
    </>
  );
}