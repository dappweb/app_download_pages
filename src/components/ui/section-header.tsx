import { ChevronRight } from 'lucide-react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-[34px] leading-[38px] font-semibold text-neutral-900">{title}</h3>
      <button className="inline-flex h-10 items-center gap-1 rounded-full bg-[#fff7f0] px-4 text-[16px] text-neutral-800">
        查看更多 <ChevronRight size={16} />
      </button>
    </div>
  );
}
