import React from "react";
import {
  Typography,
  Stack,
  useMediaQuery,
} from "@mui/material";
import LoginForm from "../components/LoginForm";
import LoginIllustration from '../assets/img/login-illustration.png'

const LoginPage = () => {
  const tablet = useMediaQuery('(max-width: 920px)')
  return (
    <Stack
      direction={'row'}
      sx={{
        height: '100vh'
      }}
    >
      {!tablet &&
        <Stack
          spacing={12}
          sx={{
            width: '40vw',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(0deg, rgba(0, 109, 57, 0.05), rgba(0, 109, 57, 0.05)), #FBFDF7',
            px: 12
          }}
        >
          <img src={LoginIllustration} alt="login-illustration" width={'100%'}/>
          <Stack>
            <Typography textAlign={'center'} variant="h4">
              Kelola Fasilitas
            </Typography>
            <Typography textAlign={'center'} fontSize={18}>
              Terima book? Atur Stok Vaksin? Anda dapat mengelolanya dengan mudah
              disini
            </Typography>
          </Stack>
        </Stack>
      }
      <LoginForm />
    </Stack>
  );
};

export default LoginPage;
