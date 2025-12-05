'use client';
import { LogoFull } from 'src/assets/icons/LogoFull';
import GroupButtonHeader from '../group-button-header/group-button-header';
import ButtonConnectWallet from 'src/components/button-connect-wallet/ButtonConnectWallet';
import ConnectWalletModal from 'src/components/connect-wallet-modal/ConnectWalletModal';
import { Button } from 'shadcn/button';
import { useAccount } from 'wagmi';
import useSummaryEvmConnect from 'src/states/wallets/evm-blockchain/hooks/useSummaryEvmConnect';
import { walletIcon } from 'src/constants/walletIcon';
import { CryptoIcon } from 'crypto-icons/CryptoIcon';
import { formatAddress } from 'src/lib/utils';
import { useOpenModalValue, useSetOpenModal } from 'src/states/modal/hooks';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import MobileSidebar from './mobile-sidebar';
import Container from 'src/components/container/container';
import Logo from './logo';

export default function Header() {
    const { address, isConnected, connector } = useAccount();
    const { walletName, walletIcon: iconWallet } = useSummaryEvmConnect(1);
    const Icon = walletIcon[walletName] || null;
    const openConnect = useOpenModalValue();
    const setOpenConnect = useSetOpenModal();
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const pathname = usePathname();
    console.log(isMobileSidebarOpen);
    const toggleMobileSidebar = () => {
        setIsMobileSidebarOpen(!isMobileSidebarOpen);
    };

    const closeMobileSidebar = () => {
        setIsMobileSidebarOpen(false);
    };

    // Close sidebar when route changes
    useEffect(() => {
        setIsMobileSidebarOpen(false);
    }, [pathname]);

    // Prevent body scroll when sidebar is open
    useEffect(() => {
        if (isMobileSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileSidebarOpen]);

    return (
        <>
            <div className="backdrop-blur-[9px] w-full">
                <Container className="flex place-items-center justify-between h-20">
                    <div className="hidden sm:block">
                        <Logo />
                    </div>
                    <div className="block sm:hidden">
                        <Logo isMobile />
                    </div>
                    <div className="hidden lg:inline-block">
                        <GroupButtonHeader />
                    </div>
                    <div className="flex place-items-center gap-4">
                        {isConnected && connector && address ? (
                            <>
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setOpenConnect(true);
                                    }}
                                    className="min-w-40"
                                >
                                    {Icon ? <CryptoIcon name={Icon} size={32} className="rounded-[10px]" /> : <img src={iconWallet} style={{ width: 24, height: 24, borderRadius: '10px' }}></img>}
                                    {formatAddress(address)}
                                </Button>
                                <ConnectWalletModal open={openConnect} onClose={() => setOpenConnect(false)} />
                            </>
                        ) : (
                            <ButtonConnectWallet className="lg:min-w-40 text-[12px] lg:text-[16px] px-2 py-1" />
                        )}
                        <Menu className="lg:hidden" onClick={toggleMobileSidebar} />
                    </div>
                </Container>
            </div>
            {/* Mobile Sidebar */}
            <MobileSidebar isOpen={isMobileSidebarOpen} onClose={closeMobileSidebar} isDark={true} pathname={pathname} />
        </>
    );
}
