import React from "react";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-6jw7enmxus";

export function Standard({ lang }: { lang: 'KR' | 'EN' }) {
  const values = [
    {
      id: "single-origin",
      icon: (
        <div className="relative shrink-0 size-[100px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
            <g>
              <path d={svgPaths.p2411fb00} stroke="#171719" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.125" />
              <path d={svgPaths.p170caa00} stroke="#171719" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.125" />
            </g>
          </svg>
        </div>
      ),
      title: "Single Origin",
      subtitle: lang === 'KR' ? "유기농 단일 품종 원료" : "Organic Single Origin",
      desc: lang === 'KR' ? (
        <>
          POSITIVA는 스페인 유기농<br />단일 품종 올리브만을 사용해<br />원료의 출처와 기준을 명확히 합니다.
          <span className="block mt-4 text-[13px] font-normal opacity-70">
            - 아르베키나 품종 (올리브오일, 올레샷)<br />
            - 피쿠알 품종 (올토샷)
          </span>
        </>
      ) : (
        <>
          POSITIVA uses only<br />Spanish organic single-origin olives<br />to clarify the source and standard.
          <span className="block mt-4 text-[13px] font-normal opacity-70">
            - Arbequina Variety (Olive Oil, Oleo Shot)<br />
            - Picual Variety (Oleo-To Shot)
          </span>
        </>
      )
    },
    {
      id: "clean-process",
      icon: (
        <div className="relative shrink-0 size-[100px]">
          <div className="absolute inset-[9.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.375 84.375">
              <g>
                <path d="M42.1875 1.5625V10.9375" stroke="#171719" strokeLinecap="round" strokeWidth="3.125" />
                <path d="M42.1875 73.4375V82.8125" stroke="#171719" strokeLinecap="round" strokeWidth="3.125" />
                <path d="M1.5625 42.1875H10.9375" stroke="#171719" strokeLinecap="round" strokeWidth="3.125" />
                <path d="M73.4375 42.1875H82.8125" stroke="#171719" strokeLinecap="round" strokeWidth="3.125" />
                <path d={svgPaths.p33759380} stroke="#171719" strokeLinecap="round" strokeWidth="3.125" />
                <path d={svgPaths.p3064ab00} stroke="#171719" strokeLinecap="round" strokeWidth="3.125" />
                <path d={svgPaths.p21648140} stroke="#171719" strokeLinecap="round" strokeWidth="3.125" />
                <path d={svgPaths.p9fa7c00} stroke="#171719" strokeLinecap="round" strokeWidth="3.125" />
              </g>
            </svg>
          </div>
        </div>
      ),
      title: "Clean Process",
      subtitle: lang === 'KR' ? "본질에 집중한 공정" : "Process Focused on Essence",
      desc: lang === 'KR' ? (
        <>
          불필요한 가공을 줄이고<br />올리브 본연의 풍미와 균형을<br />정직하게 담아냅니다.
          <span className="block mt-4 text-[13px] font-normal opacity-70">
            - 100% 유기농 올리브오일<br />
            - 100% 레몬, 100% 토마토 착즙
          </span>
        </>
      ) : (
        <>
          We reduce unnecessary processing<br />and honestly capture the natural<br />flavor and balance of olives.
          <span className="block mt-4 text-[13px] font-normal opacity-70">
            - 100% Organic Olive Oil<br />
            - 100% Lemon, 100% Tomato Juice
          </span>
        </>
      )
    },
    {
      id: "everyday-use",
      icon: (
        <div className="relative shrink-0 size-[100px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
            <g>
              <path d={svgPaths.p3ebc7640} stroke="#171719" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.125" />
              <path d={svgPaths.p3f02dca0} stroke="#171719" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.125" />
            </g>
          </svg>
        </div>
      ),
      title: "Everyday Use",
      subtitle: lang === 'KR' ? "일상에 맞춘 섭취 방식" : "Tailored for Daily Use",
      desc: lang === 'KR' ? (
        <>
          요리부터 데일리 샷까지<br />매일 부담 없이 이어지는<br />올리브 푸드를 제안합니다.
        </>
      ) : (
        <>
          From cooking to daily shots,<br />we propose olive food<br />that continues comfortably every day.
        </>
      )
    }
  ];

  return (
    <section className="py-20 md:py-[120px] bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          <div className="space-y-2">
            <span className="font-['Gotham',sans-serif] font-bold text-sm md:text-[20px] text-[#fcda2c] tracking-widest">BRAND VALUE</span>
            <h2 className="font-['Gotham',sans-serif] font-bold text-3xl md:text-[60px] text-[#09090a]">POSITIVA STANDARD</h2>
          </div>
          <p className="font-['Pretendard',sans-serif] font-bold text-lg md:text-[24px] text-[#09090a] break-keep">
            {lang === 'KR' ? (
              <>
                불필요한 것은 덜어내고<br />기준이 되는 것만 남겼습니다.
              </>
            ) : (
              <>
                We removed the unnecessary<br />and kept only the standard.
              </>
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 border-t border-[#f0f0f0] pt-20">
          {values.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }}
              className={`flex flex-col items-center text-center px-10 space-y-[52px] ${i < 2 ? 'md:border-r border-[#f0f0f0]' : ''}`}
            >
              <div className="text-[#09090a]">
                {v.icon}
              </div>
              <div className="space-y-[20px]">
                <h3 className="font-['Gotham',sans-serif] font-bold text-[24px] text-[#09090a] leading-none tracking-[-0.552px]">{v.title}</h3>
                <div className="space-y-[8px]">
                  <p className="font-['Pretendard',sans-serif] font-bold text-[18px] text-[#47484c] tracking-[-0.0036px] break-keep">{v.subtitle}</p>
                  <p className="font-['Pretendard',sans-serif] font-medium text-[14px] text-[#858588] leading-[1.429] tracking-[0.203px] break-keep">
                    {v.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}