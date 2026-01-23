"use client";

import { Button } from "@/components/ui/button";

export function MobileStickyFooter() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 w-full z-50 p-4 bg-[#050505]/80 backdrop-blur-xl border-t border-white/10">
            <a href="https://tally.so/r/44K84r" target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button size="lg" className="w-full bg-[#C69D3C] hover:bg-[#D4AF4D] text-black font-bold text-lg shadow-[0_0_20px_rgba(198,157,60,0.3)]">
                    抢占名额 - RM65
                </Button>
            </a>
        </div>
    );
}
