import React from "react";
import { Stack } from "@mui/system";
import { Card, Container, Typography } from "@mui/material";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import BloodtypeRoundedIcon from "@mui/icons-material/BloodtypeRounded";
import EventIcon from "@mui/icons-material/Event";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

const facilitiesLanding = () => {
  return (
    <>
      <Container>
        <Stack
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "row",
            gap: 4,
          }}
        >
          <Card
            sx={{
              width: 350,
              padding: 4,
              borderRadius: 5,
            }}
          >
            <HealthAndSafetyIcon
              sx={{
                fontSize: 40,
              }}
            />
            <br />
            <Typography
              sx={{
                marginTop: -10,
              }}
              variant="p"
              fontSize={22}
              fontWeight={400}
            >
              Temukan fasilitas kesehatan penyelenggara vaksinasi terdekat
            </Typography>
          </Card>
          <Card
            sx={{
              width: 350,
              padding: 4,
              borderRadius: 5,
            }}
          >
            <BarChartRoundedIcon
              sx={{
                fontSize: 40,
              }}
            />
            <br />
            <Typography
              sx={{
                marginTop: -10,
              }}
              variant="p"
              fontSize={22}
              fontWeight={400}
            >
              Dapatkan informasi ketersediaan vaksin di Indonesia.{" "}
            </Typography>
          </Card>
          <Card
            sx={{
              width: 350,
              padding: 4,
              borderRadius: 5,
            }}
          >
            <BloodtypeRoundedIcon
              sx={{
                fontSize: 40,
              }}
            />
            <br />
            <Typography
              sx={{
                marginTop: -10,
              }}
              variant="p"
              fontSize={22}
              fontWeight={400}
            >
              Book vaksinasi dengan jenis vaksin pilihan Anda.{" "}
            </Typography>
          </Card>
        </Stack>

        <Stack
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "row",
            gap: 4,
          }}
        >
          <Card
            sx={{
              width: 300,
              padding: 4,
              borderRadius: 5,
            }}
          >
            <EventIcon
              sx={{
                fontSize: 40,
              }}
            />
            <br />
            <Typography
              sx={{
                marginTop: -10,
              }}
              variant="p"
              fontSize={22}
              fontWeight={400}
            >
              Temukan fasilitas kesehatan penyelenggara vaksinasi terdekat
            </Typography>
          </Card>
          <Card
            sx={{
              width: 700,
              padding: 4,
              borderRadius: 5,
            }}
          >
            <ConfirmationNumberIcon
              sx={{
                fontSize: 40,
              }}
            />
            <br />
            <Typography
              sx={{
                marginTop: -10,
              }}
              variant="p"
              fontSize={22}
              fontWeight={400}
            >
              Nikmati kemudahan mendapatkan kuota vaksinasi dengan hanya satu
              tiket untuk seluruh anggota keluarga{" "}
            </Typography>
          </Card>
        </Stack>
      </Container>
    </>
  );
};

export default facilitiesLanding;
