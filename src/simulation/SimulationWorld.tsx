import {Canvas} from "@react-three/fiber";
import Controls from "./Controls";
import {ThreeBox, ThreeLine} from "./component/BaseComponents";


function SimulationWorld() {

    return (
        <Canvas style={{width: '100%', height: '100%'}}>
            <Controls/>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <ThreeBox position={[0,0,0]} rotation={[0,0,0]} size={[20,0.1,20]} color={'gray'} />
            <ThreeBox position={[1,1,1]} rotation={[0,0,0]} size={[2,1,0.5]} color={'green'} />
            <ThreeLine points={[[2,0.05,2],[5,0.05,5]]} color={'red'} />
        </Canvas>
    );
}

export default SimulationWorld;