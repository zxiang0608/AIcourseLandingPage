"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 py-20">
            {/* Background Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C69D3C]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                {/* Hook / Badge - Optional but adds technical feel */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#C69D3C] tracking-wider mb-4"
                >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    SYSTEM_ONLINE
                </motion.div>

                {/* Massive H1 */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
                >
                    如何建立一个 <br className="hidden md:block" />
                    <span className="text-[#C69D3C] text-glow">24小时为你工作的 <br className="md:hidden" /> AI 销售团队</span>
                    <span className="block text-2xl md:text-3xl mt-2 font-mono font-normal text-white/60">(RM0/Hour)</span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed"
                >
                    别再只是跟 AI "聊天" (Chatting)。
                    <br className="md:hidden" /> 开始学会 <span className="text-white font-semibold">"指挥" (Commanding)</span>。
                    <br />
                    建立真正属于你的商业资产。
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col items-center gap-4 pt-4"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#C69D3C] to-[#F3E2B6] rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <Button size="xl" className="relative shadow-2xl shadow-[#C69D3C]/20 border border-[#C69D3C]/50">
                            YES, 安装 AI 指挥官系统
                            <span className="ml-2 bg-black/20 px-2 py-0.5 rounded text-sm font-mono">RM49</span>
                            <ChevronRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                    <p className="text-xs text-gray-500 font-mono">
                        Limited Seats for Preview Batch
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
