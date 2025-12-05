import { useState } from 'react';
import { Button } from 'shadcn/button';
import ConnectWalletModal from '../connect-wallet-modal/ConnectWalletModal';
import { useOpenModalValue, useSetOpenModal } from 'src/states/modal/hooks';

export default function ButtonConnectWallet({ className }: { className?: string }) {
    const openConnect = useOpenModalValue();
    const setOpenConnect = useSetOpenModal();

    return (
        <>
            <Button variant={'default'} className={className} onClick={() => setOpenConnect(true)}>
                Connect Wallet
            </Button>
            <ConnectWalletModal open={openConnect} onClose={() => setOpenConnect(false)} />
        </>
    );
}
