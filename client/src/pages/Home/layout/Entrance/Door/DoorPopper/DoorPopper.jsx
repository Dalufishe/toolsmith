import { Box, Paper } from "@mui/material";
import React, { useState } from "react";
import GUI from "../../../../../../GUI.config";
import PropTypes from "prop-types";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Intro from "./Intro/Intro";
import Setting from "./Setting/Setting";
import Plugin from "./Plugin/Plugin";
import DoorPopperNav from "./DoorPopperNav/DoorPopperNav";
import DoorPopperTab from "./DoorPopperTab/DoorPopperTab";
import DoorPopperTop from "./DoorPopperTop/DoorPopperTop";
import { connect } from "react-redux";
import door_popup_action from "../../../../../../redux/action/Toolpage/door_popup_action";

function DoorPopper({ id, route = true, popup }) {
  const history = useHistory();
  const [now, setNow] = useState("intro");
  return (
    <Paper>
      <Box
        height={GUI.Home.entrance._self.height}
        overflow="auto"
        position="relative"
      >
        <Box p={2}>
          {/* Top */}
          <DoorPopperTop id={id} />
          {/* Bottom */}
          {route ? (
            <>
              <DoorPopperNav
                onChange={(type) => {
                  history.push(`/tools/prev/${id}/${type}`);
                }}
              />
              <Switch>
                <Route path="/tools/prev/:id/intro" component={Intro} />
                <Route path="/tools/prev/:id/plugin" component={Plugin} />
                <Route path="/tools/prev/:id/setting" component={Setting} />
                <Redirect
                  exact
                  from="/tools/prev/:id"
                  to="/tools/prev/:id/intro"
                />
              </Switch>
            </>
          ) : (
            <>
              <DoorPopperNav
                onChange={(type) => {
                  setNow(type);
                }}
              />
              {now === "intro" && <Intro />}
              {now === "plugin" && <Plugin />}
              {now === "setting" && <Setting />}
            </>
          )}
        </Box>
        {/* Floating */}
        {route ? (
          <DoorPopperTab
            start
            onStart={() => {
              history.push(`/tool/${id}`);
            }}
            cancle
            onCancle={() => {
              history.push(`/tools`);
            }}
          />
        ) : (
          <DoorPopperTab
            start={false}
            cancle
            onCancle={() => {
              popup(null);
            }}
          />
        )}
      </Box>
    </Paper>
  );
}

DoorPopper.propTypes = {
  id: PropTypes.number,
};

const mapDispatchToProps = {
  popup: door_popup_action,
};

export default connect(null, mapDispatchToProps)(DoorPopper);
