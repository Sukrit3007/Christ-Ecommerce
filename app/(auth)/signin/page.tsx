"use client";

import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import SignUpForm from "@/components/auth/SignUpForm";



export default function Dashboard() {
    const [hovered, setHovered] = React.useState(false);


    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="z-40 h-screen flex flex-col lg:flex-row overflow-hidden items-center justify-center w-full gap-4 mx-auto px-8 relative"
        >
            <div className="w-[400px] z-50">
                <SignUpForm/>
            </div>
    
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-full w-full absolute inset-0"
                    >
                        <CanvasRevealEffect
                            animationSpeed={5}
                            containerClassName="bg-emerald-900"
                            opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                            dotSize={2}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Radial gradient for the cute fade */}
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] " />
        </div>
    )
}
