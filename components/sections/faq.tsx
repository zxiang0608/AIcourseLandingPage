export function FAQ() {
    return (
        <section className="py-20 px-4 max-w-3xl mx-auto space-y-20">

            {/* Guarantee Coupon */}
            <div className="border border-dashed border-[#C69D3C]/30 bg-[#C69D3C]/5 rounded-2xl p-8 md:p-12 text-center space-y-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C69D3C] to-transparent opacity-30" />

                <h3 className="text-2xl font-bold text-[#C69D3C]">The "No-Brainer" Guarantee (零风险承诺)</h3>
                <p className="text-gray-300 leading-relaxed">
                    如果你在两小时的特训营中，觉得学不到东西，或者觉得太难操作：<strong className="text-white">我将全额退款 RM49。</strong> <br />
                    你可以保留所有的 Prompt 和源代码。没有任何风险。你唯一的风险就是 <span className="underline decoration-[#C69D3C] underline-offset-4">错过</span>。
                </p>
            </div>

            {/* FAQ */}
            <div className="space-y-6">
                <h3 className="text-3xl font-bold text-center mb-12">常见问题 (FAQ)</h3>

                <div className="space-y-4">
                    <details className="group bg-white/5 border border-white/5 rounded-xl open:bg-white/[0.07] transition-all">
                        <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-lg list-none">
                            <span>Q: 我是电脑白痴 (IT Dinosaur)，能学吗？</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                            A: 可以。我们已经移除了代码 (No Code)。你只需要会 "填空" (Fill in the blanks)。如果会用 WhatsApp，你就会用我们的系统。
                        </div>
                    </details>

                    <details className="group bg-white/5 border border-white/5 rounded-xl open:bg-white/[0.07] transition-all">
                        <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-lg list-none">
                            <span>Q: 为什么才收 RM49？</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                            A: 这是一个 Preview。没有陷阱。我想展示我的系统。如果你喜欢，后续可以参加高级班。如果不喜欢，这 RM49 就当是我请你喝杯咖啡，交个朋友。
                        </div>
                    </details>
                </div>
            </div>

        </section>
    );
}
