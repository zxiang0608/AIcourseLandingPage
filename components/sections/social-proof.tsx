import { GlassCard } from "@/components/ui/glass-card";
import { User, Building2, Factory } from "lucide-react";

export function SocialProof() {
    return (
        <section className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        学员真实见证
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        来自马来西亚企业主的真实实战成果。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: Kelvin Lau */}
                    <GlassCard className="p-8 flex flex-col justify-between space-y-6 h-full border-white/5 bg-white/[0.02]">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white leading-tight">
                                “不再为了追报价单，搞到自己像个打杂的。”
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                "以前最烦发 Quotation 和追进度，请了 Admin 还是要天天盯着 。学了这套系统，我把琐事丢给 AI。现在只需 <span className="text-white font-bold">5 分钟</span> 点个头，它做得比我交代的还稳 。"
                            </p>
                        </div>
                        <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                            <div className="bg-white/10 p-2 rounded-full">
                                <User className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white">Kelvin Lau</div>
                                <div className="text-xs text-gray-400">Founder, K-Creative Design Agency</div>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Card 2: Sharon Wong */}
                    <GlassCard className="p-8 flex flex-col justify-between space-y-6 h-full border-white/5 bg-white/[0.02] relative overflow-hidden group">
                        {/* Subtle Gold Glow for ROI */}
                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#C69D3C]/20 blur-[50px] rounded-full group-hover:bg-[#C69D3C]/30 transition-all duration-500" />

                        <div className="space-y-4 relative z-10">
                            <h3 className="text-xl font-bold text-white leading-tight">
                                “还没上完课，就已经赚回 10 倍学费。”
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                "我以为 AI 只是写 Email，没想到它能自动追单。部署系统后，我把旧客户跑一遍，第一周就自动追回了 <span className="text-[#C69D3C] font-bold">RM 4,500</span> 的业绩。第一天就赚回本了 。"
                            </p>
                        </div>
                        <div className="pt-6 border-t border-white/10 flex items-center gap-4 relative z-10">
                            <div className="bg-white/10 p-2 rounded-full">
                                <Building2 className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white">Sharon Wong</div>
                                <div className="text-xs text-gray-400">Director, S&W Advisory Group</div>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Card 3: Mr. Lim */}
                    <GlassCard className="p-8 flex flex-col justify-between space-y-6 h-full border-white/5 bg-white/[0.02]">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white leading-tight">
                                “我以前觉得 AI 只会讲废话，原来是我不懂怎么指挥。”
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                "试过很多 AI 工具都很“课本式”，不能见客户 。但这堂课的 Master Filter 真的不一样，AI 写的东西有了“生意人的脑子”，懂心理、有紧迫感 。"
                            </p>
                        </div>
                        <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                            <div className="bg-white/10 p-2 rounded-full">
                                <Factory className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white">Mr. Lim</div>
                                <div className="text-xs text-gray-400">SME Owner, Hock Seng Hardware</div>
                            </div>
                        </div>
                    </GlassCard>

                </div>
            </div>
        </section>
    );
}
