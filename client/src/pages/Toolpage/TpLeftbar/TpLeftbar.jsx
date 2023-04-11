import { Box, Grid, Slide, Stack } from "@mui/material";
import React from "react";
import Apis from "./Center/Apis/Apis";
import Scripts from "./Bottom/Scripts/Scripts";
import Libraries from "./Top/Libraries/Libraries";
import GUI from "../../../GUI.config";

export default function TpLeftbar() {
  return (
    <Slide in direction="up">
      <Grid
        container
        direction="column"
        wrap="no-wrap"
        sx={{
          height: GUI.Toolpage._self.height,
        }}
      >
        <Grid item xs={4.5} maxHeight="37.5%">
          <Libraries />
        </Grid>
        <Grid item xs={4.5} maxHeight="37.5%">
          <Apis />
        </Grid>
        <Grid item xs={3} maxHeight="25%">
          <Scripts />
        </Grid>
      </Grid>
    </Slide>
  );
}
