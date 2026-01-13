import React from "react";
import { Rocket } from "lucide-react";
import { motion } from "motion/react";
import imgSearchPstatic1 from "../../assets/images/naver_icon.png";
import imgStoreBg from "../../assets/images/section3.png";
import svgPaths from "../../imports/svg-5af16ixw1o";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function StoreBanner({ lang }: { lang: 'KR' | 'EN' }) {
  return (
    <section id="store" className="relative h-[400px] md:h-[600px] w-full overflow-hidden bg-[#09090a]">
      <div className="absolute inset-0">
        <ImageWithFallback src={imgStoreBg} alt="Store Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-radial-[circle_at_center_center] from-black/40 via-black/10 to-transparent" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center gap-[60px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-[20px] items-center text-white"
        >
          <p className="font-['Gotham',sans-serif] font-bold text-[20px] opacity-60 tracking-[-0.114px]">ONLINE STORE</p>
          <p className="font-['Pretendard',sans-serif] font-bold text-3xl md:text-[40px] tracking-[-1.128px] leading-[1.3] break-keep">
            {lang === 'KR'
              ? "지금, POSITIVA를 만나보세요"
              : "Meet POSITIVA Now"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-[16px] w-full sm:w-auto justify-center"
        >
          <a
            href="https://smartstore.naver.com/globalfoodmall"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white flex gap-[16px] h-[72px] w-full sm:w-[360px] items-center justify-center px-[24px] py-[16px] relative rounded-[4px] border border-[#e8e9ea] hover:bg-gray-50 transition-colors"
          >
            <div className="relative rounded-[4px] shrink-0 size-[30px]">
              <img src={imgSearchPstatic1} alt="Naver" className="absolute inset-0 size-full object-cover rounded-[4px]" />
            </div>
            <span className="font-['Gotham',sans-serif] font-bold text-[18px] text-[#09090a] tracking-[-0.0798px] whitespace-nowrap">
              {lang === 'KR' ? "네이버 스마트스토어" : "Naver Smart Store"}
            </span>
          </a>

          <a
            href="https://www.coupang.com/vp/products/9086519269?itemId=26708130620&searchId=feed-22dd83048a1d4ae584c147d6ff14227a-3.3.37%3Aview_together_ads-P9084964244&vendorItemId=93679866768&sourceType=SDP_ADS&clickEventId=b5badb10-ea3a-11f0-8795-de2abe28d52a"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white flex gap-[16px] h-[72px] w-full sm:w-[360px] items-center justify-center px-[24px] py-[16px] relative rounded-[4px] border border-[#e8e9ea] hover:bg-gray-50 transition-colors"
          >
            <div className="relative shrink-0 size-[30px] flex items-center justify-center">
              <Rocket className="size-6 text-[#E60A15]" />
            </div>
            <span className="font-['Pretendard',sans-serif] font-bold text-[18px] text-[#09090a] tracking-[-0.0798px] whitespace-nowrap">
              {lang === 'KR' ? "쿠팡 로켓배송" : "Coupang"}
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}