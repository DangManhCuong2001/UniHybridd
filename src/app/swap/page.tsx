'use client';
import { RefreshCcw } from 'lucide-react';
import { Settings } from 'lucide-react';
import { CryptoIcon } from 'crypto-icons/CryptoIcon';
import { ChevronDown } from 'lucide-react';
import { Input } from 'shadcn/input';
import { Wallet } from 'lucide-react';
import { ArrowUpDown } from 'src/assets/icons/Arrow_Up_Down';
import { Button } from 'shadcn/button';
import useSummaryEvmConnect from 'src/states/wallets/evm-blockchain/hooks/useSummaryEvmConnect';
import ButtonConnectWallet from 'src/components/button-connect-wallet/ButtonConnectWallet';
import ModalSelectToken from 'src/components/modals/modal-select-token/ModalSelectToken';
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'shadcn/accordion';
import { ChevronsRight } from 'lucide-react';

export default function page() {
    const { address } = useSummaryEvmConnect(1);
    const [open, setOpen] = useState(false);

    return (
        <div className="flex justify-center w-full mt-30">
            <div className="w-[500px] mt-20">
                <div className="flex place-items-center justify-between">
                    <p className="text-[24px] font-bold">Swap</p>
                    <div className="flex place-items-center gap-2 ">
                        <RefreshCcw className="w-8 text-secondary cursor-pointer" />
                        <Settings className="w-8 text-secondary cursor-pointer" />
                    </div>
                </div>
                <div className="relative">
                    <div className="cursor-pointer p-3 bg-[#510224] w-10 h-10 rounded-full flex justify-center place-items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <ArrowUpDown className="w-5 h-5" />
                    </div>
                    <div className="bg-accent p-4 rounded-2xl mt-2">
                        <div className="flex place-items-center justify-between">
                            <p className="text-secondary text-[14px]">Sell</p>
                            <div className="flex place-items-center gap-0.5">
                                <div className="px-1.5 py-0.5 rounded-lg border border-border cursor-pointer">
                                    <p className="font-medium text-[12px]">HALF</p>
                                </div>
                                <div className="px-1.5 py-0.5 rounded-lg border border-border cursor-pointer">
                                    <p className="font-medium text-[12px]">MAX</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex place-items-center justify-between mt-1.5">
                            <div className="rounded-full bg-muted flex place-items-center gap-1 pl-1 py-1 pr-2 cursor-pointer" onClick={() => setOpen(true)}>
                                <CryptoIcon name="SOL" size={24} />
                                <p>SOL</p>
                                <ChevronDown className="w-4 text-secondary" />
                            </div>
                            <Input className="w-50 border-none dark:bg-accent font-bold text-[24px] text-right text-secondary px-0" placeholder="0.00"></Input>
                        </div>
                        <div className="flex place-items-center justify-between mt-2">
                            <div className="flex gap-1">
                                <Wallet className="text-secondary w-4 h-4" />
                                <p className="text-secondary text-[12px]">0 SOL</p>
                            </div>
                            <p className="text-secondary text-[12px]">≈ $0</p>
                        </div>
                    </div>
                    <div className="bg-accent p-4 rounded-2xl mt-1">
                        <p className="text-secondary text-[14px]">Buy</p>
                        <div className="flex place-items-center justify-between mt-1.5">
                            <div className="rounded-full bg-muted flex place-items-center gap-1 pl-1 py-1 pr-2 cursor-pointer" onClick={() => setOpen(true)}>
                                <CryptoIcon name="USDC" size={24} />
                                <p>USDC</p>
                                <ChevronDown className="w-4 text-secondary" />
                            </div>
                            <Input className="w-50 border-none dark:bg-accent font-bold text-[24px] text-right text-secondary px-0" placeholder="0.00"></Input>
                        </div>
                        <div className="flex place-items-center justify-between mt-2">
                            <div className="flex gap-1">
                                <Wallet className="text-secondary w-4 h-4" />
                                <p className="text-secondary text-[12px]">0 USDC</p>
                            </div>
                            <p className="text-secondary text-[12px]">≈ $0</p>
                        </div>
                    </div>
                </div>

                {address ? <Button className="font-semibold w-full mt-2">Swap</Button> : <ButtonConnectWallet className="w-full mt-2" />}
                <Accordion type="single" className="mt-2 w-full gradient-rounded-border rounded-[16px!important] bg-[rgba(128, 128, 128, 0.05)] backdrop-blur-[50px]" defaultValue="item-1">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="p-4 ">
                            <div>
                                <p className="text-[14px] text-secondary">AMM Reference Rate</p>
                                <p className="font-semibold text-[14px]">1 ETH =  3200 USDT ($3200)</p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 border-t border-t-[#FFFFFF1A]">
                            <div className="mb-2 ">
                                <p className="text-secondary">Execution Plan</p>
                                <div className="flex place-items-center justify-center gap-2">
                                    <div className="min-w-[110px] text-center rounded-xl px-2 py-1 bg-blend-color-dodge [background:linear-gradient(0deg,rgba(94,94,94,0.18),rgba(94,94,94,0.18)),rgba(255,255,255,0.07)]">
                                        <p className="text-[14px] font-medium">Orderbook</p>
                                        <p className="text-[12px] text-secondary">50%</p>
                                    </div>
                                    <ChevronsRight className="text-secondary" />
                                    <div className="flex place-items-center justify-center">
                                        <div className="min-w-[110px] text-center rounded-xl px-2 py-1 [background:linear-gradient(0deg,rgba(94,94,94,0.18),rgba(94,94,94,0.18)),rgba(255,255,255,0.07)]">
                                            <p className="text-[14px] font-medium">AMM</p>
                                            <p className="text-[12px] text-secondary">0%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex place-items-center justify-between mb-1">
                                <p className="text-secondary text-[14px]">Expected Output</p>
                                <p className="text-[14px]">1 ETH =  3600 USDT ($3600)</p>
                            </div>
                            <div className="flex place-items-center justify-between mb-1">
                                <p className="text-secondary text-[14px]">Savings</p>
                                <p className="text-[14px]">$0.05</p>
                            </div>
                            <div className="flex place-items-center justify-between mb-1">
                                <p className="text-secondary text-[14px]">Fee (30%)</p>
                                <p className="text-[14px]">$0.015</p>
                            </div>
                            <div className="flex place-items-center justify-between mb-1">
                                <p className="text-secondary text-[14px]">Network cost</p>
                                <p className="text-[14px]">$0.02</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <ModalSelectToken onClose={() => setOpen(false)} open={open} />
        </div>
    );
}
