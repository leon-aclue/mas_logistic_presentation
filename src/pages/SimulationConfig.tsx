import React from 'react';
import {ListItemType} from "../component/slideElement/BulletList";
import {Typography} from "@mui/material";
import {PRODUCTION_STATIONS, SIM_BASE_LENGTH, SIM_BASE_WIDTH} from "../simulation/config";
import {emptyStartListItem, MultiListItem} from "../component/slideElement/MultiList";
import BaseSimulationPage from "./BaseSimulationPage";
import {ICameraConfig} from "../simulation/store/slice/cameraSlice";

const introductionHeader = (
    <Typography variant='h4' paddingBottom='20px'>Multiagentensysteme in der Logistik</Typography>
);
const itemProps = {
    paddingTop: '20px',
};
const answerItemProps = {};

const ekHeader = (
    <Typography variant='h4' paddingBottom='20px'>Kernfragen von EK-Robotics [1]</Typography>
);
const ekFooter = (
    <Typography variant='subtitle2' paddingTop='20px'>[1]
        https://ek-robotics.com/de/technologie/fts-fahrerlose-transportsysteme</Typography>
);

const navHeader = (
    <Typography variant='h4' paddingBottom='20px'>Navigationsvarianten [2]</Typography>
);
const navFooter = (
    <Typography variant='subtitle2' paddingTop='20px'>[1]
        https://TODO.com</Typography>
);
const navCameraConfig: ICameraConfig = {
    position: [0, 60, 60],
    lookAt: [30, 0, 30],
    fov: 45,
};

const listItemsList: MultiListItem[] = [
    {
        header: introductionHeader,
        footer: undefined,
        containerProps: {gap: '20px'},
        items: [
            emptyStartListItem(),
            {
                title: 'Konkretes Beispiel anhand einer Simulation',
            },
            {
                title: `Firmengelände mit ${SIM_BASE_WIDTH}m x ${SIM_BASE_LENGTH}m Fläche`,
                type: ListItemType.ANSWER,
                activateSimulationItems: ['Base'],
            },
            {
                title: `${PRODUCTION_STATIONS.length} Produktionsstellen`,
                type: ListItemType.ANSWER,
                activateSimulationItems: ['ProductionStations'],
            },
            {
                title: 'Ein Lagerhaus',
                type: ListItemType.ANSWER,
                activateSimulationItems: ['StorageStations'],
            },
            {
                title: 'Produkte sollen bei den Produktionsstellen abgeholt und zum Lager gebracht werden.',
                type: ListItemType.ANSWER,
            },
        ]
    },
    {
        header: ekHeader,
        footer: ekFooter,
        items:
            [
                emptyStartListItem(['Base', 'ProductionStations', 'StorageStations']),
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
                    activateSimulationItems: ['StorageAreas'],
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
    },
    {
        header: ekHeader,
        footer: ekFooter,
        items:
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
                    activateSimulationItems: ['DrivingArea'],
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
    },
    {
        header: ekHeader,
        footer: ekFooter,
        items:
            [
                {
                    title: 'Welche Spurführung oder Navigation ist am besten geeignet?',
                    type: ListItemType.ITEM,
                    tab: 0,
                    itemProps: itemProps,
                },
            ],
    },
    {
        header: navHeader,
        footer: navFooter,
        cameraConfig: navCameraConfig,
        items:
            [
                emptyStartListItem(),
                {
                    title: 'Natural Navigation',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: itemProps,
                    activateSimulationItems: ['MagneticLines'],
                },
            ],
    },
    {
        header: navHeader,
        footer: navFooter,
        cameraConfig: navCameraConfig,
        items:
            [
                {
                    title: 'Laser Guided Navigation',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: itemProps,
                    deactivateSimulationItems: ['MagneticLines'],
                },
            ],
    },
    {
        header: navHeader,
        footer: navFooter,
        cameraConfig: navCameraConfig,
        items:
            [
                {
                    title: 'Magnetic Tape Navigation',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: itemProps,
                },
            ],
    },
    {
        header: navHeader,
        footer: navFooter,
        cameraConfig: navCameraConfig,
        items:
            [
                {
                    title: 'Magnetic Spots Navigation',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: itemProps,
                },
            ],
    },
    {
        header: navHeader,
        footer: navFooter,
        cameraConfig: navCameraConfig,
        items:
            [
                {
                    title: 'Inductive Wire',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: itemProps,
                },
            ],
    },
    {
        header: ekHeader,
        footer: ekFooter,
        items:
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
                    activateSimulationItems: ['MagneticLines'],
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
                    activateSimulationItems: ['ReflectorStations'],
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
    },
    {
        header: ekHeader,
        footer: ekFooter,
        items:
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
                    activateSimulationItems: ['ChargingAreas'],
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
            ],
    },
];

function SimulationConfig() {

    return (
        <BaseSimulationPage listItemsList={listItemsList}/>
    );
}

export default SimulationConfig;