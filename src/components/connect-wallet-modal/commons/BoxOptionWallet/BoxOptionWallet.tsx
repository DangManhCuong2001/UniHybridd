import { CryptoIcon } from 'crypto-icons/CryptoIcon';
import React, { ReactNode } from 'react';
import { walletIcon } from 'src/constants/walletIcon';

export const sizeWalletIcon = '32px';
export type TWalletStatus = 'Connected' | 'Disconnected' | 'Connecting' | 'Loading' | 'Disconnecting' | 'NotFound' | 'NotInstalled' | 'NotExist' | 'Rejected' | 'Error';

export const walletStatusViews: Record<TWalletStatus, ReactNode> = {
    Connected: (
        <div className="flex items-center">
            <span className="w-2 h-2 rounded-[50%] mr-0.5 inline-block bg-[#118715]"></span>
            <p className="text-[12px] text-[#118715]">Connected</p>
        </div>
    ),
    Connecting: <p className="text-[12px]">Connecting...</p>,
    Loading: <p className="text-[12px]">Connecting...</p>,
    Disconnected: <p className="text-[12px]">Disconnected</p>,
    Disconnecting: <p className="text-[12px]">Disconnecting...</p>,
    NotInstalled: <p className="text-[12px]">Not Installed</p>,
    NotExist: <p className="text-[12px]">Not Installed</p>,
    NotFound: <p className="text-[12px]">Not Installed</p>,
    Rejected: <p className="text-[12px] text-destructive">Rejected</p>,
    Error: <p className="text-[12px] text-destructive">Error:</p>,
};

export default function BoxOptionWallet({
    icon,
    buttonF,
    name,
    status,
    mb,
    isConnected,
    textError,
}: {
    isConnected: boolean;
    icon: { key: string; replaceUrl: string };
    name: string;
    status: TWalletStatus;
    buttonF: React.ReactNode;
    textError?: string;
    mb?: number;
}) {
    const Icon = walletIcon[icon.key] || null;

    return (
        <div className="rounded-[12px] flex bg-accent pl-4 py-2 pr-2 gap-1 place-items-center px-1 hover:bg-muted">
            {Icon ? <CryptoIcon name={Icon} size={32} className="rounded-[10px]" /> : <img src={icon.replaceUrl} style={{ width: sizeWalletIcon, height: sizeWalletIcon, borderRadius: '10px' }}></img>}
            <div className="f">
                <p className="text-[14px] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{name}</p>
                <div className="flex whitespace-nowrap overflow-hidden text-ellipsis">
                    {walletStatusViews[status]}
                    {status == 'Error' && <p className="text-[12px] text-destructive ml-1">{textError || 'Unknow'}</p>}
                </div>
            </div>
            <div className="ml-auto">{buttonF}</div>
        </div>
    );
}
