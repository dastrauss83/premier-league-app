import { TextField, Button, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";
import { useState } from "react";
import { useStyles } from "../Styling";

type FiltersProps = {
  season: number | null;
  setSeason: (e?: any) => void;
  matchDay: number | null;
  setMatchDay: (e?: any) => void;
};

export const Filters: React.FC<FiltersProps> = ({
  season,
  setSeason,
  matchDay,
  setMatchDay,
}) => {
  const classes = useStyles();

  const [error, setError] = useState<boolean>(false);

  const handleSubmit = () => {
    if (season && matchDay) {
      if (season > 2020 || matchDay > 38 || season < 2018 || matchDay < 1) {
        setError(true);
        setSeason("");
        setMatchDay("");
      } else {
        setError(false);
        getData();
      }
    }
  };

  const getData = async () => {
    const res = await fetch(
      `https://api.football-data.org/v2/competitions/PL/matches?season=${season}&matchday=${matchDay}`,
      {
        headers: { "X-Auth-Token": "9323a250a6634222a7ff79a545830236" },
      }
    );
    const data = await res.json();
    console.log(data);
  };

  const handleSeason = (e: any) => {
    setSeason(e.target.value);
  };

  return (
    <div className={classes.filtersComp}>
      <div className={classes.filters}>
        <Autocomplete
          value={season}
          onChange={handleSeason}
          options={[2018, 2019, 2020, 2021]}
          getOptionLabel={(option: number) => String(option)}
          renderOption={(option) => <React.Fragment>{option}</React.Fragment>}
          renderInput={(params) => (
            <TextField {...params} label="Season" color="secondary" />
          )}
          style={{ marginRight: 30, width: 200 }}
        />

        <Autocomplete
          value={matchDay}
          onChange={(e: any) => setMatchDay(e.target.value)}
          options={[2018, 2019, 2020, 2021]}
          getOptionLabel={(option: number) => String(option)}
          renderOption={(option) => option}
          renderInput={(params) => (
            <TextField {...params} label="Match Day" color="secondary" />
          )}
          style={{ width: 200 }}
        />

        {/* <TextField
          label="Season"
          type="number"
          required
          color="secondary"
          value={season}
          onChange={(e) => setSeason(e.target.value)}
          style={{ marginRight: "30px" }}
        />
        <TextField
          value={matchDay}
          type="number"
          required
          color="secondary"
          onChange={(e) => setMatchDay(e.target.value)}
          label="Match Day"
        /> */}
      </div>
      {error ? (
        <Typography
          gutterBottom
          style={{ marginTop: "-50px", marginBottom: "26px" }}
          color="primary"
        >
          Error: Please enter an appropriate Match Day from a Season after 2018
        </Typography>
      ) : null}
      <Button variant="outlined" color="secondary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};
