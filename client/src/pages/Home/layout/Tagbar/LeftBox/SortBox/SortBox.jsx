import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function SortBox() {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ ml: 2.5, minWidth: 90 }} size="small">
      <InputLabel>分類</InputLabel>
      <Select value={value} label="種類" onChange={handleChange}>
          <MenuItem value={10}>推薦</MenuItem>
          <MenuItem value={20}>程序類</MenuItem>
          <MenuItem value={30}>文書類</MenuItem>
      </Select>
    </FormControl>
  );
}
