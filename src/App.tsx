import React from 'react';
import './App.css';
import BaseLayout from "./component/layout/BaseLayout";
import {ThemeProvider} from "@mui/material";
import theme from "./config/theme";
import MainHeader from "./component/header/MainHeader";
import {Provider} from "react-redux";
import {store} from "./store/store";
import MainBottom from "./component/bottom/MainBottom";
import SimulationConfig from "./pages/SimulationConfig";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <BaseLayout
                    header={<MainHeader/>}
                    bottom={<MainBottom/>}
                >
                    <SimulationConfig/>
                </BaseLayout>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
