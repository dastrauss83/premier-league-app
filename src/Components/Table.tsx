import {
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";
import { TableData } from "./TableData";

import { TableHeaders } from "./TableHeaders";

export const Table: React.FC = () => {
  return (
    <TableContainer style={{ marginTop: "200px" }}>
      <Table>
        <TableHeaders />
        <TableBody>
          <TableData />
        </TableBody>
      </Table>
    </TableContainer>
  );
};
