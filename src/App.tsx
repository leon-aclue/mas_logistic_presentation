import React from 'react';
import './App.css';
import BaseLayout from "./component/layout/BaseLayout";
import {ThemeProvider, Typography} from "@mui/material";
import theme from "./config/theme";
import PageSelector from "./pages/PageSelector";
import MainHeader from "./component/header/MainHeader";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <BaseLayout
              header={<MainHeader />}
              bottom={<Typography>Bottom</Typography>}
          >
            <PageSelector/>
          </BaseLayout>
      </ThemeProvider>
  );
}

export default App;
