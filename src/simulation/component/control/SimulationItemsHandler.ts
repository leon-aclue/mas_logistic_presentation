import {MultiListItem} from "../../../component/slideElement/MultiList";
import {SimulationWorldItem} from "../../SimulationWorld";

interface SimulationItemsHandlerProps {
    listItemsList: MultiListItem[],
    page: number,
    step: number,
}

function SimulationItemsHandler(props: SimulationItemsHandlerProps): SimulationWorldItem[] {
    const {listItemsList, page, step} = props;
    const category = listItemsList[page].simulationCategory;

    const flatItems = listItemsList
        .slice(0, page)
        .filter((item) => item.simulationCategory === category)
        .flatMap((item) => item.items)
        .concat(listItemsList[page].items.slice(0, step + 1));

    let items: Set<SimulationWorldItem> = new Set<SimulationWorldItem>();
    flatItems.forEach((listItem) => {
        listItem.activateSimulationItems?.forEach((item) => items.add(item));
        listItem.deactivateSimulationItems?.forEach((item) => items.delete(item));
    })

    return Array.from(items.values());
}

export default SimulationItemsHandler;