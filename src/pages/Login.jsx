import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Typography,
  Button,
  InputAdornment,
  Stack,
  Link,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Logo from "../assets/img/logo-vaksin-id-with-name.png";
import LoginIllustration from '../assets/img/login-illustration.png'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Auth from "../utils/Auth";

const LoginPage = () => {
  const navigate = useNavigate()

  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setValues({ ...values, [name]: value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log({values})
    Auth.login()
    navigate('/dashboard')
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  return (
    <Stack
      direction={'row'}
      sx={{
        height: '100vh'
      }}
    >
      <Stack
        spacing={3}
        sx={{
          width: '40vw',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(0deg, rgba(0, 109, 57, 0.05), rgba(0, 109, 57, 0.05)), #FBFDF7',
          px: 12
        }}
      >
        <img src={LoginIllustration} alt="login-illustration" width={'100%'} style={{marginBottom: '10vh'}}/>
        <Typography variant="h4">
          Kelola Fasilitas
        </Typography>
        <Typography textAlign={'center'} fontSize={18}>
          Terima book? Atur Stok Vaksin? Anda dapat mengelolanya dengan mudah
          disini
        </Typography>
      </Stack>
      <Box
        sx={{
          width: '60vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: 18
        }}
      >
        <img
          onClick={() => navigate('/')}
          style={{
            width: "200px",
          }}
          src={Logo}
          alt=""
          srcset=""
        />
        <Stack spacing={3} sx={{width: '100%', alignItems: 'center'}}>
          <TextField
            variant="outlined"
            label="Email"
            name='email'
            placeholder="Masukkan Email"
            fullWidth
            value={values.email}
            onChange={handleChange}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            label="Kata Sandi"
            name='password'
            placeholder="Masukkan Kata Sandi"
            fullWidth
            onChange={handleChange}
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment:(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    // edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Link element='a' href='#' sx={{alignSelf: 'start'}}>Lupa Kata Sandi?</Link>
          <Button
            type="submit"
            onClick={(e) => {
              handleSubmit(e)
            }}
            sx={{width: 300}}
            variant="contained"
          >
            Masuk
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default LoginPage;
