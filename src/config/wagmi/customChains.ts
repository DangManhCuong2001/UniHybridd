import { defineChain } from 'viem';

export const customArbitrum = defineChain({
    id: 42_161,
    name: 'Arbitrum One',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://arbitrum-mainnet.infura.io/v3/9ef82335298241f28950f71f0ab0e573'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Arbiscan',
            url: 'https://arbiscan.io',
            apiUrl: 'https://api.arbiscan.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 7654707,
        },
    },
});

export const customArbitrumSepolia = defineChain({
    id: 421_614,
    name: 'Arbitrum Sepolia',
    nativeCurrency: {
        name: 'Arbitrum Sepolia Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://arbitrum-sepolia.infura.io/v3/26917a1c15504eb192725711e8772184'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Arbiscan',
            url: 'https://sepolia.arbiscan.io',
            apiUrl: 'https://api-sepolia.arbiscan.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 81930,
        },
    },
    testnet: true,
});
