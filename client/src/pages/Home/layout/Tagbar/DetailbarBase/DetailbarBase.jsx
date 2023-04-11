import { Box, Chip, Divider, Grid, Paper, Stack } from "@mui/material";
import React from "react";
import GUI from "../../../../../GUI.config";

export default function DetailbarBase({ left, center, right }) {
  return (
    <Paper
      sx={{
        position: "sticky",
        top: GUI.navbar._self.height,
        zIndex: 100,
      }}
      elevation={5}
      square
    >
      <Grid container height={GUI.Home.tagbar._self.height}>
        <Grid item xs={3} xl={1.9} className="flex-center">
          {left}
        </Grid>
        <Grid item xs={1} xl={0.1} className="flex-center">
          <Divider orientation="vertical" variant="middle" flexItem />
        </Grid>
        <Grid item xs={4} xl={8} className="flex-start" overflow="hidden">
          {center}
        </Grid>
        <Grid item xs={1} xl={0.1} className="flex-center">
          <Divider orientation="vertical" variant="middle" flexItem />
        </Grid>
        <Grid item xs={3} xl={1.9} className="flex-center">
          {right}
        </Grid>
      </Grid>
    </Paper>
  );
}
