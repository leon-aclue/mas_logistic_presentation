import {Canvas} from "@react-three/fiber";
import {useSelector} from "react-redux";
import {baseSliceSelector} from "./store/slice/baseSlice";
import Base from "./component/base/Base";
import ProductionStation from "./component/base/ProductionStation";
import StorageStation from "./component/base/StorageStation";
import {PerspectiveCamera} from "@react-three/drei";
import DrivingAreaSegment from "./component/base/DrivingAreaSegment";
import MagneticLine from "./component/base/MagneticLine";
import ReflectorStation from "./component/base/ReflectorStation";
import ChargingArea from "./component/base/ChargingArea";
import CameraControl from "./component/control/CameraControl";
import {cameraSliceSelector} from "./store/slice/cameraSlice";
import {Vector3} from "three";

export type SimulationWorldItem =
    'Base'
    | 'ProductionStations'
    | 'StorageStations'
    | 'StorageAreas'
    | 'DrivingArea'
    | 'MagneticLines'
    | 'ReflectorStations'
    | 'ChargingAreas'
    ;

export enum SimulationCategory {
    NONE,
    BASE,
    NAVIGATION,
}

interface IProps {
    itemsToShow?: SimulationWorldItem[],
}


function SimulationWorld(props: IProps) {
    const {
        itemsToShow
    } = props;

    const baseState = useSelector(baseSliceSelector);
    const {
        position: cameraPosition,
        fov: cameraFov,
        lookAt: cameraLookAt
    } = useSelector(cameraSliceSelector);

    const show = (item: SimulationWorldItem): boolean => {
        return !!itemsToShow?.includes(item);
    }

    return (
        <Canvas
            style={{width: '100%', height: '100%'}}
            gl={{preserveDrawingBuffer: true}}
        >
            {/* Setup */}
            <ambientLight/>
            <pointLight position={[-400, 1000, -100]}/>
            <PerspectiveCamera makeDefault position={new Vector3(...cameraPosition)} fov={cameraFov}/>
            <CameraControl lookAt={new Vector3(...cameraLookAt)}/>

            {/* Base */}
            {show('Base') && (
                <Base width={baseState.width} length={baseState.length}/>
            )}
            {show('ProductionStations') && (
                baseState.productionStations.map((productionStation, index) => (
                    <ProductionStation key={index} station={productionStation} showStorageAreas={show('StorageAreas')}/>
                ))
            )}
            {show('StorageStations') && (
                baseState.storageStations.map((storageStation, index) => (
                    <StorageStation key={index} station={storageStation} showStorageAreas={show('StorageAreas')}/>
                ))
            )}
            {show('DrivingArea') && (
                baseState.drivingAreaSegments.map((segment, index) => (
                    <DrivingAreaSegment key={index} {...segment} />
                ))
            )}
            {show('MagneticLines') && (
                baseState.magneticLines.map((line, index) => (
                    <MagneticLine key={index} {...line} />
                ))
            )}
            {show('ReflectorStations') && (
                baseState.reflectorStations.map((station, index) => (
                    <ReflectorStation key={index} {...station} />
                ))
            )}
            {show('ChargingAreas') && (
                baseState.chargingAreas.map((area, index) => (
                    <ChargingArea key={index} {...area} />
                ))
            )}
        </Canvas>
    );
}

export default SimulationWorld;