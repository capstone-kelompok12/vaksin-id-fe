import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Nurse from "../assets/img/nurse.png";
import Brosur from "./Brosur";
import FacilitiesLanding from "../components/facilitiesLanding";

const Banner = () => {
  return (
    <Container
      disableGutters
      sx={{
        height: "87vh",
        width: "100%",
        my: 6,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
          backgroundColor: "#F0EFFF",
        }}
      >
        <img src={Nurse} alt="nurse-img" width={380} />
        <Box sx={{ px: 5 }}>
          <Typography variant="h3" gutterBottom>
            Nikmati kemudahan book vaksin bersama VAKSIN.ID
          </Typography>
          <Typography variant="p">
            Kami telah bekerja sama dengan fasilitas kesehatan di seluruh
            Indonesia. Jangan ragu untuk segera merencanakan vaksinasi pilihan
            Anda hanya dalam beberapa klik lewat aplikasi VAKSIN.ID!
          </Typography>
        </Box>
      </Box>
      <FacilitiesLanding/>
      <Brosur />
    </Container>
  );
};

export default Banner;
