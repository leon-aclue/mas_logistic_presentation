import {emptyStartListItem, MultiListItem} from "../component/slideElement/MultiList";
import {ekQuestionHeader, introductionHeader, navigationVariantsHeader} from "../component/header/ListHeaders";
import {PRODUCTION_STATIONS, SIM_BASE_LENGTH, SIM_BASE_WIDTH} from "../simulation/config";
import {ListItemType} from "../component/slideElement/BulletList";
import {ekQuestionFooter, navigationVariantsFooter} from "../component/footer/ListFooters";
import {ekQuestionsItemProps, navigationVariantsCameraConfig} from "./listProps";

export const listItemsList: MultiListItem[] = [
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
        header: ekQuestionHeader,
        footer: ekQuestionFooter,
        items:
            [
                emptyStartListItem(['Base', 'ProductionStations', 'StorageStations']),
                {
                    title: 'Welche Last soll wie transportiert und übergeben werden?',
                    type: ListItemType.ITEM,
                    tab: 0,
                    itemProps: ekQuestionsItemProps,
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
                    itemProps: ekQuestionsItemProps,
                },
                {
                    title: 'Europaletten',
                    type: ListItemType.ANSWER,
                    tab: 1,

                },
            ],
    },
    {
        header: ekQuestionHeader,
        footer: ekQuestionFooter,
        items:
            [
                {
                    title: 'Wie beweglich muss das Fahrzeug sein bzw. wie viel Platz steht zur Verfügung?',
                    type: ListItemType.ITEM,
                    tab: 0,
                    itemProps: ekQuestionsItemProps,
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
                    itemProps: ekQuestionsItemProps,
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
                    itemProps: ekQuestionsItemProps,
                },
                {
                    title: 'ca 20',
                    type: ListItemType.ANSWER,
                    tab: 1,

                },
            ],
    },
    {
        header: ekQuestionHeader,
        footer: ekQuestionFooter,
        items:
            [
                {
                    title: 'Welche Spurführung oder Navigation ist am besten geeignet?',
                    type: ListItemType.ITEM,
                    tab: 0,
                    itemProps: ekQuestionsItemProps,
                },
            ],
    },
    {
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
                    itemProps: ekQuestionsItemProps,
                    activateSimulationItems: ['MagneticLines'],
                },
            ],
    },
    {
        header: navigationVariantsHeader,
        footer: navigationVariantsFooter,
        cameraConfig: navigationVariantsCameraConfig,
        items:
            [
                {
                    title: 'Laser Guided Navigation',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: ekQuestionsItemProps,
                    deactivateSimulationItems: ['MagneticLines'],
                },
            ],
    },
    {
        header: navigationVariantsHeader,
        footer: navigationVariantsFooter,
        cameraConfig: navigationVariantsCameraConfig,
        items:
            [
                {
                    title: 'Magnetic Tape Navigation',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: ekQuestionsItemProps,
                },
            ],
    },
    {
        header: navigationVariantsHeader,
        footer: navigationVariantsFooter,
        cameraConfig: navigationVariantsCameraConfig,
        items:
            [
                {
                    title: 'Magnetic Spots Navigation',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: ekQuestionsItemProps,
                },
            ],
    },
    {
        header: navigationVariantsHeader,
        footer: navigationVariantsFooter,
        cameraConfig: navigationVariantsCameraConfig,
        items:
            [
                {
                    title: 'Inductive Wire',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: ekQuestionsItemProps,
                },
            ],
    },
    {
        header: ekQuestionHeader,
        footer: ekQuestionFooter,
        items:
            [
                {
                    title: 'Welche Spurführung oder Navigation ist am besten geeignet?',
                    type: ListItemType.ITEM,
                    tab: 0,
                    itemProps: ekQuestionsItemProps,
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
        header: ekQuestionHeader,
        footer: ekQuestionFooter,
        items:
            [
                {
                    title: 'Wie sieht das Energiekonzept in Abhängigkeit von der Einsatzdauer aus?',
                    type: ListItemType.ITEM,
                    tab: 0,
                    itemProps: ekQuestionsItemProps,
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
                    itemProps: ekQuestionsItemProps,
                },
                {
                    title: 'Keine Umweltaspekte, da indoor, aber müssen auf Mitarbeiter Rücksicht nehmen',
                    type: ListItemType.ANSWER,
                    tab: 1,

                },
            ],
    },
];