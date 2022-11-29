import React from "react";
import Logo from "../assets/img/vaksin-id-logo.png";
import { Container, Button, Box, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import ImgLandingPage from "../assets/img/ImgLandingPage.png";
import logo1 from "../assets/img/logo1.png";
import logo2 from "../assets/img/logo2.png";
import logo3 from "../assets/img/logo3.png";
import logo4 from "../assets/img/logo4.png";
import logo5 from "../assets/img/logo5.png";
import logo6 from "../assets/img/logo6.png";
import logo7 from "../assets/img/logo7.png";
import logo8 from "../assets/img/logo8.png";
import logo9 from "../assets/img/logo9.png";

const LandingPage = () => {
  const theme = createTheme({
    palette: {
      secondary: {
        main: teal[300],
      },
    },
  });
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <img
          style={{
            width: "100px",
          }}
          src={Logo}
          alt=""
        />
        <Button
          sx={{
            marginTop: -10,
            marginLeft: 35,
            borderRadius: 8,
            width: 100,
          }}
          variant="text"
        >
          Home
        </Button>
        <Button
          sx={{
            marginTop: -10,
            marginLeft: 3,
            borderRadius: 8,
            width: 100,
          }}
          variant="text"
        >
          About
        </Button>
        <Button
          sx={{
            marginTop: -10,
            marginLeft: 30,
            width: 400,
            borderRadius: 8,
            width: 200,
          }}
          variant="outlined"
        >
          Login As Admin
        </Button>
      </Box>
      <Box
        sx={{
          background:
            "linear-gradient(95.17deg, rgba(234, 241, 255, 0.7) 0%, #BEEAF6 48.96%, rgba(195, 255, 207, 0.5) 100%)",
          display: "flex",
          flexDirection: "column",
          borderRadius: 4,
          marginTop: 8,
        }}
      >
        <Typography
          sx={{
            width: 400,
            marginLeft: 3,
          }}
          variant="h3"
        >
          Lawan Pandemi dengan Vaksin!
        </Typography>
        <Typography
          sx={{
            width: 400,
            marginLeft: 3,
            marginTop: 2,
          }}
          variant="h6"
        >
          Book vaksin sekarang juga dan lindungi diri serta keluarga Anda dari
          ancaman pandemi.
        </Typography>
        <Button
          sx={{
            marginLeft: 3,
            borderRadius: 8,
            width: 200,
            backgroundColor: "#006D39",
            marginTop: 7,
          }}
          variant="contained"
        >
          Download Aplikasi
        </Button>
        <Box
          sx={{
            backgroundColor: "#F0F1EC",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: 10,
              borderRadius: 8,
            }}
          >
            <img
              style={{
                margin: 10,
              }}
              width={150}
              height={48.75}
              src={logo1}
              alt=""
            />
            <img
              style={{
                margin: 10,
              }}
              width={150}
              height={48.75}
              src={logo2}
              alt=""
            />
            <img
              style={{
                margin: 10,
              }}
              width={150}
              height={48.75}
              src={logo3}
              alt=""
            />
            <img
              style={{
                margin: 10,
              }}
              width={150}
              height={48.75}
              src={logo4}
              alt=""
            />
            <img
              style={{
                margin: 10,
              }}
              width={150}
              height={48.75}
              src={logo5}
              alt=""
            />
            <img
              style={{
                margin: 10,
              }}
              width={150}
              height={48.75}
              src={logo6}
              alt=""
            />
            <img
              style={{
                margin: 10,
              }}
              width={150}
              height={48.75}
              src={logo7}
              alt=""
            />
            <img
              style={{
                margin: 10,
              }}
              width={150}
              height={48.75}
              src={logo8}
              alt=""
            />
            <img
              style={{
                margin: 10,
              }}
              width={150}
              height={48.75}
              src={logo9}
              alt=""
            />
          </div>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <img
          style={{
            width: 500,
          }}
          src={ImgLandingPage}
          alt=""
          srcset=""
        />
        <Typography
          sx={{
            width: 620,
            height: 104,
            marginTop: 28,
          }}
          variant="h4"
        >
          Nikmati kemudahan book vaksin bersama VAKSIN.ID
        </Typography>
        <br />
        <Box>
          <Typography
            sx={{
              marginTop: 40,
              width: 620,
              height: 72,
            }}
            variant="body1"
          >
            Kami telah bekerja sama dengan fasilitas kesehatan di seluruh
            Indonesia. Jangan ragu untuk segera merencanakan vaksinasi pilihan
            Anda hanya dalam beberapa klik lewat aplikasi VAKSIN.ID!
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          background:
            "linear-gradient(95.17deg, rgba(234, 241, 255, 0.7) 0%, #BEEAF6 48.96%, rgba(195, 255, 207, 0.5) 100%)",
          display: "flex",
          flexDirection: "column",
          borderRadius: 4,
          marginTop: 8,
        }}
      >
        <Typography
          sx={{
            width: 700,
            marginLeft: 3,
          }}
          variant="h5"
        >
          Download. Book vaksinasi.
        </Typography>
        <Typography
          sx={{
            width: 700,
            marginLeft: 3,
          }}
          variant="h5"
        >
          Lindungi Keluarga. Lawan Pandemi!
        </Typography>
        <Button
          sx={{
            marginLeft: 3,
            borderRadius: 8,
            width: 200,
            background: "#006D39",
            marginTop: 7,
          }}
          variant="contained"
        >
          Download Aplikasi
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
