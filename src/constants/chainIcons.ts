import { TokenSymbol } from 'crypto-icons/types';
import { TAppChainId } from 'src/states/wallets/types';

export const chainIcon: Record<TAppChainId, TokenSymbol> = {
    '1': TokenSymbol.ETH,
    // '56': IconBSC,
    // '8453': IconBASE,
    '42161': TokenSymbol.ARB,
};
