import {ReactNode} from "react";
import FullWidthSpaceBetweenContainer from "../container/FullWidthSpaceBetweenContainer";
import {Background} from "../slideElement/BulletList";
import {Typography} from "@mui/material";
import MuiBox from "../container/MuiBox";

interface IProps {
    children: ReactNode[];
    background?: Background;
}

function SplitContentSlide(props: IProps) {
    const {children, background} = props;
    const firstChild = children.at(0);
    const restChildren = children.slice(1);

    const backgroundImageUrl = background?.image ? `url("${background.image}")` : undefined;

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
                {background && (
                    <MuiBox display="flex" width="100%" justifyContent="end" marginBottom="-20px">
                        <Typography color="primary.contrastText" bgcolor="background.default" variant="subtitle2" paddingX="5px" borderRadius="5px">{background.title}</Typography>
                    </MuiBox>
                )}
            </FullWidthSpaceBetweenContainer>
        </FullWidthSpaceBetweenContainer>
    )
}

export default SplitContentSlide;