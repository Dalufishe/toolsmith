import {
  Box,
  Card,
  CardContent,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import CusHeader from "../../../../../components/CusHeader";
import CusHeader2 from "../../../../../components/CusHeader2";
import LibarayTableItem from "./LibarayTableItem/LibarayTableItem";
import { connect } from "react-redux";

function Libraries({ libaray_data }) {
  return (
    <Paper sx={{ height: "100%" }}>
      <Stack
        p={2}
        sx={{
          height: "100%",
        }}
      >
        <CusHeader2>函式庫</CusHeader2>
        <Card raised sx={{ flexGrow: 1, p: 2, overflow: "auto" }}>
          <TableContainer
            sx={{
              height: "100%",
              backgroundColor: "background.paper",
            }}
          >
            <Table size="small">
              <TableHead
                sx={{
                  position: "sticky",
                  top: 0,
                  backgroundColor: "background.paper",
                }}
              >
                <TableRow>
                  <TableCell>版本號</TableCell>
                  <TableCell align="right">下載</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {libaray_data?.map((data) => (
                  <LibarayTableItem data={data} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Stack>
    </Paper>
  );
}

const mapStateToProps = (state) => {
  return {
    libaray_data: state.get_tools_s_data_reducer.data.libraries,
  };
};

export default connect(mapStateToProps)(Libraries);
