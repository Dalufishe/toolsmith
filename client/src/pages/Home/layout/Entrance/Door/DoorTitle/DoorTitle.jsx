import { Link } from "@mui/material";
import React from "react";

export default function DoorTitle({ name, onClick }) {
  return (
    <Link
      onClick={(evt) => {
        evt.stopPropagation();
        onClick();
      }}
      color="inherit"
      underline="hover"
      sx={{ cursor: "pointer" }}
    >
      {name}
    </Link>
  );
}
