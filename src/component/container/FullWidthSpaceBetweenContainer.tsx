import {Box, styled} from "@mui/material";

const FullWidthSpaceBetweenContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    boxSizing: 'border-box',
}));

export default FullWidthSpaceBetweenContainer;