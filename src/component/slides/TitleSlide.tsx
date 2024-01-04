import FullCenterContainer from "../container/FullCenterContainer";
import {Typography} from "@mui/material";

interface IProps {
    title: string;
}

function TitleSlide(props: IProps) {
    const {title} = props;
    return (
        <FullCenterContainer>
            <Typography variant='h1'>
                {title}
            </Typography>
        </FullCenterContainer>
    )
}

export default TitleSlide;