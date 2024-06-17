import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { Divider } from "@mui/material";
function TabComponents({ value, handleChange, labeltab }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
        sx={{
          "& .MuiButtonBase-root": {
            color: "oklch(var(--bc))",
            fontWeight: "bold",
          },
          ".MuiTabs-indicator": {
            backgroundColor: "oklch(var(--in))",
            height: "5px",
          },
        }}
      >
        {labeltab.map((label, index) => (
          <Tab key={index} label={label.label} />
        ))}
      </Tabs>
      <Divider />
      <Box sx={{ height: "10px" }} />
    </Box>
  );
}

export default TabComponents;
