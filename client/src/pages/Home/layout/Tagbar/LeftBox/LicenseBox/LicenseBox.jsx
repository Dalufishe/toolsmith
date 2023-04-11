import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function LicenseBox() {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ ml: 2.5, minWidth: 90 }} size="small">
      <InputLabel>協議</InputLabel>
      <Select value={value} label="種類" onChange={handleChange}>
        <MenuItem value={10}>CC</MenuItem>
        <MenuItem value={20}>MIT</MenuItem>
        <MenuItem value={30}>GPL</MenuItem>
      </Select>
    </FormControl>
  );
}
