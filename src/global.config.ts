import { Keplr, Window as KeplrWindow } from '@keplr-wallet/types';

declare global {
    interface Window extends KeplrWindow {
        eth_owallet: any;
        owallet: Keplr;
        phantom: any;
    }

    interface ImportMetaEnv {
        readonly VITE_APP_ENV: 'dev' | 'product' | 'staging';
        // more env variables...
    }

    interface ImportMeta {
        readonly env: ImportMetaEnv;
    }
}
