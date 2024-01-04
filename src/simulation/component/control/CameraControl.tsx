import React from 'react';
import {useFrame} from '@react-three/fiber';
import {Vector3} from "three";

interface CameraControlProps {
    lookAt: Vector3;
}

function CameraControl(props: CameraControlProps) {

    useFrame((state) => {
        state.camera.lookAt(props.lookAt);
    });
    return (<></>);
}

export default CameraControl;
