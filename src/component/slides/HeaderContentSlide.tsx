import {Typography} from "@mui/material";
import {ReactNode} from "react";
import FullSpaceBetweenContainer from "../container/FullSpaceBetweenContainer";
import FullWidthSpaceBetweenContainer from "../container/FullWidthSpaceBetweenContainer";
import FullWidthStartContainer from "../container/FullWidthStartContainer";

interface IProps {
    title: string;
    children?: ReactNode | ReactNode[];
}

function HeaderContentSlide(props: IProps) {
    const {title, children} = props;
    return (
        <FullSpaceBetweenContainer flexDirection='column'>
            <FullWidthStartContainer
                paddingY='20px'
                paddingX='40px'
                bgcolor='secondary.main'
                boxShadow={5}
            >
                <Typography variant='h2'>
                    {title}
                </Typography>
            </FullWidthStartContainer>
            <FullWidthSpaceBetweenContainer
                flexDirection='column'
                flex={1}
                alignItems='flex-start'
                paddingY='20px'
                paddingX='40px'
            >
                {children}
            </FullWidthSpaceBetweenContainer>
        </FullSpaceBetweenContainer>
    )
}

export default HeaderContentSlide;