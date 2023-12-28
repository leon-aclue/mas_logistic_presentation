import {ReactNode} from "react";
import TitlePage from "../pages/TitlePage";

export interface IPage {
    content: ReactNode;
}

export const pages: IPage[] = [
    {
        content : <TitlePage />,
    },
];