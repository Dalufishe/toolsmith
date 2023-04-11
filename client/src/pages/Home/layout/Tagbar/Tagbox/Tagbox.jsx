import { Chip, Divider, Stack } from "@mui/material";
import React from "react";

export default function Tagbox() {
  return (
    <Stack direction="row" alignItems="center" gap={1} px={3} >
      <Chip label="abc" onDelete={() => {}} />
      <Chip label="efg" onDelete={() => {}} />
    </Stack>
  );
}
