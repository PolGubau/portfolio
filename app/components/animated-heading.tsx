"use client";

 import { gsap } from "gsap";
import { useTransitionState } from "next-transition-router";
import { cn } from "pol-ui";
import { useLayoutEffect, useRef } from "react";

export function AnimatedHeading({
    children,
    className,
}: {
    children: React.ReactNode;
    className: string;
}) {
    const { isReady } = useTransitionState();
    const ref = useRef<HTMLHeadingElement | null>(null);

    useLayoutEffect(() => {
        if (isReady) {
            const ctx = gsap.context(() => {
                gsap
                    .timeline()
                    .set(ref.current, {
                        autoAlpha: 1,
                        opacity: 1,
                    })
                    .from("span", {
                        y: "110%",
                        opacity: 0,
                        duration: 0.6,
                        ease: "circ.out",
                        stagger: {
                            each: 0.2,
                        },
                    }).to("span", {
                        y: "0%",
                        opacity: 1,
                        duration: 0.6,
                        ease: "circ.out",
                        stagger: {
                            each: 0.2,
                        },
                    });
                
            }, ref);

            return () => {
                ctx.revert();
            };
        }
    }, [isReady]);

    return (
        <div ref={ref} className={cn(className, "invisible")}>
            {children}
        </div>
    );
} 
