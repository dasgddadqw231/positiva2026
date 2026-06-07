import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgPurpleBlend from "../../assets/images/news/purple-synergy-blend-2.png";
import imgRubyBlend from "../../assets/images/products/ruby-synergy-blend.png";

type Origin = {
  emoji: string;
  flag?: string;
  country?: string;
  name: string;
  label: string;
  points: { title: string; desc: string }[];
};

type Product = {
  id: number;
  image: string;
  title: string;
  tagline: string;
  desc: ReactNode;
  detail: ReactNode;
  accent: string;
  bg: string;
  ratio: { emoji: string; name: string; pct: string; sub: string }[];
  point01title: string;
  point01body: string;
  point01extra: string;
  origins: Origin[];
  recommendations: string[];
};

export function SynergyBlend({ lang }: { lang: 'KR' | 'EN' | 'TH' }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    // ── PURPLE ──────────────────────────────────────────────────
    {
      id: 1,
      image: imgPurpleBlend,
      accent: '#7c3aed',
      bg: '#F3EEFF',
      title: lang === 'KR' ? '퍼플 시너지 블렌드' : 'Purple Synergy Blend',
      tagline: lang === 'KR' ? '3가지 베리의 깊은 시너지' : lang === 'TH' ? 'ซินเนอร์จีเข้มข้นจาก 3 เบอร์รี่' : 'The deep synergy of three berries',
      desc: lang === 'KR'
        ? <>블루베리·하스카프베리·엘더베리의 3가지 시너지<br />미국·캐나다·독일 100% NFC 착즙</>
        : lang === 'TH'
        ? <>ซินเนอร์จีจาก 3 เบอร์รี่<br />100% NFC จาก USA · แคนาดา · เยอรมนี</>
        : <>Triple Berry Synergy: Blueberry · Haskapberry · Elderberry<br />100% NFC from USA · Canada · Germany</>,
      detail: lang === 'KR'
        ? (
          <div className="flex flex-col gap-4">
            {[
              { main: '블루베리 33.4% / 하스카프베리 33.3% / 엘더베리 33.3%', sub: '속부터 차오르는 건강을 위한 황금 비율' },
              { main: '버려지는 영양소 없이 100% NFC 통째 착즙', sub: '과육은 물론 껍질과 씨앗까지 물 한 방울 타지 않고' },
              { main: '미국 USDA 인증 유기농 블루베리 (미국산)' },
              { main: '로키산맥 야생 하스카프베리 (캐나다산)' },
              { main: 'EU 인증 유기농 야생 엘더베리 (독일산)' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-[#7c3aed] text-lg leading-none mt-0.5">★</span>
                <div className="flex flex-col">
                  <span className="font-bold text-[#09090a] text-base">{item.main}</span>
                  {item.sub && <span className="text-[#858588] text-sm">{item.sub}</span>}
                </div>
              </div>
            ))}
          </div>
        )
        : (
          <div className="flex flex-col gap-3">
            {['Blueberry 33.4% / Haskapberry 33.3% / Elderberry 33.3%', '100% NFC whole-fruit extraction', 'USDA Certified Organic Blueberry (USA)', 'Wild Haskapberry, Rocky Mountains (Canada)', 'EU Certified Organic Wild Elderberry (Germany)'].map((t, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-[#7c3aed] text-lg leading-none mt-0.5">★</span>
                <span className="font-bold text-[#09090a] text-base">{t}</span>
              </div>
            ))}
          </div>
        ),
      ratio: [
        { emoji: '🫐', name: lang === 'KR' ? '블루베리' : 'Blueberry', pct: '33.4%', sub: lang === 'KR' ? '맛있는 균형' : 'Taste base' },
        { emoji: '🫒', name: lang === 'KR' ? '하스카프베리' : 'Haskapberry', pct: '33.3%', sub: lang === 'KR' ? '압도적 항산화' : 'High antioxidant' },
        { emoji: '⚫', name: lang === 'KR' ? '엘더베리' : 'Elderberry', pct: '33.3%', sub: lang === 'KR' ? '빈틈없는 면역' : 'Immune-focused' },
      ],
      point01title: lang === 'KR' ? '보라색 슈퍼푸드의 밀도를 높이다' : 'Elevating the Density of Purple Superfoods',
      point01body: lang === 'KR'
        ? '산뜻한 블루베리, 진한 하스카프베리, 묵직한 엘더베리. 3가지 퍼플 베리가 만나 매일 챙기기 좋은 트리플 퍼플 슈퍼베리 루틴을 완성했습니다.'
        : 'Refreshing blueberry, intense haskapberry, and rich elderberry come together to create a daily triple purple superfood routine.',
      point01extra: lang === 'KR'
        ? '블루베리는 기본. 하스카프베리로 깊게. 엘더베리로 진하게.'
        : 'Blueberry as the base, deeper with haskapberry, richer with elderberry.',
      origins: [
        {
          emoji: '🫐', flag: '🇺🇸', country: lang === 'KR' ? '미국산' : 'USA',
          name: lang === 'KR' ? '유기농 블루베리 100% NFC' : 'Organic Blueberry 100% NFC',
          label: lang === 'KR' ? '북미의 푸른 보석' : 'The Blue Gem of North America',
          points: lang === 'KR'
            ? [
              { title: '맛과 향을 결정짓는 최적의 자연환경, 피시픽 노스웨스트', desc: '블루베리의 본고장 북미 최고의 산지 워싱턴, 오리건 지역에서 자랍니다. 강한 햇볕과 블루베리에 가장 적합한 산성 토양, 맑은 공기, 풍부한 비, 그리고 큰 일교차가 완벽히 조화를 이루어 알이 단단하고 본연의 맛과 향이 생생하게 살아있는 최상급 블루베리를 완성합니다.' },
              { title: '까다롭게 엄선한 진짜 유기농, USDA 인증 & 핸드솔팅', desc: '자연 그대로의 건강함을 담기 위해 미국 농무부(USDA)의 까다로운 평가와 지속적인 사후관리를 거친 유기농 원료만을 사용합니다. 수확 후에도 여러 단계의 품질 검사와 사람의 손으로 직접 골라내는 핸드솔팅 과정을 거쳐, 티 없이 깨끗한 블루베리만을 선발합니다.' },
              { title: '착즙했을 때 진가가 드러나는 압도적 풍미', desc: '과실이 크고 풍미가 수려한 오리건주 품종을 담아 특유의 진한 풍미를 자랑합니다. 뛰어난 균형감과 단단한 과육 덕분에 100% NFC 방식으로 착즙했을 때, 블루베리 특유의 신선한 단맛과 풍미가 극대화되어 매일 먹어도 부담 없는 기분 좋은 맛을 선사합니다.' },
            ]
            : [
              { title: 'Pacific Northwest — optimal environment for flavor', desc: 'Grown in Washington and Oregon with strong sunlight, acidic soil, clean air, and wide temperature swings.' },
              { title: 'USDA certified organic & hand-sorted', desc: 'Only USDA-certified organic berries, hand-sorted after harvest for flawless quality.' },
              { title: 'Exceptional flavor through NFC juicing', desc: '100% NFC extraction maximizes natural sweetness and aroma.' },
            ],
        },
        {
          emoji: '🫒', flag: '🇨🇦', country: lang === 'KR' ? '캐나다산' : 'Canada',
          name: lang === 'KR' ? '야생 하스카프베리 100% NFC' : 'Wild Haskapberry 100% NFC',
          label: lang === 'KR' ? '로키산맥 야생 하스카프베리' : 'Wild Haskapberry from the Rocky Mountains',
          points: lang === 'KR'
            ? [
              { title: '안토시아닌을 극대화하는 천혜의 자연조건', desc: '하스카프베리의 퀄리티는 일조량과 일교차가 결정합니다. 최적의 재배지인 캐나다의 풍부한 일조량과 극심한 일교차는 베리 속 안토시아닌 함량을 최고조로 끌어올립니다.' },
              { title: '상업 재배가 따라올 수 없는 \'야생\'의 폴리페놀', desc: '온실 속 화초처럼 자란 베리와는 다릅니다. 영하 50도의 혹독한 추위와 척박한 환경에서 자생하며 극한의 스트레스를 견뎌 강력한 항산화 성분을 축적한 생명의 열매가 탄생합니다.' },
              { title: '1년에 단 한 번, 허락된 시간은 단 7일', desc: '아무 때나 먹을 수 없습니다. 최상의 신선도와 영양을 유지하기 위해 6월 말에서 7월 초 사이, 1년 중 단 7일 동안만 수확하는 매우 귀하고 희소성 높은 프리미엄 베리입니다.' },
            ]
            : [
              { title: 'Natural conditions that maximize anthocyanins', desc: "Canada's abundant sunlight and extreme temperature swings push anthocyanin content to its peak." },
              { title: "Wild polyphenols no farm can match", desc: 'Enduring minus-50°C winters, the berries accumulate extraordinary antioxidants.' },
              { title: 'Harvested just once a year — 7 days only', desc: 'Between late June and early July, this rare berry is harvested for only 7 days per year.' },
            ],
        },
        {
          emoji: '⚫', flag: '🇩🇪', country: lang === 'KR' ? '독일산' : 'Germany',
          name: lang === 'KR' ? '유기농 야생 엘더베리 100% NFC' : 'Organic Wild Elderberry 100% NFC',
          label: lang === 'KR' ? '독일 청정 숲의 검은 보석' : "Dark Gem of Germany's Pure Forests",
          points: lang === 'KR'
            ? [
              { title: '감기와 바이러스에 맞서온 유럽의 자연 치유 원료', desc: '엘더베리는 예로부터 유럽에서 면역 건강을 위한 약용 및 식품으로 널리 활용된 열매입니다. 플라보노이드와 항바이러스 활성 성분을 품고 있어 감기, 독감 등 외부 위협에 대응하는 유럽 전통의 핵심 건강 원료로 사랑받고 있습니다.' },
              { title: '비료와 농약 없이 자라난 100% 청정 야생 프리미엄', desc: '인위적인 재배 방식과 타협하지 않습니다. 비료나 농약의 도움 없이 유럽의 청정 산림에서 자연의 힘만으로 자라난 야생 프리미엄입니다. 세계적인 원료 전문 기업 독일 Prodalim Rauner社의 엄격한 품질 관리와 까다로운 EU 유기농 인증을 거쳐 완벽한 안정성을 자랑합니다.' },
              { title: '1년에 단 한 번 수확, 한정된 생산량이 증명하는 가치', desc: '엘더베리는 원할 때마다 얻을 수 없습니다. 8월 중순에서 9월 초 사이, 1년 중 단 한 번만 수확이 가능하여 생산량이 매우 제한적인 귀한 원료입니다. 하지만 그 오랜 기다림만큼, 다른 베리류와 비교할 수 없을 정도로 면역에 특화된 높은 수준의 안토시아닌을 축적하고 있습니다.' },
            ]
            : [
              { title: "Europe's natural remedy against colds and viruses", desc: 'Rich in flavonoids and antiviral compounds, long used in European folk medicine.' },
              { title: '100% pristine wild, EU certified organic', desc: 'Quality-controlled by global ingredient specialist Prodalim Rauner.' },
              { title: 'Once-a-year harvest proves its rarity', desc: 'Harvested only between mid-August and early September each year.' },
            ],
        },
      ],
      recommendations: lang === 'KR'
        ? ['3가지 슈퍼푸드를 간편하게 찾는 분', '자극적인 단맛보다 클린한 맛을 선호하는 분', '아이부터 엄마까지 함께 먹을 제품을 찾는 분', '블루베리 베이스의 안정적인 데일리 루틴이 필요한 분', '흔한 단일 원료보다 설계된 블렌드를 고르는 분', '우리 아이들의 면역 관리에 도움이 되는 제품을 찾는 분']
        : ['Those looking for 3 superfoods in one', 'Those who prefer clean taste over artificial sweetness', 'Families from kids to adults', 'Those who need a stable daily blueberry routine', 'Those who choose a designed blend over single-ingredient', "Those supporting their children's immune health"],
    },

    // ── RUBY ────────────────────────────────────────────────────
    {
      id: 2,
      image: imgRubyBlend,
      accent: '#c0392b',
      bg: '#FFF5F5',
      title: lang === 'KR' ? '루비 시너지 블렌드' : 'Ruby Synergy Blend',
      tagline: lang === 'KR' ? '3가지 레드빛의 깊은 시너지' : lang === 'TH' ? 'ซินเนอร์จีเข้มข้นจาก 3 รูบี้' : 'The deep synergy of three rubies',
      desc: lang === 'KR'
        ? <>석류·타트체리·레드비트의 3가지 시너지<br />5:3:2 황금 비율 100% NFC 착즙</>
        : lang === 'TH'
        ? <>ซินเนอร์จีจาก 3 รูบี้: ทับทิม·ทาร์ตเชอร์รี่·บีทแดง<br />100% NFC สัดส่วนทองคำ 5:3:2</>
        : <>Pomegranate · Tart Cherry · Red Beet Synergy<br />5:3:2 Golden Ratio, 100% NFC</>,
      detail: lang === 'KR'
        ? (
          <div className="flex flex-col gap-4">
            {[
              { main: '석류 50% / 타트체리 30% / 레드비트 20%', sub: '속부터 차오르는 건강을 위한 5:3:2 황금 비율' },
              { main: '버려지는 영양소 없이 100% NFC 통째 착즙', sub: '물을 단 0.1%도 섞지 않은 순수 착즙' },
              { main: '석류 — 엘라그산·식물성 에스트로겐' },
              { main: '타트체리 — 천연 멜라토닌·안토시아닌' },
              { main: '레드비트 — 식이성 질산염·베타인·철분' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-[#c0392b] text-lg leading-none mt-0.5">★</span>
                <div className="flex flex-col">
                  <span className="font-bold text-[#09090a] text-base">{item.main}</span>
                  {item.sub && <span className="text-[#858588] text-sm">{item.sub}</span>}
                </div>
              </div>
            ))}
          </div>
        )
        : (
          <div className="flex flex-col gap-3">
            {['Pomegranate 50% / Tart Cherry 30% / Red Beet 20%', '100% NFC, zero water added', 'Pomegranate — Ellagic acid · Plant estrogen', 'Tart Cherry — Natural melatonin · Anthocyanin', 'Red Beet — Dietary nitrates · Betaine · Iron'].map((t, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-[#c0392b] text-lg leading-none mt-0.5">★</span>
                <span className="font-bold text-[#09090a] text-base">{t}</span>
              </div>
            ))}
          </div>
        ),
      ratio: [
        { emoji: '🍎', name: lang === 'KR' ? '석류' : 'Pomegranate', pct: '50%', sub: lang === 'KR' ? '생기있는 활력' : 'Vibrant vitality' },
        { emoji: '🍒', name: lang === 'KR' ? '타트체리' : 'Tart Cherry', pct: '30%', sub: lang === 'KR' ? '깊은 밸런스' : 'Deep balance' },
        { emoji: '🫚', name: lang === 'KR' ? '레드비트' : 'Red Beet', pct: '20%', sub: lang === 'KR' ? '꽉 찬 영양' : 'Full nutrition' },
      ],
      point01title: lang === 'KR' ? '붉은색 슈퍼푸드의 밀도를 높이다' : 'Elevating the Density of Ruby Superfoods',
      point01body: lang === 'KR'
        ? '상큼한 석류, 깊은 풍미의 타트체리, 묵직한 밸런스의 레드비트. 3가지 루비빛 슈퍼푸드가 만나 맛과 영양, 컬러의 완벽한 조화를 이룬 트리플 루비 슈퍼푸드 루틴을 완성했습니다.'
        : 'Refreshing pomegranate, rich tart cherry, and grounding red beet — three ruby superfoods united in a perfect harmony of taste, nutrition, and color.',
      point01extra: lang === 'KR'
        ? '석류로 상큼하게, 타트체리로 깊은 풍미를, 레드비트의 묵직하게.'
        : 'Refreshing pomegranate, deep tart cherry, grounding red beet.',
      origins: [
        {
          emoji: '🍎', flag: '🇹🇷', country: lang === 'KR' ? '튀르키예산' : 'Türkiye',
          name: lang === 'KR' ? '석류 (Pomegranate)' : 'Pomegranate',
          label: lang === 'KR' ? '자연이 빚어낸 붉은 보석, 석류로 상큼한 베이스를 세우다' : 'Nature\'s red gem — pomegranate sets the refreshing base',
          points: lang === 'KR'
            ? [
              { title: '50% 황금 비율, 상큼한 맛의 베이스', desc: '고대부터 아름다움과 생명력의 상징으로 불려온 석류. 풍부한 폴리페놀과 식물 영양을 가득 담아 매일의 활력을 채워주는 든든한 웰니스 베이스가 됩니다.' },
              { title: '지중해 햇살이 만든 귀한 당도', desc: '강렬한 일조량과 큰 일교차 속에서 자라 특유의 단맛이 깊고 풍부합니다. 세계적인 석류 산지 튀르키예에서 까다롭게 엄선한 고품질 원물만을 사용합니다.' },
              { title: '세포 노화를 방지하고 방어력을 높이는 강력한 엘라그산', desc: '매일 아침을 채워주는 맑은 활력과 식물성 에스트로겐의 힘. 속부터 맑고 선명하게 차오르는 프리미엄 피부 밸런스를 선사합니다.' },
            ]
            : [
              { title: '50% golden ratio — the refreshing base', desc: 'Pomegranate, a symbol of vitality since ancient times, packed with polyphenols and plant nutrients.' },
              { title: 'Precious sweetness from Mediterranean sunlight', desc: 'Grown under intense sun and wide temperature swings in Türkiye, the world\'s premier pomegranate region.' },
              { title: 'Powerful ellagic acid for cellular defense', desc: 'Supports skin vitality, plant estrogen balance, and cellular protection.' },
            ],
        },
        {
          emoji: '🍒',
          name: lang === 'KR' ? '타트체리 (Tart Cherry)' : 'Tart Cherry',
          label: lang === 'KR' ? '진한 풍미와 자연의 산미, 타르체리로 깊은 밸런스를 잡다' : 'Rich flavor and natural tartness — tart cherry brings deep balance',
          points: lang === 'KR'
            ? [
              { title: '깊고 진한 타트체리 본연의 풍미', desc: '진한 풍미와 기분 좋은 산미를 가진 타트체리. 운동 후 리커버리부터 편안한 휴식까지, 균형 잡힌 라이프스타일을 추구하는 현대인에게 꼭 필요한 에너지를 담았습니다.' },
              { title: '지친 몸에 깊은 휴식을 선물하는 천연 멜라토닌 에너지', desc: '타트체리에 함유된 천연 멜라토닌은 지친 몸에 깊은 휴식을 선물합니다.' },
              { title: '운동 후 쌓인 피로와 근육 리커버리를 돕는 안토시아닌 시너지', desc: '몸속 유해 산소를 빡 빼내는 안토시아닌의 강력한 힘으로 회복을 돕습니다.' },
            ]
            : [
              { title: 'Deep, rich tart cherry flavor', desc: 'Natural tartness and deep flavor to support recovery and daily balance.' },
              { title: 'Natural melatonin for deep rest', desc: 'Tart cherry\'s natural melatonin supports quality rest for tired bodies.' },
              { title: 'Anthocyanin synergy for muscle recovery', desc: 'Powerful anthocyanins help clear harmful oxygen and speed recovery.' },
            ],
        },
        {
          emoji: '🫚',
          name: lang === 'KR' ? '레드비트 (Red Beet)' : 'Red Beet',
          label: lang === 'KR' ? '대지가 품은 붉은 에너지, 레드비트로 묵직한 바디감을 더하다' : 'Earth\'s red energy — red beet adds grounding body',
          points: lang === 'KR'
            ? [
              { title: '블렌드의 맛을 잡아주는 묵직한 바디감', desc: '유럽에서 오랫동안 건강 식재료로 사랑받아 온 레드비트. 자연의 깊은 컬러와 풍부한 식물 영양을 그대로 담아 완벽한 웰니스 루틴을 선사합니다.' },
              { title: '막힘없는 흐름을 만드는 식이성 질산염의 강한 펌핑 효과', desc: '식이성 질산염이 혈류 흐름을 원활하게 하고 근본적인 기초 체력과 지치지 않는 스태미나를 높여줍니다.' },
              { title: '세포 손상을 막고 간 해독을 묵직하게 돕는 베타인 케어', desc: '베타인과 철분이 세포 손상을 방지하고 간 해독을 묵직하게 도와줍니다.' },
            ]
            : [
              { title: 'Grounding body that anchors the blend', desc: 'Long cherished in Europe as a health food, red beet delivers deep color and rich plant nutrients.' },
              { title: 'Dietary nitrates for powerful pumping effect', desc: 'Supports blood flow, stamina, and foundational physical energy.' },
              { title: 'Betaine for cellular protection and liver detox', desc: 'Betaine and iron protect cells and support liver health.' },
            ],
        },
      ],
      recommendations: lang === 'KR'
        ? [
          '바쁜 아침, 간편하게 생기 넘치는 활력을 채우고 싶으신 분',
          '비트 특유의 흙내 없이 맛과 영양의 황금 비율이 완성한 맛있는 음료를 찾으시는 분',
          '단순한 과일 주스가 아닌 진하게 농축된 폴리페놀 시너지가 필요하신 분',
          '가벼운 음료 대신 와인처럼 묵직한 바디감의 데일리 리추얼을 즐기시는 분',
          '평소 과일과 야채 등 식물성 영양소 섭취가 턱없이 부족하신 분',
        ]
        : [
          'Those wanting vibrant morning energy, conveniently',
          'Those seeking a great-tasting drink without earthy beet flavor',
          'Those who need concentrated polyphenol synergy, not just juice',
          'Those who enjoy a wine-like, full-bodied daily ritual',
          'Those whose daily intake of plant nutrients falls short',
        ],
    },
  ];

  const accentOf = (p: Product) => p.accent;

  return (
    <section id="synergy-blend" className="py-20 md:py-[120px] bg-white">
      <div className="max-w-[1440px] mx-auto px-3 md:px-[60px] space-y-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center space-y-6"
        >
          <div className="space-y-2">
            <span className="font-['Gotham',sans-serif] font-bold text-sm md:text-[20px] text-[#7c3aed] tracking-widest">PRODUCT</span>
            <h2 className="font-['Gotham',sans-serif] font-bold text-3xl md:text-[60px] text-[#09090a]">SYNERGY BLEND COLLECTION</h2>
          </div>
          <p className="font-['Pretendard',sans-serif] font-bold text-lg md:text-[24px] text-[#09090a] tracking-[-0.03em]">
            {lang === 'KR'
              ? <>자연이 만든 최적의 조합<br />POSITIVA 시너지 블렌드</>
              : lang === 'TH'
              ? <>ผสมผสานที่ดีที่สุดจากธรรมชาติ<br />POSITIVA Synergy Blend</>
              : <>Nature's optimal combination<br />POSITIVA Synergy Blend</>}
          </p>
        </motion.div>

        {/* Product grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 md:grid md:grid-cols-2 md:gap-20 md:overflow-visible md:pb-0 scrollbar-hide -mx-3 px-3 md:mx-0 md:px-0">
          {products.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
              onClick={() => setSelectedProduct(p)}
              className="group space-y-6 flex-shrink-0 w-[80vw] snap-center md:w-auto mr-6 md:mr-0 last:mr-0 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden rounded-sm relative" style={{ background: p.bg }}>
                <img src={p.image} alt={p.title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="space-y-1">
                <p className="font-['Gotham',sans-serif] font-bold text-xs tracking-widest" style={{ color: p.accent }}>{p.tagline.toUpperCase()}</p>
                <h3 className="font-['Pretendard',sans-serif] font-bold text-lg md:text-[20px] text-[#09090a]">{p.title}</h3>
                <p className="font-['Pretendard',sans-serif] text-sm text-[#858588] leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-1 py-4 pb-[80px] md:p-4 pointer-events-none"
            >
              <div
                className="w-full max-w-4xl max-h-[calc(100vh-100px)] md:max-h-[90vh] overflow-hidden rounded-lg shadow-2xl pointer-events-auto flex flex-col relative"
                style={{ background: selectedProduct.bg }}
              >
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 p-2 text-[#09090a]/50 hover:text-[#09090a] transition-colors z-20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="overflow-y-auto flex-1 w-full">

                  {/* Top: image + info */}
                  <div className="flex flex-col md:flex-row w-full">
                    <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12" style={{ background: selectedProduct.bg }}>
                      <div className="relative w-full aspect-square">
                        <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-full object-contain" />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-2 py-6 md:p-12 flex flex-col justify-center space-y-8">
                      <div>
                        <span className="font-['Gotham',sans-serif] font-bold tracking-widest block mb-2" style={{ color: accentOf(selectedProduct) }}>PRODUCT DETAIL</span>
                        <h3 className="font-['Pretendard',sans-serif] font-bold text-2xl md:text-3xl text-[#09090a] leading-tight">{selectedProduct.title}</h3>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-['Pretendard',sans-serif] font-bold text-lg text-[#09090a] mb-2">{lang === 'KR' ? '상품 소개' : lang === 'TH' ? 'รายละเอียดสินค้า' : 'Description'}</h4>
                          <p className="font-['Pretendard',sans-serif] font-medium text-[#555] leading-relaxed break-keep">{selectedProduct.desc}</p>
                        </div>
                        <div>
                          <h4 className="font-['Pretendard',sans-serif] font-bold text-lg text-[#09090a] mb-2">{lang === 'KR' ? '상세 정보' : lang === 'TH' ? 'ข้อมูลเพิ่มเติม' : 'Detail'}</h4>
                          <div className="font-['Pretendard',sans-serif] text-[#555] leading-relaxed text-sm break-keep">{selectedProduct.detail}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* POINT 01: 슈퍼푸드 밀도 */}
                  <div className="p-6 md:p-12 border-t bg-white" style={{ borderColor: `${accentOf(selectedProduct)}22` }}>
                    <div className="text-center mb-8">
                      <h4 className="font-['Gotham',sans-serif] font-bold text-sm md:text-[20px] tracking-widest mb-3" style={{ color: accentOf(selectedProduct) }}>POINT 01</h4>
                      <h3 className="font-['Pretendard',sans-serif] font-bold text-2xl md:text-3xl text-[#09090a] mb-2">{selectedProduct.point01title}</h3>
                      <p className="font-['Pretendard',sans-serif] text-[#555] text-base break-keep">{selectedProduct.point01body}</p>
                    </div>

                    <div className="flex justify-center items-end gap-4 md:gap-8 mb-8">
                      {selectedProduct.ratio.map((item, i) => (
                        <div key={i} className="flex flex-col items-center shrink-0">
                          <div className="size-16 md:size-20 rounded-full border-2 flex items-center justify-center text-2xl mb-2 bg-white shadow-sm" style={{ borderColor: accentOf(selectedProduct) }}>
                            {item.emoji}
                          </div>
                          <span className="font-['Gotham',sans-serif] font-bold text-lg md:text-xl" style={{ color: accentOf(selectedProduct) }}>{item.pct}</span>
                          <span className="text-xs md:text-sm font-bold text-[#09090a] mt-0.5">{item.name}</span>
                          <span className="text-xs text-[#858588] text-center mt-0.5">{item.sub}</span>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-xl p-5 md:p-6 text-center space-y-2" style={{ background: `${accentOf(selectedProduct)}10`, border: `1px solid ${accentOf(selectedProduct)}30` }}>
                      <p className="font-['Pretendard',sans-serif] font-bold text-[#09090a] text-base break-keep">
                        {lang === 'KR' ? '좋은 재료는 많습니다. 하지만 좋은 조합은 드뭅니다.' : 'Good ingredients are plentiful. A great combination is rare.'}
                      </p>
                      <p className="font-['Pretendard',sans-serif] text-[#555] text-sm break-keep">{selectedProduct.point01extra}</p>
                      <p className="font-['Pretendard',sans-serif] text-[#555] text-sm break-keep">
                        {lang === 'KR' ? '버려지는 영양소 없이 100% NFC 통째 착즙 — 과육은 물론 껍질과 씨앗까지, 물 한 방울 타지 않고 통째로 짜냅니다.' : '100% NFC whole-fruit extraction — flesh, skin, and seeds, without a single drop of added water.'}
                      </p>
                    </div>
                  </div>

                  {/* POINT 04: 원산지 */}
                  <div className="w-full p-6 md:p-12 border-t bg-white" style={{ borderColor: `${accentOf(selectedProduct)}22` }}>
                    <div className="text-center mb-8">
                      <h4 className="font-['Gotham',sans-serif] font-bold text-sm md:text-[20px] tracking-widest mb-3" style={{ color: accentOf(selectedProduct) }}>POINT 04</h4>
                      <h3 className="font-['Pretendard',sans-serif] font-bold text-2xl md:text-3xl text-[#09090a] mb-2">
                        {lang === 'KR' ? `${selectedProduct.title} 어디에서 왔나요?` : `Where does ${selectedProduct.title} come from?`}
                      </h3>
                    </div>
                    <div className="flex flex-col gap-6">
                      {selectedProduct.origins.map((origin) => (
                        <div key={origin.name} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${accentOf(selectedProduct)}22`, background: '#FAFAFA' }}>
                          <div className="flex items-center gap-4 p-5" style={{ borderBottom: `1px solid ${accentOf(selectedProduct)}22` }}>
                            <div className="text-4xl">{origin.flag ?? origin.emoji}</div>
                            <div>
                              {origin.country && <p className="text-[#858588] text-xs font-bold">{origin.country} · {origin.label}</p>}
                              {!origin.country && <p className="text-[#858588] text-xs font-bold">{origin.label}</p>}
                              <h5 className="font-['Pretendard',sans-serif] font-bold text-lg text-[#09090a]">{origin.name}</h5>
                            </div>
                          </div>
                          <div className="p-5 space-y-4">
                            {origin.points.map((point, i) => (
                              <div key={i} className="flex gap-3">
                                <div className="size-6 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5" style={{ background: accentOf(selectedProduct) }}>{i + 1}</div>
                                <div>
                                  <p className="font-['Pretendard',sans-serif] font-bold text-sm text-[#09090a] mb-0.5 break-keep">{point.title}</p>
                                  <p className="font-['Pretendard',sans-serif] text-xs text-[#555] leading-relaxed break-keep">{point.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* POINT 05: 추천 대상 */}
                  <div className="w-full p-6 md:p-12 border-t" style={{ borderColor: `${accentOf(selectedProduct)}22`, background: '#FAFAFA' }}>
                    <div className="max-w-3xl mx-auto text-center">
                      <h4 className="font-['Gotham',sans-serif] font-bold text-sm md:text-[20px] tracking-widest mb-3" style={{ color: accentOf(selectedProduct) }}>POINT 05</h4>
                      <h3 className="font-['Pretendard',sans-serif] font-bold text-2xl md:text-3xl mb-8 italic" style={{ color: accentOf(selectedProduct) }}>
                        {lang === 'KR' ? '이런 분들께 추천합니다!' : lang === 'TH' ? 'แนะนำสำหรับ...' : 'Recommended for...'}
                      </h3>
                      <div className="space-y-3">
                        {selectedProduct.recommendations.map((text, i) => (
                          <div key={i} className="bg-white px-6 py-4 rounded-full shadow-sm flex items-center justify-center gap-3" style={{ border: `1px solid ${accentOf(selectedProduct)}30` }}>
                            <div className="size-2 rounded-full shrink-0" style={{ background: accentOf(selectedProduct) }} />
                            <span className="font-['Pretendard',sans-serif] font-bold text-[#09090a] text-sm md:text-base break-keep">{text}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-12 text-center text-[#858588] text-xs font-medium space-x-3">
                        {selectedProduct.id === 1
                          ? <><span>#퍼플시너지블렌드</span><span>#트리플베리</span><span>#100NFC착즙</span></>
                          : <><span>#루비시너지블렌드</span><span>#석류타트체리레드비트</span><span>#100NFC착즙</span></>}
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
