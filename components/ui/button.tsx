"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
    size?: "sm" | "md" | "lg" | "xl";
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {

        const variants = {
            primary: "bg-[#C69D3C] text-black font-bold uppercase tracking-wide hover:bg-[#D4AF4D]",
            secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/10",
            outline: "bg-transparent border border-[#C69D3C] text-[#C69D3C] hover:bg-[#C69D3C]/10",
            danger: "bg-red-900/50 border border-red-500/50 text-red-200 hover:bg-red-900/80",
            ghost: "bg-transparent text-gray-400 hover:text-white"
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
            xl: "px-10 py-5 text-xl"
        };

        return (
            <motion.button
                ref={ref}
                className={cn(
                    "relative inline-flex items-center justify-center rounded-lg transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
