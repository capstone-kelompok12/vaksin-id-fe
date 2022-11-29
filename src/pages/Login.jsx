import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  InputAdornment,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { createTheme } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import Logo from "../assets/vaksin-id-logo.png";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

const LoginPage = () => {

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const theme = createTheme({
    palette: {
      secondary: {
        main: teal[300],
      },
    },
  });

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#e0f2f1",
            height: 750,
            width: 500,
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
            }}
            variant="h5"
          >
            Kelola Fasilitas
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              marginLeft: 10,
              width: 250,
              paddingTop: 2,
            }}
            variant="body1"
          >
            Terima book? Atur Stok Vaksin? Anda dapat mengelolanya dengan mudah
            disini
          </Typography>
        </Box>
        <br />
        <Box
          sx={{
            marginLeft: 30,
            marginTop: 35,
          }}
        >
          <img
            style={{
              width: "200px",
              marginLeft: 200,
              marginTop: -200,
            }}
            src={Logo}
            alt=""
            srcset=""
          />
          <TextField
            sx={{
              marginBottom: 5,
              width: 600,
            }}
            id="outlined-basic"
            label="Nama Pengguna"
            variant="outlined"
            placeholder="Masukkan Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <br />
          <TextField
            sx={{
              width: 600,
            }}
            id="outlined-basic"
            label="Kata Sandi"
            variant="outlined"
            placeholder="Masukkan Kata Sandi"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <br />
          <Typography
            sx={{
              marginTop: 2,
              color: "green",
            }}
          >
            <a
              href="/"
              style={{
                textDecoration: "none",
              }}
            >
              Lupa Kata Sandi?
            </a>
          </Typography>
          <Button
            sx={{
              marginTop: 7,
              marginLeft: 20,
              borderRadius: 8,
              width: 300,
            }}
            variant="contained"
            color="success"
          >
            Masuk
          </Button>
        </Box>
      </Box>
    </>
  );
};


export default LoginPage;
