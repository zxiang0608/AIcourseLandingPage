import { GlassCard } from "@/components/ui/glass-card";
import { Swords, Settings2, Bot } from "lucide-react";

export function Mechanism() {
    const cards = [
        {
            icon: Swords,
            title: "商业实战武器库",
            tag: "[ 模块 01 ]",
            desc: "别再用那些只会讲废话的 AI 实习生了 。输入我的“指挥官代码”，直接把 AI 升级成你的王牌 Manager，帮你精准搞定生意上的各种杂事 。"
        },
        {
            icon: Settings2,
            title: "老板思维克隆系统",
            tag: "[ 模块 02 ]",
            desc: "教你如何“复制”自己的商业大脑。让 AI 像你一样思考，生意从“做死做活”切换到“自动跑数”，你不再需要天天盯着，它也能把事做对 。"
        },
        {
            icon: Bot,
            title: "顶尖营销 + 成交心理专家",
            tag: "[ 模块 03 ]",
            desc: "赋予 AI “大师级滤镜 (Master Filter)”，让它瞬间化身为最懂人心的营销与成交专家 。它不只是在写稿，而是在利用商业心理学，帮你写出那种客户看了就想下单、成交率极高的文案 。"
        }
    ];

    return (
        <section className="py-20 px-4 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10 space-y-16">

                {/* 1. The Bridge (Logic Transition) */}
                <div className="text-center max-w-3xl mx-auto space-y-6">
                    <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                        这不是一个好玩的插件，这是你即将掌握的“指挥官权限”。 <br />
                        刚才的 <span className="text-[#C69D3C]">30 秒</span> 只是冰山一角。
                    </p>
                    <p className="text-gray-400">
                        在实战课中，你将亲手学会部署以下 <span className="text-white font-bold">3 大核心系统</span>，告别“聊天”，掌握真正的商业外挂 。
                    </p>
                </div>

                {/* 2. The Module Stack (3 Core Modules) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, idx) => (
                        <GlassCard key={idx} hoverEffect className="group relative flex flex-col items-center text-center h-full border-white/5 bg-black/40">

                            {/* Tag */}
                            <div className="mt-6 mb-2">
                                <span className="text-[#C69D3C] font-mono text-xs tracking-widest">{card.tag}</span>
                            </div>

                            {/* Icon - Centered */}
                            <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-[#C69D3C]/50 transition-colors">
                                <card.icon className="w-8 h-8 text-white group-hover:text-[#C69D3C] transition-colors" />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-white">{card.title}</h3>

                            <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                                {card.desc}
                            </p>
                        </GlassCard>
                    ))}
                </div>

                {/* 3. The Intuition Nudge (Split Layout) */}
                <div className="pt-12">
                    <h2 className="text-center text-2xl md:text-3xl font-bold text-white leading-tight mb-12">
                        与其花钱请 3 个人，不如部署一套<br className="md:hidden" />“只喝电、不拿薪水”的 AI 部队。
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">

                        {/* Left: Chat UI */}
                        <div className="relative max-w-sm w-full bg-white/5 backdrop-blur-xl rounded-3xl border border-[#C69D3C]/20 shadow-[0_0_40px_-5px_rgba(198,157,60,0.3)] p-4 transform transition-transform duration-500 hover:scale-[1.02]">
                            {/* Golden Glow Accent */}
                            <div className="absolute inset-0 rounded-3xl bg-[#C69D3C]/5 animate-pulse pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C69D3C] to-[#F3E2B6] flex items-center justify-center font-bold text-black shadow-lg shadow-[#C69D3C]/20">AI</div>
                                    <div>
                                        <div className="font-bold text-white">AI Sales Director</div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-xs text-green-500">online</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4 text-sm">
                                    {/* AI Message 1 (Report) */}
                                    <div className="bg-[#2a2a2a] p-3 rounded-2xl rounded-tl-sm w-[90%] text-white/90 shadow-md border border-white/5">
                                        老板，昨天你交代的那些跟进任务我已经全部搞定了，报价单也都已经发给客户了。
                                        <div className="text-[10px] text-gray-400 text-right mt-1">09:00 AM</div>
                                    </div>

                                    {/* AI Message 2 (Proactive) */}
                                    <div className="bg-[#2a2a2a] p-3 rounded-2xl rounded-tl-sm w-[95%] text-white/90 shadow-md border border-white/5">
                                        另外，我刚才帮你看过那 5 个新客户。跟进文案我已经按照你的语气准备好了，等你过目。只要你点个头，我这里马上就帮你自动发出去。
                                        <div className="text-[10px] text-gray-400 text-right mt-1">09:01 AM</div>
                                    </div>

                                    {/* Boss Reply (Approval) */}
                                    <div className="bg-[#005c4b] p-3 rounded-2xl rounded-tr-sm w-fit ml-auto text-white/90 shadow-md">
                                        收到，做的很专业。
                                        <div className="text-[10px] text-green-200 text-right mt-1">09:02 AM</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Side Text (The Nudge) */}
                        <div className="max-w-xs text-left">
                            <div className="h-px w-10 bg-[#C69D3C] mb-6"></div>
                            <p className="text-2xl font-bold text-white mb-4">
                                懂你，<br />比你更懂。
                            </p>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                只要掌握了正确的沟通协议，你会发现 AI 有时比你还要懂你的生意。只需一次设置，它就能精准补全你没说出口的细节，比你亲自盯着还要稳。
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
