import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";
import styles from "./styles";
import Slider from "@mui/material/Slider";

function App() {
  return (
    <ThemeProvider theme={styles}>
      <div>
        <h1>HELLO SAGA</h1>
        <Button variant="contained" color="primary">
          Material UI
        </Button>
      </div>
    </ThemeProvider>
  );
}
export default App;
