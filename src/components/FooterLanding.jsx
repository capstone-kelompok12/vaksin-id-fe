import React from "react";
import { Box, Typography, Container, Stack, Link, lighten, IconButton } from "@mui/material";
import Logo from "../assets/img/logo-vaksin-id-with-name.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import theme from "../themes";
import useCurrentScreen from "../hooks/useCurrentScreen";

const FooterLanding = () => {
  const {mobile, tablet} = useCurrentScreen()
  return (
    <>
      <Box
        sx={{
          background: theme.color.greenOpaque,
          mt: 6
        }}
      >
        <Container>
          <Stack 
            direction='row'
            sx={{
              justifyContent: 'space-between',
              alignItems: 'start',
              py: 6
            }}
          >
            <Stack direction={(mobile || tablet) ? 'column' : 'row'} spacing={2}>
              <Link underline="hover">
                Syarat dan Ketentuan
              </Link>
              <Link underline="hover">
                Kebijakan Privasi
              </Link>
            </Stack>

            <img
              width={68}
              height={68}
              src={Logo}
              alt="logo-vaksin-id"
            />

            <Stack spacing={3} sx={{alignItems: 'end', color: 'primary.main'}}>
              <Stack direction={'row'} spacing={1}>
                <IconButton color="inherit">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="inherit">
                  <FacebookRoundedIcon />
                </IconButton>
                <IconButton color="inherit">
                  <InstagramIcon />
                </IconButton>
              </Stack>
              <Typography sx={{color: lighten('#000', 0.2)}}>&copy; VAKSIN.ID. All rights reserved.</Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default FooterLanding;
