import { useCallback, useState } from 'react';
import { Id, toast } from 'react-toastify';
import { ExternalLink } from 'lucide-react';

export default function useAsyncExecute() {
    const [loading, setLoading] = useState(false);

    const asyncExecute = useCallback(async function <T>({
        fn,
        onError,
        onSuccess,
        linkScan,
    }: {
        fn: (notify: (msg: string) => void, idToast: Id) => Promise<T>;
        onSuccess?: (data: T) => void;
        onError?: (error: Error) => void;
        linkScan?: (data: T) => string;
    }) {
        setLoading(true);
        const idToast = toast.loading('Executing...', { position: 'top-center', type: 'info' });
        function notify(msg: string) {
            toast.update(idToast, { render: <pre>{msg}</pre> });
        }
        try {
            const response = await fn(notify, idToast);
            onSuccess?.(response);
            toast.update(idToast, {
                render: linkScan ? (
                    <div className="gap-0.5 flex place-items-center">
                        Send transaction successful!
                        <a href={linkScan?.(response)} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', placeItems: 'center' }}>
                            <ExternalLink fontSize="medium" />
                        </a>
                    </div>
                ) : (
                    'Send transaction successfull!'
                ),
                isLoading: false,
                type: 'success',
                autoClose: 3000,
                hideProgressBar: false,
            });
        } catch (error) {
            console.log(error);
            onError?.(error as Error);
            toast.update(idToast, { render: <pre>{(error as Error).message}</pre>, type: 'error', position: 'top-center', isLoading: false, autoClose: 5000, hideProgressBar: false });
        }
        setLoading(false);
    },
    []);

    return {
        loading,
        asyncExecute,
    };
}
