import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ToolCenter from "./Center/ToolCenter/ToolCenter";
import GUI from "../../../GUI.config";
import Settingbox from "./Float/Settingbox/Settingbox";

export default function TpMain() {
  return (
    <Grid
      container
      direction="column"
      height={GUI.Toolpage._self.height}
      position="relative"
    >
      <Grid item xs={12}>
        <ToolCenter />
      </Grid>
      <Settingbox />
    </Grid>
  );
}
