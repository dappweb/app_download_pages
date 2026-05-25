import { motion } from 'framer-motion';
import { AssistantHeroCard } from '../../components/coupon/assistant-hero-card';
import { BottomTabBar } from '../../components/coupon/bottom-tab-bar';
import { MobileShell } from '../../components/coupon/mobile-shell';
import { NearbyDealsCarousel } from '../../components/coupon/nearby-deals-carousel';
import { PointsBanner } from '../../components/coupon/points-banner';
import { SwapRecommendationCard } from '../../components/coupon/swap-recommendation-card';

export default function LocalCouponPage() {
  return (
    <MobileShell>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <AssistantHeroCard />
        <SwapRecommendationCard />
        <NearbyDealsCarousel />
        <PointsBanner />
        <BottomTabBar />
      </motion.div>
    </MobileShell>
  );
}
