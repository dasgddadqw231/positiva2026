import React from "react";
import { motion } from "motion/react";
import imgNews1 from "../../assets/images/news/news1.png";
import imgNews2 from "../../assets/images/news/news2.png";
import imgNews3 from "../../assets/images/news/news3.png";

export function News({ lang }: { lang: 'KR' | 'EN' }) {
  const newsItems = [
    {
      id: 1,
      image: imgNews1,
      title: lang === 'KR' ? "POSITIVA 온라인 스토어 오픈 안내" : "POSITIVA Online Store Grand Opening",
      date: "2026.01.05"
    },
    {
      id: 2,
      image: imgNews2,
      title: lang === 'KR' ? "셀럽의 잇템! 저스트 메이크업 심사위원의 손민수" : "Celebrity's It Item! Just Makeup Judge's Choice",
      date: "2026.01.03"
    },
    {
      id: 3,
      image: imgNews3,
      title: lang === 'KR' ? "현대백화점 무역센터점 팝업" : "Hyundai Department Store Trade Center Popup",
      date: "2025.12.28"
    }
  ];

  return (
    <section id="news" className="py-20 md:py-[120px] bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          <div className="space-y-2">
            <span className="font-['Gotham',sans-serif] font-bold text-sm md:text-[20px] text-[#fcda2c] tracking-widest">NEWS</span>
            <h2 className="font-['Pretendard',sans-serif] font-bold text-3xl md:text-[40px] text-[#09090a]">
              {lang === 'KR' ? (
                <>
                  제품 출시, 브랜드 소식 등<br />POSITIVA의 이야기를 전합니다.
                </>
              ) : (
                <>
                  We deliver POSITIVA's stories including<br />product launches and brand news.
                </>
              )}
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              className="group cursor-pointer space-y-6"
            >
              <div className="aspect-[430/280] overflow-hidden rounded-sm">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="px-1 space-y-2">
                <h3 className="font-['Pretendard',sans-serif] font-medium text-lg text-[#09090a] line-clamp-1 group-hover:underline">
                  {item.title}
                </h3>
                <p className="font-['Pretendard',sans-serif] font-regular text-sm text-[#858588]">
                  {item.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
