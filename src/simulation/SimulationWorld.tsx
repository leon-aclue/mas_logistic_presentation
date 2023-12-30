import {Canvas} from "@react-three/fiber";
import Controls from "./Controls";


function SimulationWorld() {

    return (
        <Canvas style={{width: '100%', height: '100%'}}>
            <Controls/>
            <ambientLight />
            <pointLight position={[100, 100, 100]} />
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="orange" />
            </mesh>
        </Canvas>
    );
}

export default SimulationWorld;