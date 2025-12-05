import { TokenSymbol, WalletName } from 'crypto-icons/types';
import { TEvmNetworkId } from './evm-blockchain/types';

export type TAppChainId = TEvmNetworkId;

export type SummaryConnectInfo = {
    chainId: string;
    chainName: string;
    chainIcon: TokenSymbol;
    address: string;
    accountName: string;
    status: TWalletStatus;
    walletName: string;
    walletIcon?: WalletName | string;
    disconnect: () => void;
};

export type TWalletStatus = 'Connected' | 'Disconnected' | 'Connecting' | 'Loading' | 'Disconnecting' | 'NotFound' | 'NotInstalled' | 'NotExist' | 'Rejected' | 'Error';
