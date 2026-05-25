import { ArrowLeftRight, BadgeCent, RefreshCcw } from 'lucide-react';
import { CtaButton } from '../ui/cta-button';
import { SectionHeader } from '../ui/section-header';

export function SwapRecommendationCard() {
  return (
    <section className="mt-4 rounded-[22px] bg-white p-4 shadow-[0_8px_24px_rgba(17,24,39,0.06)]">
      <SectionHeader title="闲置券别浪费" />
      <p className="mt-1 text-[15px] text-neutral-500">把用不到的券，换成你想要的</p>
      <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <div className="rounded-2xl bg-[#eefaf5] p-3">
          <span className="rounded-full bg-[#35b88f] px-3 py-1 text-[12px] text-white">我的闲置券</span>
          <p className="mt-2 text-[32px] leading-[34px] font-semibold">奶茶两杯券</p>
          <p className="text-[13px] text-neutral-500">2天后过期</p>
          <p className="mt-1 text-[17px] text-green-700">价值 ¥20</p>
        </div>
        <div className="grid h-10 w-10 place-items-center rounded-full border bg-white">
          <ArrowLeftRight className="text-orange-500" size={18} />
        </div>
        <div className="rounded-2xl bg-[#fff4ea] p-3">
          <span className="rounded-full bg-orange-500 px-3 py-1 text-[12px] text-white">AI 推荐换</span>
          <p className="mt-2 text-[32px] leading-[34px] font-semibold">洗车券</p>
          <p className="text-[13px] text-neutral-500">可补 20积分</p>
          <p className="mt-1 text-[17px] text-orange-600">价值 ¥60</p>
        </div>
      </div>

      <p className="mt-3 text-[14px] text-neutral-600">AI 推荐：你最近更需要洗车优惠，这个方案匹配度 <span className="text-orange-500">92%</span>，离你 <span className="text-orange-500">1.2km</span></p>
      <div className="mt-4 flex gap-3">
        <CtaButton className="flex-1"><BadgeCent className="mr-1 inline" size={16} />20 积分兑换</CtaButton>
        <CtaButton variant="outline" className="flex-1"><RefreshCcw className="mr-1 inline" size={16} />换一个</CtaButton>
      </div>
    </section>
  );
}
