import React from "react";
import { motion } from "motion/react";
import imgTopLeft from "../../assets/images/section2/image1.png"; // Top Left
import imgTopRight from "../../assets/images/section2/image2.png"; // Top Right
import imgBottomLeft from "../../assets/images/section2/image3.png"; // Bottom Left
import imgBottomRight from "../../assets/images/section2/image4.png"; // Bottom Right

export function Excellence({ lang }: { lang: 'KR' | 'EN' }) {
  return (
    <section className="relative py-20 md:pt-[120px] md:pb-[300px] bg-white overflow-hidden">
      {/* Top Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -100, y: -100 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute -top-20 left-10 md:left-[60px] w-[300px] md:w-[562px] h-[480px] overflow-hidden hidden lg:block"
      >
        <img src={imgTopLeft} alt="" className="w-full h-full object-contain" />
      </motion.div>

      {/* Top Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 100, y: -100 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="absolute top-0 right-0 w-[200px] md:w-[325px] h-[578px] hidden lg:block"
      >
        <img src={imgBottomLeft} alt="" className="w-full h-full object-contain" />
      </motion.div>

      {/* Bottom Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -100, y: 100 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="absolute bottom-10 left-[-58px] w-[300px] md:w-[547px] h-[574px] hidden lg:block"
      >
        <img src={imgTopRight} alt="" className="w-full h-full object-contain" />
      </motion.div>

      {/* Bottom Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 100, y: 100 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="absolute -bottom-16 right-[30px] w-[400px] h-[400px] flex items-center justify-end overflow-hidden hidden xl:block"
      >
        <img src={imgBottomRight} alt="" className="max-w-full max-h-full w-auto h-auto object-contain" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative max-w-[1440px] mx-auto px-3 md:px-6 flex flex-col items-center text-center gap-10"
      >
        <div className="space-y-4">
          <h2 className="font-['Gotham',sans-serif] font-bold text-5xl md:text-[120px] leading-[0.9] tracking-tighter text-[#09090a] uppercase">
            EXCELLENCE<br />IN EVERY DROP<br />
            <span className="text-4xl md:text-[100px]">by POSITIVA</span>
          </h2>
        </div>

        <div className="space-y-4 max-w-2xl">
          <p className="font-['Pretendard',sans-serif] font-bold text-xl md:text-[24px] text-[#09090a]">
            {lang === 'KR'
              ? "한 방울까지 완성도를 고민하는 POSITIVA"
              : "POSITIVA, obsessing over perfection in every drop."}
          </p>
          <div className="font-['Pretendard',sans-serif] font-medium text-base md:text-[16px] text-[#47484c] leading-relaxed">
            {lang === 'KR' ? (
              <>
                <p>자연이 만든 흐름과 시간을 따라 올리브의 맛을 담아냅니다.</p>
                <p>한 방울에 집중해, 불필요한 것은 덜어냈습니다.</p>
              </>
            ) : (
              <>
                <p>We capture the taste of olives following nature's flow and time.</p>
                <p>Focusing on every drop, we removed the unnecessary.</p>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}