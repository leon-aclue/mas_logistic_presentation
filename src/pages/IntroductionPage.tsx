import React from 'react';
import HeaderContentSlide from "../component/slides/HeaderContentSlide";
import BulletList from "../component/slideElement/BulletList";
import StepHandler from "../component/control/StepHandler";

function IntroductionPage() {
    const {step} = StepHandler({maxSteps: 4});
    return (
        <HeaderContentSlide title="Multiagentensysteme in der Logistik">
            <BulletList
                items={[
                    'Konkretes Beispiel:',
                    'Konzipierung eines autonomen Lagerroboter-Systems',
                    'Anhand einer wachsenden Simmulation',
                ]}
                numberToShow={step}
                fontVariant='h3'
            />
        </HeaderContentSlide>
    );
}

export default IntroductionPage;