import React, {useEffect, useRef} from 'react';
import StepHandler from "../component/control/StepHandler";
import SplitContentSlide from "../component/slides/SplitContentSlide";
import SimulationWorld from "../simulation/SimulationWorld";
import BulletList, {ListItem, ListItemType} from "../component/slideElement/BulletList";
import VerticalContainer from "../component/container/VerticalContainer";
import {Typography} from "@mui/material";


const itemProps = {
    borderTop: '1px solid black',
};
const answerItemProps = {
    paddingBottom: '5px',
};

const listItems: ListItem[] = [
    {
        title: 'Welche Last soll wie transportiert und übergeben werden?',
        type: ListItemType.ITEM,
        tab: 0,
        itemProps: itemProps,
    },
    {
        title: 'Produkte werden auf Paletten bereitgestellt und auf definierte Abholstationen gestellt',
        type: ListItemType.ANSWER,
        tab: 1,
        itemProps: answerItemProps,
    },
    {
        title: 'Welche Maße haben die zu transportierenden Lasten?',
        type: ListItemType.ITEM,
        tab: 0,
        itemProps: itemProps,
    },
    {
        title: 'Europaletten',
        type: ListItemType.ANSWER,
        tab: 1,
        itemProps: answerItemProps,
    },
    {
        title: 'Wie beweglich muss das Fahrzeug sein bzw. wie viel Platz steht zur Verfügung?',
        type: ListItemType.ITEM,
        tab: 0,
        itemProps: itemProps,
    },
    {
        title: 'Fahrwege von 1,5m breite',
        type: ListItemType.ANSWER,
        tab: 1,
        itemProps: answerItemProps,
    },
    {
        title: 'Wie lang sind die Wegstrecken?',
        type: ListItemType.ITEM,
        tab: 0,
        itemProps: itemProps,
    },
    {
        title: 'maximal 200m zwischen Lager und Abholstation',
        type: ListItemType.ANSWER,
        tab: 1,
        itemProps: answerItemProps,
    },
    {
        title: 'Wie viele Transporte werden pro Stunde getätigt?',
        type: ListItemType.ITEM,
        tab: 0,
        itemProps: itemProps,
    },
    {
        title: 'ca 20',
        type: ListItemType.ANSWER,
        tab: 1,
        itemProps: answerItemProps,
    },
    {
        title: 'Welche Spurführung oder Navigation ist am besten geeignet?',
        type: ListItemType.ITEM,
        tab: 0,
        itemProps: itemProps,
    },
    {
        title: 'Magnetschienen in Boden + Laser [TODO!!!]',
        type: ListItemType.ANSWER,
        tab: 1,
        itemProps: answerItemProps,
    },
    {
        title: 'Wie sieht das Energiekonzept in Abhängigkeit von der Einsatzdauer aus?',
        type: ListItemType.ITEM,
        tab: 0,
        itemProps: itemProps,
    },
    {
        title: 'Neben dem Lager kann eine Ladestation gebaut werden, sodass die AGVs bei Leerlauf oder Bedarf schnell laden können',
        type: ListItemType.ANSWER,
        tab: 1,
        itemProps: answerItemProps,
    },
    {
        title: 'Gibt es besondere Sicherheitsaspekte oder schwierige Umweltbedingungen?',
        type: ListItemType.ITEM,
        tab: 0,
        itemProps: itemProps,
    },
    {
        title: 'Keine Umweltaspekte, da indoor, aber müssen auf Mitarbeiter Rücksicht nehmen',
        type: ListItemType.ANSWER,
        tab: 1,
        itemProps: answerItemProps,
    },
]

function SimulationIntroductionPage() {
    const {step} = StepHandler({maxSteps: listItems.length + 1});
    const boxRef = useRef();

    // on next step scroll to bottom
    useEffect(() => {
        if(boxRef.current) {
            // @ts-ignore
            boxRef.current.scrollTop = boxRef.current.scrollHeight;
        }
    }, [step])

    return (
        <SplitContentSlide>
            <VerticalContainer
                flex={1}
                justifyContent='space-between'
                paddingLeft='40px'
                paddingY='20px'
            >
                <Typography variant='h4' paddingBottom='20px'>Kernfragen von EK-Robotics [1]</Typography>
                <BulletList
                    items={listItems}
                    fontVariant='subtitle1'
                    numberToShow={step}
                    containerProps={{ref: boxRef}}
                />
                <Typography variant='subtitle2' paddingTop='20px'>[1]
                    https://ek-robotics.com/de/technologie/fts-fahrerlose-transportsysteme</Typography>
            </VerticalContainer>
            <SimulationWorld/>
        </SplitContentSlide>
    );
}

export default SimulationIntroductionPage;