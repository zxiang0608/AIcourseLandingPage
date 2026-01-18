import { cn } from "@/lib/utils";

export function TrustStrip() {
    const brands = [
        "OpenAI",
        "DeepSeek",
        "Claude",
        "WhatsApp"
    ];

    return (
        <section className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <span className="text-white/40 font-mono text-sm tracking-wider uppercase">
                    核心技术支持 (Powered By):
                </span>

                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 grayscale opacity-40 hover:opacity-100 transition-opacity duration-500">
                    {brands.map((brand) => (
                        <div key={brand} className="text-xl md:text-2xl font-bold font-sans tracking-tight text-white/80">
                            {brand}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
