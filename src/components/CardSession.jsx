import React from "react";
import { Box } from "@mui/material";
import CardSessionItems from "./CardSessionItems";

const CardSesi = () => {
  const dummyData = [
    {
      id: 1,
      sesiVaksin: "Novavax-01",
      available: "Tersedia",
      jumlahPendaftar: "72 / 100",
      vaksin: "AstraZeneca",
      jamVaksin: "08.00 - 11.00 WIB",
    },
    {
      id: 2,
      sesiVaksin: "Novavax-01",
      available: "Penuh",
      jumlahPendaftar: "72 / 100",
      vaksin: "AstraZeneca",
      jamVaksin: "08.00 - 11.00 WIB",
    },
    {
      id: 3,
      sesiVaksin: "Novavax-01",
      available: "Selesai",
      jumlahPendaftar: "72 / 100",
      vaksin: "AstraZeneca",
      jamVaksin: "08.00 - 11.00 WIB",
    },
    {
      id: 4,
      sesiVaksin: "Novavax-01",
      available: "Selesai",
      jumlahPendaftar: "72 / 100",
      vaksin: "AstraZeneca",
      jamVaksin: "08.00 - 11.00 WIB",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexBasis: "33%",
        justifyContent: "start",
        gap: 6,
      }}
    >
      {dummyData.map(data => {
        return (
          <Box key={data.id}>
            <CardSessionItems {...data} />
          </Box>
        );
      })}
    </Box>
  );
};
export default CardSesi;
