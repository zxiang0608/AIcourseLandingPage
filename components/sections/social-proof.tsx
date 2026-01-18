import { GlassCard } from "@/components/ui/glass-card";
import { Quote } from "lucide-react";

export function SocialProof() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <GlassCard className="relative p-8 md:p-12 border-[#C69D3C]/20 bg-gradient-to-br from-[#C69D3C]/5 to-transparent">
                    <Quote className="absolute top-8 left-8 w-12 h-12 text-[#C69D3C]/20 -z-10" />

                    <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-gray-200 text-center italic">
                        "Zixiang 对系统有种疯狂的执着。在 AI 还没帮公司赚到钱之前，他不允许任何人休息。如果你能学到他的后台操作 (Backend Ops)，你等于拿到了一张我们在实战中摸索了两年的作弊地图。"
                    </blockquote>

                    <div className="mt-8 text-center">
                        <div className="font-bold text-white">— 技术总监 & 系统架构师</div>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
}
