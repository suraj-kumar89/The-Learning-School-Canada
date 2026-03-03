"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "I am a beginner. Can I still prepare for TEF?",
      answer:
        "Yes. We assess your current level first and create a preparation roadmap based on your target CLB and CRS goal.",
    },
    {
      question: "How many CRS points can French add?",
      answer: "Depending on your English score and profile, French can add up to 25–50 CRS points under Express Entry.",
    },
    {
      question: " How long does it take to reach CLB 7?",
      answer:
        "It depends on your starting level and consistency. Most working professionals prepare within 3–4 months with structured guidance.",
    },
    {
      question: "Is TEF useful if I am already in Canada?",
      answer:
        "Yes. French can significantly improve your CRS score, especially if cut-offs are above your current range.",
    },
    {
      question: "I work full-time. Are batches flexible?",
      answer:
        "Yes. We offer flexible online batches designed for working professionals.",
    },
    {
      question: "What happens after I fill the form?",
      answer:
        "Our advisor will review your details and help you understand your current level and next steps for TEF preparation.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full flex justify-center py-12 sm:py-16 md:py-20 lg:py-16">
      <div className="w-full max-w-[900px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center gap-8 sm:gap-10 md:gap-12">

        {/* HEADING */}
        <h2 className="font-display text-black text-center text-[1.5rem] sm:text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-bold leading-tight tracking-[-0.04rem]">
          Frequently Asked Questions
        </h2>

        {/* FAQ CONTAINER */}
        <div className="w-full rounded-[1.5rem] bg-[#EDE7D6] p-5 sm:p-6 md:p-10 lg:p-12 flex flex-col gap-5 sm:gap-6">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-black/10 pb-5 sm:pb-6 last:border-none"
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                >
                  <span
                    className={`font-display text-sm sm:text-base md:text-[1.125rem] lg:text-[1.25rem] font-semibold ${
                      isOpen ? "text-[#3E4A1D]" : "text-[#8B5CF6]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* ARROW */}
                  <span
                    className={`text-lg sm:text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ^
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[400px] mt-3 sm:mt-4" : "max-h-0"
                  }`}
                >
                  <p className="font-display text-[#5E5E5E] text-sm sm:text-base leading-[1.6rem] max-w-[520px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}