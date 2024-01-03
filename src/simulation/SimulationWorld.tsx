import {Canvas} from "@react-three/fiber";
import {useSelector} from "react-redux";
import {baseSliceSelector} from "./store/slice/baseSlice";
import Base from "./component/base/Base";
import ProductionStation from "./component/base/ProductionStation";
import StorageStation from "./component/base/StorageStation";
import {PerspectiveCamera} from "@react-three/drei";
import {CAMERA_CONFIG, SIM_BASE_LENGTH, SIM_BASE_WIDTH} from "./config";
import DrivingAreaSegment from "./component/base/DrivingAreaSegment";
import MagneticLine from "./component/base/MagneticLine";
import ReflectorStation from "./component/base/ReflectorStation";
import ChargingArea from "./component/base/ChargingArea";

interface IProps {
    showBase?: boolean,
    showProductionStations?: boolean,
    showStorageStations?: boolean,
    showStorageAreas?: boolean,
    showDrivingArea?: boolean,
    showMagneticLines?: boolean,
    showReflectorStations?: boolean,
    showChargingAreas?: boolean,
}


function SimulationWorld(props: IProps) {
    const {
        showBase,
        showProductionStations,
        showStorageStations,
        showStorageAreas,
        showDrivingArea,
        showMagneticLines,
        showReflectorStations,
        showChargingAreas,
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
                baseState.productionStations.map((productionStation, index) => (
                    <ProductionStation key={index} station={productionStation} showStorageAreas={showStorageAreas}/>
                ))
            )}
            {showStorageStations && (
                baseState.storageStations.map((storageStation, index) => (
                    <StorageStation key={index} station={storageStation} showStorageAreas={showStorageAreas}/>
                ))
            )}
            {showDrivingArea && (
                baseState.drivingAreaSegments.map((segment, index) => (
                    <DrivingAreaSegment key={index} {...segment} />
                ))
            )}
            {showMagneticLines && (
                baseState.magneticLines.map((line, index) => (
                    <MagneticLine key={index} {...line} />
                ))
            )}
            {showReflectorStations && (
                baseState.reflectorStations.map((station, index) => (
                    <ReflectorStation key={index} {...station} />
                ))
            )}
            {showChargingAreas && (
                baseState.chargingAreas.map((area, index) => (
                    <ChargingArea key={index} {...area} />
                ))
            )}
        </Canvas>
    );
}

export default SimulationWorld;