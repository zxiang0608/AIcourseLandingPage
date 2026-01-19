"use client";

import { Check, X, GitBranch, AlertTriangle } from "lucide-react";

export function Filter() {
    return (
        <section className="py-20 px-4 bg-[#050505] relative overflow-hidden">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Scanner Animation Style */}
            <style jsx>{`
                @keyframes scan-beam {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(200%); }
                }
                .scanner-beam {
                    animation: scan-beam 3s linear infinite;
                }
             `}</style>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative z-10">

                {/* Left: YES - System Match */}
                <div className="group relative space-y-8 p-10 rounded-2xl bg-black/20 border border-green-500/20 hover:border-green-500/50 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                    {/* Scanner Light */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent w-1/2 h-full skew-x-12 scanner-beam pointer-events-none opacity-30" />

                    <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-2 rounded-lg border border-green-500/30 text-green-400">
                                <GitBranch className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl font-bold text-white tracking-tight">这堂课是为你而设的 (YES ✅)</h3>
                        </div>

                        {/* Minimal Divider */}
                        <div className="h-px w-full bg-gradient-to-r from-green-500/20 to-transparent" />
                    </div>

                    <ul className="space-y-6 relative z-10">
                        <li className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors">
                            <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-lg leading-relaxed">
                                想把大脑“克隆”给 AI，从繁琐杂事中解脱的老板。
                            </span>
                        </li>
                        <li className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors">
                            <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-lg leading-relaxed">
                                追求“自动赚钱模式”，想要建立长期数字资产的人。
                            </span>
                        </li>
                        <li className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors">
                            <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-lg leading-relaxed">
                                明白 <span className="text-green-400 font-bold">系统执行力 &gt; 员工执行力</span> 的实战派。
                            </span>
                        </li>
                        <li className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors">
                            <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-lg leading-relaxed">
                                只会跟 ChatGPT 聊天的人，还不知道 AI 可以强大到什么程度。
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Right: NO - System Mismatch */}
                <div className="group relative space-y-8 p-10 rounded-2xl bg-black/20 border border-red-500/20 hover:border-red-500/50 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                    {/* Scanner Light (Red) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent w-1/2 h-full skew-x-12 scanner-beam pointer-events-none opacity-30" style={{ animationDelay: '1.5s' }} />

                    <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-2 rounded-lg border border-red-500/30 text-red-500">
                                <AlertTriangle className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl font-bold text-white tracking-tight">这期内容可能不适合你 (NO ❌)</h3>
                        </div>

                        {/* Minimal Divider */}
                        <div className="h-px w-full bg-gradient-to-r from-red-500/20 to-transparent" />
                    </div>

                    <ul className="space-y-6 relative z-10">
                        <li className="flex items-start gap-4 text-gray-400 hover:text-gray-200 transition-colors">
                            <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                            <span className="text-lg leading-relaxed">
                                寻找“一夜暴富”魔法、不愿动脑思考的人。
                            </span>
                        </li>
                        <li className="flex items-start gap-4 text-gray-400 hover:text-gray-200 transition-colors">
                            <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                            <span className="text-lg leading-relaxed">
                                只想听理论，不想亲手安装“商业外挂”的人。
                            </span>
                        </li>
                        <li className="flex items-start gap-4 text-gray-400 hover:text-gray-200 transition-colors">
                            <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                            <span className="text-lg leading-relaxed">
                                宁愿花 4,000 块请人，也不愿花 <span className="text-white font-bold">65 块</span> 部署 AI 的人。
                            </span>
                        </li>
                        <li className="flex items-start gap-4 text-gray-400 hover:text-gray-200 transition-colors">
                            <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                            <span className="text-lg leading-relaxed">
                                AI 大神与技术老司机。
                            </span>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
