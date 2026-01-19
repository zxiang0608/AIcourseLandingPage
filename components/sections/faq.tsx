export function FAQ() {
    return (
        <section className="py-20 px-4 max-w-3xl mx-auto space-y-20">

            {/* Guarantee Coupon */}
            <div className="border border-dashed border-[#C69D3C]/30 bg-[#C69D3C]/5 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden flex flex-col items-center gap-6">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C69D3C] to-transparent opacity-30" />

                <h3 className="text-3xl font-bold text-[#C69D3C] tracking-wide">零风险承诺 <br /> (No-Brainer Guarantee)</h3>
                <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto text-lg">
                    如果你在两小时的特训营中，觉得学不到东西，或者觉得太难操作：<strong className="text-white block mt-2 text-xl">我将全额退款 RM65。</strong>
                    <br />
                    <span className="block mt-4 text-sm text-white/60">你可以保留所有的 Prompt 和源代码。没有任何风险。你唯一的风险就是 <span className="underline decoration-[#C69D3C] underline-offset-4 text-white">错过</span>。</span>
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
                            A: 可以。全程通过对话完成，无需代码 (No Code)。你只需要会 "填空" (Fill in the blanks)。如果会用 WhatsApp，你就会用我们的系统。
                        </div>
                    </details>

                    <details className="group bg-white/5 border border-white/5 rounded-xl open:bg-white/[0.07] transition-all">
                        <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-lg list-none">
                            <span>Q: 我做传统生意 (Hardware/批发)，不是做 "网卖" 的，适合吗？</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                            A: 适合。我们绝对有办法帮你节省时间 (Save Time)。尤其是在 Digital Marketing 和团队管理上，这套系统能帮你自动化处理大量重复性工作。这是 "生意工具"，不只是 "网卖工具"。
                        </div>
                    </details>

                    <details className="group bg-white/5 border border-white/5 rounded-xl open:bg-white/[0.07] transition-all">
                        <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-lg list-none">
                            <span>Q: 我的英文不好，AI 听得懂吗？</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                            A: 没问题。我们可以使用任何语言 (Any Language)。你用中文下指令，它也能给你出英文文案，反之亦然。我们会教你如何 "指挥" 它打破语言障碍。
                        </div>
                    </details>

                    <details className="group bg-white/5 border border-white/5 rounded-xl open:bg-white/[0.07] transition-all">
                        <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-lg list-none">
                            <span>Q: 我没有贵电脑，只有旧 Laptop 或手机，跑得动吗？</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                            A: 跑得动。只要有 Internet，能开网页，就可以运作。不吃电脑配置。
                        </div>
                    </details>

                    <details className="group bg-white/5 border border-white/5 rounded-xl open:bg-white/[0.07] transition-all">
                        <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-lg list-none">
                            <span>Q: 为什么才收 RM65？</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                            A: 这是一个 Preview。没有陷阱。我想展示我的系统。如果你喜欢，后续可以参加高级班。不喜欢的话，这 RM65 就当是我请你喝杯咖啡。
                        </div>
                    </details>
                </div>
            </div>

        </section>
    );
}
