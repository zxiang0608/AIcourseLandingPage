import { GlassCard } from "@/components/ui/glass-card";
import { Building2, Code2, TrendingUp } from "lucide-react";

export function Authority() {
    return (
        <section className="py-20 px-4 border-t border-white/5">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        我不教 "理论"。我只教我 <span className="text-[#C69D3C]">正在做</span> 的事。
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400">
                        "我受够了每次请人、教人、然后人跑掉的循环。也不想每次要做一个 Project 都要看 Freelancer 的脸色。所以我开发了这套系统，让生意自动运转，不再被 '人' 绑架。"
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[400px]">
                    {/* Widget 1: Physical Business */}
                    <GlassCard className="md:col-span-2 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                        <img
                            src="https://placehold.co/800x400/1a1a1a/white?text=Oxylife+Warehouse"
                            alt="Oxylife Warehouse"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50"
                        />
                        <div className="relative z-20 h-full flex flex-col justify-end">
                            <div className="flex items-center gap-2 text-[#C69D3C] mb-2">
                                <Building2 className="w-5 h-5" />
                                <span className="font-mono text-sm uppercase tracking-wider">Founder of Oxylife</span>
                            </div>
                            <p className="text-xl font-bold">实体生意验证</p>
                        </div>
                    </GlassCard>

                    {/* Widget 2: Service Business */}
                    <GlassCard className="relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                        <img
                            src="https://placehold.co/400x400/1a1a1a/white?text=Revenue+Graph"
                            alt="Revenue Graph"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50"
                        />
                        <div className="relative z-20 h-full flex flex-col justify-end">
                            <div className="flex items-center gap-2 text-[#C69D3C] mb-2">
                                <TrendingUp className="w-5 h-5" />
                                <span className="font-mono text-sm uppercase tracking-wider">Owner of Wee Studio</span>
                            </div>
                            <p className="text-xl font-bold">服务业验证</p>
                        </div>
                    </GlassCard>

                    {/* Widget 3: System Architect (Full Width on Mobile, spans 3 on desktop bottom row if needed, but keeping simple 3-col bento for now) 
             Actually, let's make a Code View block.
          */}
                </div>

                {/* Additional Code Strip */}
                <GlassCard className="font-mono text-sm p-6 overflow-hidden relative">
                    <div className="flex items-center gap-2 text-[#C69D3C] mb-4">
                        <Code2 className="w-5 h-5" />
                        <span className="uppercase tracking-wider">Architect of AI Commander</span>
                    </div>
                    <div className="space-y-2 text-gray-500">
                        <div className="flex"><span className="text-purple-400 mr-2">const</span> <span className="text-yellow-200">System_Efficiency</span> = <span className="text-blue-400">async</span> () ={">"} {"{"}</div>
                        <div className="pl-4"><span className="text-purple-400">await</span> ai_agent.deploy({"{"}</div>
                        <div className="pl-8">role: <span className="text-green-400">"Sales_Director"</span>,</div>
                        <div className="pl-8">cost: <span className="text-green-400">0</span>,</div>
                        <div className="pl-8">speed: <span className="text-green-400">"Instant"</span></div>
                        <div className="pl-4">{"}"});</div>
                        <div>{"}"};</div>
                    </div>
                    <p className="mt-4 text-white font-bold text-lg">系统验证</p>
                </GlassCard>
            </div>
        </section>
    );
}
