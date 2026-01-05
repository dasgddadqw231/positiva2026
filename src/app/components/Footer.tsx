import React from "react";

export function Footer({ lang }: { lang: 'KR' | 'EN' }) {
  return (
    <footer className="bg-[#171719] text-white pt-20 pb-10 px-6 md:px-[60px]">
      <div className="max-w-[1440px] mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="space-y-8">
            <h2 className="font-['Gotham',sans-serif] font-bold text-2xl md:text-[28px] leading-snug tracking-tight">
              Olive Oil,<br />defined by POSITIVA.
            </h2>
            
            <div className="space-y-2 font-['Pretendard',sans-serif] font-medium text-sm text-[#858588] leading-relaxed">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>{lang === 'KR' ? "(주)대아트레이딩" : "Daea Trading Co., Ltd."}</span>
                <span className="w-px h-3 bg-[#47484c]" />
                <span>{lang === 'KR' ? "대표 백민주" : "CEO Minju Baek"}</span>
              </div>
              <p>
                {lang === 'KR' 
                  ? "서울특별시 강남구 봉은사로 524 (코엑스인터콘티넨탈서울) 비2층 200-10호" 
                  : "200-10, B2, 524, Bongeunsa-ro, Gangnam-gu, Seoul, Republic of Korea"}
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>{lang === 'KR' ? "고객센터: 010-4363-9985" : "Customer Center: 010-4363-9985"}</span>
                <span className="w-px h-3 bg-[#47484c]" />
                <span>{lang === 'KR' ? "이메일: daeatrading@naver.com" : "Email: daeatrading@naver.com"}</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>{lang === 'KR' ? "사업자등록번호: 809-81-03572" : "Business Registration No.: 809-81-03572"}</span>
                <span className="w-px h-3 bg-[#47484c]" />
                <span>{lang === 'KR' ? "통신판매번호: 2025-서울강남-04890" : "E-commerce Permit: 2025-Seoul Gangnam-04890"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-[#47484c] flex flex-col sm:flex-row justify-center items-center gap-6">
          <p className="font-['Pretendard',sans-serif] font-medium text-[13px] text-[#47484c] text-center">
            © 2026 POSITIVA, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
