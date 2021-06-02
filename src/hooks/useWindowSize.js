import { useEffect, useState } from 'react';

// Hook
function useGetSize(isClient) {
    return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined,
    };
}

export default function useWindowSize() {
    const isClient = typeof window === 'object';

    const getSize = useGetSize(isClient);
    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return false;
        }

        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isClient, getSize]); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}
