import { ComponentType, Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { registerRemotes, loadRemote } from '@module-federation/runtime';

export type RemoteDetails = {
    scope: string;
    module: string;
}

export async function loadRemoteFromService(scope: string) {
    const remoteMap: Record<string, string> = {
        "products": process.env.NX_PRODUCTS_URL || "http://localhost:4201/mf-manifest.json"
    }

    return Promise.resolve(remoteMap[scope]);
}

export default function useRemote<T = unknown>({ scope, module }: RemoteDetails): T {
    const LazyComponent = lazy(async () => {
        const remoteUrl = await loadRemoteFromService(scope);

        registerRemotes([{
            name: scope,
            entry: remoteUrl
        }]);

        return loadRemote<T>(`${scope}/${module}`) as unknown as Promise<{ default: ComponentType<T> }>
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    return (props: any) => (
        <ErrorBoundary fallback={<div>오류가 발생했습니다!</div>}>
            <Suspense fallback={<div>로딩 중...</div>}>
                <LazyComponent {...props} />
            </Suspense>
        </ErrorBoundary>
    )
}