import {ReactNode} from "react";
import FullCenterContainer from "../container/FullCenterContainer";

interface IProps {
    children: ReactNode | ReactNode[] | string;
}

function TitleSlide(props: IProps) {
    const {children} = props;
    return(
        <FullCenterContainer>
            {children}
        </FullCenterContainer>
    )
}

export default TitleSlide;