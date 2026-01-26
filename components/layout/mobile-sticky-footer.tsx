"use client";

import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";

export function MobileStickyFooter() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const painSection = document.getElementById("pain-section");
            if (!painSection) return;

            const rect = painSection.getBoundingClientRect();
            // Show footer when the bottom of the pain section scrolls out of view (top < 0)
            // Or more aggressively, when the user scrolls past the *top* of the pain section?
            // User asked: "appear only after the 'Pain' section"
            // Let's interpret as: when the bottom of the pain section is above the bottom of the viewport?
            // Or simpler: when the *bottom* of the pain section passes the *top* of the viewport (fully scrolled past).
            // Let's go with: when the bottom of the pain section is no longer visible?
            // Actually, "appear after" usually means "as you scroll down past it".
            // Let's use: when the bottom of the pain section is above the *bottom* of the viewport (i.e. user sees it or has seen it).
            // Better interpretation: "In the earlier hero section it will be duplicate".
            // So we want to hide it while in Hero, Trust, Pain. Show it AFTER Pain.
            // So: window.scrollY > (painSection.offsetTop + painSection.offsetHeight)

            if (window.scrollY > (painSection.offsetTop + painSection.offsetHeight)) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Trigger once on mount
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <>
            <style jsx global>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .btn-shimmer {
                    animation: shimmer 2.5s infinite;
                }
            `}</style>
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] safe-area-bottom w-auto max-w-[95vw] animate-in slide-in-from-bottom duration-300">
                <a href="https://tally.so/r/44K84r" target="_blank" rel="noopener noreferrer" className="block relative group overflow-hidden rounded-full shadow-[0_4px_20px_rgba(198,157,60,0.4)]">
                    {/* Shimmer Effect Layer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 btn-shimmer pointer-events-none z-20" />

                    <Button size="xl" className="w-auto px-6 text-sm bg-[#C69D3C] hover:bg-[#b58d35] text-black font-bold border-none rounded-full uppercase tracking-normal h-14 relative z-10 transition-transform active:scale-[0.98] whitespace-nowrap">
                        [ 我要报名：开启 AI 自动模式 ]
                    </Button>
                </a>
            </div>
        </>
    );
}
