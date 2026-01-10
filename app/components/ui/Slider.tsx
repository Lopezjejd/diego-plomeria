'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, animate } from 'framer-motion';
import useMeasure from 'react-use-measure';

export interface SliderItem {
    id: string | number;
    name: string;
    imageUrl: string;
}

interface InfiniteSliderProps {
    items: SliderItem[];
    speed?: number; // Segundos por vuelta (menor = más rápido)
}

export default function InfiniteSlider({ items, speed = 25 }: InfiniteSliderProps) {
    const [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (!width) return;

        const finalPosition = -width / 2;
        const controls = animate(xTranslation, [0, finalPosition], {
            ease: 'linear',
            duration: speed,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
        });

        return () => controls.stop();
    }, [width, xTranslation, speed]);

    if (!mounted) return null;

    return (
        <div className="w-full overflow-hidden py-8">
            <motion.div
                ref={ref}
                style={{ x: xTranslation }}
                className="flex gap-4 w-max"
            >
                {[...items, ...items].map((item, index) => (
                    <Card key={`${item.id}-${index}`} item={item} />
                ))}
            </motion.div>
        </div>
    );
}

function Card({ item }: { item: SliderItem }) {
    return (
        <div className="relative flex-shrink-0 w-56 h-56 rounded-2xl overflow-hidden group cursor-pointer shadow-lg bg-gray-900">
            <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                sizes="224px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-xl font-bold">{item.name}</h3>
                <div className="w-12 h-1 bg-yellow-400 mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
        </div>
    );
}