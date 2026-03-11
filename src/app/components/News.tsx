import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgNews1 from "../../assets/images/news/news1_v2.jpg";
import imgNews2 from "../../assets/images/news/news2_v2.jpg";
import imgNews3 from "../../assets/images/news/news3_v2.jpg";
import imgNews4 from "../../assets/images/news/news4.png";
import imgNews5 from "../../assets/images/news/news5.png";
import imgNewsAlbumin from "../../assets/images/products/albumin-intro-2.png";

type NewsItem = {
  id: number;
  image: string;
  title: string;
  date: string;
  content: string;
  objectPosition?: string;
  objectFit?: string;
};

export function News({ lang }: { lang: 'KR' | 'EN' | 'TH' }) {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      image: imgNewsAlbumin,
      title: lang === 'KR' ? "POSITIVA 알부민 출시" : lang === 'TH' ? "เปิดตัว POSITIVA อัลบูมิน" : "POSITIVA Albumin Launch",
      date: "2026.03.11",
      content: lang === 'KR'
        ? "바이오티바 마시는 알부민 데일리 파워샷이 출시되었습니다. 프랑스산 난백알부민 97%와 5가지 활력 부스터를 배합한 고농축 에너지 파워샷으로, 지친 일상에 활력을 더해보세요."
        : lang === 'TH'
          ? "Biotiva Drinking Albumin Daily Power Shot เปิดตัวแล้ว! ผสมอัลบูมินไข่ขาวจากฝรั่งเศส 97% และส่วนผสมเสริมพลัง 5 ชนิด มอบพลังงานให้กับทุกวันของคุณ"
          : "Biotiva Drinking Albumin Daily Power Shot has launched. Formulated with 97% French egg white albumin and 5 vitality boosters, energize your daily life with this high-concentration power shot.",
      objectPosition: 'center 15%',
    },
    {
      id: 2,
      image: imgNews1,
      title: lang === 'KR' ? "POSITIVA 올리브오일, 올레샷 출시" : lang === 'TH' ? "เปิดตัว POSITIVA น้ำมันมะกอก และ Oleo Shot" : "POSITIVA Olive Oil, Oleo Shot Launch",
      date: "2025.10.01",
      content: lang === 'KR'
        ? "POSITIVA 공식 온라인 스토어가 오픈했습니다. 이제 온라인에서도 POSITIVA의 프리미엄 올리브오일을 만나보세요. 오픈 기념 다양한 이벤트가 준비되어 있습니다."
        : lang === 'TH'
          ? "เปิดร้านค้าออนไลน์อย่างเป็นทางการของ POSITIVA แล้ว พบน้ำมันมะกอกพรีเมียมออนไลน์ พร้อมโปรโมชั่นพิเศษต้อนรับการเปิดร้าน"
          : "POSITIVA official online store has opened. Meet POSITIVA's premium olive oil online now. Various events are prepared for the opening.",
      objectPosition: 'top',
      objectFit: 'contain',
    },
    {
      id: 3,
      image: imgNews3,
      title: lang === 'KR' ? "현대백화점 무역센터점 팝업 (10/27~11/2)" : lang === 'TH' ? "Pop-up ที่ Hyundai Dept. Store Trade Center (27/10~2/11)" : "Hyundai Dept. Store Trade Center Popup (10/27~11/2)",
      date: "2025.10.26",
      content: lang === 'KR'
        ? "현대백화점 무역센터점에서 POSITIVA 팝업 스토어가 진행됩니다. 직접 시음해보고 특별한 혜택으로 구매하실 수 있는 기회를 놓치지 마세요."
        : lang === 'TH'
          ? "Pop-up store POSITIVA ที่ห้างสรรพสินค้า Hyundai สาขา Trade Center มาชิมและซื้อด้วยราคาพิเศษได้เลย"
          : "POSITIVA popup store is held at Hyundai Department Store Trade Center. Don't miss the opportunity to taste and purchase with special benefits."
    },
    {
      id: 4,
      image: imgNews2,
      title: lang === 'KR' ? "셀럽의 잇템! 저스트 메이크업" : lang === 'TH' ? "ไอเทมของเซเลบ! Just Makeup" : "Celeb's It Item! Just Makeup",
      date: "2025.11.03",
      content: lang === 'KR'
        ? "유명 뷰티 프로그램 '저스트 메이크업'의 심사위원이 선택한 바로 그 아이템! POSITIVA 올리브오일이 소개되었습니다. 건강한 피부와 라이프스타일을 위한 비결을 확인해보세요."
        : lang === 'TH'
          ? "ไอเทมที่กรรมการรายการบิวตี้ดัง 'Just Makeup' เลือก! POSITIVA น้ำมันมะกอกถูกนำเสนอในรายการ ค้นพบความลับสู่ผิวสวยและไลฟ์สไตล์ที่ดี"
          : "The very item chosen by the judge of the famous beauty program 'Just Makeup'! POSITIVA olive oil was introduced. Check out the secret for healthy skin and lifestyle."
    },
    {
      id: 5,
      image: imgNews4,
      title: lang === 'KR' ? "POSITIVA 활용 추천 레시피" : lang === 'TH' ? "สูตรอาหารแนะนำด้วย POSITIVA" : "Recommended Recipes using POSITIVA",
      date: "2025.12.01",
      content: lang === 'KR'
        ? "공복에 한 포, 디저트와 함께, 샐러드 드레싱, 식전 빵과 함께, 스테이크의 마무리, 해산물 마리네이드까지. POSITIVA와 함께 미식의 즐거움을 넓혀보세요."
        : lang === 'TH'
          ? "ดื่มตอนท้องว่าง คู่ของหวาน ราดสลัด ทาขนมปัง ราดสเต็ก หรือแมรีเนดซีฟู้ด เพลิดเพลินกับการกินกับ POSITIVA"
          : "One pack on an empty stomach, with dessert, salad dressing, with bread, finishing steak, and seafood marinade. Expand the joy of gastronomy with POSITIVA."
    },
    {
      id: 6,
      image: imgNews5,
      title: lang === 'KR' ? "몸에 꼭 필요한 3가지 슈퍼푸드" : lang === 'TH' ? "3 ซูเปอร์ฟู้ดที่ร่างกายต้องการ" : "3 Essential Superfoods for Body",
      date: "2025.12.08",
      content: lang === 'KR'
        ? "혈관 건강을 지키는 올리브오일, 비타민C와 면역력의 레몬, 라이코펜이 풍부한 토마토. 자연이 선물한 3가지 슈퍼푸드의 놀라운 효능을 확인하세요."
        : lang === 'TH'
          ? "น้ำมันมะกอกดูแลหัวใจและหลอดเลือด เลมอนเสริมวิตามินซีและภูมิคุ้มกัน มะเขือเทศอุดมไลโคพีน ค้นพบพลังของ 3 ซูเปอร์ฟู้ดจากธรรมชาติ"
          : "Olive oil protecting vascular health, lemon with Vitamin C and immunity, and tomato rich in lycopene. Check out the amazing benefits of 3 superfoods gifted by nature."
    }
  ];

  return (
    <section id="news" className="py-20 md:py-[120px] bg-white text-[#09090a]">
      <div className="max-w-[1440px] mx-auto px-3 md:px-[60px] space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          <div className="space-y-2">
            <span className="font-['Gotham',sans-serif] font-bold text-sm md:text-[20px] text-[#fcda2c] tracking-widest">NEWS</span>
            <h2 className="font-['Pretendard',sans-serif] font-bold text-3xl md:text-[40px] tracking-tighter leading-tight">
              {lang === 'KR' ? (
                <>
                  제품 출시, 브랜드 소식 등<br />POSITIVA의 이야기를 전합니다.
                </>
              ) : lang === 'TH' ? (
                <>
                  ข่าวสารจาก POSITIVA<br />การเปิดตัวสินค้า และความเคลื่อนไหวของแบรนด์
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
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              className="group cursor-pointer space-y-6"
              onClick={() => setSelectedNews(item)}
            >
              <div className="aspect-[430/280] overflow-hidden rounded-sm">
                <img src={item.image} alt={item.title} style={{ objectPosition: item.objectPosition ?? 'center', objectFit: (item.objectFit ?? 'cover') as 'cover' | 'contain' }} className="w-full h-full transition-transform duration-500 group-hover:scale-105" />
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

      <AnimatePresence>
        {selectedNews && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNews(null)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl pointer-events-auto flex flex-col relative min-h-[600px]">
                <button
                  onClick={() => setSelectedNews(null)}
                  className="absolute top-4 right-4 p-2 text-[#09090a]/50 hover:text-[#09090a] transition-colors z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="w-full p-8 md:px-12 md:pt-12 md:pb-6 flex flex-col space-y-2 shrink-0">
                  <span className="font-['Gotham',sans-serif] font-bold text-sm text-[#fcda2c] tracking-widest block mb-1">NEWS</span>
                  <h3 className="font-['Pretendard',sans-serif] font-bold text-2xl md:text-3xl text-[#09090a] leading-tight">
                    {selectedNews.title}
                  </h3>
                  <p className="font-['Pretendard',sans-serif] text-sm text-[#858588]">{selectedNews.date}</p>
                  <p className="font-['Pretendard',sans-serif] text-base text-[#09090a] leading-relaxed mt-6 whitespace-pre-wrap">
                    {selectedNews.content}
                  </p>
                </div>

                <div className="w-full bg-white pb-12 px-8 md:px-12">
                  <img
                    src={selectedNews.image}
                    alt={selectedNews.title}
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
