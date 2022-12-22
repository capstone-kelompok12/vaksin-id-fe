import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import UserAvatar from "./UserAvatar";

/**
 * 
 * @param {String} pathname pathname variables returned from useLocation hooks
 * @returns string
 */
export const getHeading = (pathname) =>{
  const location = pathname.split('/')

  if(location.length > 2) {
    const [ ,name] = location[1].split('-')
    const heading = `detail ${name}`.toUpperCase()
    return heading;
  }
  return location[1].replaceAll("-", " ").toUpperCase();
}

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
        <Typography variant="h5">
          {heading !== "" ? getHeading(pathname) : "DASHBOARD"}
        </Typography>
      </Stack>

      <Stack direction={"row"} spacing={2} alignItems="center">
        <IconButton aria-label="toggle-sidebar" size="large">
          <NotificationsNoneOutlinedIcon
            fontSize="inherit"
          />
        </IconButton>
        <Typography>Hi, Admin!</Typography>
        <UserAvatar />
      </Stack>
    </Box>
  );
};

export default Navbar;
