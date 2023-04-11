import { Box, Grid, useTheme } from "@mui/material";
import React from "react";
import { ImBookmark } from "react-icons/im";
import Bookmark from "./Bookmark/Bookmark";
import useHover from "../../../../../../hooks/useHover";

export default function DoorTopbox({ onBookMark }) {
  const theme = useTheme();
  const [hover, isHover] = useHover();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
      ref={hover}
    >
      {/* top */}
      <Grid
        container
        sx={{
          width: "100%",
          height: "40%",
        }}
      >
        <Grid item xs={2}></Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={2}>
          {/* BookMark */}
          {isHover && <Bookmark onBookMark={onBookMark} />}
        </Grid>
      </Grid>
      {/* center */}
      <Grid
        container
        sx={{
          width: "100%",
          height: "60%",
        }}
      >
        <Grid item xs={2}></Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Box>
  );
}
