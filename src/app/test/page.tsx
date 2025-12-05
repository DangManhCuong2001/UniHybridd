'use client';

import { CryptoIcon } from 'crypto-icons/CryptoIcon';
import { useAtom } from 'jotai';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'shadcn/button';
import ConnectWalletModal from 'src/components/connect-wallet-modal/ConnectWalletModal';
import ModalCustom from 'src/components/modals/ModalCustom';
import { themeAtom } from 'src/states/theme';
import { Connector, useAccount, useChainId, useDisconnect } from 'wagmi';

export default function page() {
    const [openConnect, setOpenConnect] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const { address, isConnected, connector } = useAccount();
    const chainId = useChainId();
    const { disconnectAsync, isPending: isDisconnecting } = useDisconnect();
    const [theme, setTheme] = useAtom(themeAtom);

    // Close dropdown on outside click
    useEffect(() => {
        function onDocClick(e: MouseEvent) {
            if (!dropdownRef.current) return;
            if (!dropdownRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        }
        if (menuOpen) document.addEventListener('mousedown', onDocClick);
        return () => document.removeEventListener('mousedown', onDocClick);
    }, [menuOpen]);

    const shortAddr = (addr?: string) => (addr ? `${addr.slice(0, 6)}…${addr.slice(-4)}` : '');
    const chainLabel = (() => {
        switch (chainId) {
            case 56:
                return 'BNB Smart Chain';
            case 1:
                return 'Ethereum';
            case 42161:
                return 'Arbitrum One';
            default:
                return `Chain ${chainId}`;
        }
    })();
    const chainIconName = chainId === 56 ? 'BNB' : chainId === 1 ? 'ETH' : chainId === 42161 ? 'ARB' : 'ETH';
    const walletName = (connector as Connector | undefined)?.name ?? 'Wallet';

    // Apply theme class to html and persist
    useEffect(() => {
        if (typeof document === 'undefined') return;
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="text-center">
                <p>fdfd</p>
            </div>
            <div className="gap-1 flex">
                <Button variant={'default'}>default</Button>
                <Button variant={'outline'}>outline</Button>
                <Button variant={'outline'}>outline</Button>
                <Button variant={'outline'} onClick={toggleTheme}>
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </Button>
                {!isConnected ? (
                    <Button variant={'default'} onClick={() => setOpenConnect(true)}>
                        Connect Wallet
                    </Button>
                ) : (
                    <div className="relative" ref={dropdownRef}>
                        <button onClick={() => setMenuOpen((v) => !v)} className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white shadow">
                            <span className="font-semibold">{shortAddr(address)}</span>
                            <span aria-hidden>🦊</span>
                        </button>
                        {menuOpen && (
                            <div className="absolute right-0 z-50 mt-2 w-72 rounded-2xl border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 p-3 shadow-xl">
                                <div className="flex items-center gap-3 px-1 py-2">
                                    <CryptoIcon name={chainIconName as any} size={24} />
                                    <div className="font-semibold">{chainLabel}</div>
                                </div>
                                <div className="my-2 h-px bg-gray-100 dark:bg-gray-700" />

                                <div className="flex items-center justify-between px-1 py-2">
                                    <div className="text-gray-500 dark:text-gray-400 text-sm">Wallet</div>
                                    <div className="flex items-center gap-2">
                                        <div className="font-medium">{walletName}</div>
                                        <span aria-hidden>🦊</span>
                                    </div>
                                </div>

                                <div className="px-1 py-2">
                                    <div className="text-gray-500 dark:text-gray-400 text-sm">Account address</div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <div className="font-mono">{shortAddr(address)}</div>
                                        <button
                                            className="rounded-md border px-2 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
                                            onClick={async () => {
                                                if (address) {
                                                    await navigator.clipboard.writeText(address);
                                                }
                                            }}
                                            title="Copy"
                                        >
                                            📋
                                        </button>
                                    </div>
                                </div>

                                <button
                                    onClick={async () => {
                                        await disconnectAsync();
                                        setMenuOpen(false);
                                    }}
                                    disabled={isDisconnecting}
                                    className="mt-2 w-full rounded-xl px-3 py-2 text-left text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 disabled:opacity-60"
                                >
                                    {isDisconnecting ? 'Disconnecting…' : 'Disconnect'}
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <CryptoIcon name="BNB" size={32} />
            <div className="mt-4">
                <ModalCustom title="Ví dụ Modal" content={<div className="text-sm">Đây là nội dung modal đơn giản.</div>} trigger={<Button variant="default">Mở Modal</Button>} />
            </div>
            <ConnectWalletModal open={openConnect} onClose={() => setOpenConnect(false)} />
            <div className="bg-red-200 relative min-h-200">
                <div className="relative w-[400px] h-[400px] rounded-2xl">
                    <div
                        className="absolute inset-0 rounded-2xl pointer-events-none left-00 z-1"
                        style={{
                            padding: '5px',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, rgba(255,126,182,0) 35%, rgba(255,126,182,0) 67%, rgba(255,126,182,0.8) 100%)',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                        }}
                    ></div>
                    <div
                        className="mt-2 relative lex-1 max-w-[400px] min-h-[400px] h-fit rounded-2xl backdrop-blur-[3.5px] shadow-[0px_12px_0px_#621838]"
                        style={{
                            border: '10px solid transparent',
                            background:
                                'linear-gradient(rgba(10,10,10,0.85), rgba(10,10,10,0.85)) padding-box, linear-gradient(to bottom, #ff7eb650 0%, #ff7eb600 26%, #ff7eb600 86%, #FFC2DC 100%) border-box',
                            backgroundClip: 'padding-box, border-box',
                            backgroundOrigin: 'padding-box, border-box',
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
