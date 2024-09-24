import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const FloatingCamera = () => {
    const cameraRef = useRef(null);
    let time = 0;

    useFrame(({ camera }) => {
        time += 0.001;
        camera.position.x = Math.sin(time) * 2;
        camera.position.y = Math.cos(time) * 2;
        camera.lookAt(0, 0, 0);
    });

    return null;
};

export default FloatingCamera;
