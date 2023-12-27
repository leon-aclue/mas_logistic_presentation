import React from 'react';
import './App.css';
import BaseLayout from "./component/layout/BaseLayout";
import {ThemeProvider, Typography} from "@mui/material";
import theme from "./config/theme";
import PageSelector from "./pages/PageSelector";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <BaseLayout
              header={<Typography>Header</Typography>}
              bottom={<Typography>Bottom</Typography>}
          >
            <PageSelector/>
          </BaseLayout>
      </ThemeProvider>
  );
}

export default App;
