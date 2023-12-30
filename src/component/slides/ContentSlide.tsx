import {ReactNode} from "react";
import FullWidthSpaceBetweenContainer from "../container/FullWidthSpaceBetweenContainer";

interface IProps {
    children?: ReactNode | ReactNode[];
}

function ContentSlide(props: IProps) {
    const {children} = props;
    return (
        <FullWidthSpaceBetweenContainer
            flexDirection='column'
            flex={1}
            alignItems='flex-start'
            paddingY='20px'
            paddingX='40px'
        >
            {children}
        </FullWidthSpaceBetweenContainer>
    )
}

export default ContentSlide;