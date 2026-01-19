import React from "react";
import { cn } from "@/lib/utils";

interface DeviceFrameProps {
    children: React.ReactNode;
    className?: string;
}

export function MacbookFrame({ children, className }: DeviceFrameProps) {
    return (
        <div className={cn("relative mx-auto", className)}>
            {/* Lid / Screen Bezel */}
            <div className="relative bg-[#0d0d0d] rounded-[1.5rem] p-[3%] shadow-2xl border border-[#222]">
                {/* Camera / Notch */}
                {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3%] w-[15%] bg-black rounded-b-lg z-20"></div> */}

                {/* Screen Content */}
                <div className="relative overflow-hidden rounded-[0.5rem] bg-black aspect-[16/10]">
                    {children}
                </div>
            </div>

            {/* Base (Bottom Half) */}
            <div className="relative bg-[#1a1a1a] h-[12px] md:h-[18px] w-[110%] -ml-[5%] rounded-b-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border-t border-[#333]">
                {/* Indent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[15%] h-[40%] bg-[#222] rounded-b-md"></div>
            </div>
        </div>
    );
}

export function IphoneFrame({ children, className }: DeviceFrameProps) {
    return (
        <div className={cn("relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl", className)}>
            {/* Dynamic Island / Notch */}
            <div className="w-[148px] h-[18px] bg-black top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>

            {/* Side Buttons */}
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

            {/* Screen Content */}
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-black relative">
                {children}
            </div>
        </div>
    );
}
