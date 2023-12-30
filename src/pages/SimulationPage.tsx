import React from 'react';
import StepHandler from "../component/control/StepHandler";
import ContentSlide from "../component/slides/ContentSlide";
import SimulationWorld from "../simulation/SimulationWorld";

function SimulationPage() {
    const {step} = StepHandler({maxSteps: 4});
    return (
        <ContentSlide>
            <SimulationWorld />
        </ContentSlide>
    );
}

export default SimulationPage;