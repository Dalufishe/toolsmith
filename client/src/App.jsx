import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import Navbar from "./layout/Navbar/Navbar";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import CopyRight from "./layout/CopyRight/CopyRight";
import GUI from "./GUI.config";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Toolpage from "./pages/Toolpage/Toolpage";

const theme = GUI.theme;

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box width="100vw">
          <Navbar />
          <BrowserRouter>
            <Switch>
              <Route path="/tools" component={Home} />
              <Route path="/tool/:id" component={Toolpage} />
              <Redirect exact from="/" to="/tools" />
            </Switch>
          </BrowserRouter>
          <CopyRight />
        </Box>
        <CssBaseline />
      </ThemeProvider>
    </Provider>
  );
}
