import { Card, CardContent, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DashboardApi from "../apis/dashboard.api";
import formatNumber from "../utils/formatNumber";

const stats = [
  {
    id: 1,
    title: "Total Book Vaksinasi",
    color: "softNeutral",
    satuan: "orang",
  },
  {
    id: 2,
    title: "Total Penerima Vaksin",
    color: "softInfo",
    satuan: "orang",
  },
  {
    id: 3,
    title: "Sesi Vaksinasi Selesai",
    color: "softSuccess",
    satuan: "sesi",
  },
  {
    id: 4,
    title: "Sesi Vaksinasi Aktif",
    color: "softWarning",
    satuan: "sesi",
  },
];

const Overview = () => {
  useEffect(() => {
    // DashboardApi.fetchBookings().then(console.log(res.data));
  }, []);

  return (
    <Stack direction={"row"} spacing={2} sx={{ pt: 2 }}>
      {stats.map(item => {
        const { id, title, color, satuan } = item;
        return (
          <Card
            key={id}
            // elevation={3}
            sx={{
              // width: "30%",
              flexBasis: "25%",
              bgcolor: `${color}.main`,
              color: `${color}.text`,
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography>{title}</Typography>
              <Typography variant="h5">
                {/* {formatNumber()} */}
                <Typography>{satuan}</Typography>
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
};

export default Overview;
