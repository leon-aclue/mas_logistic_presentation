import {MultiListItem} from "../../../component/slideElement/MultiList";
import {SimulationWorldItem} from "../../SimulationWorld";

interface SimulationItemsHandlerProps {
    listItemsList: MultiListItem[],
    page: number,
    step: number,
}

function SimulationItemsHandler(props: SimulationItemsHandlerProps): SimulationWorldItem[] {
    const {listItemsList, page, step} = props;
    const flatItems = listItemsList.slice(0, page).flatMap((item) => item.items)
        .concat(listItemsList[page].items.slice(0, step + 1));

    let items: SimulationWorldItem[] = [];
    flatItems.forEach((listItem) => {
        items.push(...listItem.activateSimulationItems ?? []);
        items = items.filter((item) => !listItem.deactivateSimulationItems?.includes(item));
    })

    return items;
}

export default SimulationItemsHandler;