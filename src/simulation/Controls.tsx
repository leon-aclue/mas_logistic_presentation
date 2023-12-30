import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Controls() {
    const controlsRef = useRef<any>();

    useFrame(() => {
        if (controlsRef.current) {
            controlsRef.current.update();
        }
    });

    return (
        <OrbitControls ref={controlsRef} />
    );
}

export default Controls;
