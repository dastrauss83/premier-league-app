import { Table, TableCell, TableContainer, TableRow } from "@material-ui/core";
import { TableData } from "./TableData";

import { TableHeaders } from "./TableHeaders";

export const MainTable: React.FC = () => {
  return (
    <TableContainer>
      <Table>
        <TableHeaders />
        <TableData />
      </Table>
    </TableContainer>
  );
};
