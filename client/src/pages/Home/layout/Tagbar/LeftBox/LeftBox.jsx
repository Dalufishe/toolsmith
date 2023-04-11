import { Box } from "@mui/material";
import React from "react";
import SortBox from "./SortBox/SortBox";
import LicenseBox from "./LicenseBox/LicenseBox";

export default function LeftBox() {
  return (
    <Box>
      <SortBox />
      <LicenseBox />
    </Box>
  );
}
