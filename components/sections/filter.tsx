import { Check, X } from "lucide-react";

export function Filter() {
    return (
        <section className="py-20 px-4 bg-white/[0.02]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

                {/* Left: The Target (Green) */}
                <div className="space-y-8 p-8 rounded-2xl bg-green-900/5 border border-green-500/10">
                    <h3 className="text-2xl font-bold text-green-400 mb-6">适合人群 (YES ✅)</h3>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="mt-1 p-1 rounded-full bg-green-500/20 text-green-400">
                                <Check className="w-4 h-4" />
                            </div>
                            <strong className="block text-white text-lg">想要建立资产的老板 (企业主)</strong>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="mt-1 p-1 rounded-full bg-green-500/20 text-green-400">
                                <Check className="w-4 h-4" />
                            </div>
                            <strong className="block text-white text-lg">想要自动化的自由职业者</strong>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="mt-1 p-1 rounded-full bg-green-500/20 text-green-400">
                                <Check className="w-4 h-4" />
                            </div>
                            <strong className="block text-white text-lg">想开发 "自家工具" 的人 (工具开发者)</strong>
                        </li>
                    </ul>
                </div>

                {/* Right: The Anti-Target (Red) */}
                <div className="space-y-8 p-8 rounded-2xl bg-red-900/5 border border-red-500/10">
                    <h3 className="text-2xl font-bold text-red-500 mb-6 text-glow-red">不适合人群 (NO ❌)</h3>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                            <div className="mt-1 p-1 rounded-full bg-red-500/20 text-red-500">
                                <X className="w-4 h-4" />
                            </div>
                            <strong className="block text-gray-300 text-lg">想一夜暴富的人</strong>
                        </li>
                        <li className="flex items-start gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                            <div className="mt-1 p-1 rounded-full bg-red-500/20 text-red-500">
                                <X className="w-4 h-4" />
                            </div>
                            <strong className="block text-gray-300 text-lg">懒惰执行的人 (懒人)</strong>
                        </li>
                        <li className="flex items-start gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                            <div className="mt-1 p-1 rounded-full bg-red-500/20 text-red-500">
                                <X className="w-4 h-4" />
                            </div>
                            <strong className="block text-gray-300 text-lg">只想听理论的 "大师" (理论派)</strong>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
