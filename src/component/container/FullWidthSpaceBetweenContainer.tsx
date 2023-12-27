import {Box, styled} from "@mui/material";

const FullSpaceBetweenContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    boxSizing: 'border-box',
}));

export default FullSpaceBetweenContainer;