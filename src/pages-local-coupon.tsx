import { Sparkles, ArrowUp, Mic, RefreshCcw, User, Ticket } from 'lucide-react';
import { MobileShell } from './components/coupon/mobile-shell';
import { motion } from 'framer-motion';

const chips = ['晚上吃火锅', '洗车优惠', '电影票', '亲子活动'];

export default function LocalCouponPage() {
  return (
    <MobileShell>
      <section className="rounded-[22px] bg-gradient-to-r from-[#f4f7ff] to-[#fff6ef] p-5 border border-white shadow-[0_8px_24px_rgba(17,24,39,0.05)]">
        <h2 className="text-[42px] leading-[48px] font-semibold">今天想<span className="text-orange-500">怎么省?</span> <Sparkles className="inline" size={20}/></h2>
        <p className="text-[15px] text-neutral-500 mt-2">AI 帮你找优惠、换闲置券、算出更划算的方案</p>
        <div className="mt-4 bg-white rounded-[20px] p-4">
          <div className="flex items-center gap-3">
            <input className="flex-1 text-[16px] outline-none" placeholder="告诉我的消费需求…"/>
            <Mic className="text-neutral-400"/>
            <button className="w-12 h-12 rounded-full bg-[#111827] text-white grid place-items-center"><ArrowUp/></button>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">{chips.map(c=> <span key={c} className="px-3 py-2 text-sm rounded-full bg-neutral-100">{c}</span>)}</div>
        </div>
      </section>

      <section className="mt-4 rounded-[22px] bg-white p-4 shadow-[0_8px_24px_rgba(17,24,39,0.06)]">
        <div className="flex justify-between items-center"><h3 className="text-[34px] font-semibold">闲置券别浪费</h3><button className="px-4 h-10 rounded-full bg-[#fff7f0]">查看更多</button></div>
        <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <div className="rounded-2xl bg-[#eefaf5] p-3"><p className="text-[14px]">奶茶两杯券</p><p className="text-green-700 font-semibold">价值 ¥20</p></div>
          <div className="w-10 h-10 rounded-full bg-white border grid place-items-center"><RefreshCcw className="text-orange-500" size={18}/></div>
          <div className="rounded-2xl bg-[#fff4ea] p-3"><p className="text-[14px]">洗车券</p><p className="text-orange-600 font-semibold">价值 ¥60</p></div>
        </div>
        <div className="mt-4 flex gap-3">
          <button className="flex-1 h-11 rounded-full bg-gradient-to-r from-[#ff8c3a] to-[#ff6a00] text-white">20 积分兑换</button>
          <button className="flex-1 h-11 rounded-full border">换一个</button>
        </div>
      </section>

      <motion.nav className="mt-5 rounded-[28px] bg-white p-3 grid grid-cols-3 text-center text-sm" initial={{y:24, opacity:0}} animate={{y:0, opacity:1}}>
        <div className="rounded-2xl bg-[#fff6ef] py-2 text-orange-500"><Ticket className="mx-auto"/>首页</div>
        <div className="py-2"><RefreshCcw className="mx-auto"/>换券</div>
        <div className="py-2"><User className="mx-auto"/>我的</div>
      </motion.nav>
    </MobileShell>
  );
}
