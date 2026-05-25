import { ArrowUp, Mic, Sparkles } from 'lucide-react';
import { intents } from '../../lib/data';
import { PillChip } from '../ui/pill-chip';

export function AssistantHeroCard() {
  return (
    <section className="rounded-[22px] border border-white bg-gradient-to-r from-[#f4f7ff] to-[#fff6ef] p-5 shadow-[0_8px_24px_rgba(17,24,39,0.05)]">
      <h2 className="text-[42px] leading-[48px] font-semibold text-neutral-900">今天想<span className="text-orange-500">怎么省?</span> <Sparkles className="inline text-orange-300" size={20} /></h2>
      <p className="mt-2 text-[15px] text-neutral-500">AI 帮你找优惠、换闲置券、算出更划算的方案</p>

      <div className="mt-4 rounded-[20px] bg-white p-4">
        <div className="flex items-center gap-3">
          <input className="flex-1 text-[16px] outline-none" placeholder="告诉我的消费需求…" />
          <Mic className="text-neutral-400" />
          <button className="grid h-12 w-12 place-items-center rounded-full bg-[#111827] text-white">
            <ArrowUp />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {intents.map((item) => (
            <PillChip key={item.label}>
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </PillChip>
          ))}
        </div>
      </div>
    </section>
  );
}
