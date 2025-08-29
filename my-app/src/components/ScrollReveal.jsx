"use client";
import { useEffect } from "react";

export default function ScrollRevealWrapper({ children, className = "reveal", options = {} }) {
    useEffect(() => {
        if (typeof window !== "undefined") {
        import("scrollreveal").then((ScrollRevealModule) => {
            const ScrollReveal = ScrollRevealModule.default;

            ScrollReveal().reveal(`.${className}`, {
            distance: "50px",
            origin: "bottom",
            opacity: 0,
            duration: 800,
            delay: 100,
            reset: false,
            viewFactor: 0.4,
            ...options, // permite sobrescrever opções
            });
        });
        }
    }, [className, options]);

    return <div className={className}>{children}</div>;
}
