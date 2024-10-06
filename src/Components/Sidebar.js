// Sidebar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { List, ListItem, ListItemText, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const Sidebar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawerContent = (
    <List>
      <ListItem
        button
        component={NavLink}
        to="/"
        exact
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#f0f0f0" : "transparent",
        })}
        onClick={() => setOpen(false)} // Close drawer on item click in mobile
      >
        <ListItemText primary="Snippet Manager" />
      </ListItem>

      <ListItem
        button
        component={NavLink}
        to="create-snippet"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#f0f0f0" : "transparent",
        })}
        onClick={() => setOpen(false)} // Close drawer on item click in mobile
      >
        <ListItemText primary="Create Snippet" />
      </ListItem>

      <ListItem
        button
        component={NavLink}
        to="snippet-list"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#f0f0f0" : "transparent",
        })}
        onClick={() => setOpen(false)} // Close drawer on item click in mobile
      >
        <ListItemText primary="Snippet List" />
      </ListItem>
    </List>
  );

  return (
    <>
      {isSmallScreen && (
        <IconButton
          onClick={toggleDrawer}
          sx={{ position: "fixed", top: 10, left: 10, zIndex: 1200 }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        variant={isSmallScreen ? "temporary" : "permanent"}
        open={isSmallScreen ? open : true}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Improve performance on mobile
        }}
        sx={{
          width: isSmallScreen ? "240px" : "250px",
          "& .MuiDrawer-paper": {
            width: isSmallScreen ? "240px" : "250px",
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
