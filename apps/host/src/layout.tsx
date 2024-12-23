import { PropsWithChildren, useEffect } from "react";
import { logger } from '@custom-mfe/logger';

export default function Layout({ children }: PropsWithChildren) {
    useEffect(() => {
        return logger.subscribe((event) => {
            
        });
    }, [])

    return (
        <>
            {children}
        </>
    )
}