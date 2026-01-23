"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export function TrustStrip() {
    const brands = [
        "OpenAI",
        "DeepSeek",
        "Claude",
        "Gemini"
    ];

    return (
        <section className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden py-8 w-full max-w-[100vw]">
            <div className="flex gap-[60px] animate-marquee whitespace-nowrap min-w-full items-end">
                {/* Logo Set - Repeated for Infinite Effect */}
                {[0, 1, 2, 3].map((setIndex) => (
                    <div key={setIndex} className="flex gap-[60px] items-end shrink-0">
                        {/* Logo 1: OpenAI */}
                        <img
                            src="https://logo.svgcdn.com/logos/openai.svg"
                            alt="OpenAI"
                            className="h-7 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 pointer-events-none ml-[10px]"
                            style={{ filter: 'brightness(0) invert(1)' }}
                        />
                        {/* Logo 2: DeepSeek */}
                        <img
                            src="https://static.cdnlogo.com/logos/d/9/deepseek.svg"
                            alt="DeepSeek"
                            className="h-8 md:h-11 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            style={{ filter: 'brightness(0) invert(1)' }}
                        />
                        {/* Logo 3: Claude (Final Asset) */}
                        <Image
                            src="/intro/assets/uploads/claude_logo_final.png"
                            alt="Claude"
                            width={100}
                            height={40}
                            className="h-8 md:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 pointer-events-none scale-90"
                            style={{ filter: 'brightness(0) invert(1)' }}
                        />

                        {/* Logo 4: Gemini */}
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg"
                            alt="Gemini"
                            className="h-7 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 pointer-events-none scale-[1.15] self-start"
                            style={{ filter: 'brightness(0) invert(1)' }}
                        />
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </section>
    );
}
