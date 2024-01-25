import React from 'react';
import {IAgv} from "./Agv";
import {rotateOffset2D} from "../../utils/util";
import {
    AGV_PRODUCT_COLOR,
    AGV_PRODUCT_HEIGHT,
    AGV_PRODUCT_LENGTH,
    AGV_PRODUCT_OFFSET_X,
    AGV_PRODUCT_OFFSET_Y,
    AGV_PRODUCT_OFFSET_Z,
    AGV_PRODUCT_WIDTH
} from "../../config";
import {ThreeBox} from "../ThreeBaseComponents";


function AgvProduct(props: IAgv) {
    const {position, rotation, hasProduct} = props;
    if (!hasProduct) {
        return null;
    }

    const rotatedPosition = rotateOffset2D(position, [AGV_PRODUCT_OFFSET_X, AGV_PRODUCT_OFFSET_Y], rotation);

    return (
        <ThreeBox
            position={[rotatedPosition[0], AGV_PRODUCT_OFFSET_Z, rotatedPosition[1]]}
            rotation={[0, rotation, 0]}
            size={[AGV_PRODUCT_LENGTH, AGV_PRODUCT_HEIGHT, AGV_PRODUCT_WIDTH]}
            color={AGV_PRODUCT_COLOR}
        />
    );
}

export default AgvProduct;