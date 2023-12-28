import {Box, styled} from "@mui/material";

const FullWidthStartContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    width: '100%',
    boxSizing: 'border-box',
}));

export default FullWidthStartContainer;