"use client";

import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    animation?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right';
    delay?: number;
    duration?: number;
    threshold?: number;
    once?: boolean;
    className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 700,
    threshold = 0.1,
    once = true,
    className = "",
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) observer.unobserve(entry.target);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [threshold, once]);

    const getAnimationClass = () => {
        if (!isVisible) {
            switch (animation) {
                case 'fade-up': return 'opacity-0 translate-y-10';
                case 'fade-in': return 'opacity-0';
                case 'fade-left': return 'opacity-0 -translate-x-10';
                case 'fade-right': return 'opacity-0 translate-x-10';
                default: return 'opacity-0 translate-y-10';
            }
        }
        return 'opacity-100 translate-y-0 translate-x-0';
    };

    return (
        <div
            ref={elementRef}
            className={`${getAnimationClass()} transition-all ease-out ${className}`}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
