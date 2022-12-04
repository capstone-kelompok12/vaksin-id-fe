import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, IconButton, Stack, Typography } from "@mui/material";
// import { Container } from "@mui/system";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import UserAvatar from "./UserAvatar";

const Navbar = () => {
  const { pathname } = useLocation();
  const heading = pathname.slice(1).replaceAll("-", " ").toUpperCase();
  const [scrolled, setScrolled] = useState(false);

  const addShadow = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", addShadow);

  return (
    <Box
      // maxWidth="xl"
      sx={{
        position: "sticky",
        top: 0,
        minHeight: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        width: "100%",
        "&::WebkitBoxShadow": scrolled
          ? "0 1px 36px 2px rgba(0, 0, 0, 0.07)"
          : "",
        "&::MozBoxShadow": scrolled ? "0 1px 36px 2px rgba(0, 0, 0, 0.07)" : "",
        boxShadow: scrolled ? "0 1px 36px 2px rgba(0, 0, 0, 0.07)" : "",
        px: 2,
        pt: 2,
        zIndex: 999
      }}
    >
      <Stack direction={"row"} spacing={2} alignItems="center">
        {/* <IconButton 
          onClick={() => dispatch(toggleSidebar()) }
          size="large"
        >
          <MenuRoundedIcon fontSize="inherit" />
        </IconButton> */}
        <Typography variant="h5">
          {heading !== "" ? heading : "DASHBOARD"}
        </Typography>
      </Stack>

      <Stack direction={"row"} spacing={2} alignItems="center">
        <IconButton aria-label="toggle-sidebar" size="large">
          <NotificationsNoneOutlinedIcon
            /*color='danger'*/ fontSize="inherit"
          />
        </IconButton>
        <Typography>Hi, Admin!</Typography>
        <UserAvatar />
      </Stack>
    </Box>
  );
};

export default Navbar;
