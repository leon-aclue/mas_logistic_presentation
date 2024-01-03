import React, {useEffect, useRef} from 'react';
import StepHandler from "../component/control/StepHandler";
import SplitContentSlide from "../component/slides/SplitContentSlide";
import SimulationWorld from "../simulation/SimulationWorld";
import BulletList, {ListItem, ListItemType} from "../component/slideElement/BulletList";
import VerticalContainer from "../component/container/VerticalContainer";
import {Typography} from "@mui/material";
import StepChecker from "../component/control/StepChecker";


const itemProps = {
    paddingTop: '20px',
};
const answerItemProps = {};

const listItemsList: ListItem[][] = [
    [
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
    ],
    [
        {
            title: 'Wie beweglich muss das Fahrzeug sein bzw. wie viel Platz steht zur Verfügung?',
            type: ListItemType.ITEM,
            tab: 0,
            itemProps: itemProps,
        },
        {
            title: 'Fahrwege von 2m Breite',
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
    ],
    [
        {
            title: 'Welche Spurführung oder Navigation ist am besten geeignet?',
            type: ListItemType.ITEM,
            tab: 0,
            itemProps: itemProps,
        },
        {
            title: 'Magnetschienen im Boden',
            type: ListItemType.ANSWER,
            tab: 1,
            itemProps: answerItemProps,
        },
        {
            title: 'sorgt für genaue Spureinhaltung',
            type: ListItemType.ITEM,
            tab: 2,
            itemProps: answerItemProps,
        },
        {
            title: 'liefert allerdings keine Informationen über Position in Halle',
            type: ListItemType.ITEM,
            tab: 2,
            itemProps: answerItemProps,
        },
        {
            title: 'Laser SLAM [TODO!!!]',
            type: ListItemType.ANSWER,
            tab: 1,
            itemProps: answerItemProps,
        },
        {
            title: 'nicht ganz genau',
            type: ListItemType.ITEM,
            tab: 2,
            itemProps: answerItemProps,
        },
        {
            title: 'kann aber die grobe Position bestimmen',
            type: ListItemType.ITEM,
            tab: 2,
            itemProps: answerItemProps,
        },
    ],
    [
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
];

function SimulationIntroductionPage() {
    const totalLength = listItemsList.flat().length;

    const {step} = StepHandler({maxSteps: totalLength + 1});
    const boxRef = useRef();

    // on next step scroll to bottom
    useEffect(() => {
        if (boxRef.current) {
            // @ts-ignore
            boxRef.current.scrollTop = boxRef.current.scrollHeight;
        }
    }, [step])

    const showStorageAreas = step >= 2;
    const showDrivingArea = step >= 6;
    const showMagneticLines = step >= 12;
    const showReflectorStations = step >= 15;
    const showChargingAreas = step >= 19;

    return (
        <SplitContentSlide>
            <VerticalContainer
                flex={1}
                justifyContent='space-between'
                paddingLeft='40px'
                paddingY='20px'
            >
                <Typography variant='h4' paddingBottom='20px'>Kernfragen von EK-Robotics [1]</Typography>
                {listItemsList.map((listItems, index) => {
                    const startIndex = listItemsList.slice(0, index).flat().length;
                    const endIndex = startIndex + listItems.length;

                    return (
                        <StepChecker key={index} minStep={startIndex + 1} maxStep={endIndex}>
                            <BulletList
                                items={listItems}
                                fontVariant='subtitle1'
                                numberToShow={step - startIndex}
                                containerProps={{ref: boxRef}}
                            />
                        </StepChecker>
                    )
                })}
                <Typography variant='subtitle2' paddingTop='20px'>[1]
                    https://ek-robotics.com/de/technologie/fts-fahrerlose-transportsysteme</Typography>
            </VerticalContainer>
            <SimulationWorld
                showBase
                showProductionStations
                showStorageStations
                showStorageAreas={showStorageAreas}
                showDrivingArea={showDrivingArea}
                showMagneticLines={showMagneticLines}
                showReflectorStations={showReflectorStations}
                showChargingAreas={showChargingAreas}
            />
        </SplitContentSlide>
    );
}

export default SimulationIntroductionPage;