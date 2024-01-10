import {ReactNode} from "react";
import FullWidthSpaceBetweenContainer from "../container/FullWidthSpaceBetweenContainer";

interface IProps {
    children: ReactNode[];
    backgroundImage?: string;
}

function SplitContentSlide(props: IProps) {
    const {children, backgroundImage} = props;
    const firstChild = children.at(0);
    const restChildren = children.slice(1);

    const backgroundImageUrl = backgroundImage ? `url("${backgroundImage}")` : undefined;

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
                sx={{
                    backgroundImage: backgroundImageUrl,
                    backgroundSize: 'cover', // Adjust as needed
                    backgroundPosition: 'center', // Adjust as needed
                }}
            >
                {restChildren}
            </FullWidthSpaceBetweenContainer>
        </FullWidthSpaceBetweenContainer>
    )
}

export default SplitContentSlide;