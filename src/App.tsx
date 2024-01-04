import React from 'react';
import './App.css';
import BaseLayout from "./component/layout/BaseLayout";
import {ThemeProvider} from "@mui/material";
import theme from "./config/theme";
import MainHeader from "./component/header/MainHeader";
import {Provider} from "react-redux";
import {store} from "./store/store";
import MainFooter from "./component/footer/MainFooter";
import BaseSimulationPage from "./page/BaseSimulationPage";
import {listItemsList} from "./config/listItemsList";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <BaseLayout
                    header={<MainHeader/>}
                    bottom={<MainFooter/>}
                >
                    <BaseSimulationPage listItemsList={listItemsList}/>
                </BaseLayout>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
