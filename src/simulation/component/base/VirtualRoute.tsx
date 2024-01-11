import React from 'react';
import {ThreeArr3, ThreeLine} from "../ThreeBaseComponents";
import {LINE_POS_Y, LINE_WIDTH, VIRTUAL_ROUTE_COLOR} from "../../config";
import {ILineSegment} from "../../store/slice/baseSlice";

function VirtualRoute(props: ILineSegment) {
    const {start, end} = props;

    const points: ThreeArr3[] = [
        [start[0], LINE_POS_Y, start[1]],
        [end[0], LINE_POS_Y, end[1]],
    ]

    return (
        <ThreeLine points={points} color={VIRTUAL_ROUTE_COLOR} width={LINE_WIDTH}/>
    );
}

export default VirtualRoute;