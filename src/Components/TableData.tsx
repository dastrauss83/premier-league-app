import { TableBody, TableRow, TableCell } from "@material-ui/core";

export const TableData: React.FC = () => {
  const getData = async () => {
    const res = await fetch(
      "https://api.football-data.org/v2/competitions/PL/matches",
      {
        headers: { "X-Auth-Token": "9323a250a6634222a7ff79a545830236" },
      }
    );
    console.log(res);
  };

  return (
    <TableBody>
      <TableRow></TableRow>
    </TableBody>
  );
};
