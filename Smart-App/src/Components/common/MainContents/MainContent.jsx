// MainContent.js
import * as React from "react";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import RouteComponents from "../../../Route";
import Navbar from "../Navbar/Navbar";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MainContent() {
  return (
    <>
      <Navbar />
      <Box component="div" sx={{ mb: 2 }} />
      <RouteComponents />
    </>
  );
}
