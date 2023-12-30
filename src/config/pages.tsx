import {ReactNode} from "react";
import TitlePage from "../pages/TitlePage";
import IntroductionPage from "../pages/IntroductionPage";
import SimulationPage from "../pages/SimulationPage";

export interface IPage {
    content: ReactNode;
}

export const pages: IPage[] = [
    {
        content : <TitlePage />,
    },
    {
        content : <IntroductionPage />,
    },
    {
        content : <SimulationPage />,
    },
];