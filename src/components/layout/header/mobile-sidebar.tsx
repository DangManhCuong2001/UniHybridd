import { X } from 'lucide-react';
import Navigation from './navigation';
import Logo from './logo';

interface MobileSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    isDark: boolean;
    pathname: string;
}

export default function MobileSidebar({ isOpen, onClose, isDark, pathname }: MobileSidebarProps) {
    return (
        <>
            {/* Mobile Sidebar Overlay */}
            {isOpen && <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 z-40 md:hidden" onClick={onClose} />}

            {/* Mobile Sidebar */}
            <div
                className={`
                    fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-50 md:hidden
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                    <Logo />
                    <button onClick={onClose} className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-accent focus:outline-none transition-colors">
                        <X className="w-5 h-5 text-foreground cursor-pointer" />
                    </button>
                </div>

                {/* Sidebar Navigation */}
                <Navigation pathname={pathname} isMobile onLinkClick={onClose} />
            </div>
        </>
    );
}
