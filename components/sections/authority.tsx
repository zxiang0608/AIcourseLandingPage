import { GlassCard } from "@/components/ui/glass-card";
import { Building2, Code2, TrendingUp } from "lucide-react";

export function Authority() {
    return (
        <section className="py-20 px-4 border-t border-white/5">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight text-balance">
                        我不教 "理论"。 <br className="md:hidden" /> 我只教我 <span className="text-[#C69D3C] whitespace-nowrap">正在变现</span> 的事。
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400">
                        "我受够了每次请人、教人、然后人跑掉的循环。所以我开发了这套系统，把我的 <span className="text-white">知识</span> 变成可以自动赚钱的 <span className="text-white">资产</span>，不再被 '人' 绑架。"
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[400px]">
                    {/* Widget 1: Physical Business */}
                    <GlassCard className="md:col-span-2 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-black/80 z-10" /> {/* Opacity 80% filter */}
                        <img
                            src="https://placehold.co/800x400/0a0a0a/333333?text=Warehouse+Inventory+(Dark)"
                            alt="Oxylife Inventory"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                        />
                        <div className="relative z-20 h-full flex flex-col justify-end">
                            <div className="flex items-center gap-2 text-[#C69D3C] mb-2">
                                <Building2 className="w-5 h-5" />
                                <span className="font-mono text-sm uppercase tracking-wider">Oxylife Inventory</span>
                            </div>
                            <p className="text-xl font-bold">实体生意验证</p>
                        </div>
                    </GlassCard>

                    {/* Widget 2: Service Business */}
                    <GlassCard className="relative overflow-hidden group">
                        <div className="absolute inset-0 bg-black/80 z-10" /> {/* Opacity 80% filter */}
                        <img
                            src="https://placehold.co/400x400/0a0a0a/333333?text=Revenue+Graph+(Dark)"
                            alt="Wee Studio Revenue"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                        />
                        <div className="relative z-20 h-full flex flex-col justify-end">
                            <div className="flex items-center gap-2 text-[#C69D3C] mb-2">
                                <TrendingUp className="w-5 h-5" />
                                <span className="font-mono text-sm uppercase tracking-wider">Wee Studio Revenue</span>
                            </div>
                            <p className="text-xl font-bold">服务业验证</p>
                        </div>
                    </GlassCard>

                    {/* Widget 3: Tech Validation */}
                    <GlassCard className="relative overflow-hidden group md:col-span-3">
                        <div className="absolute inset-0 bg-black/80 z-10" /> {/* Opacity 80% filter */}
                        <img
                            src="https://placehold.co/1200x300/000000/00ff00?text=Matrix+Code+Rain"
                            alt="Durian Calculator Code"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                        />
                        <div className="relative z-20 h-full flex flex-col justify-end p-6">
                            <div className="flex items-center gap-2 text-[#C69D3C] mb-2">
                                <Code2 className="w-5 h-5" />
                                <span className="font-mono text-sm uppercase tracking-wider">"Durian Calculator" Code</span>
                            </div>
                            <p className="text-xl font-bold mb-2">技术验证</p>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
