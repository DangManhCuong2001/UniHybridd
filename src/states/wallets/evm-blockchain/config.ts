import { createConfig, http, cookieStorage, createStorage } from 'wagmi';
import { bscTestnet } from 'wagmi/chains';
import { injected, metaMask, walletConnect } from '@wagmi/connectors';
import { arbitrum, base, bsc, mainnet } from 'viem/chains';

export const configEVM = createConfig({
    ssr: true,
    storage: createStorage({ storage: cookieStorage }),
    chains: [mainnet, arbitrum],
    // connectors: [
    // metaMask(),
    // walletConnect({
    //     projectId: '3028c148986d3af6ab81520e99f52f17',
    //     metadata: {
    //         name: 'Orchai',
    //         description: 'Orchai App',
    //         url: 'https://app.orchai.io/',
    //         icons: ['https://app.orchai.io/favicon.ico'],
    //     },
    //     showQrModal: true,
    //     qrModalOptions: { themeVariables: { '--wcm-z-index': '1400' } },
    // }),
    // ],
    transports: {
        [mainnet.id]: http('https://ethereum-rpc.publicnode.com'),
        // [bsc.id]: http('https://nd-548-567-990.p2pify.com/cbbfddee2b688acec746b6d0b4fdac3c'),
        // [base.id]: http('https://base-rpc.publicnode.com'),
        [arbitrum.id]: http('https://arb1.arbitrum.io/rpc'),
    },
});
