import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { openModalConnectWallet } from './state';

export const useOpenModal = () => useAtom(openModalConnectWallet);
export const useOpenModalValue = () => useAtomValue(openModalConnectWallet);
export const useSetOpenModal = () => useSetAtom(openModalConnectWallet);
