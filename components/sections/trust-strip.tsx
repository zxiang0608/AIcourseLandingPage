import { cn } from "@/lib/utils";

export function TrustStrip() {
    const brands = [
        "OpenAI",
        "DeepSeek",
        "Claude",
        "Gemini"
    ];

    return (
        <section className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <span className="text-white/40 font-mono text-sm tracking-wider uppercase">
                    核心技术支持:
                </span>

                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                    {brands.map((brand) => (
                        <div
                            key={brand}
                            className="text-xl md:text-2xl font-bold font-sans tracking-tight text-white opacity-50 hover:opacity-100 transition-opacity duration-500 cursor-default"
                        >
                            {brand}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
