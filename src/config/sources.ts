import {ListItem, ListItemType} from "../component/slideElement/BulletList";
import {baseItemProps} from "./listProps";

export enum SourceName {
    JUNG,
    EKR,
    AGN_NAV,
    AGN_AGV,
    CONTR,
    AGV_R,

}

const sourcesData: SourceDataItem[] = [
    {
        name: SourceName.EKR,
        title: 'Ek-Robotics',
        text: 'https://ek-robotics.com/de/technologie/fts-fahrerlose-transportsysteme'
    },
    {
        name: SourceName.AGN_AGV,
        title: 'agv-network',
        text: 'https://https://www.agvnetwork.com/types-of-automated-guided-vehicles'
    },
    {
        name: SourceName.AGN_NAV,
        title: 'agv-network',
        text: 'https://https://www.agvnetwork.com/types-of-navigation-systems-automated-guided-vehicles'
    },
    {
        name: SourceName.CONTR,
        title: 'T.Le-Anh_2004',
        text: 'Tuan, Le-Anh and de Koster, M.B.M. René. (2004).\nA Review of Design and Control of Automated Guided Vehicle Systems.\nAvailable at SSRN: https://ssrn.com/abstract=594969'
    },
    {
        name: SourceName.AGV_R,
        title: 'Walenta_2017',
        text: 'Walenta, Robert & Schellekens, Twan & Ferrein, Alexander & Schiffer, Stefan. (2017).\nA decentralised system approach for controlling AGVs with ROS.\nAFRCON.2017.8095693 pages: 1436-1441. '
    },
    {
        name: SourceName.JUNG,
        title: 'Jungheinrich',
        text: 'https://www.jungheinrich.com.sg/systems/driverless-transport-systems/automated-guided-vehicles'
    },
]

interface SourceDataItem {
    name: SourceName,
    title: string,
    text: string,
}

export interface Source {
    id: number,
    title: string,
    text: string,
}

export const Sources = (() => {
    let index = 1;
    const sources: Map<SourceName, Source> = new Map();

    const addSource = (name: SourceName, title: string, text: string) => {
        const newSource: Source = {
            id: index,
            text: `[${index}] ${text}`,
            title: `[${index}]`,
        }
        sources.set(name, newSource);
        index += 1;
    }

    sourcesData.forEach((item) => {
        addSource(
            item.name,
            item.title,
            item.text,
        )
    })


    return sources;
})();

export const getSourcesList: () => ListItem[] = () => {
    return sourcesData.map((data) => Sources.get(data.name))
        .sort((a, b) => (a?.id ?? 0) - (b?.id ?? 0))
        .map((item) => ({
            title: item?.text ?? "",
            type: ListItemType.NONE,
            tab: 0,
            itemProps: baseItemProps,
        }))
}