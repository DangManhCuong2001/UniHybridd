'use client';
import { toast } from 'react-toastify';
// import ErrorExeTransaction from 'src/components/Common/ErrorExeTransaction/ErrorExeTransaction';
// import { infoWallet } from 'src/config/wagmi/config';
import { Connector, useAccount, useConnect, useDisconnect } from 'wagmi';
import { Button } from 'shadcn/button';
import BoxOptionWallet from './commons/BoxOptionWallet/BoxOptionWallet';
import ModalCustom from '../modals/ModalCustom';

export type TWalletStatus = 'Connected' | 'Disconnected' | 'Connecting' | 'Loading' | 'Disconnecting' | 'NotFound' | 'NotInstalled' | 'NotExist' | 'Rejected' | 'Error';

interface IProps {
    open: boolean;
    onClose: () => void;
}

const ConnectWalletModal = (props: IProps) => {
    const { open, onClose } = props;
    const { connectAsync, connectors, isPending, variables } = useConnect();
    const { address, isConnected, connector } = useAccount();
    const { disconnectAsync, isPending: isDisconnecting } = useDisconnect();

    async function connect(wallet: Connector) {
        try {
            await disconnectAsync({ connector: wallet });
            if (wallet.id == 'app.owallet') {
                if (!window.owallet) {
                    throw new Error('OWallet not found!');
                }
                await window.owallet?.enable('0x01');
            }
            await connectAsync({ connector: wallet });
            // console.log('Connected');
        } catch (e) {
            console.log(e);
            toast.error((e as Error).message);
        }
    }

    async function disconnect(wallet: Connector) {
        try {
            await disconnectAsync({ connector: wallet });
        } catch (e) {
            console.log(e);
            toast.error((e as Error).message);
        }
    }

    return (
        <ModalCustom
            className="rounded-3xl"
            open={open}
            onOpenChange={(v) => {
                if (!v) onClose();
            }}
            title="Connect Wallet"
            content={
                <div>
                    {isPending && (
                        <div className="absolute top-0 left-0 rounded-2xl flex place-items-center justify-center w-full h-full z-1 backdrop-blur-[2px]">
                            {/* <IconLoading sx={{ fontSize: '100px' }} /> */}
                            loading
                        </div>
                    )}
                    {connectors.map((wallet, index) => {
                        let button = <Button onClick={() => connect(wallet)}>{address ? 'Switch' : 'Connect'}</Button>;

                        let status: TWalletStatus = 'Disconnected';
                        if (connector?.id === wallet.id) {
                            status = 'Connected';
                            button = (
                                <Button className="text-white bg-destructive" onClick={() => disconnect(wallet)}>
                                    Disconnect
                                </Button>
                            );
                        }
                        if (isPending && wallet.id === connector?.id) {
                            status = 'Connecting';
                        }

                        return (
                            <div key={index + wallet.uid} className="mb-1">
                                <BoxOptionWallet
                                    icon={{
                                        key: wallet.id,
                                        replaceUrl: wallet.icon || '',
                                    }}
                                    name={wallet.name}
                                    status={status}
                                    buttonF={button}
                                    isConnected={status == 'Connected'}
                                />
                            </div>
                        );
                    })}
                </div>
            }
        />
    );
};

export default ConnectWalletModal;
