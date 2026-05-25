import type { PropsWithChildren } from 'react';

type PillChipProps = PropsWithChildren<{ className?: string }>;

export function PillChip({ children, className = '' }: PillChipProps) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full bg-neutral-100 px-3 py-2 text-[13px] text-neutral-700 ${className}`}>
      {children}
    </span>
  );
}
