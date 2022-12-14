import React, { useState } from 'react'
import { Box, Button, CircularProgress, IconButton, InputAdornment, Link, Stack, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Logo from "../assets/img/logo-vaksin-id-with-name.png";
import APIAuth from '../apis/auth.api';
import Auth from '../utils/Auth';
import { useEffect } from 'react';

const INITIAL_VALUE = {
  email: '',
  password: '',
  showPassword: false,
}

const INITIAL_ERROR = {
  email: '',
  password: ''
}

const LoginForm = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState(INITIAL_VALUE);
  const [error, setError] = useState(INITIAL_ERROR)
  const [allowSubmit, setAllowSubmit] = useState(false)
  
  const valid = Boolean(error.email === '' && error.password === '')

  const handleChange = (e) => {
    // eslint-disable-next-line no-useless-escape
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    setError(INITIAL_ERROR)

    const {name, value} = e.target
    setValues({ ...values, [name]: value });
    
    if(name === 'email'){
      if(!emailPattern.test(value)){
        setError({
          ...error,
          email: 'Email tidak valid!'
        })
      }else{
        setError({
          ...error,
          email: ''
        })
      }
    }
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    const formData = {...values}
    delete formData.showPassword
    const {email, password} = formData

    if(email === ''){
      setError({
        ...error,
        email: 'Email harus diisi'
      })
    }

    if(password === ''){
      setError({
        ...error,
        password: 'Password harus diisi'
      })
    }

    if(valid && allowSubmit){
      setLoading(true)

      APIAuth.login(formData)
        .then(({data}) =>{
          setLoading(false)
          Auth.storeToken(data.Token, navigate)
          setError(INITIAL_ERROR)
        })
        .catch(err => {
          setLoading(false)
          const {message} = err.response.data
            
          if(message === 'wrong password'){
            setError({
              ...error,
              password: 'Password salah'
            })
          }
          if(message === 'record not found'){
            setError({
              ...error,
              email: 'Email tidak terdaftar'
            })
          }
        })
    }
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() =>{
    const isFormFilled = Boolean(values.email !== '' && values.password !== '')
    setAllowSubmit(isFormFilled)
  }, [values])

  return (
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
          width: 120,
          cursor: 'pointer',
        }}
        src={Logo}
        alt="logo-vaksin-id"
      />
      <Stack spacing={3} sx={{width: '100%', alignItems: 'center'}}>
        <TextField
          autoFocus
          variant="outlined"
          label="Email"
          name='email'
          placeholder="Masukkan Email"
          fullWidth
          error={error.email !== ''}
          helperText = {error.email}
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
          error={error.password !== ''}
          helperText = {error.password}
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
          disabled={ !allowSubmit || loading }
          onClick={(e) => {
            handleSubmit(e)
          }}
          startIcon={loading ? <CircularProgress size={24} thickness={5} /> : undefined}
          sx={{width: 280}}
          variant="contained"
        >
          Masuk
        </Button>
      </Stack>
    </Box>    
  )
}

export default LoginForm