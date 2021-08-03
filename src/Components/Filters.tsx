import { TextField, Button, Typography } from "@material-ui/core";
import { useState } from "react";
import { useStyles } from "../Styling";

type FiltersProps = {
  season: number | void;
  setSeason: (e?: any) => void;
  matchDay: number | void;
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (season > 2020 || matchDay > 38 || season < 2018 || matchDay < 1) {
      setError(true);
      setSeason();
      setMatchDay();
    } else {
      getData();
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

  return (
    <div className={classes.filtersComp}>
      <div className={classes.filters}>
        <TextField
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
        />
      </div>
      {error ? (
        <Typography gutterBottom style={{ marginTop: "-50px" }} color="primary">
          Error: Please enter an appropriate Match Day from a Season after 1980
        </Typography>
      ) : null}
      <Button variant="outlined" color="secondary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};
