import Link from 'next/link';
import { useEffect, useState, useRef, useCallback } from 'react';

interface NavigationProps {
    pathname: string;
    isMobile?: boolean;
    onLinkClick?: () => void;
}

export default function Navigation({ pathname, isMobile = false, onLinkClick }: NavigationProps) {
    const [isInitialized, setIsInitialized] = useState(false);
    const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
    const navRef = useRef<HTMLElement>(null);
    const itemRefs = useRef<(HTMLElement | null)[]>([]);

    const navItems = [
        { href: '/swap', label: 'Swap', isActive: pathname === '/swap' },
        { href: '/pools', label: 'Pools', isActive: pathname === '/pools' || pathname.startsWith('/pools/') },
        { href: '/portfolio', label: 'Portfolio', isActive: pathname === '/portfolio' || pathname.startsWith('/portfolio/') },
    ];

    // Calculate slider position based on actual element dimensions
    const updateSliderPosition = useCallback(() => {
        const activeIndex = navItems.findIndex((item) => item.isActive);
        if (activeIndex !== -1) {
            const activeElement = itemRefs.current[activeIndex];
            const navElement = navRef.current;

            if (activeElement && navElement) {
                const navRect = navElement.getBoundingClientRect();
                const activeRect = activeElement.getBoundingClientRect();

                setSliderStyle({
                    left: activeRect.left - navRect.left,
                    width: activeRect.width,
                });

                if (!isInitialized) {
                    setIsInitialized(true);
                }
            }
        }
    }, [navItems, isInitialized]);

    // Calculate slider position when pathname changes
    useEffect(() => {
        // Use requestAnimationFrame to ensure DOM has been updated
        const updatePosition = () => {
            requestAnimationFrame(() => {
                updateSliderPosition();
            });
        };

        updatePosition();
    }, [pathname, updateSliderPosition]);

    // Update slider position on window resize
    useEffect(() => {
        const handleResize = () => {
            updateSliderPosition();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [updateSliderPosition]);

    const handleLinkClick = () => {
        if (onLinkClick) {
            onLinkClick();
        }
    };

    if (isMobile) {
        return (
            <nav className="p-4">
                <div className="space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={handleLinkClick}
                            className={`
                                flex items-center w-full px-4 py-3 rounded-lg text-left font-medium transition-colors
                                ${item.isActive ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-accent hover:text-accent-foreground'}
                            `}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </nav>
        );
    }

    return (
        <nav ref={navRef} className="relative flex items-center bg-white dark:bg-muted rounded-lg p-1.5">
            {/* Sliding Background */}
            <div
                className={`absolute top-1 bottom-1 bg-primary rounded-md shadow-sm transition-all duration-300 ease-out ${isInitialized ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    left: `${sliderStyle.left}px`,
                    width: `${sliderStyle.width}px`,
                    transform: 'translateZ(0)', // Force hardware acceleration
                }}
            />

            {/* Navigation Items */}
            {navItems.map((item, index) => (
                <Link key={item.href} href={item.href} passHref>
                    <span
                        ref={(el) => {
                            itemRefs.current[index] = el;
                        }}
                        className={`
                            relative z-10 flex-1 text-center px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap
                            ${item.isActive ? 'text-white dark:text-gray-900' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}
                        `}
                    >
                        {item.label}
                    </span>
                </Link>
            ))}
        </nav>
    );
}
