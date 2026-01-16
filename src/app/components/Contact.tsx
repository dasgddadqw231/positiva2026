import React from "react";
import { Mail, Phone, MapPin, Instagram, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Contact({ lang }: { lang: 'KR' | 'EN' }) {
  return (
    <section id="contact" className="relative py-20 md:py-[120px] bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 space-y-16 md:space-y-24">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h2 className="font-['Gotham',sans-serif] font-bold text-5xl md:text-[80px] leading-none tracking-tighter text-[#09090a] uppercase">
              GET IN TOUCH
            </h2>
            <p className="font-['Pretendard',sans-serif] font-medium text-lg md:text-[20px] text-[#47484c] w-full break-keep leading-relaxed">
              {lang === 'KR'
                ? "POSITIVA의 프리미엄 올리브 오일에 대해 궁금한 점이 있으시다면 언제든 문의해 주세요."
                : "If you have any questions about POSITIVA's premium olive oil, please feel free to contact us."}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.2fr_1fr] gap-6 md:gap-8"
        >
          <div className="flex flex-col items-start gap-6 bg-[#fafafa] p-8 md:p-10 rounded-[24px] border border-[#f0f0f0] hover:bg-[#FFFCF3] transition-colors group">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 group-hover:bg-white transition-colors">
              <Mail className="w-5 h-5 text-[#09090a]" />
            </div>
            <div>
              <p className="font-['Gotham',sans-serif] font-bold text-sm text-[#09090a] uppercase tracking-wider mb-2">Email <span className="font-['Pretendard',sans-serif] text-[#858588] normal-case tracking-normal">{lang === 'KR' ? '(비즈니스 제안)' : '(Business Inquiries)'}</span></p>
              <a href="mailto:daeatrading@naver.com" className="font-['Pretendard',sans-serif] text-[16px] text-[#858588] hover:text-[#09090a] transition-colors break-all">
                daeatrading@naver.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 bg-[#fafafa] p-8 md:p-10 rounded-[24px] border border-[#f0f0f0] hover:bg-[#FFFCF3] transition-colors group">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 group-hover:bg-white transition-colors">
              <Phone className="w-5 h-5 text-[#09090a]" />
            </div>
            <div>
              <p className="font-['Gotham',sans-serif] font-bold text-sm text-[#09090a] uppercase tracking-wider mb-2">Phone</p>
              <a href="tel:07080647732" className="font-['Pretendard',sans-serif] text-[16px] text-[#858588] hover:text-[#09090a] transition-colors">
                070-8064-7732
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 bg-[#fafafa] p-8 md:p-10 rounded-[24px] border border-[#f0f0f0] hover:bg-[#FFFCF3] transition-colors group">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 group-hover:bg-white transition-colors">
              <MapPin className="w-5 h-5 text-[#09090a]" />
            </div>
            <div>
              <p className="font-['Gotham',sans-serif] font-bold text-sm text-[#09090a] uppercase tracking-wider mb-2">Address</p>
              <p className="font-['Pretendard',sans-serif] text-[15px] text-[#858588] tracking-tighter leading-snug">
                {lang === 'KR'
                  ? <>서울특별시 강남구 봉은사로 524<br /><span className="whitespace-nowrap">(코엑스 인터콘티넨탈서울) 비2층 200-10호</span></>
                  : "200-10, B2, 524, Bongeunsa-ro, Gangnam-gu, Seoul, Republic of Korea"}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 bg-[#fafafa] p-8 md:p-10 rounded-[24px] border border-[#f0f0f0] hover:bg-[#FFFCF3] transition-colors group">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 group-hover:bg-white transition-colors">
              <Instagram className="w-5 h-5 text-[#09090a]" />
            </div>
            <div>
              <p className="font-['Gotham',sans-serif] font-bold text-sm text-[#09090a] uppercase tracking-wider mb-2">Instagram</p>
              <div className="flex flex-col gap-1">
                <a href="https://instagram.com/positiva_kor" target="_blank" rel="noopener noreferrer" className="font-['Gotham',sans-serif] font-bold text-[14px] text-[#858588] hover:text-[#09090a] transition-colors">
                  @positiva_kor
                </a>
                <a href="https://instagram.com/positiva_usa" target="_blank" rel="noopener noreferrer" className="font-['Gotham',sans-serif] font-bold text-[14px] text-[#858588] hover:text-[#09090a] transition-colors">
                  @positiva_usa
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}