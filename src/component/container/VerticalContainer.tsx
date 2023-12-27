import {Box, styled} from "@mui/material";

const VerticalContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    boxSizing: 'border-box',
}));

export default VerticalContainer;