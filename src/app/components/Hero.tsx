import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";
import img811 from "@/assets/images/hero1.png";
import imgSecond from "@/assets/images/hero2.png";
import imgThird from "@/assets/images/hero3_tomato.png";
import imgFourth from "@/assets/images/hero4.png";

export function Hero({ lang }: { lang: 'KR' | 'EN' }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image: img811,
      title: {
        EN: "100% Organic Extra Virgin Olive Oil",
        KR: "100% Organic Extra Virgin Olive Oil"
      },
      desc: {
        EN: "100% Organic Extra Virgin Olive Oil",
        KR: "유기농 엑스트라버진 올리브오일 100%"
      }
    },
    {
      image: imgSecond,
      title: {
        EN: "Olive Lemon Shot",
        KR: "Olive Lemon Shot"
      },
      desc: {
        EN: "Organic Extra Virgin Olive Oil Lemon Oleo Shot",
        KR: "유기농 엑스트라버진 올리브오일 레몬 올레샷"
      }
    },
    {
      image: imgThird,
      title: {
        EN: "Olive Tomato Shot",
        KR: "Olive Tomato Shot"
      },
      desc: {
        EN: "Organic Extra Virgin Olive Oil Tomato Oltoshot",
        KR: "유기농 엑스트라버진 올리브오일 토마토 올토샷"
      }
    },
    {
      image: imgFourth,
      title: {
        EN: "“Excellence in Every Drop”",
        KR: "“Excellence in Every Drop”"
      },
      desc: {
        EN: "POSITIVA",
        KR: "POSITIVA"
      }
    }
  ];

  // Plugins
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );
  const fadePlugin = useRef(Fade());

  useEffect(() => {
    if (!api) {
      return;
    }

    // Set initial state
    setCurrent(api.selectedScrollSnap());

    // Update state on select
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handlePrev = () => api?.scrollPrev();
  const handleNext = () => api?.scrollNext();

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f7f8] h-[600px] md:h-screen md:min-h-[600px]">
      <div className="absolute inset-0 z-0">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current, fadePlugin.current]}
          className="w-full h-full"
          opts={{
            loop: true,
            duration: 20,
          }}
        >
          <CarouselContent className="h-full -ml-0">
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="h-full w-full pl-0">
                <div className="relative w-full h-full">
                  <img
                    alt={`Hero slide ${index + 1}`}
                    className={`w-full h-full object-cover ${index === 3 ? 'object-[50%_55%]' : index === 2 ? 'object-[50%_50%]' : 'object-[50%_75%]'}`}
                    src={slide.image}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="relative z-10 h-full max-w-[1320px] mx-auto px-5 md:px-[80px] flex flex-col justify-center items-start gap-[80px] pointer-events-none">
        <motion.div
          key={current} // Re-trigger animation on slide change
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`flex flex-col w-full pointer-events-auto ${!slides[current].title.EN ? 'invisible' : ''} ${current === 3 ? 'absolute inset-0' : 'gap-[16px]'}`}
        >
          <h1 className={`font-['Gotham',sans-serif] font-bold md:text-[56px] leading-none text-white uppercase w-full md:whitespace-nowrap ${current === 0 ? 'text-[28px] tracking-[-1px] md:tracking-[-1.12px]' : 'text-4xl tracking-[-1.12px]'} ${current === 3 ? 'absolute top-[38%] w-full text-center !normal-case !tracking-[-0.02em] !font-black !text-[33px] md:!text-[80px] whitespace-nowrap' : ''}`}>
            {current === 0 ? (
              <>100% Organic<br className="md:hidden" /> Extra Virgin Olive Oil</>
            ) : (
              slides[current].title.EN ? (lang === 'KR' ? slides[current].title.KR : slides[current].title.EN) : "Placeholder Title"
            )}
          </h1>
          <p className={`font-['Pretendard',sans-serif] font-medium text-lg md:text-[18px] leading-[1.445] tracking-[-0.0036px] text-white ${current === 3 ? 'absolute bottom-[15%] w-full text-center !font-black tracking-[0.1em] !text-[20px] md:!text-[40px] uppercase' : ''}`}>
            {slides[current].desc.EN ? (lang === 'KR' ? slides[current].desc.KR : slides[current].desc.EN) : "Placeholder Description"}
          </p>
        </motion.div>

        <motion.button
          onClick={(e) => {
            if (current < 3) {
              // Slides 1, 2, 3 (indices 0, 1, 2) -> Anchor to #product
              const productSection = document.getElementById('product');
              productSection?.scrollIntoView({ behavior: 'smooth' });
            } else {
              // Slide 4 (index 3) -> Default (next section)
              const nextSection = e.currentTarget.closest('section')?.nextElementSibling;
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={`pointer-events-auto w-[176px] px-[12px] py-[15px] border border-[#e8e9ea] rounded-[4px] hover:bg-white/10 transition-colors text-white font-['Gotham',sans-serif] font-bold text-[14px] text-center leading-[1.5] tracking-[-0.0798px] uppercase absolute ${current === 3 ? 'bottom-[25%] left-1/2 -translate-x-1/2' : 'bottom-[20%] left-10 md:left-[80px]'}`}
        >
          VIEW MORE
        </motion.button>
      </div>

      {/* Pagination component */}
      <div className="absolute bottom-0 left-0 bg-white px-8 md:px-[60px] py-6 md:py-[40px] flex items-center gap-5 z-20">
        <button onClick={handlePrev} className="text-[#C7C8C9] hover:text-black transition-colors cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 20 20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M15 10H5M10 15l-5-5 5-5" />
          </svg>
        </button>
        <div className="font-['Gotham',sans-serif] text-sm tracking-widest flex items-center gap-1">
          <span className="font-bold text-black">{current + 1}</span>
          <span className="text-black/30">/</span>
          <span className="font-bold text-[#C7C8C9]">{slides.length}</span>
        </div>
        <button onClick={handleNext} className="text-[#C7C8C9] hover:text-black transition-colors cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 20 20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M5 10h10M10 5l5 5-5 5" />
          </svg>
        </button>
      </div>
    </section>
  );
}
