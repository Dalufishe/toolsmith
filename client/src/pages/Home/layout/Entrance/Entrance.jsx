import { Grid } from "@mui/material";
import React, { useState } from "react";
import Door from "./Door/Door";
import tools_api from "../../../../api/tools/tools";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Entrance() {
  const [doors, setDoors] = useState([]);
  // 取得 "tools-data" 用於渲染 doors
  useEffect(() => {
    tools_api.getTools("", "default").then((res) => {
      setDoors(res.data);
    });
  }, []);
  return (
    <Grid container p={5}>
      {doors.map((options) => (
        <Grid key={options.id} item xs={4} className="flex-center" my={4}>
          <Door {...options} />
        </Grid>
      ))}
    </Grid>
  );
}
