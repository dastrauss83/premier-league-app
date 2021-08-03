import { TableCell, TableHead, TableRow } from "@material-ui/core";

export const TableHeaders: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Team</TableCell>
        <TableCell align="center">Points</TableCell>
        <TableCell align="center">Played</TableCell>
        <TableCell align="center">Wins</TableCell>
        <TableCell align="center">Draws</TableCell>
        <TableCell align="center">Losses</TableCell>
        <TableCell align="center">Goals For</TableCell>
        <TableCell align="center">Goals Against</TableCell>
      </TableRow>
    </TableHead>
  );
};
