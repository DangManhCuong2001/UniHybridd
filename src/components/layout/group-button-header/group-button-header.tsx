'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useMemo, useRef, useState } from 'react';

export default function GroupButtonHeader() {
    const pathname = usePathname();

    const navItems = useMemo(
        () => [
            { href: '/swap', label: 'Swap', isActive: pathname === '/swap' },
            { href: '/pools', label: 'Pools', isActive: pathname === '/pools' || pathname.startsWith('/pools/') },
        ],
        [pathname]
    );

    const containerRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const activeItem = useMemo(() => navItems.find((i) => i.isActive), [navItems]);
    const [highlight, setHighlight] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

    useEffect(() => {
        function updatePosition() {
            const container = containerRef.current;
            if (!container) return;
            if (!activeItem) {
                setHighlight({ left: 0, width: 0 });
                return;
            }
            const el = itemRefs.current[activeItem.href];
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const crect = container.getBoundingClientRect();
            setHighlight({ left: rect.left - crect.left, width: rect.width });
        }
        updatePosition();
        const ro = new ResizeObserver(updatePosition);
        if (containerRef.current) ro.observe(containerRef.current);
        window.addEventListener('resize', updatePosition);
        return () => {
            window.removeEventListener('resize', updatePosition);
            ro.disconnect();
        };
    }, [activeItem]);

    return (
        <div ref={containerRef} className="relative flex gradient-rounded-border overflow-hidden" style={{ ['--rounded' as any]: '100px' }}>
            {activeItem && (
                <span
                    className="absolute top-0 h-full  transition-all duration-300"
                    style={{
                        transform: `translateX(${highlight.left}px)`,
                        width: `${highlight.width}px`,
                        background: 'linear-gradient(180deg, rgba(222, 74, 138, 0) 50%, rgba(222, 74, 138, 0.4) 100%)',
                    }}
                />
            )}
            {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                    <div
                        ref={(el) => {
                            itemRefs.current[item.href] = el;
                        }}
                        className={`relative px-6 py-3 font-bold cursor-pointer ${item.isActive ? 'text-foreground' : 'text-foreground hover:bg-accent hover:text-accent-foreground'}`}
                    >
                        {item.label}
                    </div>
                </Link>
            ))}
            {activeItem && (
                <span
                    className="absolute bottom-0 h-0.5 w-10 bg-primary transition-transform duration-300"
                    style={{
                        transform: `translateX(${highlight.left + highlight.width / 2}px) translateX(-50%)`,
                    }}
                />
            )}
        </div>
    );
}
