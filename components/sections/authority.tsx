import { GlassCard } from "@/components/ui/glass-card";
import { Building2, Code2, TrendingUp } from "lucide-react";
import { ExecutionModule } from "@/components/sections/execution-module";

export function Authority() {
    return (
        <section className="py-20 px-4 border-t border-white/5 pb-40 md:pb-20">
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-6 h-auto">
                    {/* Widget 1: Printing Business / Web System (MacBook Pro) */}
                    <GlassCard className="md:col-span-2 relative overflow-hidden group min-h-[350px] flex flex-col items-center text-center">
                        {/* Background/Lighting Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/80 z-20 pointer-events-none" />

                        <div className="relative z-30 p-6 h-full flex flex-col justify-end items-center w-full">
                            <div className="flex flex-col items-center gap-2 text-[#C69D3C] mb-4">
                                <Building2 className="w-6 h-6" />
                                <span className="font-mono text-sm uppercase tracking-wider">SYSTEM: PRINTING BUSINESS WEBSITE</span>
                            </div>
                            <p className="text-2xl font-bold text-white relative z-40">实体生意验证</p>
                        </div>


                        {/* Isometric MacBook Mockup */}
                        <div className="absolute top-0 right-1/2 translate-x-1/2 md:translate-x-0 md:right-0 w-[80%] md:w-[70%] h-full transform translate-y-8 z-10 group-hover:scale-105 transition-transform duration-700">
                            <div className="w-full relative transform perspective-[1000px] md:rotate-y-[-10deg] md:rotate-x-[5deg]">
                                {/* 1. The Frame (Top Layer) */}
                                <img
                                    src="/assets/uploads/macbook_frame_final.png"
                                    className="relative z-20 w-full h-auto pointer-events-none drop-shadow-2xl"
                                    alt="MacBook Frame"
                                />
                                {/* 2. The Screen Content (Bottom Layer) */}
                                <div className="absolute top-[4.5%] left-[11.2%] w-[77.5%] h-[83%] bg-black z-10 overflow-hidden">
                                    <img
                                        src="/assets/uploads/printing_site_final.jpg"
                                        alt="Printing Business System Dashboard"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Widget 2: The App (iPhone) */}
                    <GlassCard className="relative overflow-hidden group min-h-[350px] flex flex-col items-center text-center">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none" />

                        <div className="relative z-30 p-6 h-full flex flex-col justify-end items-center w-full">
                            <div className="flex flex-col items-center gap-2 text-[#C69D3C] mb-4">
                                <TrendingUp className="w-6 h-6" />
                                <span className="font-mono text-sm uppercase tracking-wider">SYSTEM: BUSINESS APP INTERFACE</span>
                            </div>
                            <p className="text-2xl font-bold text-white">服务业验证</p>
                        </div>

                        {/* Floating iPhone Mockup */}
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 w-auto z-10">
                            <div className="relative transform rotate-[-5deg] animate-float group-hover:translate-y-2 transition-transform duration-700 w-[150px] md:w-[200px]" style={{ animation: 'float 6s ease-in-out infinite' }}>
                                <img
                                    src="/assets/uploads/iphone_composite_final.png"
                                    alt="Business App Interface"
                                    className="w-full h-full object-contain drop-shadow-2xl"
                                />
                            </div>
                        </div>
                    </GlassCard>

                    {/* Invoice Generator Intro Text */}
                    <div className="md:col-span-3 text-center py-8 space-y-6">
                        <h3 className="text-3xl md:text-4xl font-bold text-white leading-snug">
                            这是我们用 <span className="text-[#C69D3C] whitespace-nowrap">30 分钟</span> <span className="whitespace-nowrap">做出来的实战工具，</span>
                            <br />
                            请你直接体验。
                        </h3>
                        <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                            这个 “Invoice Generator”，是我们系统在 <span className="text-white whitespace-nowrap">30 分钟内</span> <span className="whitespace-nowrap">完成部署的成果。</span>
                            <br className="hidden md:block" />
                            输入资料，亲眼见证 AI 的执行速度。
                        </p>
                    </div>

                    {/* Widget 3: Tech Validation (Live Execution Module) */}
                    <div className="md:col-span-3 border border-[#333] rounded-2xl overflow-hidden relative min-h-[500px] flex flex-col">
                        <ExecutionModule embedded />
                    </div>
                </div>
            </div>
        </section>
    );
}
