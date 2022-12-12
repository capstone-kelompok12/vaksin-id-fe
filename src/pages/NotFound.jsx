import React from "react";
import NotFoundImg from "../assets/img/notfound.png";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

const NotFound = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          marginTop: 20,
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
          }}
          variant="h6"
        >
          Halaman yang kamu cari gak ada nih
        </Typography>
        <Typography
        sx={{
            marginTop: -3,
            fontSize: 20
        }}>
            Kamu akan dialihkan ke Beranda dalam 3 detik...
        </Typography>
      </Container>
    </>
  );
};

export default NotFound;
