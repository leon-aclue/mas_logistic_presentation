import React from 'react';
import MultiList, {getTotalLength, MultiListItem} from "../component/slideElement/MultiList";
import StepHandler from "../component/control/StepHandler";
import SimulationItemsHandler from "../simulation/component/control/SimulationItemsHandler";
import SplitContentSlide from "../component/slides/SplitContentSlide";
import VerticalContainer from "../component/container/VerticalContainer";
import SimulationWorld from "../simulation/SimulationWorld";

interface IProps {
    listItemsList: MultiListItem[],
}

function BaseSimulationPage(props: IProps) {
    const {listItemsList} = props;
    const totalLength = getTotalLength(listItemsList);
    const {step} = StepHandler({maxSteps: totalLength});
    const simulationWorldItems = SimulationItemsHandler({listItemsList, step})

    return (
        <SplitContentSlide>
            <VerticalContainer
                flex={1}
                justifyContent='space-between'
                paddingLeft='40px'
                paddingY='20px'
            >
                <MultiList
                    listItemsList={listItemsList}
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