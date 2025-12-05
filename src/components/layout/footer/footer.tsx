import React from 'react';
import { LogoFull } from 'src/assets/icons/LogoFull';

export default function Footer() {
    return (
        <div className="pt-20 pb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                <div className="lg:col-span-3  flex flex-col justify-between">
                    <LogoFull className="w-[256px]" />
                    <p className="text-secondary text-[14px]">© 2025 UniHybrid</p>
                </div>

                <div className="lg:col-span-1p-4">
                    <p className="font-bold mb-2">COMMUNITY</p>
                    <p className="text-primary text-[14px] mb-2">Twitter</p>
                    <p className="text-primary text-[14px] mb-2">Telegram</p>
                    <p className="text-primary text-[14px]">Discord</p>
                </div>
                <div className="lg:col-span-1p-4">
                    <p className="font-bold mb-2">Documentation</p>
                    <p className="text-primary text-[14px] mb-2">User Docs</p>
                    <p className="text-primary text-[14px] mb-2">Technical Docs</p>
                    <p className="text-primary text-[14px] mb-2">Legal</p>
                    <p className="text-primary text-[14px]">Brand Assets</p>
                </div>
                <div className="lg:col-span-1p-4">
                    <p className="font-bold mb-2">Security</p>
                    <p className="text-primary text-[14px] mb-2">Audits</p>
                    <p className="text-primary text-[14px] mb-2">Bug Bounty</p>
                    <p className="text-primary text-[14px] mb-2">Term of use</p>
                    <p className="text-primary text-[14px]">Privacy Policy</p>
                </div>
            </div>
            {/* <div>
                <LogoFull className="w-[256px]" />
            </div> */}
        </div>
    );
}
