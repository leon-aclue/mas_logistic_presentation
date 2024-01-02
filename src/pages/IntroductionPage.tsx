import React, {useEffect} from 'react';
import BulletList, {ListItem, ListItemType} from "../component/slideElement/BulletList";
import StepHandler from "../component/control/StepHandler";
import VerticalContainer from "../component/container/VerticalContainer";
import {Typography} from "@mui/material";
import SimulationWorld from "../simulation/SimulationWorld";
import SplitContentSlide from "../component/slides/SplitContentSlide";
import {useDispatch} from "react-redux";
import {ISimulationBaseState, setupSimulationBase} from "../simulation/store/slice/baseSlice";
import {
    DRIVING_AREA_SEGMENTS,
    PRODUCTION_STATIONS,
    SIM_BASE_LENGTH,
    SIM_BASE_WIDTH,
    STORAGE_STATIONS
} from "../simulation/config";


const listItems: ListItem[] = [
    {
        title: 'Konkretes Beispiel anhand einer Simulation',
    },
    {
        title: `Firmengelände mit ${SIM_BASE_WIDTH}m x ${SIM_BASE_LENGTH}m Fläche`,
        type: ListItemType.ANSWER,
    },
    {
        title: `${PRODUCTION_STATIONS.length} Produktionsstellen`,
        type: ListItemType.ANSWER,
    },
    {
        title: 'Ein Lagerhaus',
        type: ListItemType.ANSWER,
    },
    {
        title: 'Produkte sollen bei den Produktionsstellen abgeholt und zum Lager gebracht werden.',
        type: ListItemType.ANSWER,
    },
];

const simulationBaseState: ISimulationBaseState = {
    width: SIM_BASE_WIDTH,
    length: SIM_BASE_LENGTH,
    productionStations: PRODUCTION_STATIONS,
    storageStations: STORAGE_STATIONS,
    drivingAreaSegments: DRIVING_AREA_SEGMENTS,
}

function IntroductionPage() {
    const dispatch = useDispatch();
    const {step} = StepHandler({maxSteps: listItems.length + 1});

    useEffect(() => {
        dispatch(setupSimulationBase(simulationBaseState));
    });

    const showBase = step >= 2;
    const showProductionStations = step >= 3;
    const showStorageStations = step >= 4;

    return (
        <SplitContentSlide>
            <VerticalContainer
                flex={1}
                justifyContent='space-between'
                paddingLeft='40px'
                paddingY='20px'
            >
                <Typography variant='h4' paddingBottom='20px'>Multiagentensysteme in der Logistik</Typography>
                <BulletList
                    items={listItems}
                    numberToShow={step}
                    fontVariant='subtitle1'
                    containerProps={{gap: '10px'}}
                />
            </VerticalContainer>
            <SimulationWorld
                showBase={showBase}
                showProductionStations={showProductionStations}
                showStorageStations={showStorageStations}
            />
        </SplitContentSlide>
    );
}

export default IntroductionPage;