import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgProduct1 from "../../assets/images/products/product1.png";
import imgProduct2 from "../../assets/images/products/product2.png";
import imgProduct3 from "../../assets/images/products/product3.png";
import imgVidoria from "../../assets/images/vidoria_history.png";
import imgOleofer from "../../assets/images/oleofer_history.png";

type Product = {
  id: number;
  image: string;
  title: string;
  desc: string | ReactNode;
  detail: ReactNode;
};

export function Products({ lang }: { lang: 'KR' | 'EN' }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      image: imgProduct1,
      title: lang === 'KR' ? "유기농 엑스트라버진 올리브오일 100%" : "Organic Extra Virgin Olive Oil 100%",
      desc: lang === 'KR'
        ? <>산도 0.19 프리미엄 엑스트라버진 올리브오일<br />스페인 아르베키나 품종</>
        : <>Acidity 0.19 Premium Extra Virgin Olive Oil<br />Spanish Arbequina Variety</>,
      detail: lang === 'KR'
        ? (
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-2">
              <span className="text-[#FF9D00] text-lg leading-none mt-0.5">★</span>
              <div className="flex flex-col">
                <span className="font-bold text-[#09090a] text-base">100% 스페인 유기농 단일 품종</span>
                <span className="text-[#858588] text-sm">아르베키나 품종</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#FF9D00] text-lg leading-none mt-0.5">★</span>
              <div className="flex flex-col">
                <span className="font-bold text-[#09090a] text-base">프리미엄 엑스트라버진 등급 오일</span>
                <span className="text-[#858588] text-sm">상위 1% 최저 산도 0.19</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#FF9D00] text-lg leading-none mt-0.5">★</span>
              <span className="font-bold text-[#09090a] text-base">국내외 유기농 인증 및 HACCP 인증</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#FF9D00] text-lg leading-none mt-0.5">★</span>
              <span className="font-bold text-[#09090a] text-base">공기와 빛을 완벽하게 차단하는 스틱 포장</span>
            </div>
          </div>
        )
        : "Selected only the finest olives from Andalusia, Spain, extracted using the cold press method. Premium extra virgin olive oil with an acidity of less than 0.1%, featuring a fresh grassy aroma and a peppery finish. Perfect for salad dressings, pasta finishing, or as a dipping oil for bread."
    },
    {
      id: 2,
      image: imgProduct2,
      title: lang === 'KR' ? "유기농 엑스트라버진 올리브오일 레몬 올레샷" : "Organic Extra Virgin Olive Oil Lemon Ole Shot",
      desc: lang === 'KR'
        ? <>화제의 아이템! 최적의 황금 비율 올레샷<br />스페인 아르베키나 품종 (올리브오일 65%, 레몬35%)</>
        : <>Hot Item! Optimal Golden Ratio Oleo Shot<br />Spanish Arbequina Variety (Olive Oil 65%, Lemon 35%)</>,
      detail: lang === 'KR'
        ? (
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-2">
              <span className="text-[#FF9D00] text-lg leading-none mt-0.5">★</span>
              <div className="flex flex-col">
                <span className="font-bold text-[#09090a] text-base">100% 스페인 유기농 단일 품종</span>
                <div className="flex items-center gap-1">
                  <span className="text-[#858588] text-sm">아르베키나 품종</span>
                  <span className="text-[#858588] text-sm">(산도 0.19%)</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#FF9D00] text-lg leading-none mt-0.5">★</span>
              <span className="font-bold text-[#09090a] text-base">유기농 스페인산 100% 레몬 착즙 원액</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#FF9D00] text-lg leading-none mt-0.5">★</span>
              <div className="flex flex-col">
                <span className="font-bold text-[#09090a] text-base">최적의 황금 비율</span>
                <span className="text-[#858588] text-sm">올리브오일 65%, 레몬35%</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#FF9D00] text-lg leading-none mt-0.5">★</span>
              <span className="font-bold text-[#09090a] text-base">국내외 유기농 인증 및 HACCP 인증</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#FF9D00] text-lg leading-none mt-0.5">★</span>
              <span className="font-bold text-[#09090a] text-base">공기와 빛을 완벽하게 차단하는 스틱 포장</span>
            </div>
          </div>
        )
        : "The refreshing flavor of lemon balances the oiliness of olive oil, making it best for consumption on an empty stomach in the morning. The combination of Vitamin C-rich lemon and antioxidant-rich olive oil adds vitality to your day."
    },
    {
      id: 3,
      image: imgProduct3,
      title: lang === 'KR' ? "유기농 엑스트라버진 올리브오일 토마토 올토샷" : "Organic Extra Virgin Olive Oil Tomato Ole Shot",
      desc: lang === 'KR'
        ? <>올리브오일과 토마토를 블렌딩하여 가볍게 즐기는 올토샷<br />스페인 피쿠알 품종 (올리브오일 40%, 토마토 60%)</>
        : <>Oltoshot lightly enjoyed by blending olive oil and tomato<br />Spanish Picual Variety (Olive Oil 40%, Tomato 60%)</>,
      detail: lang === 'KR'
        ? (
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-2">
              <span className="text-[#FF9D00] text-lg leading-none mt-0.5">★</span>
              <div className="flex flex-col">
                <span className="font-bold text-[#09090a] text-base">100% 스페인 유기농 단일 품종</span>
                <div className="flex items-center gap-1">
                  <span className="text-[#858588] text-sm">피쿠알 품종</span>
                  <span className="text-[#858588] text-sm">(산도 0.18%)</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#FF9D00] text-lg leading-none mt-0.5">★</span>
              <span className="font-bold text-[#09090a] text-base">유기농 스페인산 100% 토마토 착즙 원액</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#FF9D00] text-lg leading-none mt-0.5">★</span>
              <div className="flex flex-col">
                <span className="font-bold text-[#09090a] text-base">최적의 황금 비율</span>
                <span className="text-[#858588] text-sm">올리브오일 40%, 토마토 60%</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#FF9D00] text-lg leading-none mt-0.5">★</span>
              <span className="font-bold text-[#09090a] text-base">국내외 유기농 인증 및 HACCP 인증</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#FF9D00] text-lg leading-none mt-0.5">★</span>
              <span className="font-bold text-[#09090a] text-base">공기와 빛을 완벽하게 차단하는 스틱 포장</span>
            </div>
          </div>
        )
        : "Rich lycopene from ripe tomatoes meets olive oil for increased absorption. Pair with a light brunch or toast to experience the healthiness of the Mediterranean diet."
    }
  ];

  return (
    <section id="product" className="py-20 md:py-[120px] bg-[#fffcf3]">
      <div className="max-w-[1440px] mx-auto px-3 md:px-[60px] space-y-20">
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
          <p className="font-['Pretendard',sans-serif] font-bold text-lg md:text-[24px] text-[#09090a] tracking-[-0.03em]">
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

        <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 md:grid md:grid-cols-3 md:gap-20 md:overflow-visible md:pb-0 scrollbar-hide -mx-3 px-3 md:mx-0 md:px-0">
          {products.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              onClick={() => setSelectedProduct(p)}
              className="group space-y-6 flex-shrink-0 w-[90vw] snap-center md:w-auto mr-6 md:mr-0 last:mr-0 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden rounded-sm relative">
                <img src={p.image} alt={p.title} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-['Pretendard',sans-serif] font-bold text-lg md:text-[20px] text-[#09090a]">{p.title}</h3>
                  <p className="font-['Pretendard',sans-serif] font-regular text-sm text-[#858588] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-1 py-4 pb-[80px] md:p-4 pointer-events-none"
            >
              <div className="bg-[#fffcf3] w-full max-w-4xl max-h-[calc(100vh-100px)] md:max-h-[90vh] overflow-hidden rounded-lg shadow-2xl pointer-events-auto flex flex-col relative">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 p-2 text-[#09090a]/50 hover:text-[#09090a] transition-colors z-20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="overflow-y-auto flex-1 w-full">
                  <div className="flex flex-col md:flex-row w-full">
                    <div className="w-full md:w-1/2 bg-[#fffcf3] flex items-center justify-center p-6 md:p-12">
                      <div className="relative w-full aspect-square">
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.title}
                          className="w-full h-full object-contain mix-blend-multiply"
                        />
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 px-2 py-6 md:p-12 flex flex-col justify-center space-y-8">
                      <div>
                        <span className="font-['Gotham',sans-serif] font-bold text-[#fcda2c] tracking-widest block mb-2">PRODUCT DETAIL</span>
                        <h3 className="font-['Pretendard',sans-serif] font-bold text-2xl md:text-3xl text-[#09090a] leading-tight">
                          {lang === 'KR' && selectedProduct.title.includes('유기농 엑스트라버진') ? (
                            <>
                              유기농 엑스트라버진<br className="md:hidden" />
                              {selectedProduct.title.replace('유기농 엑스트라버진', '')}
                            </>
                          ) : selectedProduct.title}
                        </h3>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-['Pretendard',sans-serif] font-bold text-lg text-[#09090a] mb-2">{lang === 'KR' ? '상품 소개' : 'Description'}</h4>
                          <p className="font-['Pretendard',sans-serif] font-medium text-[#555] leading-relaxed break-keep">
                            {selectedProduct.desc}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-['Pretendard',sans-serif] font-bold text-lg text-[#09090a] mb-2">{lang === 'KR' ? '상세 정보' : 'Detail'}</h4>
                          <div className="font-['Pretendard',sans-serif] font-regular text-[#555] leading-relaxed text-sm break-keep">
                            {selectedProduct.detail}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {(selectedProduct.id === 1 || selectedProduct.id === 2) && lang === 'KR' && (
                    <div className="w-full p-6 md:p-12 border-t border-[#f0f0f0] bg-white">
                      <div className="text-center mb-6">
                        <h3 className="font-['Gotham',sans-serif] font-bold text-xl md:text-2xl text-[#09090a] mb-2 leading-tight">
                          POSITIVA는 최고급 <span className="text-[#D48D23]">아르베키나</span><br className="md:hidden" /> 올리브오일을 담고 있습니다.
                        </h3>
                        <span className="inline-block bg-[#F5F5F7] rounded-full px-3 py-1 text-xs text-[#858588] font-bold">
                          POSITIVA 올리브오일, POSITIVA 올레샷
                        </span>
                      </div>
                      <div className="flex flex-col md:flex-row gap-6 items-stretch bg-white p-1 md:p-6 rounded-lg">
                        <div className="w-full md:w-1/2 min-h-[220px] bg-gray-200 rounded-md overflow-hidden relative">
                          <img src={imgVidoria} className="absolute inset-0 w-full h-full object-cover" alt="Vidoria History" />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
                          <div>
                            <h4 className="font-['Gotham',sans-serif] font-bold text-2xl text-[#2B5E33] mb-1">Vidoria</h4>
                            <p className="font-bold text-[#4F7A28] text-lg">믿을 수 있는 원료사, 비도리아</p>
                          </div>
                          <div className="space-y-2">
                            <p className="font-bold text-[#D48D23] text-base leading-tight">200년 전통<br />스페인 프리미엄 올리브오일 원료사</p>
                            <p className="text-sm text-[#555] leading-relaxed break-keep">
                              비도리아는 1820년 시작된 스페인 카탈루냐 지역의 대표 올리브오일 브랜드로 200년의 역사를 이어온 전통과 현대적인 생산 기술을 결합하여 최고급 올리브오일을 생산하고 있습니다.
                            </p>
                          </div>
                          <div className="bg-[#EFE7DB] text-[#09090a] text-sm p-3 rounded font-bold break-keep leading-relaxed">
                            포지티바 유기농 엑스트라버진 올리브오일은 <span className="bg-[#D48D23]/30 px-1">비도리아의 최고급 올리브오일</span>을 담고 있습니다.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {(selectedProduct.id === 1 || selectedProduct.id === 2) && lang === 'EN' && (
                    <div className="w-full p-6 md:p-12 border-t border-[#f0f0f0] bg-white">
                      <div className="text-center mb-6">
                        <h3 className="font-['Gotham',sans-serif] font-bold text-xl md:text-2xl text-[#09090a] mb-2 leading-tight">
                          POSITIVA contains premium <span className="text-[#D48D23]">Arbequina</span><br className="md:hidden" /> Olive Oil.
                        </h3>
                        <span className="inline-block bg-[#F5F5F7] rounded-full px-3 py-1 text-xs text-[#858588] font-bold">
                          POSITIVA Olive Oil, POSITIVA Oleo Shot
                        </span>
                      </div>
                      <div className="flex flex-col md:flex-row gap-6 items-stretch bg-white p-1 md:p-6 rounded-lg">
                        <div className="w-full md:w-1/2 min-h-[220px] bg-gray-200 rounded-md overflow-hidden relative">
                          <img src={imgVidoria} className="absolute inset-0 w-full h-full object-cover" alt="Vidoria History" />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
                          <div>
                            <h4 className="font-['Gotham',sans-serif] font-bold text-2xl text-[#2B5E33] mb-1">Vidoria</h4>
                            <p className="font-bold text-[#4F7A28] text-lg">Trusted Supplier, Vidoria</p>
                          </div>
                          <div className="space-y-2">
                            <p className="font-bold text-[#D48D23] text-base leading-tight">200 Years of Tradition<br />Spanish Premium Olive Oil Supplier</p>
                            <p className="text-sm text-[#555] leading-relaxed break-keep">
                              Vidoria is a representative olive oil brand from the Catalonia region of Spain, started in 1820. It combines 200 years of tradition with modern production technology to produce premium olive oil.
                            </p>
                          </div>
                          <div className="bg-[#EFE7DB] text-[#09090a] text-sm p-3 rounded font-bold break-keep leading-relaxed">
                            Positiva Organic Extra Virgin Olive Oil contains <span className="bg-[#D48D23]/30 px-1">Vidoria's finest olive oil</span>.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedProduct.id === 3 && lang === 'KR' && (
                    <div className="w-full p-6 md:p-12 border-t border-[#f0f0f0] bg-white">
                      <div className="text-center mb-6">
                        <h3 className="font-['Gotham',sans-serif] font-bold text-xl md:text-2xl text-[#09090a] mb-2 leading-tight">
                          POSITIVA는 최고급 <span className="text-[#6B8E23]">피쿠알</span><br className="md:hidden" /> 올리브오일을 담고 있습니다.
                        </h3>
                        <span className="inline-block bg-[#F5F5F7] rounded-full px-3 py-1 text-xs text-[#858588] font-bold">
                          POSITIVA 올토샷
                        </span>
                      </div>
                      <div className="flex flex-col md:flex-row gap-6 items-stretch bg-white p-1 md:p-6 rounded-lg">
                        <div className="w-full md:w-1/2 min-h-[220px] bg-gray-200 rounded-md overflow-hidden relative">
                          <img src={imgOleofer} className="absolute inset-0 w-full h-full object-cover" alt="Oleofer History" />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
                          <div>
                            <h4 className="font-['Gotham',sans-serif] font-bold text-2xl text-[#2B5E33] mb-1">Oleofer S.L.</h4>
                            <p className="font-bold text-[#4F7A28] text-lg">국제적 찬사를 받는 품질, 올레오페르</p>
                          </div>
                          <div className="space-y-2">
                            <p className="font-bold text-[#09090a] text-base leading-tight">스페인 안달루시아 하엔 지역에서 <span className="text-[#09090a]">70년 이상의 전통</span>을 가진 고품질 엑스트라버진 올리브오일 원료사.</p>
                            <p className="text-sm text-[#555] leading-relaxed break-keep">
                              피쿠알 단일 품종으로 만든 강렬한 과일 향과 균형 잡힌 매콤한 맛의 고품질 엑스트라버진 올리브오일을 생산. Oleofer의 오일은 복합적인 향과 풍미로 국제적 찬사를 받으며, 여러 <span className="bg-[#fcda2c]/50 px-1 font-bold">국제 대회에서 그 품질을 인정</span>받고 있습니다.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedProduct.id === 3 && lang === 'EN' && (
                    <div className="w-full p-6 md:p-12 border-t border-[#f0f0f0] bg-white">
                      <div className="text-center mb-6">
                        <h3 className="font-['Gotham',sans-serif] font-bold text-xl md:text-2xl text-[#09090a] mb-2 leading-tight">
                          POSITIVA contains premium <span className="text-[#6B8E23]">Picual</span><br className="md:hidden" /> Olive Oil.
                        </h3>
                        <span className="inline-block bg-[#F5F5F7] rounded-full px-3 py-1 text-xs text-[#858588] font-bold">
                          POSITIVA Oleo Shot
                        </span>
                      </div>
                      <div className="flex flex-col md:flex-row gap-6 items-stretch bg-white p-6 rounded-lg">
                        <div className="w-full md:w-1/2 min-h-[220px] bg-gray-200 rounded-md overflow-hidden relative">
                          <img src={imgOleofer} className="absolute inset-0 w-full h-full object-cover" alt="Oleofer History" />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
                          <div>
                            <h4 className="font-['Gotham',sans-serif] font-bold text-2xl text-[#2B5E33] mb-1">Oleofer S.L.</h4>
                            <p className="font-bold text-[#4F7A28] text-lg">Internationally Acclaimed Quality, Oleofer</p>
                          </div>
                          <div className="space-y-2">
                            <p className="font-bold text-[#09090a] text-base leading-tight">High-quality Extra Virgin Olive Oil supplier with <span className="text-[#09090a]">over 70 years of tradition</span> in Jaén, Andalusia, Spain.</p>
                            <p className="text-sm text-[#555] leading-relaxed break-keep">
                              Produces high-quality Extra Virgin Olive Oil with intense fruity aroma and balanced spicy taste made from single variety Picual. Oleofer's oil is internationally acclaimed for its complex aroma and flavor, recognized in various <span className="bg-[#fcda2c]/50 px-1 font-bold">international competitions</span>.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {lang === 'KR' && (
                    <>
                      <div className="w-full p-6 md:p-12 border-t border-[#f0f0f0] bg-white">

                        <div className="max-w-4xl mx-auto">
                          {/* Title */}
                          <div className="text-center mb-16">
                            <h4 className="font-['Pretendard',sans-serif] font-bold text-2xl md:text-3xl text-[#09090a] mb-2">
                              미식가도 인정한 품질
                            </h4>
                            <p className="font-['Pretendard',sans-serif] font-medium text-base text-[#555]">
                              상위 1% 최저산도 {selectedProduct.id <= 2 ? '0.19' : '0.18'} 미만
                            </p>
                          </div>

                          <div className="relative px-4 md:px-0 flex w-full max-w-5xl mx-auto gap-0">

                            {/* Left Column: Shapes */}
                            <div className="flex flex-col w-[100px] md:w-[320px] items-end shrink-0">
                              {/* L1 Shape */}
                              <div className="h-[150px] md:h-[180px] w-[25px] md:w-[80px] bg-[#6A7F23] shrink-0" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>
                              {/* L2 Shape */}
                              <div className="h-[150px] md:h-[180px] w-[50px] md:w-[160px] bg-[#C8D659] shrink-0" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0 100%)' }}></div>
                              {/* L3 Shape */}
                              <div className="h-[150px] md:h-[180px] w-[75px] md:w-[240px] bg-[#EBF2A9] shrink-0" style={{ clipPath: 'polygon(33.333% 0, 100% 0, 100% 100%, 0 100%)' }}></div>
                              {/* L4 Shape */}
                              <div className="h-[150px] md:h-[180px] w-[100px] md:w-[320px] bg-[#F5F9D8] shrink-0" style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' }}></div>
                            </div>

                            {/* Right Column: Text */}
                            <div className="flex flex-col flex-1 min-w-0">
                              {/* L1 Text */}
                              <div className="h-[150px] md:h-[180px] pl-2 md:pl-10 py-4 md:py-6">
                                <div className="bg-[#6A7F23] rounded-lg shadow-lg py-5 px-3 md:p-8 flex flex-col justify-center h-full text-white relative overflow-hidden w-full">
                                  <div className="relative z-10">
                                    <div className="flex text-[#FFD700] text-xs md:text-sm mb-1">★★★★★</div>
                                    <h5 className="font-['Pretendard',sans-serif] font-bold text-[15px] md:text-2xl mb-2 leading-tight">
                                      {lang === 'KR' ? <>포지티바<br className="md:hidden" /> 프리미엄 엑스트라버진</> : 'POSITIVA Premium Extra Virgin'}
                                    </h5>
                                    <p className="font-['Pretendard',sans-serif] text-[11px] md:text-base leading-tight text-white break-keep">
                                      {lang === 'KR' ? (
                                        <>0.8%를 뛰어 넘는<br /> <span className="font-bold text-[#FFD700]">상위 1% 최저산도 {selectedProduct.id <= 2 ? '0.19' : '0.18'} 미만</span></>
                                      ) : (
                                        <><span className="font-bold text-[#FFD700]">Top 1% Lowest Acidity Less than {selectedProduct.id <= 2 ? '0.19' : '0.18'}</span>, surpassing the standard 0.8%.</>
                                      )}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* L2 Text */}
                              <div className="h-[150px] md:h-[180px] pl-2 md:pl-10 flex flex-col justify-center border-t border-[#f0f0f0] shrink-0">
                                <h6 className="font-['Pretendard',sans-serif] font-bold text-lg md:text-xl text-[#6A7F23] mb-2">버진</h6>
                                <p className="font-['Pretendard',sans-serif] text-sm md:text-base text-[#555] leading-relaxed break-keep">
                                  엑스트라 버진과 같은 방식으로 생산되지만,<br className="hidden md:block" /> 산도가 2.0% 이하이며 향미가 약간 떨어지는 등급입니다.
                                </p>
                              </div>

                              {/* L3 Text */}
                              <div className="h-[150px] md:h-[180px] pl-4 md:pl-10 flex flex-col justify-center border-t border-[#f0f0f0] shrink-0">
                                <h6 className="font-['Pretendard',sans-serif] font-bold text-lg md:text-xl text-[#8C9A5B] mb-2">퓨어</h6>
                                <p className="font-['Pretendard',sans-serif] text-sm md:text-base text-[#555] leading-relaxed break-keep">
                                  정제 오일에 소량의 버진 오일을 섞은 것으로,<br className="hidden md:block" /> 맛과 향이 거의 없어 가열 요리에 주로 사용됩니다.
                                </p>
                              </div>

                              {/* L4 Text */}
                              <div className="h-[150px] md:h-[180px] pl-4 md:pl-10 flex flex-col justify-center border-t border-[#f0f0f0] shrink-0">
                                <h6 className="font-['Pretendard',sans-serif] font-bold text-lg md:text-xl text-[#AEB88D] mb-2">포마스</h6>
                                <p className="font-['Pretendard',sans-serif] text-sm md:text-base text-[#555] leading-relaxed break-keep">
                                  올리브 찌꺼기에서 화학 용매로 추출한<br className="hidden md:block" /> 가장 낮은 등급의 오일로, 튀김용으로 많이 쓰입니다.
                                </p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>

                      {(selectedProduct.id >= 2 && selectedProduct.id <= 3) && (
                        <div className="w-full p-6 md:p-12 border-t border-[#f0f0f0] bg-white">
                          <div className="text-center mb-10">
                            <h4 className="font-['Pretendard',sans-serif] font-bold text-2xl md:text-3xl text-[#09090a] mb-3">
                              원재료 그대로를 담은 NFC 착즙
                            </h4>
                            <p className="font-['Pretendard',sans-serif] font-medium text-base text-[#555] leading-relaxed">
                              POSITIVA는 열정적인 스페인의<br className="md:hidden" /> 프리미엄 유기농 원료를 그대로 담았습니다.
                            </p>
                          </div>

                          <div className="flex justify-center items-center mb-10 pl-6">
                            {['설탕', '정제수', '인공색소', '향료'].map((item, index) => (
                              <div key={item} className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#171719] flex flex-col items-center justify-center text-white -ml-6 md:-ml-8 relative shadow-xl`} style={{ zIndex: 4 - index }}>
                                <span className="font-['Noto_Serif_KR',sans-serif] font-bold text-2xl md:text-3xl mb-1 md:mb-2">無</span>
                                <span className="font-bold text-sm md:text-base">{item}</span>
                              </div>
                            ))}
                          </div>

                          <div className="text-center space-y-2">
                            <p className="font-medium text-sm md:text-base text-[#09090a] leading-relaxed break-keep">
                              POSITIVA는 원재료의 맛과 영양을 온전히 담기 위해 물 한 방울도 넣지 않고,<br className="hidden md:block" />
                              오직 과채만을 <span className="font-bold underline underline-offset-4 decoration-1">NFC</span> <span className="text-[#858588] text-xs font-normal">Not From Concentrate</span> 방식으로 그대로 착즙했습니다.
                            </p>
                            <p className="font-medium text-sm md:text-base text-[#09090a] leading-relaxed break-keep">
                              인위적인 첨가물 없이, 원료 본연의 신선하고 진한 풍미를 <span className="font-bold">POSITIVA</span>에서 만나보세요.
                            </p>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {lang === 'EN' && (
                    <>
                      <div className="w-full p-6 md:p-12 border-t border-[#f0f0f0] bg-white">

                        <div className="max-w-4xl mx-auto">
                          {/* Title */}
                          <div className="text-center mb-16">
                            <h4 className="font-['Pretendard',sans-serif] font-bold text-2xl md:text-3xl text-[#09090a] mb-2">
                              Quality Recognized by Gourmets
                            </h4>
                            <p className="font-['Pretendard',sans-serif] font-medium text-base text-[#555]">
                              Top 1% Lowest Acidity Less than {selectedProduct.id <= 2 ? '0.19' : '0.18'}
                            </p>
                          </div>

                          <div className="relative px-4 md:px-0 flex w-full max-w-5xl mx-auto gap-0">

                            {/* Left Column: Shapes */}
                            <div className="flex flex-col w-[100px] md:w-[320px] items-end shrink-0">
                              {/* L1 Shape */}
                              <div className="h-[180px] md:h-[180px] w-[25px] md:w-[80px] bg-[#6A7F23] shrink-0" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>
                              {/* L2 Shape */}
                              <div className="h-[150px] md:h-[180px] w-[50px] md:w-[160px] bg-[#C8D659] shrink-0" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0 100%)' }}></div>
                              {/* L3 Shape */}
                              <div className="h-[150px] md:h-[180px] w-[75px] md:w-[240px] bg-[#EBF2A9] shrink-0" style={{ clipPath: 'polygon(33.333% 0, 100% 0, 100% 100%, 0 100%)' }}></div>
                              {/* L4 Shape */}
                              <div className="h-[150px] md:h-[180px] w-[100px] md:w-[320px] bg-[#F5F9D8] shrink-0" style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' }}></div>
                            </div>

                            {/* Right Column: Text */}
                            <div className="flex flex-col flex-1 min-w-0">
                              {/* L1 Text */}
                              <div className="h-[180px] md:h-[180px] pl-4 md:pl-10 py-4 md:py-6">
                                <div className="bg-[#6A7F23] rounded-lg shadow-lg py-5 px-3 md:p-8 flex flex-col justify-center h-full text-white relative overflow-hidden w-full">
                                  <div className="relative z-10">
                                    <div className="flex text-[#FFD700] text-xs md:text-sm mb-1">★★★★★</div>
                                    <h5 className="font-['Pretendard',sans-serif] font-bold text-lg md:text-2xl mb-2 leading-tight">
                                      POSITIVA<br className="md:hidden" /> Premium Extra Virgin
                                    </h5>
                                    <p className="font-['Pretendard',sans-serif] text-xs md:text-base leading-tight text-white break-keep">
                                      <span className="font-bold text-[#FFD700]">Top 1% Lowest Acidity<br className="md:hidden" /> Less than {selectedProduct.id <= 2 ? '0.19' : '0.18'}</span>, surpassing the standard 0.8%.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* L2 Text */}
                              <div className="h-[150px] md:h-[180px] pl-2 md:pl-10 flex flex-col justify-center border-t border-[#f0f0f0] shrink-0">
                                <h6 className="font-['Pretendard',sans-serif] font-bold text-lg md:text-xl text-[#6A7F23] mb-2">Virgin</h6>
                                <p className="font-['Pretendard',sans-serif] text-sm md:text-base text-[#555] leading-relaxed break-keep">
                                  Produced in the same way as Extra Virgin,<br className="hidden md:block" /> but with acidity &le; 2.0% and slightly lower flavor quality.
                                </p>
                              </div>

                              {/* L3 Text */}
                              <div className="h-[150px] md:h-[180px] pl-2 md:pl-10 flex flex-col justify-center border-t border-[#f0f0f0] shrink-0">
                                <h6 className="font-['Pretendard',sans-serif] font-bold text-lg md:text-xl text-[#8C9A5B] mb-2">Pure</h6>
                                <p className="font-['Pretendard',sans-serif] text-sm md:text-base text-[#555] leading-relaxed break-keep">
                                  A blend of refined oil and a small amount of virgin oil.<br className="hidden md:block" /> Has almost no taste or aroma, used mainly for cooking.
                                </p>
                              </div>

                              {/* L4 Text */}
                              <div className="h-[150px] md:h-[180px] pl-2 md:pl-10 flex flex-col justify-center border-t border-[#f0f0f0] shrink-0">
                                <h6 className="font-['Pretendard',sans-serif] font-bold text-lg md:text-xl text-[#AEB88D] mb-2">Pomace</h6>
                                <p className="font-['Pretendard',sans-serif] text-sm md:text-base text-[#555] leading-relaxed break-keep">
                                  The lowest grade oil extracted from olive residue using chemical solvents.<br className="hidden md:block" /> Mainly used for frying.
                                </p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>

                      {(selectedProduct.id >= 2 && selectedProduct.id <= 3) && (
                        <div className="w-full p-6 md:p-12 border-t border-[#f0f0f0] bg-white">
                          <div className="text-center mb-10">
                            <h4 className="font-['Pretendard',sans-serif] font-bold text-2xl md:text-3xl text-[#09090a] mb-3">
                              NFC Juice Containing Raw Ingredients As Is
                            </h4>
                            <p className="font-['Pretendard',sans-serif] font-medium text-base text-[#555] leading-relaxed">
                              POSITIVA contains premium organic ingredients<br className="md:hidden" /> from passionate Spain as they are.
                            </p>
                          </div>

                          <div className="flex justify-center items-center mb-10 pl-6">
                            {['Sugar', 'Water', 'Color', 'Flavor'].map((item, index) => (
                              <div key={item} className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#171719] flex flex-col items-center justify-center text-white -ml-6 md:-ml-8 relative shadow-xl`} style={{ zIndex: 4 - index }}>
                                <span className="font-['Noto_Serif_KR',sans-serif] font-bold text-2xl md:text-3xl mb-1 md:mb-2">無</span>
                                <span className="font-bold text-sm md:text-base">{item}</span>
                              </div>
                            ))}
                          </div>

                          <div className="text-center space-y-2">
                            <p className="font-medium text-sm md:text-base text-[#09090a] leading-relaxed break-keep">
                              POSITIVA uses the <span className="font-bold underline underline-offset-4 decoration-1">NFC</span> <span className="text-[#858588] text-xs font-normal">Not From Concentrate</span> method,<br className="hidden md:block" />
                              squeezing only fruits and vegetables without adding a single drop of water.
                            </p>
                            <p className="font-medium text-sm md:text-base text-[#09090a] leading-relaxed break-keep">
                              Experience the fresh and rich original flavor of the ingredients without <span className="font-bold">artificial additives</span> at POSITIVA.
                            </p>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section >
  );
}