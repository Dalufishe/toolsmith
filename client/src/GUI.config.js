import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const GUI = new Object();

// Global
// ? MUI theme system
GUI.theme = createTheme({
  palette: {
    mode: "dark",

    // custom
    border: grey[600],
    border2: grey[800],
  },
});
GUI.name = {
  english: "Tool Smith",
  tchinese: "工具匠",
};
GUI.navbar = {
  _self: {
    height: 64,
  },
};

// Home
GUI.Home = new Object();
GUI.Home.searchbar = {
  _self: {
    height: 72,
    outerHeight: 188,
  },
}; // * Home
GUI.Home.tagbar = {
  _self: {
    height: 56,
  },
};
GUI.Home.entrance = {
  _self: {
    height: `calc(100vh - 
      ${GUI.Home.searchbar._self.outerHeight}px - 
      ${GUI.navbar._self.height}px - 
      ${GUI.Home.tagbar._self.height}px)`,
  },
};

// ToolPage
GUI.Toolpage = new Object();
GUI.Toolpage = {
  _self: {
    height: `calc(100vh - 
      ${GUI.navbar._self.height}px)`,
  },
};

export default GUI;
