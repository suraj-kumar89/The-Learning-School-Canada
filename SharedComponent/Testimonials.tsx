"use client";
const assetPath = '/tef-trial-canada-clear-tef-in-120-days';
import { useRef, useState } from "react";

/* ---------- TYPES ---------- */
type Testimonial = {
  name: string;
  video: string;
  rating: number;
};

export default function Testimonials() {
  /* ---------- REFS ---------- */
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  /* ---------- PLAY STATE ---------- */
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  /* ---------- DATA ---------- */
  const testimonials: Testimonial[] = [
    { name: "Prisha Kotiyal", video: `${assetPath}/testimonials/vd1.mp4`, rating: 5 },
    { name: "Rajshree Banerjee", video: `${assetPath}/testimonials/video2.mp4`, rating: 5 },
    { name: "Vedanshi Joshi", video: `${assetPath}/testimonials/video3.mp4`, rating: 5 },
    { name: "Prathyaksh Mini Prabhash", video: `${assetPath}/testimonials/video4.mp4`, rating: 5 },
    { name: "Suhani", video: `${assetPath}/testimonials/video5.mp4`, rating: 5 },
    { name: "Anshul", video: `${assetPath}/testimonials/video6.mp4`, rating: 5 },
    { name: "Arunoday", video: `${assetPath}/testimonials/video7.mp4`, rating: 5 },
    { name: "Prathima", video: `${assetPath}/testimonials/video8.mp4`, rating: 5 },
  ];

  /* ---------- PLAY / PAUSE ---------- */
  const toggleVideo = (index: number) => {
    const currentVideo = videoRefs.current[index];
    if (!currentVideo) return;

    // pause all other videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) video.pause();
    });

    if (currentVideo.paused) {
      currentVideo.play();
      setPlayingIndex(index);
    } else {
      currentVideo.pause();
      setPlayingIndex(null);
    }
  };

  /* ---------- SCROLL ---------- */
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full flex justify-center py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col gap-10">

        {/* HEADING */}
        <h2 className="text-center text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold">
          Hear From Our Students
        </h2>

        {/* SLIDER WRAPPER */}
        <div className="relative">

          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center"
          >
            ←
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center"
          >
            →
          </button>

          {/* HORIZONTAL SCROLL */}
          <div
            ref={scrollRef}
            className="w-full overflow-x-auto scrollbar-hide"
          >
            <div className="flex gap-4 sm:gap-6 snap-x snap-mandatory px-12">

              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="relative snap-start min-w-[260px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[340px] rounded-[1.5rem] overflow-hidden group bg-black"
                >
                  {/* VIDEO ONLY */}
                  <video
                    ref={(el: HTMLVideoElement | null) => {
                      videoRefs.current[index] = el;
                    }}
                    src={item.video}
                    className="w-full h-[320px] sm:h-[360px] md:h-[420px] object-cover"
                  />

                  {/* PLAY / PAUSE BUTTON */}
                  <div
                    onClick={() => toggleVideo(index)}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition">

                      {/* PLAY ICON */}
                      {playingIndex !== index ? (
                        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-1">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      ) : (
                        /* PAUSE ICON */
                        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                          <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* INFO */}
                  <div className="absolute bottom-4 w-full flex flex-col items-center gap-2 text-white">
                    <p className="font-medium">{item.name}</p>

                    <div className="flex gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <svg key={i} viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                          <path d="M12 17.3l6.18 3.7-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}