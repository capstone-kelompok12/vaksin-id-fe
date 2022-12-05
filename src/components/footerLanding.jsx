import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import Logo from "../assets/img/logo-vaksin-id-with-name.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright';


const footerLanding = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: 110,
          backgroundColor: "#b2dfdb",
        }}
      >
        <Container
          sx={{
            paddingTop: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
            }}
          >
            <Button
              sx={{
                fontSize: 14,
                color: "#006D39",
              }}
              variant="text"
            >
              Syarat dan Ketentuan
            </Button>
            <Button
              sx={{
                fontSize: 14,
                color: "#006D39",
              }}
              variant="text"
            >
              Kebijakan Privasi
            </Button>
            <img
              style={{
                justifyContent: "center",
                marginLeft: 150,
                marginTop: -20,
              }}
              width={"60px"}
              height={"60px"}
              src={Logo}
              alt=""
            />
            <Box
              sx={{
                display: "flex",
                gap: 3,
                marginLeft: 40,
                color: "#006D39",
              }}
            >
              <TwitterIcon />
              <FacebookRoundedIcon />
              <InstagramIcon />
            </Box>
          </Box>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              fontSize: 14,
              marginTop: 2,
              marginLeft: 115,
              color: "#5C5F5B",
            }}
          >
            <CopyrightIcon />
            VAKSIN.ID. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default footerLanding;
