import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const MainLayout = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row", // Stack content vertically on small screens
        margin: "0 auto",
        maxWidth: "1200px",
        padding: "0 20px",
        width: "100%",
      }}
    >
      {/* Sidebar is always visible, even on small screens */}
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: "1rem",
          width: "100%",
          marginTop: isSmallScreen ? "20px" : "0",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
