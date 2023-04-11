import { Box, Drawer, Grid } from "@mui/material";
import React, { useEffect } from "react";
import GUI from "../../GUI.config";
import TpLeftbar from "./TpLeftbar/TpLeftbar";
import TpMain from "./TpMain/TpMain";
import TpRightbar from "./TpRightbar/TpRightbar";
import { connect } from "react-redux";
import { get_tools_s_data_action } from "../../redux/action/Home/get_tools_data_action";

function Toolpage(props) {
  const id = Number(props.match.params.id);
  useEffect(() => {
    props.getToolData(id);
  }, [id]);
  return (
    <Grid container>
      {/* xs - lg */}
      <Drawer
        open
        PaperProps={{
          sx: {
            justifyContent: "flex-end",
            width: "30vw",
          },
        }}
        sx={{
          display: {
            xs: "flex",
            xl: "none",
          },
        }}
      >
        <TpLeftbar />
      </Drawer>
      {/* xl */}
      <Grid
        item
        xl={2.5}
        sx={{
          display: {
            xs: "none",
            xl: "block",
          },
        }}
      >
        <TpLeftbar />
      </Grid>
      {/*  */}
      <Grid item xs={8} xl={6.5}>
        <TpMain id={id} />
      </Grid>
      {/*  */}
      <Grid item xs={4} xl={3}>
        <TpRightbar />
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = {
  getToolData: get_tools_s_data_action,
};

export default connect(null, mapDispatchToProps)(Toolpage);
