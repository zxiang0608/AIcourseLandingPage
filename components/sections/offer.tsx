"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { CheckSquare, ShieldCheck } from "lucide-react";

export function Offer() {
    return (
        <section className="py-20 px-4 relative mb-24 md:mb-0">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C69D3C]/5 blur-[150px] rounded-full pointer-events-none" />

            {/* Shimmer Animation Style */}
            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .btn-shimmer {
                    animation: shimmer 2.5s infinite;
                }
            `}</style>


            <div className="max-w-3xl mx-auto relative z-10 space-y-12">
                {/* Section Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        用一餐饭的钱，请一个‘永不辞职’的 AI 帮手。
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                        只要这套系统帮你省下一个月的员工薪水，你就已经赚回 10 倍以上的投资。
                    </p>
                </div>

                <div className="bg-[#0A0A0A] border-2 border-dashed border-[#444] p-0 overflow-hidden shadow-2xl relative font-mono text-sm">
                    {/* Receipt Texture/Holes */}
                    <div className="absolute top-0 left-0 w-full h-4 bg-[#0A0A0A] z-10" />

                    {/* Header - Centered & Big */}
                    <div className="bg-white/5 p-8 border-b border-dashed border-[#444] text-center relative z-20">
                        <h2 className="text-[#C69D3C] font-bold text-xl md:text-2xl tracking-widest uppercase">AI 盈利系统部署清单</h2>
                    </div>

                    {/* List - Centered Content */}
                    <div className="p-8 md:p-12 space-y-8 relative z-20">
                        <div className="space-y-6">
                            {[
                                "3-Hour Live Implementation Workshop (实战特训)",
                                "5 God Tier Prompts (5 个神级指令)",
                                "Invoice Generator (发票生成器)",
                                "AIM Protocol Framework (指挥官底层逻辑)",
                                "Beginner Friendly (新手友好设定)"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center justify-center gap-4 p-2 hover:bg-white/5 transition-colors">
                                    <div className="min-w-[24px] text-[#C69D3C] text-xl">[✓]</div>
                                    <span className="text-gray-200 text-base md:text-lg font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="h-px bg-[#444] border-t border-dashed border-[#444] my-10" />

                        {/* Price */}
                        <div className="flex flex-col items-center gap-6">
                            <span className="text-gray-500 line-through text-sm">Total Value: RM 1199</span>
                            <div className="flex items-center gap-3">
                                <span
                                    className="text-7xl font-bold text-[#C69D3C] tracking-tighter"
                                    style={{ textShadow: "0 0 30px rgba(198, 157, 60, 0.5)" }}
                                >
                                    RM 65
                                </span>
                            </div>
                        </div>

                        {/* Payment Instructions (Process) - REFINED */}
                        <div className="pt-10 pb-6 text-xs md:text-sm text-gray-400 font-mono max-w-lg mx-auto">
                            <h4 className="text-[#C69D3C] font-bold uppercase tracking-wider mb-6 text-center">⚠️ 报名流程 (Process):</h4>

                            <div className="space-y-4">
                                {/* Step 01 */}
                                <div className="flex flex-col md:flex-row md:items-center justify-center gap-2 md:gap-4">
                                    <span className="text-[#C69D3C] font-bold whitespace-nowrap min-w-[80px] text-left md:text-right">01. 提交资料:</span>
                                    <span className="text-gray-300 text-left">点击下方按钮进入 SenangPay 安全网关。</span>
                                </div>

                                {/* Step 02 */}
                                <div className="flex flex-col md:flex-row md:items-center justify-center gap-2 md:gap-4">
                                    <span className="text-[#C69D3C] font-bold whitespace-nowrap min-w-[80px] text-left md:text-right">02. 截图保存:</span>
                                    <span className="text-gray-300 text-left">支付成功后，请务必自行截图保存 Receipt。</span>
                                </div>

                                {/* Step 03 - Fiona Button */}
                                <div className="flex flex-col md:flex-row md:items-center justify-center gap-2 md:gap-4">
                                    <span className="text-[#C69D3C] font-bold whitespace-nowrap min-w-[80px] text-left md:text-right">03. 激活名额:</span>
                                    <div className="flex flex-wrap items-center gap-2 text-left">
                                        <span className="text-gray-300">点击此处</span>
                                        <a
                                            href="https://wa.link/9otaa4"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-3 py-1 rounded border border-green-500/50 bg-green-500/10 text-green-400 text-xs font-bold hover:bg-green-500/20 hover:border-green-500 transition-all shadow-[0_0_10px_-2px_rgba(34,197,94,0.3)] animate-pulse"
                                        >
                                            🟢 联系助理 Fiona
                                        </a>
                                        <span className="text-gray-300">确保您的名额已成功登记。</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button & Risk Text */}
                        <div className="pt-4 space-y-4">
                            {/* Floating Capsule Button - Mobile Optimized */}
                            <div className="block md:static fixed bottom-4 left-4 right-4 z-50 safe-area-bottom">
                                <a href="https://app.senangpay.my/payment/176880122546" target="_blank" rel="noopener noreferrer" className="block relative group overflow-hidden rounded-full shadow-[0_4px_20px_rgba(198,157,60,0.4)]">
                                    {/* Shimmer Effect Layer */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 btn-shimmer pointer-events-none z-20" />

                                    <Button size="xl" className="w-full text-lg bg-[#C69D3C] hover:bg-[#b58d35] text-black font-bold border-none rounded-full uppercase tracking-widest h-14 md:h-16 relative z-10 transition-transform active:scale-[0.98]">
                                        [ 我要报名：开启 AI 自动模式 ]
                                    </Button>
                                </a>
                            </div>

                            {/* Zero Risk Promise */}
                            <div className="flex items-center justify-center gap-2 text-gray-500 text-xs md:text-sm pt-2 md:pt-0 pb-24 md:pb-0">
                                <ShieldCheck className="w-4 h-4" />
                                <span>零风险承诺：学不会全额退款 (100% Money Back Guarantee)</span>
                            </div>
                        </div>

                        {/* Barcode - Brightened */}
                        <div className="pt-8 flex flex-col items-center opacity-50 space-y-2 pb-32 md:pb-0">
                            <div className="h-10 w-full max-w-[180px] bg-white mix-blend-difference"
                                style={{ maskImage: "repeating-linear-gradient(90deg, black, black 2px, transparent 2px, transparent 5px)" }}>
                            </div>
                            <div className="text-[10px] tracking-[0.5em] text-gray-500 font-bold uppercase">AUTH_VERIFIED_39281</div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
