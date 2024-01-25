import {ROT_E, ROT_N, ROT_S, ROT_W} from './config';
import {ThreeArr2} from './component/ThreeBaseComponents';

export type TNeighbour = {
    nodeId: string,
    rotation: number,
}

export type TNode = {
    id: string,
    neighbours: TNeighbour[],
    isStation?: boolean,
    hasProduct?: boolean,
}

export interface INodes {
    nodes: Map<string, TNode>;
    productionNodes: Map<string, TNode>;
    storageNodes: Map<string, TNode>;
    chargingNodes: Map<string, TNode>;
    decisionsMap: Map<string, Map<string, string>>;
}

export const allNodes: INodes = (() => {

    const nodes: Map<string, TNode> = new Map<string, TNode>();
    const productionNodes: Map<string, TNode> = new Map<string, TNode>();
    const storageNodes: Map<string, TNode> = new Map<string, TNode>();
    const chargingNodes: Map<string, TNode> = new Map<string, TNode>();

    const decisionsMap: Map<string, Map<string, string>> = new Map<string, Map<string, string>>();

// production nodes
    const pn_16_040: TNode = {id: '16-040', neighbours: [], isStation: true, hasProduct: false};
    const pn_16_050: TNode = {id: '16-050', neighbours: [], isStation: true, hasProduct: false};
    const pn_16_060: TNode = {id: '16-060', neighbours: [], isStation: true, hasProduct: false};
    const pn_16_070: TNode = {id: '16-070', neighbours: [], isStation: true, hasProduct: false};
    const pn_16_080: TNode = {id: '16-080', neighbours: [], isStation: true, hasProduct: false};
    const pn_16_090: TNode = {id: '16-090', neighbours: [], isStation: true, hasProduct: false};
    const pn_16_100: TNode = {id: '16-100', neighbours: [], isStation: true, hasProduct: false};
    const pn_16_110: TNode = {id: '16-110', neighbours: [], isStation: true, hasProduct: false};
    const pn_16_120: TNode = {id: '16-120', neighbours: [], isStation: true, hasProduct: false};

    const pn_24_050: TNode = {id: '24-050', neighbours: [], isStation: true, hasProduct: false};
    const pn_24_060: TNode = {id: '24-060', neighbours: [], isStation: true, hasProduct: false};
    const pn_24_070: TNode = {id: '24-070', neighbours: [], isStation: true, hasProduct: false};
    const pn_24_090: TNode = {id: '24-090', neighbours: [], isStation: true, hasProduct: false};
    const pn_24_100: TNode = {id: '24-100', neighbours: [], isStation: true, hasProduct: false};
    const pn_24_110: TNode = {id: '24-110', neighbours: [], isStation: true, hasProduct: false};

    const pn_46_050: TNode = {id: '46-050', neighbours: [], isStation: true, hasProduct: false};
    const pn_46_060: TNode = {id: '46-060', neighbours: [], isStation: true, hasProduct: false};
    const pn_46_070: TNode = {id: '46-070', neighbours: [], isStation: true, hasProduct: false};
    const pn_46_090: TNode = {id: '46-090', neighbours: [], isStation: true, hasProduct: false};
    const pn_46_100: TNode = {id: '46-100', neighbours: [], isStation: true, hasProduct: false};
    const pn_46_110: TNode = {id: '46-110', neighbours: [], isStation: true, hasProduct: false};

    const pn_54_050: TNode = {id: '54-050', neighbours: [], isStation: true, hasProduct: false};
    const pn_54_060: TNode = {id: '54-060', neighbours: [], isStation: true, hasProduct: false};
    const pn_54_070: TNode = {id: '54-070', neighbours: [], isStation: true, hasProduct: false};
    const pn_54_090: TNode = {id: '54-090', neighbours: [], isStation: true, hasProduct: false};
    const pn_54_100: TNode = {id: '54-100', neighbours: [], isStation: true, hasProduct: false};
    const pn_54_110: TNode = {id: '54-110', neighbours: [], isStation: true, hasProduct: false};
    const pn_54_120: TNode = {id: '54-120', neighbours: [], isStation: true, hasProduct: false};

    const pn_76_050: TNode = {id: '76-050', neighbours: [], isStation: true, hasProduct: false};
    const pn_76_060: TNode = {id: '76-060', neighbours: [], isStation: true, hasProduct: false};
    const pn_76_070: TNode = {id: '76-070', neighbours: [], isStation: true, hasProduct: false};

    const pn_84_040: TNode = {id: '84-040', neighbours: [], isStation: true, hasProduct: false};
    const pn_84_050: TNode = {id: '84-050', neighbours: [], isStation: true, hasProduct: false};
    const pn_84_060: TNode = {id: '84-060', neighbours: [], isStation: true, hasProduct: false};
    const pn_84_070: TNode = {id: '84-070', neighbours: [], isStation: true, hasProduct: false};
    const pn_84_080: TNode = {id: '84-080', neighbours: [], isStation: true, hasProduct: false};

// storage nodes
    const sn_30_019: TNode = {id: '30-019', neighbours: [], isStation: true, hasProduct: false};
    const sn_35_019: TNode = {id: '35-019', neighbours: [], isStation: true, hasProduct: false};
    const sn_40_019: TNode = {id: '40-019', neighbours: [], isStation: true, hasProduct: false};
    const sn_45_019: TNode = {id: '45-019', neighbours: [], isStation: true, hasProduct: false};
    const sn_50_019: TNode = {id: '50-019', neighbours: [], isStation: true, hasProduct: false};

// charging nodes
    const cn_60_019: TNode = {id: '60-019', neighbours: [], isStation: true, hasProduct: false};
    const cn_65_019: TNode = {id: '65-019', neighbours: [], isStation: true, hasProduct: false};
    const cn_70_019: TNode = {id: '70-019', neighbours: [], isStation: true, hasProduct: false};
    const cn_75_019: TNode = {id: '75-019', neighbours: [], isStation: true, hasProduct: false};
    const cn_80_019: TNode = {id: '80-019', neighbours: [], isStation: true, hasProduct: false};

// nodes near production
    const n_20_040: TNode = {id: '20-040', neighbours: [], isStation: false, hasProduct: false};
    const n_20_050: TNode = {id: '20-050', neighbours: [], isStation: false, hasProduct: false};
    const n_20_060: TNode = {id: '20-060', neighbours: [], isStation: false, hasProduct: false};
    const n_20_070: TNode = {id: '20-070', neighbours: [], isStation: false, hasProduct: false};
    const n_20_080: TNode = {id: '20-080', neighbours: [], isStation: false, hasProduct: false};
    const n_20_090: TNode = {id: '20-090', neighbours: [], isStation: false, hasProduct: false};
    const n_20_100: TNode = {id: '20-100', neighbours: [], isStation: false, hasProduct: false};
    const n_20_110: TNode = {id: '20-110', neighbours: [], isStation: false, hasProduct: false};
    const n_20_120: TNode = {id: '20-120', neighbours: [], isStation: false, hasProduct: false};

    const n_50_050: TNode = {id: '50-050', neighbours: [], isStation: false, hasProduct: false};
    const n_50_060: TNode = {id: '50-060', neighbours: [], isStation: false, hasProduct: false};
    const n_50_070: TNode = {id: '50-070', neighbours: [], isStation: false, hasProduct: false};
    const n_50_090: TNode = {id: '50-090', neighbours: [], isStation: false, hasProduct: false};
    const n_50_100: TNode = {id: '50-100', neighbours: [], isStation: false, hasProduct: false};
    const n_50_110: TNode = {id: '50-110', neighbours: [], isStation: false, hasProduct: false};
    const n_50_120: TNode = {id: '50-120', neighbours: [], isStation: false, hasProduct: false};

    const n_80_040: TNode = {id: '80-040', neighbours: [], isStation: false, hasProduct: false};
    const n_80_050: TNode = {id: '80-050', neighbours: [], isStation: false, hasProduct: false};
    const n_80_060: TNode = {id: '80-060', neighbours: [], isStation: false, hasProduct: false};
    const n_80_070: TNode = {id: '80-070', neighbours: [], isStation: false, hasProduct: false};
    const n_80_080: TNode = {id: '80-080', neighbours: [], isStation: false, hasProduct: false};

// nodes near storage
    const n_30_023: TNode = {id: '30-023', neighbours: [], isStation: false, hasProduct: false};
    const n_35_023: TNode = {id: '35-023', neighbours: [], isStation: false, hasProduct: false};
    const n_40_023: TNode = {id: '40-023', neighbours: [], isStation: false, hasProduct: false};
    const n_45_023: TNode = {id: '45-023', neighbours: [], isStation: false, hasProduct: false};
    const n_50_023: TNode = {id: '50-023', neighbours: [], isStation: false, hasProduct: false};

// nodes near charging
    const n_60_023: TNode = {id: '60-023', neighbours: [], isStation: false, hasProduct: false};
    const n_65_023: TNode = {id: '65-023', neighbours: [], isStation: false, hasProduct: false};
    const n_70_023: TNode = {id: '70-023', neighbours: [], isStation: false, hasProduct: false};
    const n_75_023: TNode = {id: '75-023', neighbours: [], isStation: false, hasProduct: false};
    const n_80_023: TNode = {id: '80-023', neighbours: [], isStation: false, hasProduct: false};

// other nodes
    const n_20_023: TNode = {id: '20-023', neighbours: [], isStation: false, hasProduct: false};
    const n_20_027: TNode = {id: '20-027', neighbours: [], isStation: false, hasProduct: false};
    const n_20_084: TNode = {id: '20-084', neighbours: [], isStation: false, hasProduct: false};
    const n_20_122: TNode = {id: '20-122', neighbours: [], isStation: false, hasProduct: false};

    const n_50_027: TNode = {id: '50-027', neighbours: [], isStation: false, hasProduct: false};
    const n_50_084: TNode = {id: '50-084', neighbours: [], isStation: false, hasProduct: false};
    const n_50_122: TNode = {id: '50-122', neighbours: [], isStation: false, hasProduct: false};

    const n_80_027: TNode = {id: '80-027', neighbours: [], isStation: false, hasProduct: false};
    const n_80_084: TNode = {id: '80-084', neighbours: [], isStation: false, hasProduct: false};

// init neighbours
// -> storage
    n_30_023.neighbours.push({nodeId: n_35_023.id, rotation: ROT_N}, {nodeId: sn_30_019.id, rotation: ROT_E});
    sn_30_019.neighbours.push({nodeId: n_30_023.id, rotation: ROT_E});
    n_35_023.neighbours.push({nodeId: n_40_023.id, rotation: ROT_N}, {nodeId: sn_35_019.id, rotation: ROT_E});
    sn_35_019.neighbours.push({nodeId: n_35_023.id, rotation: ROT_E});
    n_40_023.neighbours.push({nodeId: n_45_023.id, rotation: ROT_N}, {nodeId: sn_40_019.id, rotation: ROT_E});
    sn_40_019.neighbours.push({nodeId: n_40_023.id, rotation: ROT_E});
    n_45_023.neighbours.push({nodeId: n_50_023.id, rotation: ROT_N}, {nodeId: sn_45_019.id, rotation: ROT_E});
    sn_45_019.neighbours.push({nodeId: n_45_023.id, rotation: ROT_E});
    n_50_023.neighbours.push({nodeId: n_60_023.id, rotation: ROT_N}, {nodeId: n_50_027.id, rotation: ROT_E}, {
        nodeId: sn_50_019.id,
        rotation: ROT_E
    });
    sn_50_019.neighbours.push({nodeId: n_50_023.id, rotation: ROT_E});

// -> charging
    n_60_023.neighbours.push({nodeId: n_65_023.id, rotation: ROT_N}, {nodeId: cn_60_019.id, rotation: ROT_E});
    cn_60_019.neighbours.push({nodeId: n_60_023.id, rotation: ROT_E});
    n_65_023.neighbours.push({nodeId: n_70_023.id, rotation: ROT_N}, {nodeId: cn_65_019.id, rotation: ROT_E});
    cn_65_019.neighbours.push({nodeId: n_65_023.id, rotation: ROT_E});
    n_70_023.neighbours.push({nodeId: n_75_023.id, rotation: ROT_N}, {nodeId: cn_70_019.id, rotation: ROT_E});
    cn_70_019.neighbours.push({nodeId: n_70_023.id, rotation: ROT_E});
    n_75_023.neighbours.push({nodeId: n_80_023.id, rotation: ROT_N}, {nodeId: cn_75_019.id, rotation: ROT_E});
    cn_75_019.neighbours.push({nodeId: n_75_023.id, rotation: ROT_E});
    n_80_023.neighbours.push({nodeId: n_80_027.id, rotation: ROT_E}, {nodeId: cn_80_019.id, rotation: ROT_E});
    cn_80_019.neighbours.push({nodeId: n_80_023.id, rotation: ROT_E});

// -> back line
    n_80_027.neighbours.push({nodeId: n_80_040.id, rotation: ROT_E}, {nodeId: n_50_027.id, rotation: ROT_S});
    n_80_040.neighbours.push({nodeId: n_80_050.id, rotation: ROT_E}, {nodeId: pn_84_040.id, rotation: ROT_S});
    pn_84_040.neighbours.push({nodeId: n_80_040.id, rotation: ROT_S});
    n_80_050.neighbours.push({nodeId: n_80_060.id, rotation: ROT_E}, {nodeId: pn_84_050.id, rotation: ROT_S}, {
        nodeId: pn_76_050.id,
        rotation: ROT_N
    });
    pn_84_050.neighbours.push({nodeId: n_80_050.id, rotation: ROT_S});
    pn_76_050.neighbours.push({nodeId: n_80_050.id, rotation: ROT_N});
    n_80_060.neighbours.push({nodeId: n_80_070.id, rotation: ROT_E}, {nodeId: pn_84_060.id, rotation: ROT_S}, {
        nodeId: pn_76_060.id,
        rotation: ROT_N
    });
    pn_84_060.neighbours.push({nodeId: n_80_060.id, rotation: ROT_S});
    pn_76_060.neighbours.push({nodeId: n_80_060.id, rotation: ROT_N});
    n_80_070.neighbours.push({nodeId: n_80_080.id, rotation: ROT_E}, {nodeId: pn_84_070.id, rotation: ROT_S}, {
        nodeId: pn_76_070.id,
        rotation: ROT_N
    });
    pn_84_070.neighbours.push({nodeId: n_80_070.id, rotation: ROT_S});
    pn_76_070.neighbours.push({nodeId: n_80_070.id, rotation: ROT_N});
    n_80_080.neighbours.push({nodeId: n_80_084.id, rotation: ROT_E}, {nodeId: pn_84_080.id, rotation: ROT_S});
    pn_84_080.neighbours.push({nodeId: n_80_080.id, rotation: ROT_S});
    n_80_084.neighbours.push({nodeId: n_50_084.id, rotation: ROT_S});

// -> center line
    n_50_027.neighbours.push({nodeId: n_50_050.id, rotation: ROT_E});
    n_50_050.neighbours.push({nodeId: n_50_060.id, rotation: ROT_E}, {nodeId: pn_54_050.id, rotation: ROT_S}, {
        nodeId: pn_46_050.id,
        rotation: ROT_N
    });
    pn_54_050.neighbours.push({nodeId: n_50_050.id, rotation: ROT_S});
    pn_46_050.neighbours.push({nodeId: n_50_050.id, rotation: ROT_N});
    n_50_060.neighbours.push({nodeId: n_50_070.id, rotation: ROT_E}, {nodeId: pn_54_060.id, rotation: ROT_S}, {
        nodeId: pn_46_060.id,
        rotation: ROT_N
    });
    pn_54_060.neighbours.push({nodeId: n_50_060.id, rotation: ROT_S});
    pn_46_060.neighbours.push({nodeId: n_50_060.id, rotation: ROT_N});
    n_50_070.neighbours.push({nodeId: n_50_084.id, rotation: ROT_E}, {nodeId: pn_54_070.id, rotation: ROT_S}, {
        nodeId: pn_46_070.id,
        rotation: ROT_N
    });
    pn_54_070.neighbours.push({nodeId: n_50_070.id, rotation: ROT_S});
    pn_46_070.neighbours.push({nodeId: n_50_070.id, rotation: ROT_N});
    n_50_084.neighbours.push({nodeId: n_50_090.id, rotation: ROT_E}, {nodeId: n_20_084.id, rotation: ROT_S});
    n_50_090.neighbours.push({nodeId: n_50_100.id, rotation: ROT_E}, {nodeId: pn_54_090.id, rotation: ROT_S}, {
        nodeId: pn_46_090.id,
        rotation: ROT_N
    });
    pn_54_090.neighbours.push({nodeId: n_50_090.id, rotation: ROT_S});
    pn_46_090.neighbours.push({nodeId: n_50_090.id, rotation: ROT_N});
    n_50_100.neighbours.push({nodeId: n_50_110.id, rotation: ROT_E}, {nodeId: pn_54_100.id, rotation: ROT_S}, {
        nodeId: pn_46_100.id,
        rotation: ROT_N
    });
    pn_54_100.neighbours.push({nodeId: n_50_100.id, rotation: ROT_S});
    pn_46_100.neighbours.push({nodeId: n_50_100.id, rotation: ROT_N});
    n_50_110.neighbours.push({nodeId: n_50_120.id, rotation: ROT_E}, {nodeId: pn_54_110.id, rotation: ROT_S}, {
        nodeId: pn_46_110.id,
        rotation: ROT_N
    });
    pn_54_110.neighbours.push({nodeId: n_50_110.id, rotation: ROT_S});
    pn_46_110.neighbours.push({nodeId: n_50_110.id, rotation: ROT_N});
    n_50_120.neighbours.push({nodeId: n_50_122.id, rotation: ROT_E}, {nodeId: pn_54_120.id, rotation: ROT_S});
    pn_54_120.neighbours.push({nodeId: n_50_120.id, rotation: ROT_S});
    n_50_122.neighbours.push({nodeId: n_20_122.id, rotation: ROT_S});

// -> final return
    n_20_122.neighbours.push({nodeId: n_20_120.id, rotation: ROT_W});
    n_20_120.neighbours.push({nodeId: n_20_110.id, rotation: ROT_W}, {nodeId: pn_16_120.id, rotation: ROT_N});
    pn_16_120.neighbours.push({nodeId: n_20_120.id, rotation: ROT_N});
    n_20_110.neighbours.push({nodeId: n_20_100.id, rotation: ROT_W}, {nodeId: pn_16_110.id, rotation: ROT_N}, {
        nodeId: pn_24_110.id,
        rotation: ROT_S
    });
    pn_16_110.neighbours.push({nodeId: n_20_110.id, rotation: ROT_N});
    pn_24_110.neighbours.push({nodeId: n_20_110.id, rotation: ROT_S});
    n_20_100.neighbours.push({nodeId: n_20_090.id, rotation: ROT_W}, {nodeId: pn_16_100.id, rotation: ROT_N}, {
        nodeId: pn_24_100.id,
        rotation: ROT_S
    });
    pn_16_100.neighbours.push({nodeId: n_20_100.id, rotation: ROT_N});
    pn_24_100.neighbours.push({nodeId: n_20_100.id, rotation: ROT_S});
    n_20_090.neighbours.push({nodeId: n_20_084.id, rotation: ROT_W}, {nodeId: pn_16_090.id, rotation: ROT_N}, {
        nodeId: pn_24_090.id,
        rotation: ROT_S
    });
    pn_16_090.neighbours.push({nodeId: n_20_090.id, rotation: ROT_N});
    pn_24_090.neighbours.push({nodeId: n_20_090.id, rotation: ROT_S});
    n_20_084.neighbours.push({nodeId: n_20_080.id, rotation: ROT_W});
    n_20_080.neighbours.push({nodeId: n_20_070.id, rotation: ROT_W}, {nodeId: pn_16_080.id, rotation: ROT_N});
    pn_16_080.neighbours.push({nodeId: n_20_080.id, rotation: ROT_N});
    n_20_070.neighbours.push({nodeId: n_20_060.id, rotation: ROT_W}, {nodeId: pn_16_070.id, rotation: ROT_N}, {
        nodeId: pn_24_070.id,
        rotation: ROT_S
    });
    pn_16_070.neighbours.push({nodeId: n_20_070.id, rotation: ROT_N});
    pn_24_070.neighbours.push({nodeId: n_20_070.id, rotation: ROT_S});
    n_20_060.neighbours.push({nodeId: n_20_050.id, rotation: ROT_W}, {nodeId: pn_16_060.id, rotation: ROT_N}, {
        nodeId: pn_24_060.id,
        rotation: ROT_S
    });
    pn_16_060.neighbours.push({nodeId: n_20_060.id, rotation: ROT_N});
    pn_24_060.neighbours.push({nodeId: n_20_060.id, rotation: ROT_S});
    n_20_050.neighbours.push({nodeId: n_20_040.id, rotation: ROT_W}, {nodeId: pn_16_050.id, rotation: ROT_N}, {
        nodeId: pn_24_050.id,
        rotation: ROT_S
    });
    pn_16_050.neighbours.push({nodeId: n_20_050.id, rotation: ROT_N});
    pn_24_050.neighbours.push({nodeId: n_20_050.id, rotation: ROT_S});
    n_20_040.neighbours.push({nodeId: n_20_027.id, rotation: ROT_W}, {nodeId: pn_16_040.id, rotation: ROT_N});
    pn_16_040.neighbours.push({nodeId: n_20_040.id, rotation: ROT_N});

    n_20_027.neighbours.push({nodeId: n_20_023.id, rotation: ROT_W});
    n_20_023.neighbours.push({nodeId: n_30_023.id, rotation: ROT_N});


    productionNodes.set(pn_16_040.id, pn_16_040);
    productionNodes.set(pn_16_050.id, pn_16_050);
    productionNodes.set(pn_16_060.id, pn_16_060);
    productionNodes.set(pn_16_070.id, pn_16_070);
    productionNodes.set(pn_16_080.id, pn_16_080);
    productionNodes.set(pn_16_090.id, pn_16_090);
    productionNodes.set(pn_16_100.id, pn_16_100);
    productionNodes.set(pn_16_110.id, pn_16_110);
    productionNodes.set(pn_16_120.id, pn_16_120);

    productionNodes.set(pn_24_050.id, pn_24_050);
    productionNodes.set(pn_24_060.id, pn_24_060);
    productionNodes.set(pn_24_070.id, pn_24_070);
    productionNodes.set(pn_24_090.id, pn_24_090);
    productionNodes.set(pn_24_100.id, pn_24_100);
    productionNodes.set(pn_24_110.id, pn_24_110);

    productionNodes.set(pn_46_050.id, pn_46_050);
    productionNodes.set(pn_46_060.id, pn_46_060);
    productionNodes.set(pn_46_070.id, pn_46_070);
    productionNodes.set(pn_46_090.id, pn_46_090);
    productionNodes.set(pn_46_100.id, pn_46_100);
    productionNodes.set(pn_46_110.id, pn_46_110);

    productionNodes.set(pn_54_050.id, pn_54_050);
    productionNodes.set(pn_54_060.id, pn_54_060);
    productionNodes.set(pn_54_070.id, pn_54_070);
    productionNodes.set(pn_54_090.id, pn_54_090);
    productionNodes.set(pn_54_100.id, pn_54_100);
    productionNodes.set(pn_54_110.id, pn_54_110);
    productionNodes.set(pn_54_120.id, pn_54_120);

    productionNodes.set(pn_76_050.id, pn_76_050);
    productionNodes.set(pn_76_060.id, pn_76_060);
    productionNodes.set(pn_76_070.id, pn_76_070);

    productionNodes.set(pn_84_040.id, pn_84_040);
    productionNodes.set(pn_84_050.id, pn_84_050);
    productionNodes.set(pn_84_060.id, pn_84_060);
    productionNodes.set(pn_84_070.id, pn_84_070);
    productionNodes.set(pn_84_080.id, pn_84_080);

// storage nodes
    storageNodes.set(sn_30_019.id, sn_30_019);
    storageNodes.set(sn_35_019.id, sn_35_019);
    storageNodes.set(sn_40_019.id, sn_40_019);
    storageNodes.set(sn_45_019.id, sn_45_019);
    storageNodes.set(sn_50_019.id, sn_50_019);

// charging nodes
    chargingNodes.set(cn_60_019.id, cn_60_019);
    chargingNodes.set(cn_65_019.id, cn_65_019);
    chargingNodes.set(cn_70_019.id, cn_70_019);
    chargingNodes.set(cn_75_019.id, cn_75_019);
    chargingNodes.set(cn_80_019.id, cn_80_019);

// Nodes near production
    nodes.set(n_20_040.id, n_20_040);
    nodes.set(n_20_050.id, n_20_050);
    nodes.set(n_20_060.id, n_20_060);
    nodes.set(n_20_070.id, n_20_070);
    nodes.set(n_20_080.id, n_20_080);
    nodes.set(n_20_090.id, n_20_090);
    nodes.set(n_20_100.id, n_20_100);
    nodes.set(n_20_110.id, n_20_110);
    nodes.set(n_20_120.id, n_20_120);

    nodes.set(n_50_050.id, n_50_050);
    nodes.set(n_50_060.id, n_50_060);
    nodes.set(n_50_070.id, n_50_070);
    nodes.set(n_50_090.id, n_50_090);
    nodes.set(n_50_100.id, n_50_100);
    nodes.set(n_50_110.id, n_50_110);
    nodes.set(n_50_120.id, n_50_120);

    nodes.set(n_80_040.id, n_80_040);
    nodes.set(n_80_050.id, n_80_050);
    nodes.set(n_80_060.id, n_80_060);
    nodes.set(n_80_070.id, n_80_070);
    nodes.set(n_80_080.id, n_80_080);

// Nodes near storage
    nodes.set(n_30_023.id, n_30_023);
    nodes.set(n_35_023.id, n_35_023);
    nodes.set(n_40_023.id, n_40_023);
    nodes.set(n_45_023.id, n_45_023);
    nodes.set(n_50_023.id, n_50_023);

// Nodes near charging
    nodes.set(n_60_023.id, n_60_023);
    nodes.set(n_65_023.id, n_65_023);
    nodes.set(n_70_023.id, n_70_023);
    nodes.set(n_75_023.id, n_75_023);
    nodes.set(n_80_023.id, n_80_023);

// Other nodes
    nodes.set(n_20_023.id, n_20_023);
    nodes.set(n_20_027.id, n_20_027);
    nodes.set(n_20_084.id, n_20_084);
    nodes.set(n_20_122.id, n_20_122);

    nodes.set(n_50_027.id, n_50_027);
    nodes.set(n_50_084.id, n_50_084);
    nodes.set(n_50_122.id, n_50_122);

    nodes.set(n_80_027.id, n_80_027);
    nodes.set(n_80_084.id, n_80_084);


    productionNodes.forEach((node) => {
        nodes.set(node.id, node);
    })
    storageNodes.forEach((node) => {
        nodes.set(node.id, node);
    })
    chargingNodes.forEach((node) => {
        nodes.set(node.id, node);
    })

    // decisions
    const n_50_023_map = new Map<string, string>();
    n_50_023_map.set(pn_16_040.id, n_50_027.id);
    n_50_023_map.set(pn_16_050.id, n_50_027.id);
    n_50_023_map.set(pn_16_060.id, n_50_027.id);
    n_50_023_map.set(pn_16_070.id, n_50_027.id);
    n_50_023_map.set(pn_16_080.id, n_50_027.id);
    n_50_023_map.set(pn_16_090.id, n_50_027.id);
    n_50_023_map.set(pn_16_100.id, n_50_027.id);
    n_50_023_map.set(pn_16_110.id, n_50_027.id);
    n_50_023_map.set(pn_16_120.id, n_50_027.id);
    n_50_023_map.set(pn_24_050.id, n_50_027.id);
    n_50_023_map.set(pn_24_060.id, n_50_027.id);
    n_50_023_map.set(pn_24_070.id, n_50_027.id);
    n_50_023_map.set(pn_24_090.id, n_50_027.id);
    n_50_023_map.set(pn_24_100.id, n_50_027.id);
    n_50_023_map.set(pn_24_110.id, n_50_027.id);
    n_50_023_map.set(pn_46_050.id, n_50_027.id);
    n_50_023_map.set(pn_46_060.id, n_50_027.id);
    n_50_023_map.set(pn_46_070.id, n_50_027.id);
    n_50_023_map.set(pn_46_090.id, n_50_027.id);
    n_50_023_map.set(pn_46_100.id, n_50_027.id);
    n_50_023_map.set(pn_46_110.id, n_50_027.id);
    n_50_023_map.set(pn_54_050.id, n_50_027.id);
    n_50_023_map.set(pn_54_060.id, n_50_027.id);
    n_50_023_map.set(pn_54_070.id, n_50_027.id);
    n_50_023_map.set(pn_54_090.id, n_50_027.id);
    n_50_023_map.set(pn_54_100.id, n_50_027.id);
    n_50_023_map.set(pn_54_110.id, n_50_027.id);
    n_50_023_map.set(pn_54_120.id, n_50_027.id);
    n_50_023_map.set(pn_76_050.id, n_60_023.id);
    n_50_023_map.set(pn_76_060.id, n_60_023.id);
    n_50_023_map.set(pn_76_070.id, n_60_023.id);
    n_50_023_map.set(pn_84_040.id, n_60_023.id);
    n_50_023_map.set(pn_84_050.id, n_60_023.id);
    n_50_023_map.set(pn_84_060.id, n_60_023.id);
    n_50_023_map.set(pn_84_070.id, n_60_023.id);
    n_50_023_map.set(pn_84_080.id, n_60_023.id);

    n_50_023_map.set(cn_60_019.id, n_60_023.id);
    n_50_023_map.set(cn_65_019.id, n_60_023.id);
    n_50_023_map.set(cn_70_019.id, n_60_023.id);
    n_50_023_map.set(cn_75_019.id, n_60_023.id);
    n_50_023_map.set(cn_80_019.id, n_60_023.id);

    n_50_023_map.set(sn_30_019.id, n_50_027.id);
    n_50_023_map.set(sn_35_019.id, n_50_027.id);
    n_50_023_map.set(sn_40_019.id, n_50_027.id);
    n_50_023_map.set(sn_45_019.id, n_50_027.id);
    decisionsMap.set('50-023', n_50_023_map);


    const n_80_027_map = new Map<string, string>();
    n_80_027_map.set(pn_16_040.id, n_50_027.id);
    n_80_027_map.set(pn_16_050.id, n_50_027.id);
    n_80_027_map.set(pn_16_060.id, n_50_027.id);
    n_80_027_map.set(pn_16_070.id, n_50_027.id);
    n_80_027_map.set(pn_16_080.id, n_50_027.id);
    n_80_027_map.set(pn_16_090.id, n_50_027.id);
    n_80_027_map.set(pn_16_100.id, n_50_027.id);
    n_80_027_map.set(pn_16_110.id, n_50_027.id);
    n_80_027_map.set(pn_16_120.id, n_50_027.id);
    n_80_027_map.set(pn_24_050.id, n_50_027.id);
    n_80_027_map.set(pn_24_060.id, n_50_027.id);
    n_80_027_map.set(pn_24_070.id, n_50_027.id);
    n_80_027_map.set(pn_24_090.id, n_50_027.id);
    n_80_027_map.set(pn_24_100.id, n_50_027.id);
    n_80_027_map.set(pn_24_110.id, n_50_027.id);
    n_80_027_map.set(pn_46_050.id, n_50_027.id);
    n_80_027_map.set(pn_46_060.id, n_50_027.id);
    n_80_027_map.set(pn_46_070.id, n_50_027.id);
    n_80_027_map.set(pn_46_090.id, n_50_027.id);
    n_80_027_map.set(pn_46_100.id, n_50_027.id);
    n_80_027_map.set(pn_46_110.id, n_50_027.id);
    n_80_027_map.set(pn_54_050.id, n_50_027.id);
    n_80_027_map.set(pn_54_060.id, n_50_027.id);
    n_80_027_map.set(pn_54_070.id, n_50_027.id);
    n_80_027_map.set(pn_54_090.id, n_50_027.id);
    n_80_027_map.set(pn_54_100.id, n_50_027.id);
    n_80_027_map.set(pn_54_110.id, n_50_027.id);
    n_80_027_map.set(pn_54_120.id, n_50_027.id);
    n_80_027_map.set(pn_76_050.id, n_80_040.id);
    n_80_027_map.set(pn_76_060.id, n_80_040.id);
    n_80_027_map.set(pn_76_070.id, n_80_040.id);
    n_80_027_map.set(pn_84_040.id, n_80_040.id);
    n_80_027_map.set(pn_84_050.id, n_80_040.id);
    n_80_027_map.set(pn_84_060.id, n_80_040.id);
    n_80_027_map.set(pn_84_070.id, n_80_040.id);
    n_80_027_map.set(pn_84_080.id, n_80_040.id);

    n_80_027_map.set(cn_60_019.id, n_50_027.id);
    n_80_027_map.set(cn_65_019.id, n_50_027.id);
    n_80_027_map.set(cn_70_019.id, n_50_027.id);
    n_80_027_map.set(cn_75_019.id, n_50_027.id);
    n_80_027_map.set(cn_80_019.id, n_50_027.id);

    n_80_027_map.set(sn_30_019.id, n_50_027.id);
    n_80_027_map.set(sn_35_019.id, n_50_027.id);
    n_80_027_map.set(sn_40_019.id, n_50_027.id);
    n_80_027_map.set(sn_45_019.id, n_50_027.id);
    decisionsMap.set('80-027', n_80_027_map);


    const n_50_084_map = new Map<string, string>();
    n_50_084_map.set(pn_16_040.id, n_20_084.id);
    n_50_084_map.set(pn_16_050.id, n_20_084.id);
    n_50_084_map.set(pn_16_060.id, n_20_084.id);
    n_50_084_map.set(pn_16_070.id, n_20_084.id);
    n_50_084_map.set(pn_16_080.id, n_20_084.id);
    n_50_084_map.set(pn_16_090.id, n_50_090.id);
    n_50_084_map.set(pn_16_100.id, n_50_090.id);
    n_50_084_map.set(pn_16_110.id, n_50_090.id);
    n_50_084_map.set(pn_16_120.id, n_50_090.id);
    n_50_084_map.set(pn_24_050.id, n_20_084.id);
    n_50_084_map.set(pn_24_060.id, n_20_084.id);
    n_50_084_map.set(pn_24_070.id, n_20_084.id);
    n_50_084_map.set(pn_24_090.id, n_50_090.id);
    n_50_084_map.set(pn_24_100.id, n_50_090.id);
    n_50_084_map.set(pn_24_110.id, n_50_090.id);
    n_50_084_map.set(pn_46_050.id, n_20_084.id);
    n_50_084_map.set(pn_46_060.id, n_20_084.id);
    n_50_084_map.set(pn_46_070.id, n_20_084.id);
    n_50_084_map.set(pn_46_090.id, n_50_090.id);
    n_50_084_map.set(pn_46_100.id, n_50_090.id);
    n_50_084_map.set(pn_46_110.id, n_50_090.id);
    n_50_084_map.set(pn_54_050.id, n_20_084.id);
    n_50_084_map.set(pn_54_060.id, n_20_084.id);
    n_50_084_map.set(pn_54_070.id, n_20_084.id);
    n_50_084_map.set(pn_54_090.id, n_50_090.id);
    n_50_084_map.set(pn_54_100.id, n_50_090.id);
    n_50_084_map.set(pn_54_110.id, n_50_090.id);
    n_50_084_map.set(pn_54_120.id, n_50_090.id);
    n_50_084_map.set(pn_76_050.id, n_20_084.id);
    n_50_084_map.set(pn_76_060.id, n_20_084.id);
    n_50_084_map.set(pn_76_070.id, n_20_084.id);
    n_50_084_map.set(pn_84_040.id, n_20_084.id);
    n_50_084_map.set(pn_84_050.id, n_20_084.id);
    n_50_084_map.set(pn_84_060.id, n_20_084.id);
    n_50_084_map.set(pn_84_070.id, n_20_084.id);
    n_50_084_map.set(pn_84_080.id, n_20_084.id);

    n_50_084_map.set(cn_60_019.id, n_20_084.id);
    n_50_084_map.set(cn_65_019.id, n_20_084.id);
    n_50_084_map.set(cn_70_019.id, n_20_084.id);
    n_50_084_map.set(cn_75_019.id, n_20_084.id);
    n_50_084_map.set(cn_80_019.id, n_20_084.id);

    n_50_084_map.set(sn_30_019.id, n_20_084.id);
    n_50_084_map.set(sn_35_019.id, n_20_084.id);
    n_50_084_map.set(sn_40_019.id, n_20_084.id);
    n_50_084_map.set(sn_45_019.id, n_20_084.id);
    decisionsMap.set('50-084', n_50_084_map);


    return {
        nodes,
        productionNodes,
        storageNodes,
        chargingNodes,
        decisionsMap,
    }
})();

export const positionToNode = (position: ThreeArr2, nodes: Map<string, TNode>): TNode | undefined => {
    const nodeId = `${position[0].toString().padStart(2, '0')}-${position[1].toString().padStart(3, '0')}`;
    return nodes.get(nodeId);
}

export const positionFromNode = (node: TNode): ThreeArr2 => {
    return [
        parseInt(node.id.substring(0, 2)),
        parseInt(node.id.substring(3, 6)),
    ]
}

// init neighbours

// // -> storage
// n_30_023.neighbours.push(n_35_023, sn_30_019);
// sn_30_019.neighbours.push(n_30_023);
// n_35_023.neighbours.push(n_40_023, sn_35_019);
// sn_35_019.neighbours.push(n_35_023);
// n_40_023.neighbours.push(n_45_023, sn_40_019);
// sn_40_019.neighbours.push(n_40_023);
// n_45_023.neighbours.push(n_50_023, sn_45_019);
// sn_45_019.neighbours.push(n_45_023);
// n_50_023.neighbours.push(n_60_023, n_50_027, sn_50_019);
// sn_50_019.neighbours.push(n_50_023);
//
// // -> charging
// n_60_023.neighbours.push(n_65_023, cn_60_019);
// cn_60_019.neighbours.push(n_60_023);
// n_65_023.neighbours.push(n_70_023, cn_65_019);
// cn_65_019.neighbours.push(n_65_023);
// n_70_023.neighbours.push(n_75_023, cn_70_019);
// cn_70_019.neighbours.push(n_70_023);
// n_75_023.neighbours.push(n_80_023, cn_75_019);
// cn_75_019.neighbours.push(n_75_023);
// n_80_023.neighbours.push(n_80_027, cn_80_019);
// cn_80_019.neighbours.push(n_80_023);
//
// // -> back line
// n_80_027.neighbours.push(n_80_040, n_50_027);
// n_80_040.neighbours.push(n_80_050, pn_84_040);
// pn_84_040.neighbours.push(n_80_040);
// n_80_050.neighbours.push(n_80_060, pn_84_050, pn_76_050);
// pn_84_050.neighbours.push(n_80_050);
// pn_76_050.neighbours.push(n_80_050);
// n_80_060.neighbours.push(n_80_070, pn_84_060, pn_76_060);
// pn_84_060.neighbours.push(n_80_060);
// pn_76_060.neighbours.push(n_80_060);
// n_80_070.neighbours.push(n_80_080, pn_84_070, pn_76_070);
// pn_84_070.neighbours.push(n_80_070);
// pn_76_070.neighbours.push(n_80_070);
// n_80_080.neighbours.push(n_80_084, pn_84_080);
// pn_84_080.neighbours.push(n_80_080);
// n_80_084.neighbours.push(n_50_084);
//
// // -> center line
// n_50_027.neighbours.push(n_50_050, n_20_027);
// n_50_050.neighbours.push(n_50_060, pn_54_050, pn_46_050);
// pn_54_050.neighbours.push(n_50_050);
// pn_46_050.neighbours.push(n_50_050);
// n_50_060.neighbours.push(n_50_070, pn_54_060, pn_46_060);
// pn_54_060.neighbours.push(n_50_060);
// pn_46_060.neighbours.push(n_50_060);
// n_50_070.neighbours.push(n_50_084, pn_54_070, pn_46_070);
// pn_54_070.neighbours.push(n_50_070);
// pn_46_070.neighbours.push(n_50_070);
// n_50_084.neighbours.push(n_50_090, n_20_084);
// n_50_090.neighbours.push(n_50_100, pn_54_090, pn_46_090);
// pn_54_090.neighbours.push(n_50_090);
// pn_46_090.neighbours.push(n_50_090);
// n_50_100.neighbours.push(n_50_110, pn_54_100, pn_46_100);
// pn_54_100.neighbours.push(n_50_100);
// pn_46_100.neighbours.push(n_50_100);
// n_50_110.neighbours.push(n_50_120, pn_54_110, pn_46_110);
// pn_54_110.neighbours.push(n_50_110);
// pn_46_110.neighbours.push(n_50_110);
// n_50_120.neighbours.push(n_50_122, pn_54_120);
// pn_54_120.neighbours.push(n_50_120);
// n_50_122.neighbours.push(n_20_122);
//
// // -> final return
// n_20_122.neighbours.push(n_20_120);
// n_20_120.neighbours.push(n_20_110, pn_16_120);
// pn_16_120.neighbours.push(n_20_120);
// n_20_110.neighbours.push(n_20_100, pn_16_110, pn_24_110);
// pn_16_110.neighbours.push(n_20_110);
// pn_24_110.neighbours.push(n_20_110);
// n_20_100.neighbours.push(n_20_090, pn_16_100, pn_24_100);
// pn_16_100.neighbours.push(n_20_100);
// pn_24_100.neighbours.push(n_20_100);
// n_20_090.neighbours.push(n_20_084, pn_16_090, pn_24_090);
// pn_16_090.neighbours.push(n_20_090);
// pn_24_090.neighbours.push(n_20_090);
// n_20_084.neighbours.push(n_20_080);
// n_20_080.neighbours.push(n_20_070, pn_16_080);
// pn_16_080.neighbours.push(n_20_080);
// n_20_070.neighbours.push(n_20_060, pn_16_070, pn_24_070);
// pn_16_070.neighbours.push(n_20_070);
// pn_24_070.neighbours.push(n_20_070);
// n_20_060.neighbours.push(n_20_050, pn_16_060, pn_24_060);
// pn_16_060.neighbours.push(n_20_060);
// pn_24_060.neighbours.push(n_20_060);
// n_20_050.neighbours.push(n_20_040, pn_16_050, pn_24_050);
// pn_16_050.neighbours.push(n_20_050);
// pn_24_050.neighbours.push(n_20_050);
// n_20_040.neighbours.push(n_20_027, pn_16_040);
// pn_16_040.neighbours.push(n_20_040);
//
// n_20_027.neighbours.push(n_20_023);
// n_20_023.neighbours.push(n_30_023);