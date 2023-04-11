import React from "react";
import Searchbar from "./layout/Searchbar/Searchbar";
import Entrance from "./layout/Entrance/Entrance";
import Tagbar from "./layout/Tagbar/Detailbar";
import { Box, Grid, Slide } from "@mui/material";
import DoorPopper from "./layout/Entrance/Door/DoorPopper/DoorPopper";
import { Route, Switch } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Searchbar />
      <Tagbar />
      <Grid container>
        <Switch>
          <Route
            exact
            path="/tools"
            render={() => {
              return (
                <Grid item xs={12}>
                  <Entrance />
                </Grid>
              );
            }}
          ></Route>
          <Route
            path="/tools/prev/:id"
            render={(props) => {
              const id = Number(props.match.params.id);
              return (
                <>
                  <Grid item xs={9}>
                    <Entrance />
                  </Grid>
                  <Grid item xs={3}>
                    <Slide in={true} direction="left">
                      <Box>
                        <DoorPopper id={id} />
                      </Box>
                    </Slide>
                  </Grid>
                </>
              );
            }}
          />
        </Switch>
      </Grid>
    </>
  );
}
