# 本地生活券 UI 深度反向工程（完整项目输出）

## 1) Layout System（布局系统）
- 画布是 iPhone 级移动端，内容区宽度约 390。
- 全页面为 **垂直模块流**：Hero AI 区 → 闲置券推荐 → 附近优惠横滑 → 积分 Banner → 底部导航。
- 卡片主导布局（Card-first）：每个功能块都是独立圆角容器，且阴影风格统一。

## 2) Component Hierarchy（组件层级）
- `LocalCouponPage`
  - `MobileShell`
    - `AssistantHeroCard`
      - `PromptInput`
      - `IntentChips`
    - `SwapRecommendationCard`
      - `SectionHeader`
      - `PrimaryCta` / `SecondaryCta`
    - `NearbyDealsCarousel`
      - `DealCard[]`
    - `PointsBanner`
    - `BottomTabBar`

## 3) Reusable Components（可复用组件）
- 布局：`MobileShell`
- 原子：`PillChip`、`CtaButton`、`SectionHeader`
- 业务：`AssistantHeroCard`、`SwapRecommendationCard`、`NearbyDealsCarousel`、`PointsBanner`、`BottomTabBar`

## 4) Design Tokens（设计令牌）
- `src/lib/tokens.ts`
  - 颜色：背景 / 文字 / 品牌色
  - 半径：12 / 18 / 24 / 32 / pill
  - 阴影：soft / card / cta
  - 间距：4 基础网格
  - 字阶：h1/h2/title/body/caption

## 5) Typography Scale（字阶）
- Hero 主标题：42~48，强调字用橙色。
- 一级区块标题：34 左右。
- 正文：15~16。
- 说明/次级信息：13~14。
- 价格：通过大小+颜色+粗细形成视觉权重。

## 6) Spacing System（间距体系）
- 4px baseline。
- 高频点：8 / 12 / 16 / 20 / 24。
- 区块之间：16~20；卡片内部：8~12。

## 7) Radius System（圆角体系）
- 顶层设备壳：40。
- 主卡片：22~24。
- 输入模块：20。
- Chip/按钮：pill。

## 8) Shadow System（阴影体系）
- 卡片阴影：柔和扩散，低透明。
- 壳层阴影：更重以形成“手机浮层”感。
- CTA 阴影：暖色发光，跟随品牌橙。

## 9) Auto Layout Structure（自动布局映射）
- 根容器：纵向 `gap-4/5`。
- Hero：纵向（标题→副标题→输入模块→chips）。
- 推荐兑换：横向三分（左券 / 中间图标 / 右券）。
- 优惠列表：横向滚动卡片。
- TabBar：3 等分列。

## 10) Variant Opportunities（变体机会）
- `DealCard`: `food | car | cinema`
- `CtaButton`: `primary | outline`
- `PillChip`: `intent | tag | distance`
- `BottomTabItem`: `active | default`

---

## 组件树（最终实现）
```txt
src/
  app/local-coupon/page.tsx
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

## React + Tailwind + shadcn/ui + Motion 架构说明
- **React**：按“页面容器 + 业务组件 + UI 原子组件”分层。
- **TailwindCSS**：所有样式 utility 化，可快速主题化。
- **shadcn/ui 兼容**：`ui/` 层 API 设计可直接过渡为 shadcn primitive 包装。
- **Framer Motion**：页面首屏与底部导航微动效，提升质感。

## 最终页面实现
已完成完整项目级输出（非单文件草图），包括：
- 架构文档
- 数据层
- 原子组件层
- 业务组件层
- 页面装配层
