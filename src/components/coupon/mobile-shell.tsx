import { motion } from 'framer-motion';
import { MoreHorizontal, CircleDot, MapPin } from 'lucide-react';

export function MobileShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f3f4f8] flex justify-center py-6">
      <div className="w-[390px] rounded-[40px] bg-[#f7f8fb] px-4 pb-6 shadow-[0_16px_40px_rgba(17,24,39,0.12)]">
        <header className="pt-3 pb-4">
          <div className="flex justify-between items-center text-[20px] font-semibold px-2">
            <span>9:41</span>
            <div className="flex gap-2 items-center"><span>📶</span><span>📡</span><span>🔋</span></div>
          </div>
          <div className="mt-4 flex justify-between items-start">
            <div>
              <h1 className="text-[24px] font-semibold">本地生活券</h1>
              <p className="text-[16px] text-neutral-700 mt-1">不用的券，换成想用的券</p>
            </div>
            <div className="space-y-3">
              <div className="h-11 w-[100px] rounded-full bg-white border border-neutral-100 flex items-center justify-around">
                <MoreHorizontal size={20} /> <CircleDot size={20} />
              </div>
              <div className="h-11 px-4 rounded-full bg-white text-orange-500 border border-orange-100 flex items-center gap-1 text-[14px] font-medium">
                <MapPin size={15}/> 西安
              </div>
            </div>
          </div>
        </header>
        <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
          {children}
        </motion.main>
      </div>
    </div>
  );
}
