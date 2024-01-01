import React from 'react';
import HeaderContentSlide from "../component/slides/HeaderContentSlide";
import BulletList, {ListItem, ListItemType} from "../component/slideElement/BulletList";
import StepHandler from "../component/control/StepHandler";


const listItems: ListItem[] = [
    {
        title: 'Konkretes Beispiel:',
    },
    {
        title: 'Konzipierung eines autonomen Lagerroboter-Systems',
        type: ListItemType.ANSWER,
    },
    {
        title: 'Anhand einer wachsenden Simmulation',
        type: ListItemType.ANSWER,
    },
];

function IntroductionPage() {
    const {step} = StepHandler({maxSteps: listItems.length + 1});
    return (
        <HeaderContentSlide title="Multiagentensysteme in der Logistik">
            <BulletList
                items={listItems}
                numberToShow={step}
                fontVariant='h3'
                containerProps={{gap: '20px'}}
            />
        </HeaderContentSlide>
    );
}

export default IntroductionPage;