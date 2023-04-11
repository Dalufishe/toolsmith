import { Box, Chip, Divider, Grid, Paper, Stack } from "@mui/material";
import React from "react";
import GUI from "../../../../GUI.config";
import Tagbox from "./Tagbox/Tagbox";
import DetailbarBase from "./DetailbarBase/DetailbarBase";
import RightBox from "./RightBox/RightBox";
import LeftBox from "./LeftBox/LeftBox";

export default function Tagbar() {
  return (
    <DetailbarBase
      left={<LeftBox />}
      center={<Tagbox />}
      right={<RightBox />}
    />
  );
}
