import { WalletName } from 'crypto-icons/types';

export const walletIcon: { [k: string]: WalletName } = {
    'cosmos-extension-metamask': WalletName.MetaMask,
    'owallet-extension': WalletName.Owallet,
    'app.owallet': WalletName.Owallet,
    'io.leapwallet.LeapWallet': WalletName.Leap,
    'leap-extension': WalletName.Leap,
    metaMaskSDK: WalletName.MetaMask,
    MetaMask: WalletName.MetaMask,
    OWallet: WalletName.Owallet,
    // Ledger: IconLedger,
    walletConnect: WalletName.WalletConnect,
    WalletConnect: WalletName.WalletConnect,
    // TronLink: IconTronLink,
};
