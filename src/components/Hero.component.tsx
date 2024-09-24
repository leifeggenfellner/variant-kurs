import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import * as THREE from 'three';
import FloatingCamera from './FloatingCamera';
import TextWithMatcap from './TextWithMatcap';
import TorusWithMatcap from './TorusWithMatcap';

const matcapTexturePath = '/matcaps/8.png';

const Hero = () => {
    const matcapTexture = useLoader(THREE.TextureLoader, matcapTexturePath);

    return (
        <div className="relative w-full h-screen bg-fuchsia-600">
            <Canvas camera={{ position: [1, 1, 4], fov: 75 }}>
                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                <Suspense fallback={null}>
                    {/* Add the camera movement logic */}
                    <FloatingCamera />

                    {/* Render the text with matcap */}
                    <TextWithMatcap matcapTexture={matcapTexture} text="Welcome, I'm Leif" />

                    {/* Generate random toruses */}
                    {Array.from({ length: 100 }, (_, i) => (
                        <TorusWithMatcap key={i} matcapTexture={matcapTexture} />
                    ))}
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Hero;
