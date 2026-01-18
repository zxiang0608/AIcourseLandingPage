import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({
    children,
    className,
    hoverEffect = false,
    ...props
}: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass-card rounded-xl p-6 transition-all duration-300",
                hoverEffect && "hover:bg-white/5 hover:border-white/20 hover:scale-[1.01]",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
