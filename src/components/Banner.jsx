import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Nurse from "../assets/img/nurse.png";
import theme from '../themes'
import useCurrentScreen from "../hooks/useCurrentScreen";

const Banner = () => {
  const {mobile} = useCurrentScreen()
  return (
    <Box
      disableGutters
      sx={{
        height: "max-content",
        width: "100%",
        background: theme.color.greenOpaque,
        my: 6,
        py: 4,
        mt: mobile ? 20 : 6
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: mobile ? 'column' : "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
        }}
      >
        <img src={Nurse} alt="nurse-img" width={420} />
        <Stack spacing={2}>
          <Typography variant="h3" gutterBottom>
            Nikmati kemudahan book vaksin bersama VAKSIN.ID
          </Typography>
          <Typography variant="p">
            VAKSIN.ID adalah aplikasi yang dikembangkan untuk membantu program pemerintah dalam melakukan tindakan preventif penghentian penyebaran Coronavirus Disease (COVID-19).
          </Typography>
          <Typography variant="p">
            Sebagai upaya untuk memberikan pelayanan terbaik, kami telah bekerja sama dengan fasilitas kesehatan yang tersebar di seluruh Indonesia sehingga pemerataan vaksinasi dapat lebih mudah menjangkau seluruh warga negara Indonesia. 
          </Typography>
          <Typography variant="p">
            Jangan ragu untuk segera merencanakan vaksinasi pilihan Anda hanya dalam beberapa klik lewat aplikasi VAKSIN.ID!
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Banner;
