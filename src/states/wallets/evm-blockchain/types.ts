import { configEVM } from './config';

export type TEvmNetworkId = (typeof configEVM)['chains'][number]['id'];

export type TEvmAddress = `0x${string}`;
