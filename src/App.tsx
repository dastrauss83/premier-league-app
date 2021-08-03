import { ThemeProvider } from "@material-ui/core";
import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Filters } from "./Components/Filters";
import { MainTable } from "./Components/MainTable";
import { theme } from "./Styling";
import { useState } from "react";

const App = () => {
  const [season, setSeason] = useState<number>();
  const [matchDay, setMatchDay] = useState<number>();

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Filters
        season={season}
        setSeason={setSeason}
        matchDay={matchDay}
        setMatchDay={setMatchDay}
      />
      <MainTable />
    </ThemeProvider>
  );
};

export default App;
