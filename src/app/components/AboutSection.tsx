import React from "react";
import { motion } from "motion/react";
import section3Img from "../../assets/images/about_bg.png";

export function AboutSection({ lang }: { lang: 'KR' | 'EN' }) {
  return (
    <section id="brand" className="relative w-full py-20 md:py-[120px] px-6 md:px-[60px] flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-[1320px] flex flex-col md:block"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="order-1 relative w-full mb-6 bg-white/95 backdrop-blur-sm p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] z-20 text-center space-y-4 rounded-sm md:absolute md:top-12 md:left-12 md:w-auto md:max-w-[700px] md:mb-0 md:order-none"
        >
          <h3 className="font-['Pretendard',sans-serif] font-bold text-2xl md:text-4xl text-[#09090a]">
            {lang === 'KR' ? 'POSITIVA 브랜드 소개' : 'POSITIVA Brand Intro'}
          </h3>
          <p className="font-['Pretendard',sans-serif] font-medium text-sm md:text-lg text-[#09090a] leading-relaxed break-keep">
            {lang === 'KR'
              ? <>POSITIVA (포지티바)는 POSITIVE + VIVA의 합성어로<br /><span className="font-bold">‘긍정적 에너지의 삶’</span>을 표방하고 있습니다.</>
              : <>POSITIVA is a combination of POSITIVE + VIVA,<br /> representing a 'life of positive energy'.</>}
          </p>
        </motion.div>

        <div className="order-2 relative w-full h-[400px] md:h-[800px] overflow-hidden rounded-sm group">
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
            <img src={section3Img} alt="Story" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-center items-start px-10 md:px-[160px] gap-8 md:gap-[60px]">
            <h2 className="font-['Pretendard',sans-serif] font-bold text-2xl md:text-[40px] leading-snug md:leading-[1.3] text-white max-w-2xl">
              {lang === 'KR' ? (
                <>
                  스페인 올리브 밭에서 시작된 <br className="hidden md:block" />
                  POSITIVA의 이야기. <br className="hidden md:block" />
                  올리브가 자라는 환경 그대로를 담아냅니다.
                </>
              ) : (
                <>
                  The story of POSITIVA <br className="hidden md:block" />
                  starting from Spanish olive fields. <br className="hidden md:block" />
                  Capturing the environment where olives grow as is.
                </>
              )}
            </h2>

            <a href="#product" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group/btn">
              <span className="font-['Gotham',sans-serif] font-bold text-sm tracking-widest">VIEW MORE</span>
              <div className="w-5 h-5 flex items-center justify-center border border-white/60 rounded-full group-hover/btn:border-white transition-colors">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 10h10M10 5l5 5-5 5" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}