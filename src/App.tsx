import React from 'react';
import './App.css';
import BaseLayout from "./component/layout/BaseLayout";
import {ThemeProvider} from "@mui/material";
import theme from "./config/theme";
import PageSelector from "./pages/PageSelector";
import MainHeader from "./component/header/MainHeader";
import {Provider} from "react-redux";
import {store} from "./store/store";
import MainBottom from "./component/bottom/MainBottom";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Provider store={store}>
              <BaseLayout
                  header={<MainHeader />}
                  bottom={<MainBottom />}
              >
                <PageSelector/>
              </BaseLayout>
          </Provider>
      </ThemeProvider>
  );
}

export default App;
