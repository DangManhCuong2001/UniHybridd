import { atom } from 'jotai';

export type ThemeMode = 'light' | 'dark';

// Initialize from localStorage or system preference
const initialTheme = (() => {
    if (typeof window === 'undefined') return 'light' as ThemeMode;
    const stored = localStorage.getItem('theme') as ThemeMode | null;
    if (stored === 'light' || stored === 'dark') return stored;
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
})();

export const themeAtom = atom<ThemeMode>(initialTheme);
