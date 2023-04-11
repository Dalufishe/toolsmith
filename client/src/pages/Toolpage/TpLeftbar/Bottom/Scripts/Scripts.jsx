import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  Paper,
  Stack,
} from "@mui/material";
import React from "react";
import CusHeader from "../../../../../components/CusHeader";
import CusDivider from "../../../../../components/CusDivider";
import { MdExpandMore } from "react-icons/md";
import CusHeader2 from "../../../../../components/CusHeader2";

export default function Scripts() {
  return (
    <Paper sx={{ height: "100%" }}>
      <Stack p={2} height="100%">
        <CusHeader2 onClick={() => {}}>腳本</CusHeader2>
        <Card raised sx={{ flexGrow: 1 }}>
          <Box></Box>
        </Card>
      </Stack>
    </Paper>
  );
}
