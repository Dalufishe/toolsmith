import { Link, Paper, TableCell, TableRow, Typography } from "@mui/material";
import React from "react";

export default function LibarayTableItem({ data }) {
  return (
    <TableRow
      component={Paper}
      key={data.version}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <TableCell component="th" scope="row">
        <Typography variant="body2" color="text.secondary">
          ver. {data.version}
        </Typography>
      </TableCell>
      <TableCell align="right" component="th" scope="row">
        <Typography variant="body2" color="text.secondary">
          <Link color="inherit" href={data.link}>
            鏈接
          </Link>
        </Typography>
      </TableCell>
    </TableRow>
  );
}
