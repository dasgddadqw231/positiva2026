import svgPaths from "./svg-5af16ixw1o";
import imgSearchPstatic1 from "figma:asset/274f0c4f0069236270134c0e9682eee76ffbe32d.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-center text-white">
      <p className="font-['Gotham:Bold',sans-serif] leading-none min-w-full opacity-60 relative shrink-0 text-[20px] tracking-[-0.114px] w-[min-content]">ONLINE STORE</p>
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.3] relative shrink-0 text-[40px] text-nowrap tracking-[-1.128px]">지금, POSITIVA를 만나보세요</p>
    </div>
  );
}

function BtnBig() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] h-[54px] items-center justify-center px-[24px] py-[16px] relative rounded-[4px] shrink-0" data-name="BTN_big">
      <div aria-hidden="true" className="absolute border border-[#e8e9ea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="search.pstatic 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={imgSearchPstatic1} />
      </div>
      <div className="flex flex-col font-['Gotham:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#09090a] text-[14px] text-center text-nowrap tracking-[-0.0798px]">
        <p className="leading-none">네이버 스마트스토어</p>
      </div>
    </div>
  );
}

function ShopWindow() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="shop-window 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="shop-window 1">
          <path d={svgPaths.p26726680} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
          <path d={svgPaths.p3be1d500} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
          <path d={svgPaths.p3d2ed300} id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
          <path d={svgPaths.pe4a29f0} id="Vector_4" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function BtnBig1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[54px] items-center justify-center px-[24px] py-[16px] relative rounded-[4px] shrink-0" data-name="BTN_big">
      <div aria-hidden="true" className="absolute border border-[#e8e9ea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <ShopWindow />
      <div className="flex flex-col font-['Gotham:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.0798px]">
        <p className="leading-none">스토어 바로가기</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <BtnBig />
      <BtnBig1 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[60px] items-center justify-center p-[60px] relative size-full">
          <Frame />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}