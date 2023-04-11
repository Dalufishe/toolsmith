import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineTool } from "react-icons/ai";
import { HiCommandLine } from "react-icons/hi2";
import { MdAutorenew } from "react-icons/md";

const options = [
  {
    _id: 0,
    name: "自動",
    icon: <MdAutorenew className="medium-icon" />,
  },
  {
    _id: 1,
    name: "工具",
    icon: <AiOutlineTool className="medium-icon" />,
  },
  {
    _id: 2,
    name: "指令",
    icon: <HiCommandLine className="medium-icon" />,
  },
];

export default function SearchOptionBox() {
  const [alignment, setAlignment] = useState(options[0].name || null);
  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      {options.map((item) => (
        <ToggleButton key={item._id} value={item.name}>
          <Typography variant="body2" mr={0.5}>
            {item.name}
          </Typography>
          {item.icon}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
