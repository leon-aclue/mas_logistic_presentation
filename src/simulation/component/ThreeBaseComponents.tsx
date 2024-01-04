import {Box, Cylinder, Sphere} from "@react-three/drei/core/shapes";
import {Line} from '@react-three/drei'
import * as THREE from "three";

export type ThreeArr2 = [number, number];
export type ThreeArr3 = [number, number, number];

export interface BaseComponentProps {
    position: ThreeArr3,
    rotation: ThreeArr3,
    size: ThreeArr3,
    color: string,
}

export interface LineProps {
    points: ThreeArr3[],
    width?: number,
    color: string,
}

export function ThreeBox({position, rotation, size, color}: BaseComponentProps) {
    const material = new THREE.MeshLambertMaterial({color,});

    return (
        <Box position={position} rotation={rotation} args={size} material={material}/>
    );
}

export function ThreeCylinder({position, rotation, size, color}: BaseComponentProps) {
    const material = new THREE.MeshLambertMaterial({color});

    return (
        <Cylinder position={position} rotation={rotation} args={size} material={material}/>
    );
}

export function ThreeSphere({position, rotation, size, color}: BaseComponentProps) {
    const material = new THREE.MeshLambertMaterial({color});

    return (
        <Sphere position={position} rotation={rotation} args={[size[0]]} material={material}/>
    );
}

export function ThreeLine({points, width, color}: LineProps) {

    return (
        <Line points={points} color={color} lineWidth={width ?? 5}/>
    );
}