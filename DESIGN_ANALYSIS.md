# Mobile Coupon UI Reverse Engineering (React + Tailwind + shadcn/ui + Framer Motion)

## 1) Layout System
- **Viewport model**: iPhone logical canvas (~390px width) with safe-area style top and bottom affordances.
- **Composition**: vertical stack of cards on a neutral background (`#F5F6FA`), each card separated by 12-16px rhythm.
- **Card paradigm**: almost everything is a rounded container with soft shadow + subtle tint/gradient.

## 2) Component Hierarchy
- `LocalCouponPage`
  - `MobileShell`
    - `StatusBar`
    - `TopHeader`
    - `AssistantHeroCard`
      - `PromptInput`
      - `QuickIntentChips`
    - `SwapRecommendationCard`
    - `NearbyDealsCarousel`
    - `PointsBanner`
    - `BottomTabBar`

## 3) Reusable Components
- `MobileShell` (device framing, safe paddings)
- `SectionHeader` (title + “查看更多” action)
- `PillChip` (distance tag, query tag, category tag)
- `OfferCard` variants (`food`, `car`, `cinema`)
- `GradientCTAButton` + `GhostOutlineButton`
- `BottomTabItem` with active/inactive visual states

## 4) Design Tokens
Defined in `src/lib/tokens.ts`:
- Color primitives (surface/text/brand/border)
- Radius scale (`12/18/24/32/pill`)
- Shadows (`soft/card/cta`)
- Spacing scale (4-based)
- Typography presets mapped to Tailwind utility strings

## 5) Typography Scale
- Hero title ~42-48px semibold
- Section title ~30-34px semibold
- Primary body 15-16px
- Secondary/meta 13-14px
- Price emphasis uses same family with color+weight emphasis rather than separate family.

## 6) Spacing System
- Base unit: 4px
- Frequent steps: 8, 12, 16, 20, 24
- Section margins mostly 16; in-card vertical stacks 8/12.

## 7) Radius System
- Chips/buttons: full-pill
- Inputs and nested surfaces: 18-20px
- Major cards: 22-24px
- Page shell: 40px.

## 8) Shadow System
- Cards: y-heavy blur, low alpha (`0 8 24 rgba(17,24,39,.06)`)
- Shell: stronger outer shadow for device-like floating
- CTA: warm glow shadow matching orange gradient

## 9) Auto Layout Structure (Figma-like mapping)
- Root: vertical auto-layout, gap 16
- Hero card: vertical auto-layout (title -> subtitle -> input module), padding 20
- Input module: horizontal row (input + mic + send), then wrapping chip row
- Swap block: horizontal row (source, swap icon, target), equal height cards
- Bottom nav: 3 equal columns with active tab pill container.

## 10) Variant Opportunities
- `OfferCard` variants by category palette/image overlay
- `CTAButton` variants: `primary`, `outline`, `soft`
- `Chip` variants: `intent`, `distance`, `badge`
- `SectionHeader` variants with optional icon sparkle
- `TabItem` states: default, active, notification.

## React Architecture + Folder Structure

```txt
src/
  app/
    local-coupon/page.tsx
  components/
    coupon/
      mobile-shell.tsx
      assistant-hero-card.tsx
      swap-recommendation-card.tsx
      nearby-deals-carousel.tsx
      points-banner.tsx
      bottom-tab-bar.tsx
    ui/
      pill-chip.tsx
      cta-button.tsx
      section-header.tsx
  lib/
    tokens.ts
    data.ts
```

## Final Page Implementation
- Implemented representative production-ready scaffold in:
  - `src/components/coupon/mobile-shell.tsx`
  - `src/pages-local-coupon.tsx`
  - `src/lib/tokens.ts`
- Uses:
  - **React composition** for sections/components
  - **Tailwind utility styling** with token alignment
  - **Framer Motion** for entrance and bottom-nav motion
  - **shadcn/ui compatibility** by keeping component API patterns and utility-first class contracts.
