import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#003ca0',
            contrastText: '#fff',
        },
        secondary: {
            main: '#3364b3',
        },
        background: {
            default: '#666666',
            paper: '#dddddd',
        }
    },

    typography: {
        h1: {
            fontSize: 42,
            fontWeight: 700,
        },
        h2: {
            fontSize: 42,
            fontWeight: 400,
        },
        h3: {
            fontSize: 26,
            fontWeight: 400,
        },
        h4: {
            fontSize: 22,
            fontWeight: 400,
        },
        subtitle1: {
            fontSize: 16,
            fontWeight: 700,
        },
        subtitle2: {
            fontSize: 12,
            fontWeight: 700,
        },
    }
});

export default theme;
