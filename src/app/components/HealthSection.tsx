import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgProduct4 from "../../assets/images/products/biotiva-albumin.png";
import imgFranceFarm from "../../assets/images/products/france-farm.png";

export function HealthSection({ lang }: { lang: 'KR' | 'EN' | 'TH' }) {
  const [isOpen, setIsOpen] = useState(false);

  const title =
    lang === 'KR' ? "바이오티바 마시는 알부민 데일리 파워샷"
      : lang === 'TH' ? "พาวเวอร์ช็อตอัลบูมิน Biotiva สูตรเดลี่"
        : "Biotiva Drinking Albumin Daily Power Shot";

  const desc =
    lang === 'KR'
      ? <>지친 일상을 깨우는 고농축 에너지 파워샷<br />알부민복합물 97%와 5가지 활력 부스터 배합</>
      : lang === 'TH'
        ? <>พาวเวอร์ช็อตพลังงานเข้มข้นสูง<br />อัลบูมินคอมเพล็กซ์ 97% และบูสเตอร์ 5 ชนิด</>
        : <>High-concentration energy power shot to revive your daily life<br />97% Albumin Complex and 5 vitality boosters</>;

  const detail =
    lang === 'KR' ? (
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-2">
          <span className="text-[#FF9D00] text-lg leading-none mt-0.5">★</span>
          <div className="flex flex-col">
            <span className="font-bold text-[#09090a] text-base">알부민복합물 97%</span>
            <span className="text-[#858588] text-sm">프랑스산 고순도 난백알부민 함유</span>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-[#FF9D00] text-lg leading-none mt-0.5">★</span>
          <span className="font-bold text-[#09090a] text-base">5가지 활력 부스터 배합</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-[#FF9D00] text-lg leading-none mt-0.5">★</span>
          <span className="font-bold text-[#09090a] text-base">지친 일상을 깨우는 고농축 에너지</span>
        </div>
      </div>
    ) : lang === 'TH' ? (
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-2">
          <span className="text-[#FF9D00] text-lg leading-none mt-0.5">★</span>
          <div className="flex flex-col">
            <span className="font-bold text-[#09090a] text-base">อัลบูมินคอมเพล็กซ์ 97%</span>
            <span className="text-[#858588] text-sm">อัลบูมินไข่ขาวบริสุทธิ์สูงจากฝรั่งเศส</span>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-[#FF9D00] text-lg leading-none mt-0.5">★</span>
          <span className="font-bold text-[#09090a] text-base">บูสเตอร์พลังงาน 5 ชนิด</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-[#FF9D00] text-lg leading-none mt-0.5">★</span>
          <span className="font-bold text-[#09090a] text-base">พลังงานเข้มข้นสูงสำหรับทุกวัน</span>
        </div>
      </div>
    ) : (
      "High-concentration albumin power shot formulated with 97% French egg white albumin complex and 5 vitality boosters to energize your daily life."
    );

  const points = [
    {
      point: 'Point 1',
      title: lang === 'KR' ? '프랑스산 난백 알부민 복합물 97%' : lang === 'TH' ? 'อัลบูมินไข่ขาวจากฝรั่งเศส 97%' : '97% French Egg White Albumin Complex',
      desc: '(14,550mg)',
      icon: '🇫🇷',
    },
    {
      point: 'Point 2',
      title: lang === 'KR' ? '특허받은 녹용추출분말 함유' : lang === 'TH' ? 'มีสารสกัดเขากวางจดสิทธิบัตร' : 'Contains Patented Deer Antler Extract',
      desc: lang === 'KR' ? '일상에 활력을 더하는 프리미엄 원료' : lang === 'TH' ? 'วัตถุดิบพรีเมียมเพิ่มพลังชีวิต' : 'Premium ingredient for daily vitality',
      icon: '🦌',
    },
    {
      point: 'Point 3',
      title: lang === 'KR' ? '프리미엄 부원료 배합' : lang === 'TH' ? 'ส่วนผสมเสริมพรีเมียม' : 'Premium Sub-ingredient Blend',
      desc: 'Arginine, Taurine, Collagen, Vit C',
      icon: '✨',
    },
    {
      point: 'Point 4',
      title: lang === 'KR' ? '편리한 액상 스틱 포장' : lang === 'TH' ? 'บรรจุภัณฑ์สติ๊กของเหลวสะดวก' : 'Convenient Liquid Stick Pouch',
      desc: lang === 'KR' ? '언제 어디서나 간편하게 섭취' : lang === 'TH' ? 'ดื่มง่ายทุกที่ทุกเวลา' : 'Easy intake anytime, anywhere',
      icon: '🧪',
    },
    {
      point: 'Point 5',
      title: lang === 'KR' ? '검증된 제조 시설' : lang === 'TH' ? 'โรงงานผลิตที่ผ่านการรับรอง' : 'Proven Manufacturing Facility',
      desc: lang === 'KR' ? 'HACCP 인증 시설에서 안전하게 제조' : lang === 'TH' ? 'ผลิตอย่างปลอดภัยในโรงงาน HACCP' : 'Safely manufactured in HACCP facility',
      icon: '🛡️',
    },
  ];

  const recommendations = [
    lang === 'KR' ? '아무리 쉬어도 피곤함이 가시지 않는 직장인' : lang === 'TH' ? 'คนทำงานที่รู้สึกเหนื่อยล้าแม้จะพักผ่อนแล้ว' : 'Office workers who feel tired even after resting',
    lang === 'KR' ? '나이가 들수록 건강 관리가 번거로운 중장년층' : lang === 'TH' ? 'ผู้ใหญ่ที่ต้องการดูแลสุขภาพอย่างง่ายดาย' : 'Middle-aged people seeking easy health management',
    lang === 'KR' ? '온 가족이 먹을 수 있는 제품을 찾으시는 분' : lang === 'TH' ? 'ผู้ที่มองหาผลิตภัณฑ์สำหรับทั้งครอบครัว' : 'Anyone looking for a product for the whole family',
    lang === 'KR' ? '입맛이 없고 기운이 없어 보양이 필요하신 분' : lang === 'TH' ? 'ผู้ที่ต้องการบำรุงร่างกาย เบื่ออาหาร หรืออ่อนเพลีย' : 'People needing nourishment due to lack of appetite/energy',
    lang === 'KR' ? '믿을 수 있는 고함량 알부민을 찾으시는 분' : lang === 'TH' ? 'ผู้ที่ต้องการอัลบูมินความเข้มข้นสูงที่เชื่อถือได้' : 'Those looking for reliable high-potency albumin',
  ];

  return (
    <section id="health" className="py-20 md:py-[120px] bg-[#F5F8FF]">
      <div className="max-w-[1440px] mx-auto px-3 md:px-[60px] space-y-20">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          <div className="space-y-2">
            <span className="font-['Gotham',sans-serif] font-bold text-sm md:text-[20px] text-[#0047AB] tracking-widest">PRODUCT</span>
            <h2 className="font-['Gotham',sans-serif] font-bold text-3xl md:text-[60px] text-[#09090a]">BIOTIVA PRODUCT</h2>
          </div>
          <p className="font-['Pretendard',sans-serif] font-bold text-lg md:text-[24px] text-[#09090a] tracking-[-0.03em] break-keep">
            {lang === 'KR' ? (
              <>지친 일상을 깨우는<br />고농축 에너지 파워샷</>
            ) : lang === 'TH' ? (
              <>พาวเวอร์ช็อตความเข้มข้นสูง<br />ที่ช่วยปลุกพลังชีวิตประจำวัน</>
            ) : (
              <>High-concentration energy power shot<br />to revive your daily life</>
            )}
          </p>
        </motion.div>

        {/* Product card */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onClick={() => setIsOpen(true)}
            className="group space-y-6 w-full max-w-md cursor-pointer mx-auto"
          >
            <div className="aspect-square overflow-hidden rounded-sm relative">
              <img
                src={imgProduct4}
                alt={title}
                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="space-y-4 text-center">
              <div className="space-y-1">
                <h3 className="font-['Pretendard',sans-serif] font-bold text-lg md:text-[20px] text-[#09090a]">{title}</h3>
                <p className="font-['Pretendard',sans-serif] text-sm text-[#858588] leading-relaxed">{desc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-1 py-4 pb-[80px] md:p-4 pointer-events-none"
            >
              <div className="bg-[#F5F8FF] w-full max-w-4xl max-h-[calc(100vh-100px)] md:max-h-[90vh] overflow-hidden rounded-lg shadow-2xl pointer-events-auto flex flex-col relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 text-[#09090a]/50 hover:text-[#09090a] transition-colors z-20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="overflow-y-auto flex-1 w-full">
                  {/* Top: image + info */}
                  <div className="flex flex-col md:flex-row w-full">
                    <div className="w-full md:w-1/2 bg-[#F5F8FF] flex items-center justify-center p-6 md:p-12">
                      <div className="relative w-full aspect-square">
                        <img
                          src={imgProduct4}
                          alt={title}
                          className="w-full h-full object-contain mix-blend-multiply"
                        />
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 px-2 py-6 md:p-12 flex flex-col justify-center space-y-8">
                      <div>
                        <span className="font-['Gotham',sans-serif] font-bold text-[#0047AB] tracking-widest block mb-2">PRODUCT DETAIL</span>
                        <h3 className="font-['Pretendard',sans-serif] font-bold text-2xl md:text-3xl text-[#09090a] leading-tight">
                          {title}
                        </h3>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-['Pretendard',sans-serif] font-bold text-lg text-[#09090a] mb-2">
                            {lang === 'KR' ? '상품 소개' : lang === 'TH' ? 'รายละเอียดสินค้า' : 'Description'}
                          </h4>
                          <p className="font-['Pretendard',sans-serif] font-medium text-[#555] leading-relaxed break-keep">
                            {desc}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-['Pretendard',sans-serif] font-bold text-lg text-[#09090a] mb-2">
                            {lang === 'KR' ? '상세 정보' : lang === 'TH' ? 'ข้อมูลเพิ่มเติม' : 'Detail'}
                          </h4>
                          <div className="font-['Pretendard',sans-serif] text-[#555] leading-relaxed text-sm break-keep">
                            {detail}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 1: IGREG Origin */}
                  <div className="w-full p-6 md:p-12 border-t border-[#E5F0FF] bg-white">
                    <div className="text-center mb-6">
                      <h3 className="font-['Gotham',sans-serif] font-bold text-xl md:text-2xl text-[#09090a] mb-2 leading-tight">
                        {lang === 'KR'
                          ? <>바이오티바는 프랑스 <span className="text-[#0047AB]">IGREG</span>사의<br className="md:hidden" /> 최고급 알부민을 담고 있습니다.</>
                          : lang === 'TH'
                            ? <>Biotiva บรรจุอัลบูมินชั้นเยี่ยมจาก <span className="text-[#0047AB]">IGREG</span> ประเทศฝรั่งเศส</>
                            : <>Biotiva contains premium <span className="text-[#0047AB]">IGREG</span><br className="md:hidden" /> albumin from France.</>}
                      </h3>
                      <span className="inline-block bg-[#F5F5F7] rounded-full px-3 py-1 text-xs text-[#858588] font-bold">
                        IGREG (Since 1941), ORIGIN FRANCE
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-stretch bg-[#FBFCFE] p-1 md:p-6 rounded-lg border border-[#E5F0FF]">
                      <div className="w-full md:w-1/2 min-h-[220px] bg-gray-200 rounded-md overflow-hidden relative">
                        <img src={imgFranceFarm} className="absolute inset-0 w-full h-full object-cover" alt="France Farm" />
                        <div className="absolute inset-0 bg-blue-900/10" />
                      </div>
                      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
                        <div>
                          <h4 className="font-['Gotham',sans-serif] font-bold text-2xl text-[#0047AB] mb-1">IGREG</h4>
                          <p className="font-['Pretendard',sans-serif] font-bold text-[#09090a] text-lg">
                            {lang === 'KR' ? '80년 전통의 프랑스 알부민 전문 기업' : lang === 'TH' ? 'ผู้เชี่ยวชาญอัลบูมินฝรั่งเศส 80 ปี' : '80 Years of French Albumin Expertise'}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="font-['Pretendard',sans-serif] font-bold text-[#0047AB] text-base leading-tight">
                            {lang === 'KR' ? '엄격한 품질 관리와 고순도 공정' : lang === 'TH' ? 'การควบคุมคุณภาพเข้มงวดและกระบวนการความบริสุทธิ์สูง' : 'Strict Quality Control & High Purity Process'}
                          </p>
                          <p className="font-['Pretendard',sans-serif] text-sm text-[#555] leading-relaxed break-keep">
                            {lang === 'KR'
                              ? "프랑스 IGREG사는 1941년부터 이어온 노하우로 최상급 난백알부민을 생산합니다. Non-GMO 표준과 철저한 위생 관리를 통해 단백질의 영양을 온전히 보존하는 고순도 원료를 제공합니다."
                              : lang === 'TH'
                                ? "IGREG ผลิตอัลบูมินไข่ขาวชั้นนำมาตั้งแต่ปี 1941 ด้วยมาตรฐาน Non-GMO และการจัดการด้านสุขอนามัยอย่างเข้มงวด เพื่อให้ได้วัตถุดิบคุณภาพสูงที่คงคุณค่าโภชนาการของโปรตีนอย่างสมบูรณ์"
                                : "IGREG has been producing top-grade egg white albumin since 1941. Through Non-GMO standards and thorough hygiene management, it provides high-purity ingredients that preserve the full nutritional value of protein."}
                          </p>
                        </div>
                        <div className="bg-[#E5F0FF] text-[#0047AB] text-sm p-3 rounded font-bold break-keep leading-relaxed">
                          {lang === 'KR'
                            ? <>바이오티바 파워샷은 <span className="underline decoration-2">프랑스 IGREG사의 정식 원료</span>만을 사용합니다.</>
                            : lang === 'TH'
                              ? <>Biotiva Power Shot ใช้เฉพาะ <span className="underline decoration-2">วัตถุดิบอย่างเป็นทางการจาก IGREG ประเทศฝรั่งเศส</span></>
                              : <>Biotiva Power Shot uses only <span className="underline decoration-2">official ingredients from IGREG, France</span>.</>}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Core Value */}
                  <div className="p-6 md:p-12 border-t border-[#E5F0FF] bg-white text-center">
                    <div className="inline-block bg-[#0047AB]/10 text-[#0047AB] rounded-full px-4 py-1.5 text-sm font-bold mb-6 italic">
                      Daily Shot for Everyday Strength
                    </div>
                    <h4 className="font-['Gotham',sans-serif] font-bold text-sm md:text-[20px] text-[#0047AB] tracking-widest mb-4">CORE VALUE</h4>
                    <h3 className="font-['Pretendard',sans-serif] font-bold text-2xl md:text-3xl text-[#09090a] mb-6 leading-tight break-keep">
                      {lang === 'KR'
                        ? <>알부민복합물 97%<br className="md:hidden" /> 지친 일상을 깨우는 에너지 파워샷</>
                        : lang === 'TH'
                          ? <>อัลบูมินคอมเพล็กซ์ 97%<br className="md:hidden" /> พาวเวอร์ช็อตปลุกพลังทุกวัน</>
                          : <>97% Albumin Complex<br className="md:hidden" /> Energy Power Shot to Wake Up Your Day</>}
                    </h3>
                    <div className="flex justify-center items-center gap-4 md:gap-8 mb-4 overflow-x-auto py-4 scrollbar-hide">
                      {[
                        { label: lang === 'KR' ? '알부민복합물' : lang === 'TH' ? 'อัลบูมิน' : 'Complex', val: '97%' },
                        { label: 'L-Arginine', val: 'Mix' },
                        { label: 'Taurine', val: 'Mix' },
                        { label: 'Biotin', val: 'Mix' },
                        { label: 'Zinc/Vit C', val: 'Mix' },
                      ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center shrink-0">
                          <div className="size-16 md:size-20 rounded-full border-2 border-[#0047AB] flex items-center justify-center font-bold text-[#0047AB] text-sm md:text-base mb-2 bg-white">
                            {item.val}
                          </div>
                          <span className="text-xs md:text-sm font-bold text-gray-600">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 3: 5 Reasons */}
                  <div className="w-full p-6 md:p-12 border-t border-[#E5F0FF] bg-white">
                    <div className="text-center mb-10">
                      <h4 className="font-['Pretendard',sans-serif] font-bold text-2xl md:text-3xl text-[#09090a] mb-3">
                        {lang === 'KR' ? '바이오티바 알부민이 특별한 5가지 이유' : lang === 'TH' ? '5 เหตุผลที่ทำให้ Biotiva Albumin พิเศษกว่าใคร' : '5 Reasons Why Biotiva Albumin is Special'}
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {points.map((item, i) => (
                        <div key={i} className="flex gap-4 p-5 bg-[#F8FAFF] rounded-2xl border border-[#E5F0FF] shadow-sm hover:translate-y-[-4px] transition-transform duration-300">
                          <div className="size-12 rounded-xl bg-white border border-[#E5F0FF] flex items-center justify-center text-2xl shrink-0">
                            {item.icon}
                          </div>
                          <div className="flex flex-col justify-center">
                            <span className="text-[#0047AB] font-bold text-xs mb-1 uppercase tracking-wider">{item.point}</span>
                            <h5 className="font-['Pretendard',sans-serif] font-bold text-[#09090a] text-sm md:text-base leading-tight mb-1">{item.title}</h5>
                            <p className="font-['Pretendard',sans-serif] text-xs text-[#555] font-medium">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 4: Recommendation */}
                  <div className="w-full p-6 md:p-12 border-t border-[#E5F0FF] bg-[#FBFCFE]">
                    <div className="max-w-3xl mx-auto text-center">
                      <h4 className="font-['Pretendard',sans-serif] font-bold text-2xl md:text-3xl text-[#0047AB] mb-8 italic">
                        {lang === 'KR' ? '이런 분들께 추천합니다!' : lang === 'TH' ? 'แนะนำสำหรับ...' : 'Recommended for...'}
                      </h4>
                      <div className="space-y-3">
                        {recommendations.map((text, i) => (
                          <div key={i} className="bg-white px-6 py-4 rounded-full shadow-sm border border-[#E5F0FF] flex items-center justify-center gap-3">
                            <div className="size-2 rounded-full bg-[#0047AB]" />
                            <span className="font-['Pretendard',sans-serif] font-bold text-[#09090a] text-sm md:text-base break-keep">{text}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-12 text-center text-[#858588] text-xs font-medium space-x-4">
                        <span>#알부민파워샷</span>
                        <span>#프랑스산원료</span>
                        <span>#데일리활력</span>
                      </div>
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
