import type { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' };

export function CtaButton({ variant = 'primary', className = '', ...props }: Props) {
  const base = 'h-11 rounded-full px-5 text-[16px] font-medium';
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-[#ff8c3a] to-[#ff6a00] text-white shadow-[0_8px_20px_rgba(255,106,0,0.28)]'
      : 'border border-neutral-300 bg-white text-neutral-900';

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
