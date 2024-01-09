import {emptyStartListItem, MultiListItem} from "../component/slideElement/MultiList";
import {
    baseSetupHeader,
    ekQuestionHeader,
    generalStepsHeader,
    introductionHeader,
    navigationCategoryHeader,
    navigationSystemsHeader
} from "../component/header/ListHeaders";
import {PRODUCTION_STATIONS, SIM_BASE_LENGTH, SIM_BASE_WIDTH} from "../simulation/config";
import {ListItemType} from "../component/slideElement/BulletList";
import {
    ekQuestionFooter,
    generalStepsFooter,
    navigationCategoryFooter,
    navigationSystemsFooter
} from "../component/footer/ListFooters";
import {baseItemProps, navigationVariantsCameraConfig} from "./listProps";
import {SimulationCategory} from "../simulation/SimulationWorld";

export const listItemsList: MultiListItem[] = [
    {
        simulationCategory: SimulationCategory.NONE,
        header: introductionHeader,
        footer: undefined,
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
            },
            {
                title: 'Allgemeines Vorgehen',
                type: ListItemType.ANSWER,
            },
            {
                title: 'Ausgangsszenario',
                type: ListItemType.ANSWER,
            },
            {
                title: 'Kernfragen zur Realisierung',
                type: ListItemType.ANSWER,
            },
            {
                title: 'Fahrzeugtypen',
                type: ListItemType.ANSWER,
            },
            {
                title: 'Navigationskategorien & Systeme',
                type: ListItemType.ANSWER,
            },
            {
                title: 'Controlling ??',
                type: ListItemType.ANSWER,
            },
            {
                title: '...',
                type: ListItemType.ANSWER,
            },
            {
                title: 'Laufende Simulation',
                type: ListItemType.ANSWER,
            },
        ]
    },
    {
        simulationCategory: SimulationCategory.NONE,
        header: generalStepsHeader,
        footer: generalStepsFooter,
        items: [
            emptyStartListItem(),
        ]
    },
    {
        simulationCategory: SimulationCategory.NONE,
        header: generalStepsHeader,
        footer: generalStepsFooter,
        containerProps: {gap: '20px'},
        items: [
            {
                title: '1. Planning',
                type: ListItemType.NONE,
            },
            {
                title: '2. Simulation',
                type: ListItemType.NONE,
            },
            {
                title: '3. Realization',
                type: ListItemType.NONE,
            },
            {
                title: '4. Service and Support',
                type: ListItemType.NONE,
            },
        ]
    },
    {
        simulationCategory: SimulationCategory.NONE,
        header: baseSetupHeader,
        footer: undefined,
        items:
            [
                emptyStartListItem(),
            ],
    },
    {
        simulationCategory: SimulationCategory.BASE,
        header: baseSetupHeader,
        footer: undefined,
        containerProps: {gap: '20px'},
        items: [
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
        simulationCategory: SimulationCategory.NONE,
        header: ekQuestionHeader,
        footer: ekQuestionFooter,
        items:
            [
                emptyStartListItem(),
            ],
    },
    {
        simulationCategory: SimulationCategory.BASE,
        header: ekQuestionHeader,
        footer: ekQuestionFooter,
        items:
            [
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
        simulationCategory: SimulationCategory.NONE,
        header: navigationCategoryHeader,
        footer: navigationCategoryFooter,
        cameraConfig: navigationVariantsCameraConfig,
        items:
            [
                emptyStartListItem(),
            ],
    },
    {
        simulationCategory: SimulationCategory.NAVIGATION,
        header: navigationCategoryHeader,
        footer: navigationCategoryFooter,
        cameraConfig: navigationVariantsCameraConfig,
        items:
            [
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
        simulationCategory: SimulationCategory.NONE,
        header: navigationSystemsHeader,
        footer: navigationSystemsFooter,
        cameraConfig: navigationVariantsCameraConfig,
        items:
            [
                emptyStartListItem(),
            ],
    },
    {
        simulationCategory: SimulationCategory.NAVIGATION,
        header: navigationSystemsHeader,
        footer: navigationSystemsFooter,
        cameraConfig: navigationVariantsCameraConfig,
        items:
            [
                {
                    title: 'Natural Navigation',
                    type: ListItemType.NONE,
                    tab: 0,
                    itemProps: baseItemProps,
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
        cameraConfig: navigationVariantsCameraConfig,
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
        cameraConfig: navigationVariantsCameraConfig,
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
        cameraConfig: navigationVariantsCameraConfig,
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
        cameraConfig: navigationVariantsCameraConfig,
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
        cameraConfig: navigationVariantsCameraConfig,
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