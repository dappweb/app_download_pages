export type Intent = { icon: string; label: string };
export type Deal = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  originalPrice: string;
  distance: string;
  tag: string;
  image: string;
  palette: 'orange' | 'blue' | 'purple';
};

export const intents: Intent[] = [
  { icon: '💬', label: '晚上吃火锅' },
  { icon: '🚗', label: '洗车优惠' },
  { icon: '🎬', label: '电影票' },
  { icon: '👨‍👩‍👧', label: '亲子活动' },
];

export const nearbyDeals: Deal[] = [
  {
    id: 'food',
    title: '贤合庄火锅',
    subtitle: '代金券 100 减 50',
    price: '¥50',
    originalPrice: '¥100',
    distance: '离你 1.2km',
    tag: '平台专享',
    image: '🍲',
    palette: 'orange',
  },
  {
    id: 'car',
    title: '小拇指洗车',
    subtitle: '精致洗车券',
    price: '¥19.9',
    originalPrice: '¥58',
    distance: '离你 850m',
    tag: '低价券',
    image: '🚙',
    palette: 'blue',
  },
  {
    id: 'cinema',
    title: '万达影城',
    subtitle: '电影票 2D/3D 通用',
    price: '¥29.9',
    originalPrice: '¥60',
    distance: '离你 2.1km',
    tag: '热门推荐',
    image: '🎦',
    palette: 'purple',
  },
];
