import { Box, Link } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const NavItem = ({
  children,
  onClick,
  color = "inherit",
  underline = "hover",
}) => {
  return (
    <Link
      color={color}
      underline={underline}
      sx={{
        p: 1.5,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

NavItem.propTypes = {
  color: PropTypes.string,
  underline: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  onClick: PropTypes.func,
};

export default function DoorPopperNav({ onChange }) {
  const history = useHistory();
  const pathname = history.location.pathname;
  const pathname_last = pathname.split("/")[pathname.split("/").length - 1];

  return (
    <Box className="flex-space-around">
      <NavItem
        color={pathname_last === "intro" ? "inherit" : "text.secondary"}
        underline={pathname_last === "intro" ? "always" : "hover"}
        onClick={() => {
          onChange("intro");
        }}
      >
        簡介
      </NavItem>
      <NavItem
        color={pathname_last === "plugin" ? "inherit" : "text.secondary"}
        underline={pathname_last === "plugin" ? "always" : "hover"}
        onClick={() => {
          onChange("plugin");
        }}
      >
        擴充
      </NavItem>
      <NavItem
        color={pathname_last === "setting" ? "inherit" : "text.secondary"}
        underline={pathname_last === "setting" ? "always" : "hover"}
        onClick={() => {
          onChange("setting");
        }}
      >
        設置
      </NavItem>
    </Box>
  );
}

DoorPopperNav.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
