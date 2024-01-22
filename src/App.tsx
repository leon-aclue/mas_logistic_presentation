import React from 'react';
import './App.css';
import BaseLayout from "./component/layout/BaseLayout";
import {ThemeProvider} from "@mui/material";
import theme from "./config/theme";
import MainHeader from "./component/header/MainHeader";
import {Provider} from "react-redux";
import {store} from "./store/store";
import BaseSimulationPage from "./page/BaseSimulationPage";
import {listItemsList} from "./config/listItemsList";
import ScreenshotHandler from "./component/control/ScreenshotHandler";
import KeyHandler from "./component/control/KeyHandler";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <BaseLayout
                    header={<MainHeader/>}
                >
                    <BaseSimulationPage listItemsList={listItemsList}/>
                </BaseLayout>
                <KeyHandler/>
                <ScreenshotHandler/>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
