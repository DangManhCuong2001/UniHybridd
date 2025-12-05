import { useState } from 'react';
import ModalCustom from '../ModalCustom';
import { CryptoIcon } from 'crypto-icons/CryptoIcon';
import { ChevronDown } from 'lucide-react';
import { Input } from 'shadcn/input';
import { Search } from 'lucide-react';
import { formatAddress } from 'src/lib/utils';

export default function ModalSelectToken({ open, onClose }: { open: boolean; onClose: () => void }) {
    return (
        <ModalCustom
            title={
                <div className="flex place-items-center gap-2">
                    <p className="font-bold text-[20px] leading-7">Select a token</p>
                    <div className="rounded-full bg-muted flex place-items-center gap-1 pl-1 py-1 pr-2 cursor-pointer h-7">
                        <CryptoIcon name="ETH" size={20} />
                        <p className="text-[14px] text-secondary">Ethereum</p>
                        <ChevronDown className="w-4 text-secondary" />
                    </div>
                </div>
            }
            content={
                <>
                    <div className="border border-border rounded-full flex place-items-center bg-accent overflow-hidden">
                        <div className="p-2">
                            <Search className="w-3 h-3 text-secondary" />
                        </div>
                        <Input placeholder="Search by token or address" className="border-none dark:bg-accent text-[12px] pl-0" />
                    </div>
                    <div className="flex place-items-center gap-2">
                        <div className="bg-muted pl-1 pr-2 py-1 flex place-items-center gap-1 rounded-full w-fit cursor-pointer">
                            <CryptoIcon name="ETH" size={24} />
                            <p className="text-[14px]">ETH</p>
                        </div>
                        <div className="bg-muted pl-1 pr-2 py-1 flex place-items-center gap-1 rounded-full w-fit cursor-pointer">
                            <CryptoIcon name="USDT" size={24} />
                            <p className="text-[14px]">USDT</p>
                        </div>
                        <div className="bg-muted pl-1 pr-2 py-1 flex place-items-center gap-1 rounded-full w-fit cursor-pointer">
                            <CryptoIcon name="USDC" size={24} />
                            <p className="text-[14px]">USDC</p>
                        </div>
                        <div className="bg-muted pl-1 pr-2 py-1 flex place-items-center gap-1 rounded-full w-fit cursor-pointer">
                            <CryptoIcon name="SOL" size={24} />
                            <p className="text-[14px]">SOL</p>
                        </div>
                    </div>
                    <div className="mt-1">
                        <div className="flex place-items-center justify-between hover:bg-muted p-2 rounded-xl cursor-pointer">
                            <div className="flex place-items-center gap-1">
                                <CryptoIcon name="USDT" size={32} />
                                <p className="font-semibold">USDT</p>
                            </div>
                            <p className="text-secondary text-[14px]">{formatAddress('HN7cABqLq46Es1jh92dQQisAq662SmxELLLsHHe4YWrH')}</p>
                        </div>
                        <div className="flex place-items-center justify-between hover:bg-muted p-2 rounded-xl cursor-pointer">
                            <div className="flex place-items-center gap-1">
                                <CryptoIcon name="USDC" size={32} />
                                <p className="font-semibold">USDC</p>
                            </div>
                            <p className="text-secondary text-[14px]">{formatAddress('HN7cABqLq46Es1jh92dQQisAq662SmxELLLsHHe4YWrH')}</p>
                        </div>
                    </div>
                </>
            }
            className="rounded-3xl"
            open={open}
            onOpenChange={(v) => {
                if (!v) onClose();
            }}
        />
    );
}
