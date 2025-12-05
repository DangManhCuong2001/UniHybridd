import { SVGProps } from 'react';

export function BgContainerText(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 505 110" fill="none">
            <path d="M495 0H488L498 110H505L495 0Z" fill="#F1277F" />
            <path opacity="0.6" d="M493.077 0L10.5426 0.000249475L28.1131 110H502.34L493.077 0Z" fill="url(#paint0_linear_77262_14479)" />
            <defs>
                <linearGradient id="paint0_linear_77262_14479" x1="502.34" y1="55" x2="10.5426" y2="55" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#CB1966" />
                    <stop offset="1" stopColor="#CB1966" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
}
