import {Canvas} from "@react-three/fiber";
import {useSelector} from "react-redux";
import {baseSliceSelector} from "./store/slice/baseSlice";
import Base from "./component/base/Base";
import ProductionStation from "./component/base/ProductionStation";
import StorageStation from "./component/base/StorageStation";
import {PerspectiveCamera} from "@react-three/drei";
import {CAMERA_CONFIG, SIM_BASE_LENGTH, SIM_BASE_WIDTH} from "./config";
import DrivingAreaSegment from "./component/base/DrivingAreaSegment";

interface IProps {
    showBase?: boolean,
    showProductionStations?: boolean,
    showStorageStations?: boolean,
    showStorageAreas?: boolean,
    showDrivingArea?: boolean,
}


function SimulationWorld(props: IProps) {
    const {
        showBase,
        showProductionStations,
        showStorageStations,
        showStorageAreas,
        showDrivingArea,
    } = props;
    const baseState = useSelector(baseSliceSelector);


    return (
        <Canvas style={{width: '100%', height: '100%'}}
                onCreated={(state) => {
                    state.camera.lookAt(SIM_BASE_WIDTH / 2, 0, SIM_BASE_LENGTH / 2);
                }}
        >
            {/* Setup */}
            <ambientLight/>
            <pointLight position={[-400, 1000, -100]}/>
            <PerspectiveCamera makeDefault {...CAMERA_CONFIG} />

            {/* Base */}
            {showBase && (
                <Base width={baseState.width} length={baseState.length}/>
            )}
            {showProductionStations && (
                baseState.productionStations.map((productionStation) => (
                    <ProductionStation station={productionStation} showStorageAreas={showStorageAreas}/>
                ))
            )}
            {showStorageStations && (
                baseState.storageStations.map((storageStation) => (
                    <StorageStation station={storageStation} showStorageAreas={showStorageAreas} />
                ))
            )}
            {showDrivingArea && (
                baseState.drivingAreaSegments.map((segment) => (
                    <DrivingAreaSegment {...segment} />
                ))
            )}
        </Canvas>
    );
}

export default SimulationWorld;