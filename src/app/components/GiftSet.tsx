import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgGift2 from "../../assets/images/gift/gift_set_2.png";
import imgGift4 from "../../assets/images/gift/gift_set_4.png";
import imgGiftUpcoming from "../../assets/images/gift/gift_set_upcoming.png";

type Gift = {
    id: number;
    image: string;
    title: string;
    composition: string;
    detail: string;
};

export function GiftSet({ lang }: { lang: 'KR' | 'EN' }) {
    const [selectedGift, setSelectedGift] = useState<Gift | null>(null);

    const gifts: Gift[] = [
        {
            id: 1,
            image: imgGift2,
            title: lang === 'KR' ? "POSITIVA 2입 선물세트" : "POSITIVA 2-Piece Gift Set",
            composition: lang === 'KR' ? "(구성 : 올리브오일+올레샷)" : "(Composition : Olive Oil + Ole Shot)",
            detail: lang === 'KR'
                ? "최상급 엑스트라버진 올리브오일과 상큼한 올레샷으로 구성된 실속 선물세트입니다."
                : "A practical gift set consisting of premium extra virgin olive oil and refreshing Ole Shot."
        },
        {
            id: 2,
            image: imgGift4,
            title: lang === 'KR' ? "POSITIVA 4입 선물세트" : "POSITIVA 4-Piece Gift Set",
            composition: lang === 'KR' ? "(구성 : 올리브오일 2입+올레샷 2입)" : "(Composition : Olive Oil 2pcs + Ole Shot 2pcs)",
            detail: lang === 'KR'
                ? "풍성한 구성으로 감사의 마음을 전하기 좋은 프리미엄 4입 선물세트입니다."
                : "A premium 4-piece gift set perfect for expressing gratitude with a generous composition."
        },
        {
            id: 3,
            image: imgGiftUpcoming,
            title: "Upcoming",
            composition: lang === 'KR' ? "(구성 : 올레샷+올토샷)" : "(Composition : Ole Shot + Ole To Shot)",
            detail: lang === 'KR'
                ? "새로운 조합으로 찾아뵐 예정입니다."
                : "Coming soon with a new combination."
        }
    ];

    return (
        <section id="gift-set" className="py-20 md:py-[120px] bg-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] space-y-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center space-y-4"
                >
                    <div className="space-y-2">
                        <span className="font-['Gotham',sans-serif] font-bold text-sm md:text-[20px] text-[#fcda2c] tracking-widest">GIFT SET</span>
                        <h2 className="font-['Gotham',sans-serif] font-bold text-3xl md:text-[60px] text-[#09090a]">POSITIVA Gift Set Collection</h2>
                    </div>
                    <p className="font-['Pretendard',sans-serif] font-bold text-lg md:text-[24px] text-[#09090a]">
                        {lang === 'KR' ? "소중한분께 선물하기 좋은 POSITIVA 선물세트" : "POSITIVA Gift Set, perfect for gifting to your loved ones"}
                    </p>
                </motion.div>

                <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 md:grid md:grid-cols-3 md:gap-20 md:overflow-visible md:pb-0 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
                    {gifts.map((g, index) => (
                        <motion.div
                            key={g.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                            onClick={() => setSelectedGift(g)}
                            className="group space-y-6 flex-shrink-0 w-[80vw] snap-center md:w-auto mr-6 md:mr-0 last:mr-0 cursor-pointer"
                        >
                            <div className="aspect-square overflow-hidden rounded-sm relative bg-[#F9F9F9]">
                                <img src={g.image} alt={g.title} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="px-2 space-y-2 text-center md:text-left">
                                <h3 className="font-['Pretendard',sans-serif] font-bold text-lg md:text-[20px] text-[#09090a]">{g.title}</h3>
                                <p className="font-['Pretendard',sans-serif] font-medium text-sm text-[#858588] leading-relaxed">
                                    {g.composition}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedGift && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedGift(null)}
                            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                        >
                            <div className="bg-[#fffcf3] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl pointer-events-auto flex flex-col md:flex-row relative">
                                <button
                                    onClick={() => setSelectedGift(null)}
                                    className="absolute top-4 right-4 p-2 text-[#09090a]/50 hover:text-[#09090a] transition-colors z-10"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <div className="w-full md:w-1/2 bg-[#F5F5F7] flex items-center justify-center p-8 md:p-12">
                                    <div className="relative w-full aspect-square">
                                        <img
                                            src={selectedGift.image}
                                            alt={selectedGift.title}
                                            className="w-full h-full object-contain mix-blend-multiply"
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-8">
                                    <div>
                                        <span className="font-['Gotham',sans-serif] font-bold text-[#fcda2c] tracking-widest block mb-2">GIFT SET DETAIL</span>
                                        <h3 className="font-['Pretendard',sans-serif] font-bold text-2xl md:text-3xl text-[#09090a] leading-tight">
                                            {selectedGift.title}
                                        </h3>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-['Pretendard',sans-serif] font-bold text-lg text-[#09090a] mb-2">{lang === 'KR' ? '구성품' : 'Composition'}</h4>
                                            <p className="font-['Pretendard',sans-serif] font-medium text-[#555] leading-relaxed">
                                                {selectedGift.composition}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-['Pretendard',sans-serif] font-bold text-lg text-[#09090a] mb-2">{lang === 'KR' ? '상세 설명' : 'Detail'}</h4>
                                            <p className="font-['Pretendard',sans-serif] font-regular text-[#555] leading-relaxed text-sm">
                                                {selectedGift.detail}
                                            </p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
