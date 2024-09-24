import { useLoader } from '@react-three/fiber';
import { useMemo } from 'react';
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

const TextWithMatcap = ({
    text = 'Hello Three.js',
    matcapTexture,
}: {
    text?: string;
    matcapTexture: THREE.Texture;
}) => {
    const font = useLoader(FontLoader, '/fonts/helvetiker_regular.typeface.json');

    const textGeometry = useMemo(() => {
        const geometry = new TextGeometry(text, {
            font,
            size: 0.5,
            height: 0.2,
            curveSegments: 5,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5,
        });
        geometry.center(); // Center the text geometry
        return geometry;
    }, [font, text]);

    return (
        <mesh geometry={textGeometry}>
            <meshMatcapMaterial matcap={matcapTexture} />
        </mesh>
    );
};

export default TextWithMatcap;
