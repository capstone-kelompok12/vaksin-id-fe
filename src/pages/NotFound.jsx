import React, { useEffect, useState } from "react";
import NotFoundImg from "../assets/img/notfound.png";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import Auth from "../utils/Auth";

const NotFound = () => {
  const [counter, setCounter] = useState(5)
  const authStatus = Auth.isAuthorized()

  useEffect(() =>{
    setTimeout(() =>{
      if(counter > 0){
        setCounter(counter-1)
      }
    }, 1000)
  },[counter])

  if(counter === 0) return <Navigate to={authStatus ? '/dashboard' : '/'} replace />

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          height: '100vh'
        }}
      >
        <img
          src={NotFoundImg}
          alt=""
          style={{
            width: "40%",
          }}
        />
        <Typography
          sx={{
            fontWeight: "bold",
            textAlign: 'center'
          }}
          variant="h6"
        >
          Halaman yang kamu cari gak ada nih
          <Typography
            sx={{
                fontSize: 20
            }}>
                Kamu akan dialihkan ke Beranda dalam {counter} detik...
          </Typography>
        </Typography>
        
      </Container>
    </>
  );
};

export default NotFound;
