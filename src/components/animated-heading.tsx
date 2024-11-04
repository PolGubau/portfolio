"use client";

 import { gsap } from "gsap";
 import { cn } from "pol-ui";
import { useLayoutEffect, useRef } from "react";

export function AnimatedHeading({
    children,
    className,
}: {
    children: React.ReactNode;
    className: string;
}) {
     const ref = useRef<HTMLHeadingElement | null>(null);

    useLayoutEffect(() => {
             const ctx = gsap.context(() => {
                gsap
                    .timeline()
                    .set(ref.current, {
                        autoAlpha: 1,
                        opacity: 1,
                    })
                    .from("span", {
                        y: "110%",
                         duration: 0.6,
                        ease: "circ.out",
                        stagger: {
                            each: 0.2,
                        },
                    }).to("span", {
                        y: "0%",
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
    },
        []);

    return (
        <div ref={ref} className={cn(className, "invisible")}>
            {children}
        </div>
    );
} 
