import React from 'react';
import MultiList, {MultiListItem} from "../component/slideElement/MultiList";
import StepHandler from "../component/control/StepHandler";
import SimulationItemsHandler from "../simulation/component/control/SimulationItemsHandler";
import SplitContentSlide from "../component/slide/SplitContentSlide";
import VerticalContainer from "../component/container/VerticalContainer";
import SimulationWorld from "../simulation/SimulationWorld";
import FullCenterContainer from "../component/container/FullCenterContainer";
import {Typography} from "@mui/material";

interface IProps {
    listItemsList: MultiListItem[],
}

function BaseSimulationPage(props: IProps) {
    const {listItemsList} = props;
    const {page, step} = StepHandler({listItemsList});

    if (page >= listItemsList.length) {
        return (
            <FullCenterContainer>
                <Typography variant='h1'>Danke!</Typography>
            </FullCenterContainer>
        )
    }

    const simulationWorldItems = SimulationItemsHandler({listItemsList, page, step})
    const background = listItemsList[page].items[step]?.background ?? listItemsList[page].background;

    return (
        <SplitContentSlide
            background={background}
        >
            <VerticalContainer
                flex={1}
                justifyContent='space-between'
                paddingLeft='40px'
                paddingY='20px'
            >
                <MultiList
                    listItemsList={listItemsList}
                    page={page}
                    step={step}
                />
            </VerticalContainer>
            <SimulationWorld
                itemsToShow={simulationWorldItems}
            />
        </SplitContentSlide>
    );
}

export default BaseSimulationPage;