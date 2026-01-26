"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 py-20">
            {/* Background Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#C69D3C]/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

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
                    className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.2] text-balance"
                >
                    <span className="block text-2xl md:text-5xl lg:text-6xl text-gray-200 mb-2 md:mb-4">
                        请 3 个员工不如部署一套 AI？
                    </span>
                    <span className="block">
                        教你建立一个 <span className="text-[#C69D3C] text-glow inline-block whitespace-nowrap">“只用电、不拿薪水”</span> 的 <br className="hidden md:block" />
                        <span className="text-[#C69D3C] text-glow inline-block whitespace-nowrap">24 小时销售部队</span>。
                    </span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed"
                >
                    别再只是跟 AI “聊天” (Chatting)。
                    <span className="text-white">学会复制你的老板脑袋</span>，<br className="md:hidden" />
                    让 AI 变成你真正的赚钱资产。
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
                        <a href="https://tally.so/r/44K84r" target="_blank" rel="noopener noreferrer">
                            <Button size="xl" className="relative shadow-2xl shadow-[#C69D3C]/20 border border-[#C69D3C]/50 h-auto py-3 px-8 md:h-16 md:py-4">
                                {/* Mobile Layout: Stacked */}
                                <div className="flex md:hidden items-center justify-center gap-2">
                                    <span className="text-lg font-bold">我要 AI 指挥官系统</span>
                                    <span className="bg-black/20 px-1.5 py-0.5 rounded text-xs font-mono font-bold">RM65</span>
                                    <ChevronRight className="w-4 h-4 ml-0.5" />
                                </div>

                                {/* Desktop Layout: Inline */}
                                <div className="hidden md:flex items-center gap-2">
                                    <span>YES, 我要 AI 指挥官系统</span>
                                    <span className="bg-black/20 px-2 py-0.5 rounded text-sm font-mono">RM65</span>
                                    <ChevronRight className="w-5 h-5" />
                                </div>
                            </Button>
                        </a>
                    </div>
                    <p className="text-xs text-gray-500 font-mono">
                        预览班名额有限 (Limited Seats)
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
