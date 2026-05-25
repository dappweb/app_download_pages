import { CtaButton } from '../ui/cta-button';

export function PointsBanner() {
  return (
    <section className="mt-5 rounded-[18px] bg-[#fff8ef] p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h4 className="text-[32px] font-semibold">积分兑好物</h4>
          <p className="text-[14px] text-neutral-600">候老大鸡蛋 · 高端鲜鸡蛋</p>
          <p className="mt-1 text-[13px] text-neutral-500">128 积分 / 200 积分</p>
        </div>
        <CtaButton>去兑换</CtaButton>
      </div>
    </section>
  );
}
