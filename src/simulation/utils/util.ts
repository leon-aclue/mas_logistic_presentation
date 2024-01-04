import {ThreeArr2} from "../component/BaseComponents";

export const rotateAround2D = (fixedPoint: ThreeArr2, rotationPoint: ThreeArr2, rand: number): ThreeArr2 => {
    const offset = dif2D(fixedPoint, rotationPoint);

    return rotateOffset2D(fixedPoint, offset, rand);
};

export const rotateOffset2D = (fixedPoint: ThreeArr2, offset:ThreeArr2, rand: number): ThreeArr2 => {
    const [difX, difY] = offset;

    const c = Math.cos(-rand);
    const s = Math.sin(-rand);

    return [
        fixedPoint[0] + (difX * c) - (difY * s),
        fixedPoint[1] + (difY * c) + (difX * s)
    ];
}

export const dif2D = (from: ThreeArr2, to: ThreeArr2): ThreeArr2 => {
    return [to[0] - from[0], to[1] - from[1]];
}
