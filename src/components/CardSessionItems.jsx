import React from "react";
import { Box, Typography, Card } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const CardSesiItems = ({
  sesiVaksin,
  available,
  jumlahPendaftar,
  vaksin,
  jamVaksin,
}) => {
  return (
    <Card
      sx={{
        width: "326px",
        height: "200px",
        borderRadius: "10px",
        py: 2,
        px: 2,
        backgroundColor: "#FBFDF7",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "16px" }}>{sesiVaksin}</Typography>
        <Box sx={{ backgroundColor: "#CEFFAC" }}>
          <Typography
            sx={{
              padding: "5px",
              fontSize: "14px",
              color: "#285E00",
            }}
          >
            {available}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ paddingTop: "26px" }}>
        <Typography sx={{ fontSize: "28px" }}>{jumlahPendaftar}</Typography>
        <Typography sx={{ fontSize: "28px" }}>{vaksin}</Typography>
      </Box>
      <Box sx={{ alignItems: "center", display: "flex", py: 1 }}>
        <AccessTimeIcon />
        <Typography sx={{ paddingLeft: "5px" }}>{jamVaksin}</Typography>
      </Box>
    </Card>
  );
};
export default CardSesiItems;
