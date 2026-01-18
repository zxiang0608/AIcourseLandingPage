import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { CheckSquare } from "lucide-react";

export function Offer() {
    return (
        <section className="py-20 px-4 relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C69D3C]/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-2xl mx-auto relative z-10">
                <GlassCard className="border-t-4 border-t-[#C69D3C] p-0 overflow-hidden shadow-2xl shadow-[#C69D3C]/10">
                    {/* Header */}
                    <div className="bg-white/5 p-6 border-b border-white/5 flex justify-between items-center">
                        <h2 className="font-mono text-xl text-[#C69D3C]">System_Manifest</h2>
                        <div className="text-xs font-mono text-gray-500">INVOICE #001</div>
                    </div>

                    {/* List */}
                    <div className="p-8 space-y-6">
                        <div className="space-y-4">
                            {[
                                "2-Hour Live Implementation Workshop (实战特训)",
                                "\"Durian Calculator\" Source Code (独家源代码)",
                                "\"Pasar Malam\" Localizer Prompt (本土化指令)",
                                "Employee Training Manual (AI 操作手册)"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                    <CheckSquare className="w-5 h-5 text-[#C69D3C] shrink-0 mt-0.5" />
                                    <span className="text-gray-200 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="h-px bg-white/10 my-8" />

                        {/* Price */}
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-gray-500 line-through text-lg">Total Value: RM 3,497</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold text-[#C69D3C] tracking-tight">RM 49</span>
                            </div>
                            <p className="text-sm text-gray-500 font-mono">(比两个人吃一顿 Nasi Kandar 还便宜)</p>
                        </div>

                        {/* CTA */}
                        <div className="pt-8">
                            <Button size="xl" className="w-full text-lg shadow-xl shadow-[#C69D3C]/20">
                                LUNCH SYSTEM NOW
                            </Button>
                        </div>

                        {/* Trust Logos */}
                        <div className="flex justify-center gap-6 opacity-30 grayscale pt-6">
                            <span className="font-bold">VISA</span>
                            <span className="font-bold">Mastercard</span>
                            <span className="font-bold">FPX</span>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
}
