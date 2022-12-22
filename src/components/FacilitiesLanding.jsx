import React from "react";
import { Stack } from "@mui/system";
import { Card, Container, Grid, Typography } from "@mui/material";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import BloodtypeRoundedIcon from "@mui/icons-material/BloodtypeRounded";
import EventIcon from "@mui/icons-material/Event";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import useCurrentScreen from "../hooks/useCurrentScreen";

const FacilitiesLanding = () => {
  const {mobile} = useCurrentScreen()

  const cards = [
    {
      id: 1,
      size: mobile ? 6 :  4,
      icon: <HealthAndSafetyIcon fontSize='large'/>,
      text: 'Temukan fasilitas kesehatan penyelenggara vaksinasi terdekat'
    },
    {
      id: 2,
      size: mobile ? 6 :  4,
      icon: <BarChartRoundedIcon fontSize='large'/>,
      text: 'Dapatkan informasi ketersediaan vaksin di Indonesia.'
    },
    {
      id: 3,
      size: mobile ? 6 :  4,
      icon: <BloodtypeRoundedIcon fontSize='large' />,
      text: 'Book vaksinasi dengan jenis vaksin pilihan Anda.'
    },
    {
      id: 4,
      size: mobile ? 6 :  4,
      icon: <EventIcon fontSize='large' />,
      text: 'Pilih waktu dan lokasi vaksinasi sesuai keinginan Anda'
    },
    {
      id: 5,
      size: mobile ? 12 : 8,
      icon: <ConfirmationNumberIcon fontSize='large' />,
      text: 'Nikmati kemudahan mendapatkan kuota vaksinasi dengan hanya satu tiket untuk seluruh anggota keluarga'
    },
  ]

  return (
    <Container sx={{flexGrow: 1}}>
      <Grid container spacing={2}>
        {cards.map(item =>{
          const {id, size, icon, text} = item
          return(
            <Grid key={id} item xs={size}>
              <Card
                elevation={3}
                sx={{
                  height: mobile ? 220 : 200,
                  borderRadius: 4,
                  p: 4,
                }}
              >
                <Stack spacing={2}>
                  {icon}
                  <Typography
                    variant="h6"
                    fontWeight={400}
                  >
                    {text}
                  </Typography>
                </Stack>
              </Card>            
            </Grid>
          )
        })}
      </Grid>
    </Container>
  );
};

export default FacilitiesLanding;
