import {emptyStartListItem, MultiListItem} from "../component/slideElement/MultiList";
import {
    agvSelectHeader,
    agvTypeHeader,
    baseSetupHeader,
    basicCategoryHeader, conflictResolutionHeader,
    ekQuestionHeader,
    introductionControllingHeader,
    introductionHeader,
    navigationSystemsHeader, routingHeader, schedulingHeader,
    simulationHeader,
    sourcesHeader
} from "../component/header/ListHeaders";
import {PRODUCTION_STATIONS, SIM_BASE_LENGTH, SIM_BASE_WIDTH} from "../simulation/config";
import {ListItemType} from "../component/slideElement/BulletList";
import {
    agvTypeFooter,
    basicCategoryFooter,
    controllingFooter,
    ekQuestionFooter,
    navigationSystemsFooter,
    rosControllingFooter
} from "../component/footer/ListFooters";
import {baseItemProps, baseTitleImagePath, gptGenerated, navigationSystemsCameraConfig} from "./listProps";
import {SimulationCategory} from "../simulation/SimulationWorld";
import {getSourcesList, SourceName, Sources} from "./sources";

export const listItemsList: MultiListItem[] = [
    {
        simulationCategory: SimulationCategory.NONE,
        header: introductionHeader,
        footer: undefined,
        background: {
            image: baseTitleImagePath + 'TitleImage.png',
            title: gptGenerated,
        },
        items: [
            emptyStartListItem(),
        ]
    },
    {
        simulationCategory: SimulationCategory.NONE,
        header: introductionHeader,
        footer: undefined,
        background: {
            image: baseTitleImagePath + 'TitleImage2.png',
            title: gptGenerated,
        },
        items: [
            emptyStartListItem(),
        ]
    },
    {
        simulationCategory: SimulationCategory.NONE,
        header: introductionHeader,
        footer: undefined,
        containerProps: {gap: '20px'},
        items: [
            {
                title: 'Konkretes Beispiel anhand einer Simulation',
                background: {
                    image: baseTitleImagePath + 'SimulationBild.png',
                    title: gptGenerated,
                },
            },
            // {
            //     title: 'Allgemeines Vorgehen',
            //     type: ListItemType.ANSWER,
            //     background: {
            //         image: baseTitleImagePath + 'AllgemeinesVorgehenBild.png',
            //         title: gptGenerated,
            //     },
            // },
            {
                title: 'Ausgangsszenario',
                type: ListItemType.ANSWER,
            },
            {
                title: 'Kernfragen zur Realisierung',
                type: ListItemType.ANSWER,
            },
            {
                title: 'Automated vs. Autonomous',
                type: ListItemType.ANSWER,
            },
            {
                title: 'AGV Typen',
                type: ListItemType.ANSWER,
            },
            {
                title: 'Navigationssysteme',
                type: ListItemType.ANSWER,
            },
            {
                title: 'Controlling',
                type: ListItemType.ANSWER,
            },
            {
                title: 'Laufende Simulation',
                type: ListItemType.ANSWER,
            },
        ]
    },
    // {
    //     simulationCategory: SimulationCategory.NONE,
    //     header: generalStepsHeader,
    //     footer: generalStepsFooter,
    //     items: [
    //         emptyStartListItem(),
    //     ]
    // },
    // {
    //     simulationCategory: SimulationCategory.NONE,
    //     header: generalStepsHeader,
    //     footer: generalStepsFooter,
    //     items: [
    //         {
    //             title: '1. Proposal phase',
    //             type: ListItemType.NONE,
    //             itemProps: baseItemProps,
    //         },
    //         {
    //             title: 'Requirementanalyse',
    //             type: ListItemType.ANSWER,
    //         },
    //         {
    //             title: 'Angebot erstellen und annehmen',
    //             type: ListItemType.ANSWER,
    //         },
    //         {
    //             title: '2. Definition phase',
    //             type: ListItemType.NONE,
    //             itemProps: baseItemProps,
    //         },
    //         {
    //             title: 'Funktionale Spezifikationen',
    //             type: ListItemType.ANSWER,
    //         },
    //         {
    //             title: 'Kick-off',
    //             type: ListItemType.ANSWER,
    //         },
    //         {
    //             title: 'evtl. Simulation',
    //             type: ListItemType.ANSWER,
    //         },
    //         {
    //             title: '3. Preparation for implementation',
    //             type: ListItemType.NONE,
    //             itemProps: baseItemProps,
    //         },
    //         {
    //             title: 'Fahrzeugherstellung',
    //             type: ListItemType.ANSWER,
    //         },
    //         {
    //             title: 'Installation von Software',
    //             type: ListItemType.ANSWER,
    //         },
    //         {
    //             title: 'Einrichten der Umgebung (Reflektoren, Schienen etc.)',
    //             type: ListItemType.ANSWER,
    //         },
    //     ],
    // },
    // {
    //     simulationCategory: SimulationCategory.NONE,
    //     header: generalStepsHeader,
    //     footer: generalStepsFooter,
    //     items: [
    //         {
    //             title: '4. On-site system implementation',
    //             type: ListItemType.NONE,
    //             itemProps: baseItemProps,
    //         },
    //         {
    //             title: 'Safety briefing & Training',
    //             type: ListItemType.ANSWER,
    //         },
    //         {
    //             title: 'Integrationstests',
    //             type: ListItemType.ANSWER,
    //         },
    //         {
    //             title: '5. Commissioning phase',
    //             type: ListItemType.NONE,
    //             itemProps: baseItemProps,
    //         },
    //         {
    //             title: 'Inbetriebnahme',
    //             type: ListItemType.ANSWER,
    //         },
    //         {
    //             title: 'Qualitycheck',
    //             type: ListItemType.ANSWER,
    //         },
    //         {
    //             title: '6. Maintenance and support',
    //             type: ListItemType.NONE,
    //             itemProps: baseItemProps,
    //         },
    //         {
    //             title: 'Laufender Betrieb',
    //             type: ListItemType.ANSWER,
    //         },
    //     ]
    // },
    // {
    //     simulationCategory: SimulationCategory.NONE,
    //     header: baseSetupHeader,
    //     footer: undefined,
    //     items:
    //         [
    //             emptyStartListItem(),
    //         ],
    // },
    {
        simulationCategory: SimulationCategory.BASE,
        header: baseSetupHeader,
        footer: undefined,
        containerProps: {gap: '20px'},
        items: [
            emptyStartListItem(),
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
    // {
    //     simulationCategory: SimulationCategory.NONE,
    //     header: ekQuestionHeader,
    //     footer: ekQuestionFooter,
    //     items:
    //         [
    //             emptyStartListItem(),
    //         ],
    // },
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
    // {
    //     simulationCategory: SimulationCategory.NONE,
    //     header: basicCategoryHeader,
    //     footer: basicCategoryFooter,
    //     cameraConfig: navigationSystemsCameraConfig,
    //     items:
    //         [
    //             emptyStartListItem(),
    //         ],
    // },
    {
        simulationCategory: SimulationCategory.NONE,
        header: basicCategoryHeader,
        footer: basicCategoryFooter,
        cameraConfig: navigationSystemsCameraConfig,
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
    // {
    //     simulationCategory: SimulationCategory.NONE,
    //     header: agvTypeHeader,
    //     footer: agvTypeFooter,
    //     cameraConfig: navigationSystemsCameraConfig,
    //     items:
    //         [
    //             emptyStartListItem(),
    //         ],
    // },
    {
        simulationCategory: SimulationCategory.AGV_TYPE,
        header: agvTypeHeader,
        footer: agvTypeFooter,
        cameraConfig: navigationSystemsCameraConfig,
        items:
            [
                emptyStartListItem(),
                {
                    title: 'AGC - Automated Guided Cart',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
                },
                {
                    title: 'kleine aber starke Roboterplatform',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'färt komplett unter die Ladung und kann sie nur wenige cm anheben',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'preiswert (bis 20.000$)',
                    type: ListItemType.PLUS,
                    tab: 1,
                },
                {
                    title: 'hohe Tragkraft (bis zu 1t)',
                    type: ListItemType.PLUS,
                    tab: 1,
                },
                {
                    title: 'kann Ladung nur in 2 Dimensionen bewegen',
                    type: ListItemType.MINUS,
                    tab: 1,
                },
            ],
    },
    {
        simulationCategory: SimulationCategory.AGV_TYPE,
        header: agvTypeHeader,
        footer: agvTypeFooter,
        cameraConfig: navigationSystemsCameraConfig,
        items:
            [
                {
                    title: 'Automated Tow Tractor',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
                },
                {
                    title: 'starke Zugmaschinen (standart bis 1t, max bis 20t)',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'können mehrere Anhänger autonom transportieren',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'sehr verschiedene Lasten möglich - je nach Anhänger',
                    type: ListItemType.PLUS,
                    tab: 1,
                },
                {
                    title: 'kann mehrere Lasten gleichzeitig transportieren',
                    type: ListItemType.PLUS,
                    tab: 1,
                },
                {
                    title: 'kann Ladung nur in 2 Dimensionen bewegen',
                    type: ListItemType.MINUS,
                    tab: 1,
                },
                {
                    title: 'An - und Entkuppeln evtl manuell',
                    type: ListItemType.MINUS,
                    tab: 1,
                },
            ],
    },
    {
        simulationCategory: SimulationCategory.AGV_TYPE,
        header: agvTypeHeader,
        footer: agvTypeFooter,
        cameraConfig: navigationSystemsCameraConfig,
        items:
            [
                {
                    title: 'Robotic Forklift',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
                },
                {
                    title: 'auch als Autonomous Forklift',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'viele verschiedene Ausführungen',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'Pallet Jack (bis zu 3t)',
                    type: ListItemType.ITEM,
                    tab: 2,
                },
                {
                    title: 'Forklift Truck (bis zu 4t, 8m Hub)',
                    type: ListItemType.ITEM,
                    tab: 2,
                },
                {
                    title: 'Narrow Aisle AGV (bis zu 11m Hub bei 2m Breite)',
                    type: ListItemType.ITEM,
                    tab: 2,
                },
                {
                    title: 'sehr flexibel',
                    type: ListItemType.PLUS,
                    tab: 1,
                },
                {
                    title: 'schnell und präzise',
                    type: ListItemType.PLUS,
                    tab: 1,
                },
                {
                    title: 'gute Navigationssysteme',
                    type: ListItemType.PLUS,
                    tab: 1,
                },
                {
                    title: 'teuer (bis zu 200.000 $)',
                    type: ListItemType.MINUS,
                    tab: 1,
                },
            ],
    },
    // {
    //     simulationCategory: SimulationCategory.AGV_TYPE,
    //     header: agvTypeHeader,
    //     footer: agvTypeFooter,
    //     cameraConfig: navigationSystemsCameraConfig,
    //     items:
    //         [
    //             {
    //                 title: 'Unit Load AGVs',
    //                 type: ListItemType.NONE,
    //                 tab: 0,
    //                 itemProps: baseItemProps,
    //             },
    //             {
    //                 title: 'Plattform mit bspw. Rollen',
    //                 type: ListItemType.ANSWER,
    //                 tab: 1,
    //             },
    //             {
    //                 title: 'kann ein bis mehrere Ladungen automatisch aufnehmen',
    //                 type: ListItemType.ANSWER,
    //                 tab: 1,
    //             },
    //             {
    //                 title: 'bspw. automatisch bei Produktionslinien Zwischentransporte',
    //                 type: ListItemType.ANSWER,
    //                 tab: 1,
    //             },
    //             {
    //                 title: 'sehr flexibel',
    //                 type: ListItemType.PLUS,
    //                 tab: 1,
    //             },
    //             {
    //                 title: 'nicht so schwere Lasten',
    //                 type: ListItemType.MINUS,
    //                 tab: 1,
    //             },
    //             {
    //                 title: 'nur in 2 Dimensionen',
    //                 type: ListItemType.MINUS,
    //                 tab: 1,
    //             },
    //         ],
    // },
    // {
    //     simulationCategory: SimulationCategory.NONE,
    //     header: navigationSystemsHeader,
    //     footer: navigationSystemsFooter,
    //     cameraConfig: navigationSystemsCameraConfig,
    //     items:
    //         [
    //             emptyStartListItem(),
    //         ],
    // },
    {
        simulationCategory: SimulationCategory.NAVIGATION,
        header: navigationSystemsHeader,
        footer: navigationSystemsFooter,
        cameraConfig: navigationSystemsCameraConfig,
        items:
            [
                emptyStartListItem(),
                {
                    title: 'Natural Navigation',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
                    //activateSimulationItems: simulationWorldNavigationSystemsBaseItems,
                },
                {
                    title: 'häufig durch SLAM Algorithmen',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'Sensoren: Kamera, LiDAR...',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'globale Routenplanung um Ziel zu erreichen',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'lokale Routenplanung um Hindernissen auszuweichen',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'einfache Installation',
                    type: ListItemType.PLUS,
                    tab: 1,
                },
                {
                    title: 'keine externen Hilfsmittel nötig',
                    type: ListItemType.ANSWER,
                    tab: 2,
                },
                {
                    title: 'einfach zu verändern',
                    type: ListItemType.PLUS,
                    tab: 1,
                },
                {
                    title: 'evtl. Orientierungsprobleme',
                    type: ListItemType.MINUS,
                    tab: 1,
                },
                {
                    title: 'falls Umgebung keine eindeutigen Merkmale aufweist',
                    type: ListItemType.ANSWER,
                    tab: 2,
                },
                {
                    title: 'nicht so genau',
                    type: ListItemType.MINUS,
                    tab: 1,
                },
            ],
    },
    {
        simulationCategory: SimulationCategory.NAVIGATION,
        header: navigationSystemsHeader,
        footer: navigationSystemsFooter,
        cameraConfig: navigationSystemsCameraConfig,
        items:
            [
                {
                    title: 'Magnetic Spots Navigation',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
                },
                {
                    title: 'alle 25 - 50 cm kleine Magnete im Boden, die so Fahrlinien bilden',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'Sensoren: Hall-Effect (Magnetfelddichte), Gyro...',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'folgen Pfad anhand der Magneten',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'bis auf 2,5mm genau',
                    type: ListItemType.PLUS,
                    tab: 1,
                },
                {
                    title: 'keine Spur auf dem Boden, da versiegelt',
                    type: ListItemType.PLUS,
                    tab: 1,
                },
                {
                    title: 'es müssen Löcher gebohrt werden',
                    type: ListItemType.MINUS,
                    tab: 1,
                },
                {
                    title: 'nicht besonders flexibel',
                    type: ListItemType.MINUS,
                    tab: 1,
                },
            ],
    },
    {
        simulationCategory: SimulationCategory.NAVIGATION,
        header: navigationSystemsHeader,
        footer: navigationSystemsFooter,
        cameraConfig: navigationSystemsCameraConfig,
        items:
            [
                {
                    title: 'Magnetic Tape Navigation',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
                },
                {
                    title: 'anstatt einzelnen Magneten wird ein Magnetband (ca. 5cm x 1mm) auf den Boden geklebt',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'zusätzlich werden Tags auf dem boden Plaziert',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'bis auf 2mm genau',
                    type: ListItemType.PLUS,
                    tab: 1,
                },
                {
                    title: 'einfach zu installieren und modifizieren',
                    type: ListItemType.PLUS,
                    tab: 1,
                },
                {
                    title: 'zuverlässig und nicht durch Umgebung beinflussbar',
                    type: ListItemType.PLUS,
                    tab: 1,
                },
                {
                    title: 'Kosten',
                    type: ListItemType.MINUS,
                    tab: 1,
                },
                {
                    title: 'Magnetband muss ggf. erneuert werden',
                    type: ListItemType.MINUS,
                    tab: 1,
                },
                {
                    title: 'kann abgerieben und beschädigt werden',
                    type: ListItemType.ANSWER,
                    tab: 2,
                },
            ],
    },
    {
        simulationCategory: SimulationCategory.NAVIGATION,
        header: navigationSystemsHeader,
        footer: navigationSystemsFooter,
        cameraConfig: navigationSystemsCameraConfig,
        items:
            [
                {
                    title: 'Inductive Wire Navigation',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
                },
                {
                    title: 'ähnliche Funktionsweise wie Magnetic Tape',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'Kabel im Boden',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'langlebig',
                    type: ListItemType.PLUS,
                    tab: 1,
                },
                {
                    title: 'genauer als Magnetic Tape',
                    type: ListItemType.PLUS,
                    tab: 1,
                },
                {
                    title: 'aufwändige Installation',
                    type: ListItemType.MINUS,
                    tab: 1,
                },
                {
                    title: 'sehr unflexibel',
                    type: ListItemType.MINUS,
                    tab: 1,
                },
                {
                    title: 'Kosten',
                    type: ListItemType.MINUS,
                    tab: 1,
                },
            ],
    },
    {
        simulationCategory: SimulationCategory.NAVIGATION,
        header: navigationSystemsHeader,
        footer: navigationSystemsFooter,
        cameraConfig: navigationSystemsCameraConfig,
        items:
            [
                {
                    title: 'Laser Guided Navigation',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
                },
                {
                    title: 'Navigation Laser oben auf dem AGV',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'Viele Reflektoren auf Höhe des Lasers',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'durch 360° Laser werden Positionen der Reflektoren relativ zum AGV ermittelt und auf absolute Karte gemapped',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'bis auf 5mm genau',
                    type: ListItemType.PLUS,
                    tab: 1,
                },
                {
                    title: 'kein großer Störfaktor, da Reflektoren auf ca. 2.5 m Höhe installiert werden',
                    type: ListItemType.PLUS,
                    tab: 1,
                },
                {
                    title: 'mehrere virtuelle Routen an gleichem physischen Platz möglich',
                    type: ListItemType.PLUS,
                    tab: 1,
                },
                {
                    title: 'Änderungen der Pfade meist nur durch Betreiber möglich',
                    type: ListItemType.MINUS,
                    tab: 1,
                },
                {
                    title: 'Nur bei bestimmter AGV-Art möglich',
                    type: ListItemType.MINUS,
                    tab: 1,
                },
            ],
    },
    {
        simulationCategory: SimulationCategory.NAVIGATION,
        header: navigationSystemsHeader,
        footer: navigationSystemsFooter,
        cameraConfig: navigationSystemsCameraConfig,
        items:
            [
                {
                    title: 'Fazit',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
                },
                {
                    title: 'unterschiedliche Verfahren je nach Anforderung und Budget',
                    type: ListItemType.ITEM,
                    tab: 1,
                },
                {
                    title: 'auch Kombination von zwei oder mehr Verfahren möglich',
                    type: ListItemType.ITEM,
                    tab: 1,
                },
                {
                    title: 'Natural Navigation & Magnetic Spot Navigation',
                    type: ListItemType.ANSWER,
                    tab: 2,
                },
                {
                    title: 'kombiniert Vorteile',
                    type: ListItemType.PLUS,
                    tab: 2,
                },
                {
                    title: 'Ausfallsicherheit',
                    type: ListItemType.PLUS,
                    tab: 2,
                },
                {
                    title: 'Kosten',
                    type: ListItemType.MINUS,
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
                    title: 'Welche Spurführung oder Navigation ist am besten geeignet?',
                    type: ListItemType.ITEM,
                    tab: 0,
                    itemProps: baseItemProps,
                },
                {
                    title: 'LaserNavigation',
                    type: ListItemType.ANSWER,
                    tab: 1,
                    activateSimulationItems: ['ReflectorStations'],
                },
                {
                    title: 'zuverlässig',
                    type: ListItemType.ITEM,
                    tab: 2,
                },
                {
                    title: 'flexible (virtuelle) Routen',
                    type: ListItemType.ITEM,
                    tab: 2,
                    activateSimulationItems: ['VirtualRoutes'],
                },
                {
                    title: 'InductiveWire an Stationen',
                    type: ListItemType.ANSWER,
                    tab: 1,
                    activateSimulationItems: ['InductiveWire'],
                },
                {
                    title: 'Redundanz an kritischen Stellen',
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
                    title: 'Rücksichtnahme auf Mitarbeiter',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'da indoor, keine besonderen Umweltbedingungen',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
            ],
    },
    {
        simulationCategory: SimulationCategory.BASE,
        header: agvSelectHeader,
        footer: undefined,
        items:
            [
                emptyStartListItem(),
                {
                    title: 'Robotic Forklift',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
                    activateSimulationItems: ['AGV'],
                },
                {
                    title: 'Schnell & zuverlässig',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
                {
                    title: 'perfekt geeignet um Paletten von Stationen zum Lager zu transportieren',
                    type: ListItemType.ANSWER,
                    tab: 1,
                },
            ],
    },
    {
        simulationCategory: SimulationCategory.NONE,
        header: introductionControllingHeader,
        footer: undefined,
        background: {
            image: '/controlImages/decisionFramework.png',
            title: `The decision framework for design and implementation of AGV systems ${Sources.get(SourceName.CONTR)?.title}`,
            variant: 'contain'
        },
        items:
            [
                emptyStartListItem({background: {image: 'none', title: ''}}),
                {
                    title: 'Decision Framework:',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
                },
                {
                    title: 'System data and requirements',
                    type: ListItemType.CHECK,
                    tab: 1,
                    itemProps: baseItemProps,
                },
                {
                    title: 'Guide-path design',
                    type: ListItemType.CHECK,
                    tab: 1,
                    itemProps: baseItemProps,
                },
                {
                    title: 'Vehicle requirement',
                    type: ListItemType.CHECK,
                    tab: 1,
                    itemProps: baseItemProps,
                },
                {
                    title: 'Battery management',
                    type: ListItemType.CHECK,
                    tab: 1,
                    itemProps: baseItemProps,
                },
                {
                    title: 'Vehicle scheduling',
                    type: ListItemType.CLOSE,
                    tab: 1,
                    itemProps: baseItemProps,
                },
                {
                    title: 'Vehicle parking policy',
                    type: ListItemType.CHECK,
                    tab: 1,
                    itemProps: baseItemProps,
                },
                {
                    title: 'Vehicle routing',
                    type: ListItemType.CLOSE,
                    tab: 1,
                    itemProps: baseItemProps,
                },
                {
                    title: 'Conflict resolution',
                    type: ListItemType.CLOSE,
                    tab: 1,
                    itemProps: baseItemProps,
                },
            ],
    },
    {
        simulationCategory: SimulationCategory.BASE,
        header: schedulingHeader,
        footer: controllingFooter,
        items:
            [
                emptyStartListItem(),
            ],
    },
    {
        simulationCategory: SimulationCategory.BASE,
        header: routingHeader,
        footer: controllingFooter,
        items:
            [
                emptyStartListItem(),
            ],
    },
    {
        simulationCategory: SimulationCategory.BASE,
        header: conflictResolutionHeader,
        footer: controllingFooter,
        items:
            [
                emptyStartListItem(),
            ],
    },
    {
        simulationCategory: SimulationCategory.BASE,
        header: introductionControllingHeader,
        footer: rosControllingFooter,
        items:
            [
                {
                    title: `Dezentrales Leitsystem mit ROS ${Sources.get(SourceName.AGV_R)?.title}`,
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
                },
                {
                    title: '...',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
                },
            ],
    },
    {
        simulationCategory: SimulationCategory.BASE,
        header: simulationHeader,
        footer: undefined,
        items:
            [
                emptyStartListItem(),
                {
                    title: '...',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
                },
            ],
    },
    {
        simulationCategory: SimulationCategory.NONE,
        header: sourcesHeader,
        showAllItems: true,
        items: getSourcesList(),
        fontVariant: 'subtitle2',
    },
];