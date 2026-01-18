import { GlassCard } from "@/components/ui/glass-card";
import { Swords, Settings2, Bot } from "lucide-react";

export function Mechanism() {
    const cards = [
        {
            icon: Swords,
            title: "商业武器",
            subtitle: "Business Weapons",
            desc: "把 AI 变成你的 24/7 业务员，而不是只会讲废话的 Chatbot。"
        },
        {
            icon: Settings2,
            title: "SOP 克隆器",
            subtitle: "The Cloner",
            desc: "复制你的大脑，让 AI 像你一样思考，不再需要你天天盯着。"
        },
        {
            icon: Bot,
            title: "本土化指令",
            desc: "让 AI 懂 \"Manglish\"，懂 \"Pasar Malam\" 的语气，写出有人味的文案。"
        }
    ];

    return (
        <section className="py-20 px-4 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, idx) => (
                        <GlassCard key={idx} hoverEffect className="group relative">
                            <div className="mb-6 p-4 rounded-full bg-white/5 w-fit border border-white/10 group-hover:border-[#C69D3C]/50 transition-colors">
                                <card.icon className="w-8 h-8 text-white group-hover:text-[#C69D3C] transition-colors" />
                            </div>

                            <h3 className="text-2xl font-bold mb-1">{card.title}</h3>
                            <span className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-4 block group-hover:text-[#C69D3C] transition-colors">{card.subtitle}</span>

                            <p className="text-gray-400 leading-relaxed">
                                {card.desc}
                            </p>
                        </GlassCard>
                    ))}
                </div>

                {/* Visual Breaker - WhatsApp Floater */}
                <div className="mt-20 flex justify-center">
                    <div className="relative max-w-sm w-full bg-[#111b21] rounded-3xl border border-white/10 shadow-2xl p-4 rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold text-black">AI</div>
                            <div>
                                <div className="font-bold text-white">AI Sales Rep</div>
                                <div className="text-xs text-green-500">online</div>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm">
                            <div className="bg-[#202c33] p-3 rounded-lg rounded-tl-none w-[85%] text-white/90">
                                老板，我已经帮您搞定了 3 个潜在客户。报价单已经发在 Email 了，请过目。
                                <div className="text-[10px] text-gray-500 text-right mt-1">10:42 AM</div>
                            </div>
                            <div className="bg-[#005c4b] p-3 rounded-lg rounded-tr-none w-[85%] ml-auto text-white/90">
                                收到，做的好。
                                <div className="text-[10px] text-green-200 text-right mt-1">10:43 AM</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
