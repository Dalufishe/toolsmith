import React from "react";
import Input from "@mui/material/Input";
import { Box, Grid, Paper, useTheme } from "@mui/material";
import { ImSearch } from "react-icons/im";
import { css } from "@emotion/css";
import GUI from "../../../../../GUI.config";

export default function SearchbarBase(props) {
  const theme = useTheme();
  const borderCss = `1.5px solid ${theme.palette.border}`;
  return (
    <Paper
      elevation={5}
      square
    >
      <Box
        className="flex-center"
        sx={{
          p:
            (GUI.Home.searchbar._self.outerHeight -
              GUI.Home.searchbar._self.height) /
            (2 * 8),
        }}
      >
        <Grid container width="95%" height={GUI.Home.searchbar._self.height}>
          <Grid
            item
            component="label"
            htmlFor="searchbar"
            className="flex-center"
            lg={1}
            md={1}
            xs={3}
            sx={{
              border: borderCss,
              borderRight: 0,
              borderRadius: "30px 0px 0px 30px",
            }}
          >
            {props.left}
          </Grid>
          <Grid item md={6} lg={8} xs={9}>
            <Input
              placeholder={props.placeholder}
              id="searchbar"
              type="text"
              fullWidth
              disableUnderline
              sx={{
                border: borderCss,
                borderLeft: 0,
                borderRadius: { xs: "0px 30px 30px 0px", md: 0 },
                pl: 0,
                fontSize: "150%",
                height: "100%",
              }}
            />
          </Grid>
          <Grid
            item
            className="flex-center"
            display={{ xs: "none", md: "flex" }}
            md={5}
            lg={3}
            sx={{
              border: borderCss,
              borderLeft: 0,
              borderRadius: "0px 30px 30px 0px",
            }}
          >
            {props.right}
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
