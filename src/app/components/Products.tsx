import React from "react";
import { motion } from "motion/react";
import imgProduct1 from "../../assets/images/products/product1.png";
import imgProduct2 from "../../assets/images/products/product2.png";
import imgProduct3 from "../../assets/images/products/product3.png";

export function Products({ lang }: { lang: 'KR' | 'EN' }) {
  const products = [
    {
      id: 1,
      image: imgProduct1,
      title: lang === 'KR' ? "유기농 엑스트라버진 올리브오일 100%" : "Organic Extra Virgin Olive Oil 100%",
      desc: lang === 'KR'
        ? "단일 품종 유기농 올리브를 저온 압착해 올리브 본연의 풍미와 균형을 담은 기본 오일"
        : "Basic oil capturing the natural flavor and balance of olives by cold pressing single-origin organic olives",
      price: "14,900"
    },
    {
      id: 2,
      image: imgProduct2,
      title: lang === 'KR' ? "유기농 엑스트라버진 올리브오일 레몬 올레샷" : "Organic Extra Virgin Olive Oil Lemon Ole Shot",
      desc: lang === 'KR'
        ? "유기농 올리브오일에 스페인산 레몬을 더해 상큼하게 즐기는 데일리 올리브 샷"
        : "Daily olive shot enjoyed refreshingly by adding Spanish lemon to organic olive oil",
      price: "22,500"
    },
    {
      id: 3,
      image: imgProduct3,
      title: lang === 'KR' ? "유기농 엑스트라버진 올리브오일 토마토 올레샷" : "Organic Extra Virgin Olive Oil Tomato Ole Shot",
      desc: lang === 'KR'
        ? "유기농 올리브오일과 토마토를 블렌딩해 가볍게 즐기는 데일리 올리브 샷"
        : "Daily olive shot enjoyed lightly by blending organic olive oil and tomato",
      price: "20,500"
    }
  ];

  return (
    <section id="product" className="py-20 md:py-[120px] bg-[#fffcf3]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          <div className="space-y-2">
            <span className="font-['Gotham',sans-serif] font-bold text-sm md:text-[20px] text-[#fcda2c] tracking-widest">PRODUCT</span>
            <h2 className="font-['Gotham',sans-serif] font-bold text-3xl md:text-[60px] text-[#09090a]">OLIVE OIL COLLECTION</h2>
          </div>
          <p className="font-['Pretendard',sans-serif] font-bold text-lg md:text-[24px] text-[#09090a]">
            {lang === 'KR' ? (
              <>
                유기농 단일 품종 올리브로 만든<br />일상에 자연스럽게 쓰이는 POSITIVA의 올리브오일
              </>
            ) : (
              <>
                Made with organic single-origin olives,<br />POSITIVA's olive oil naturally used in daily life
              </>
            )}
          </p>
        </motion.div>

        <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 md:grid md:grid-cols-3 md:gap-20 md:overflow-visible md:pb-0 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
          {products.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              className="group space-y-6 flex-shrink-0 w-[80vw] snap-center md:w-auto mr-6 md:mr-0 last:mr-0"
            >
              <div className="aspect-square overflow-hidden rounded-sm relative">
                <img src={p.image} alt={p.title} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="px-2 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-['Pretendard',sans-serif] font-bold text-lg md:text-[20px] text-[#09090a]">{p.title}</h3>
                  <p className="font-['Pretendard',sans-serif] font-regular text-sm text-[#858588] leading-relaxed">{p.desc}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-['Gotham',sans-serif] font-bold text-[#09090a] flex items-baseline gap-1">
                    <span className="text-base">₩</span>
                    <span className="text-2xl">{p.price}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}