import {MultiListItem} from "../../../component/slideElement/MultiList";
import {SimulationWorldItem} from "../../SimulationWorld";

interface SimulationItemsHandlerProps {
    listItemsList: MultiListItem[],
    step: number,
}

function SimulationItemsHandler(props: SimulationItemsHandlerProps): SimulationWorldItem[] {
    const {listItemsList, step} = props;
    const flatItems = listItemsList.flatMap((item) => item.items).slice(0, step + 1);

    let items: SimulationWorldItem[] = [];
    flatItems.forEach((listItem) => {
        items.push(...listItem.activateSimulationItems ?? []);
        items = items.filter((item) => !listItem.deactivateSimulationItems?.includes(item));
    })

    return items;
}

export default SimulationItemsHandler;