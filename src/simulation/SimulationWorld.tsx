import {Canvas} from "@react-three/fiber";
import {useSelector} from "react-redux";
import {baseSliceSelector} from "./store/slice/baseSlice";
import Base from "./component/base/Base";
import ProductionStation from "./component/base/ProductionStation";
import StorageStation from "./component/base/StorageStation";
import {PerspectiveCamera} from "@react-three/drei";
import DrivingAreaSegment from "./component/base/DrivingAreaSegment";
import VirtualRoute from "./component/base/VirtualRoute";
import ReflectorStation from "./component/base/ReflectorStation";
import ChargingArea from "./component/base/ChargingArea";
import CameraControl from "./component/control/CameraControl";
import {cameraSliceSelector} from "./store/slice/cameraSlice";
import {Vector3} from "three";
import InductiveWire from "./component/base/InductiveWire";
import Agv from "./component/agv/Agv";

export type SimulationWorldItem =
    // Base
    'Base'
    | 'ProductionStations'
    | 'StorageStations'
    | 'StorageAreas'
    | 'DrivingArea'
    | 'InductiveWire'
    | 'VirtualRoutes'
    | 'ReflectorStations'
    | 'ChargingAreas'

    // AGVs
    | 'AGV'

    // NavigationSystemsExplanation
    | 'ExampleWalls'
    | 'ExampleAgv'
    | 'LaserSensor'
    | 'NaturalNavBeams'
    | 'ExampleReflectorStations'
    | 'LaserNavBeams'
    | 'MagneticSpots'
    | 'MagneticTape'
    | 'InductionWire'
    ;

export enum SimulationCategory {
    NONE,
    BASE,
    AGV_TYPE,
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
            {show('VirtualRoutes') && (
                baseState.virtualRoutes.map((line, index) => (
                    <VirtualRoute key={index} {...line} />
                ))
            )}
            {show('ReflectorStations') && (
                baseState.reflectorStations.map((station, index) => (
                    <ReflectorStation key={index} {...station} />
                ))
            )}
            {show('InductiveWire') && (
                baseState.inductiveWire.map((line, index) => (
                    <InductiveWire key={index} {...line} />
                ))
            )}
            {show('ChargingAreas') && (
                baseState.chargingAreas.map((area, index) => (
                    <ChargingArea key={index} {...area} />
                ))
            )}
            {/* AGVs */}
            {show('AGV') && (
                <>
                    <Agv position={[60, 19]} rotation={-1.55} />
                    <Agv position={[65, 19]} rotation={-1.55} />
                    <Agv position={[20, 70]} rotation={-1.55} />
                    <Agv position={[40, 84]} rotation={0} />
                    <Agv position={[84, 40]} rotation={3.1415} />
                </>
            )}
        </Canvas>
    );
}

export default SimulationWorld;