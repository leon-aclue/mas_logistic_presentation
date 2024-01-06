import {emptyStartListItem, MultiListItem} from "../component/slideElement/MultiList";
import {
    agvTypeHeader,
    ekQuestionHeader,
    introductionHeader,
    navigationVariantsHeader
} from "../component/header/ListHeaders";
import {PRODUCTION_STATIONS, SIM_BASE_LENGTH, SIM_BASE_WIDTH} from "../simulation/config";
import {ListItemType} from "../component/slideElement/BulletList";
import {agvTypeFooter, ekQuestionFooter, navigationVariantsFooter} from "../component/footer/ListFooters";
import {baseItemProps, navigationVariantsCameraConfig, SimulationCategory} from "./listProps";

export const listItemsList: MultiListItem[] = [
    {
        simulationCategory: SimulationCategory.BASE,
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
        simulationCategory: SimulationCategory.BASE,
        header: ekQuestionHeader,
        footer: ekQuestionFooter,
        items:
            [
                emptyStartListItem(),
                {
                    title: 'Welche Last soll wie transportiert und übergeben werden?',
                    type: ListItemType.ITEM,
                    tab: 0,
                    itemProps: baseItemProps,
                },
                {
                    title: 'Produkte werden auf Paletten bereitgestellt und auf definierte Abholstationen gestellt',
                    type: ListItemType.ANSWER,
                    tab: 1,

                    activateSimulationItems: ['StorageAreas'],
                },
                {
                    title: 'Welche Maße haben die zu transportierenden Lasten?',
                    type: ListItemType.ITEM,
                    tab: 0,
                    itemProps: baseItemProps,
                },
                {
                    title: 'Europaletten',
                    type: ListItemType.ANSWER,
                    tab: 1,

                },
            ],
    },
    {
        simulationCategory: SimulationCategory.BASE,
        header: ekQuestionHeader,
        footer: ekQuestionFooter,
        items:
            [
                {
                    title: 'Wie beweglich muss das Fahrzeug sein bzw. wie viel Platz steht zur Verfügung?',
                    type: ListItemType.ITEM,
                    tab: 0,
                    itemProps: baseItemProps,
                },
                {
                    title: 'Fahrwege von 2m Breite',
                    type: ListItemType.ANSWER,
                    tab: 1,

                    activateSimulationItems: ['DrivingArea'],
                },
                {
                    title: 'Wie lang sind die Wegstrecken?',
                    type: ListItemType.ITEM,
                    tab: 0,
                    itemProps: baseItemProps,
                },
                {
                    title: 'maximal 200m zwischen Lager und Abholstation',
                    type: ListItemType.ANSWER,
                    tab: 1,

                },
                {
                    title: 'Wie viele Transporte werden pro Stunde getätigt?',
                    type: ListItemType.ITEM,
                    tab: 0,
                    itemProps: baseItemProps,
                },
                {
                    title: 'ca 20',
                    type: ListItemType.ANSWER,
                    tab: 1,

                },
            ],
    },
    {
        simulationCategory: SimulationCategory.BASE,
        header: ekQuestionHeader,
        footer: ekQuestionFooter,
        items:
            [
                {
                    title: 'Welche Spurführung oder Navigation ist am besten geeignet?',
                    type: ListItemType.ITEM,
                    tab: 0,
                    itemProps: baseItemProps,
                },
            ],
    },
    {
        simulationCategory: SimulationCategory.NAVIGATION,
        header: agvTypeHeader,
        footer: agvTypeFooter,
        cameraConfig: navigationVariantsCameraConfig,
        items:
            [
                emptyStartListItem(),
                {
                    title: 'AGV - Automated guided vehicle',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
                },
                {
                    title: 'folgt definiertem (virtuellen) Pfad',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'z.B. Laser-Navigation oder Magnetband-Navigation',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'AMR - Autonomous Mobile Robot',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
                },
                {
                    title: 'können sich frei im Raum bewegen',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'scannen die Umgebung (Wände, Durchgänge etc.)',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'z.B. Staubsaugroboter',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
            ],
    },
    {
        simulationCategory: SimulationCategory.NAVIGATION,
        header: navigationVariantsHeader,
        footer: navigationVariantsFooter,
        cameraConfig: navigationVariantsCameraConfig,
        items:
            [
                emptyStartListItem(),
                {
                    title: 'Natural Navigation',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
                    activateSimulationItems: ['MagneticLines'],
                },
            ],
    },
    {
        simulationCategory: SimulationCategory.NAVIGATION,
        header: navigationVariantsHeader,
        footer: navigationVariantsFooter,
        cameraConfig: navigationVariantsCameraConfig,
        items:
            [
                {
                    title: 'Laser Guided Navigation',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
                    deactivateSimulationItems: ['MagneticLines'],
                },
            ],
    },
    {
        simulationCategory: SimulationCategory.NAVIGATION,
        header: navigationVariantsHeader,
        footer: navigationVariantsFooter,
        cameraConfig: navigationVariantsCameraConfig,
        items:
            [
                {
                    title: 'Magnetic Tape Navigation',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
                },
            ],
    },
    {
        simulationCategory: SimulationCategory.NAVIGATION,
        header: navigationVariantsHeader,
        footer: navigationVariantsFooter,
        cameraConfig: navigationVariantsCameraConfig,
        items:
            [
                {
                    title: 'Magnetic Spots Navigation',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
                },
            ],
    },
    {
        simulationCategory: SimulationCategory.NAVIGATION,
        header: navigationVariantsHeader,
        footer: navigationVariantsFooter,
        cameraConfig: navigationVariantsCameraConfig,
        items:
            [
                {
                    title: 'Inductive Wire',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
                },
            ],
    },
    {
        simulationCategory: SimulationCategory.BASE,
        header: ekQuestionHeader,
        footer: ekQuestionFooter,
        items:
            [
                {
                    title: 'Welche Spurführung oder Navigation ist am besten geeignet?',
                    type: ListItemType.ITEM,
                    tab: 0,
                    itemProps: baseItemProps,
                },
                {
                    title: 'Magnetschienen im Boden',
                    type: ListItemType.ANSWER,
                    tab: 1,

                    activateSimulationItems: ['MagneticLines'],
                },
                {
                    title: 'sorgt für genaue Spureinhaltung',
                    type: ListItemType.ITEM,
                    tab: 2,

                },
                {
                    title: 'liefert allerdings keine Informationen über Position in Halle',
                    type: ListItemType.ITEM,
                    tab: 2,

                },
                {
                    title: 'Laser SLAM [TODO!!!]',
                    type: ListItemType.ANSWER,
                    tab: 1,

                    activateSimulationItems: ['ReflectorStations'],
                },
                {
                    title: 'nicht ganz genau',
                    type: ListItemType.ITEM,
                    tab: 2,

                },
                {
                    title: 'kann aber die grobe Position bestimmen',
                    type: ListItemType.ITEM,
                    tab: 2,

                },
            ],
    },
    {
        simulationCategory: SimulationCategory.BASE,
        header: ekQuestionHeader,
        footer: ekQuestionFooter,
        items:
            [
                {
                    title: 'Wie sieht das Energiekonzept in Abhängigkeit von der Einsatzdauer aus?',
                    type: ListItemType.ITEM,
                    tab: 0,
                    itemProps: baseItemProps,
                },
                {
                    title: 'Neben dem Lager kann eine Ladestation gebaut werden, sodass die AGVs bei Leerlauf oder Bedarf schnell laden können',
                    type: ListItemType.ANSWER,
                    tab: 1,

                    activateSimulationItems: ['ChargingAreas'],
                },
                {
                    title: 'Gibt es besondere Sicherheitsaspekte oder schwierige Umweltbedingungen?',
                    type: ListItemType.ITEM,
                    tab: 0,
                    itemProps: baseItemProps,
                },
                {
                    title: 'Keine Umweltaspekte, da indoor, aber müssen auf Mitarbeiter Rücksicht nehmen',
                    type: ListItemType.ANSWER,
                    tab: 1,

                },
            ],
    },
];