import {ReactNode} from "react";
import FullWidthSpaceBetweenContainer from "../container/FullWidthSpaceBetweenContainer";

interface IProps {
    children: ReactNode[];
}

function SplitContentSlide(props: IProps) {
    const {children} = props;
    const firstChild = children.at(0);
    const restChildren = children.slice(1);

    return (
        <FullWidthSpaceBetweenContainer
            flexDirection='row'
            height='100%'
            overflow='auto'
        >
            <FullWidthSpaceBetweenContainer
                maxWidth='600px'
            >
                {firstChild}
            </FullWidthSpaceBetweenContainer>
            <FullWidthSpaceBetweenContainer
                flexDirection='column'
                alignItems='flex-start'
                paddingY='20px'
                paddingX='40px'
            >
                {restChildren}
            </FullWidthSpaceBetweenContainer>
        </FullWidthSpaceBetweenContainer>
    )
}

export default SplitContentSlide;