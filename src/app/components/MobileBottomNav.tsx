import React from "react";
import { Instagram, Phone, Mail } from "lucide-react";

export function MobileBottomNav({ lang }: { lang: 'KR' | 'EN' }) {
    const instagramLink = lang === 'KR'
        ? "https://instagram.com/positiva_kor"
        : "https://instagram.com/positiva_usa";

    return (
        <div className="fixed bottom-0 left-0 right-0 h-[60px] bg-white border-t border-[#f0f0f0] flex items-center justify-around z-50 md:hidden bg-opacity-95 backdrop-blur-sm pb-safe-area-bottom">
            <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1 w-full h-full active:bg-gray-50 transition-colors"
            >
                <Instagram className="size-5 text-[#09090a]" />
                <span className="font-['Gotham',sans-serif] font-bold text-[10px] text-[#09090a] uppercase tracking-wider">Instagram</span>
            </a>

            <div className="w-[1px] h-[20px] bg-[#f0f0f0]" />

            <a
                href="tel:01043639985"
                className="flex flex-col items-center justify-center gap-1 w-full h-full active:bg-gray-50 transition-colors"
            >
                <Phone className="size-5 text-[#09090a]" />
                <span className="font-['Gotham',sans-serif] font-bold text-[10px] text-[#09090a] uppercase tracking-wider">Phone</span>
            </a>

            <div className="w-[1px] h-[20px] bg-[#f0f0f0]" />

            <a
                href="mailto:daeatrading@naver.com"
                className="flex flex-col items-center justify-center gap-1 w-full h-full active:bg-gray-50 transition-colors"
            >
                <Mail className="size-5 text-[#09090a]" />
                <span className="font-['Gotham',sans-serif] font-bold text-[10px] text-[#09090a] uppercase tracking-wider">Email</span>
            </a>
        </div>
    );
}
