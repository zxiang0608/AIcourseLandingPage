"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Pain() {
    return (
        <section id="pain-section" className="relative py-20 px-4 mb-[40px] md:mb-0">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Header with Flicker Effect */}
                <div className="text-center space-y-4">
                    <p className="text-xs text-gray-500 font-mono">
                        预览班名额有限 (Limited Seats)
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        <motion.span>
                            "隐形成本"
                        </motion.span> 吃掉？
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400">
                        不只是钱。做生意最贵的是 <br className="md:hidden" />
                        <span className="text-red-500 font-semibold">时间</span> 和 <span className="text-red-500 font-semibold">脑力</span>。
                    </p>
                </div>

                {/* Narrative Block using Glassmorphism */}
                <div className="relative p-6 md:p-10 rounded-2xl bg-white/5 border border-red-500/10 shadow-[0_0_50px_-10px_rgba(255,0,0,0.1)]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-50" />

                    <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
                        <p>
                            你想做一个 Campaign，单单 <strong className="text-white">策划</strong> 就卡了 3 天，对着电脑发呆。
                        </p>
                        <p>
                            方案想出来了，又要找人设计、写文案，结果又要花时间 <strong className="text-white">沟通</strong> 和 <strong className="text-white">等待</strong>。样样都要钱，最惨的是样样都要 "等"。
                        </p>
                        <p className="text-xl font-medium text-white border-l-2 border-red-500 pl-4 py-1">
                            生意讲究的是速度。你在 "等人" 的时候，你的竞争对手已经把钱赚走了。
                        </p>
                        <p className="pt-4 border-t border-white/5">
                            AI 指挥官不仅仅是 Chatbot。它是你的 <span className="text-[#C69D3C]">"策略军师" + "全能执行团队"</span>。
                            从市场调研、策划方案，到最后的设计文案——全部一条龙瞬间搞定。
                            <span className="block mt-2 text-white font-mono bg-white/5 inline-block px-2 py-1 rounded text-sm">0 等待，RM0 成本。</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
