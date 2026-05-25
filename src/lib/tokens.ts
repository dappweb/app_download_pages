export const tokens = {
  color: {
    bg: '#F5F6FA',
    surface: '#FFFFFF',
    text: {
      primary: '#111827',
      secondary: '#6B7280',
      muted: '#9CA3AF',
    },
    brand: {
      orange: '#FF6A00',
      orangeSoft: '#FFF2E8',
      blue: '#5B8CFF',
      purple: '#8B7BFF',
      green: '#00B894',
    },
    border: '#ECEEF3',
  },
  radius: {
    sm: '12px',
    md: '18px',
    lg: '24px',
    xl: '32px',
    pill: '999px',
  },
  shadow: {
    card: '0 8px 24px rgba(17, 24, 39, 0.06)',
    soft: '0 2px 10px rgba(17, 24, 39, 0.05)',
    cta: '0 8px 20px rgba(255, 106, 0, 0.28)',
  },
  spacing: [0, 4, 8, 12, 16, 20, 24, 28, 32],
  type: {
    h1: 'text-[48px] leading-[56px] font-semibold',
    h2: 'text-[36px] leading-[44px] font-semibold',
    title: 'text-[28px] leading-[36px] font-semibold',
    body: 'text-[24px] leading-[32px] font-normal',
    caption: 'text-[20px] leading-[28px] font-normal',
  },
} as const;
