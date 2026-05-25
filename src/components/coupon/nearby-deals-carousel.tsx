import { nearbyDeals } from '../../lib/data';

const tagColor = {
  orange: 'from-[#ff9f55] to-[#ff6a00]',
  blue: 'from-[#70a5ff] to-[#4a7dff]',
  purple: 'from-[#ad93ff] to-[#7f6dff]',
};

export function NearbyDealsCarousel() {
  return (
    <section className="mt-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-[34px] leading-[38px] font-semibold">为你精选附近优惠 ✨</h3>
        <button className="text-[16px] text-neutral-500">查看更多</button>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-1">
        {nearbyDeals.map((deal) => (
          <article key={deal.id} className="min-w-[170px] rounded-[20px] bg-white p-2 shadow-[0_8px_22px_rgba(17,24,39,0.05)]">
            <div className="h-[110px] rounded-2xl bg-neutral-100 p-2">
              <span className={`inline-flex rounded-full bg-gradient-to-r ${tagColor[deal.palette]} px-3 py-1 text-[12px] text-white`}>{deal.distance}</span>
              <div className="mt-3 text-center text-5xl">{deal.image}</div>
            </div>
            <p className="mt-1 text-[13px] text-orange-500">{deal.tag}</p>
            <h4 className="text-[18px] font-semibold">{deal.title}</h4>
            <p className="text-[14px] text-neutral-600">{deal.subtitle}</p>
            <div className="mt-1 flex items-end gap-2">
              <span className="text-[34px] leading-[32px] font-semibold text-orange-500">{deal.price}</span>
              <span className="text-[14px] text-neutral-400 line-through">{deal.originalPrice}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
