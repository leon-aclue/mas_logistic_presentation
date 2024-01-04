import {ReactNode} from "react";
import TitlePage from "../pages/TitlePage";
import SimulationConfig from "../pages/SimulationConfig";

export interface IPage {
    content: ReactNode;
}

export const pages: IPage[] = [
    {
        content: <TitlePage/>,
    },
    {
        content: <SimulationConfig/>,
    },
];