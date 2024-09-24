import { useMemo } from 'react';

const useRandomTransform = () => {
    return useMemo(() => {
        const position = [
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
        ];
        const rotation = [Math.random() * Math.PI, Math.random() * Math.PI, 0];

        const scale = Math.random() * 0.5 + 0.5;

        return { position, rotation, scale: [scale, scale, scale] };
    }, []);
};

export default useRandomTransform;
