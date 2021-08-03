import { ThemeProvider } from "@material-ui/core";
import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Table } from "./Components/Table";
import { theme } from "./Styling";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Table />
    </ThemeProvider>
  );
};

export default App;
