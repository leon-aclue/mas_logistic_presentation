import React from 'react';
import './App.css';
import TitlePage from "./pages/TitlePage";
import BaseLayout from "./component/layout/BaseLayout";
import {Typography} from "@mui/material";

function App() {
  return (
      <BaseLayout
          header={<Typography>Header</Typography>}
          bottom={<Typography>Bottom</Typography>}
      >
        <TitlePage />
      </BaseLayout>
  );
}

export default App;
