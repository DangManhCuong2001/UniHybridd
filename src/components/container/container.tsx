import { cn } from 'src/lib/utils';

export default function Container({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={cn('max-w-7xl mx-auto px-2 sm:px-3 lg:px-5', className)}>{children}</div>;
}
