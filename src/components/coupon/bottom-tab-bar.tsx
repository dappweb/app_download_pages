import { House, RefreshCcw, User } from 'lucide-react';
import { motion } from 'framer-motion';

export function BottomTabBar() {
  return (
    <motion.nav className="mt-4 grid grid-cols-3 rounded-[28px] bg-white p-3 text-center text-[14px]" initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <div className="rounded-2xl bg-[#fff6ef] py-2 text-orange-500"><House className="mx-auto" />首页</div>
      <div className="py-2 text-neutral-600"><RefreshCcw className="mx-auto" />换券</div>
      <div className="py-2 text-neutral-600"><User className="mx-auto" />我的</div>
    </motion.nav>
  );
}
