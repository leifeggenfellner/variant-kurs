import { useMemo } from 'react';
import * as THREE from 'three';
import useRandomTransform from '../hooks/useRandomTransform';

const TorusWithMatcap = ({ matcapTexture }: { matcapTexture: THREE.Texture }) => {
    const torusGeometry = useMemo(() => new THREE.TorusGeometry(0.3, 0.2, 20, 45), []);

    const { position, rotation, scale } = useRandomTransform();

    return (
        <mesh geometry={torusGeometry} position={position} rotation={rotation} scale={scale}>
            <meshMatcapMaterial matcap={matcapTexture} />
        </mesh>
    );
};

export default TorusWithMatcap;
