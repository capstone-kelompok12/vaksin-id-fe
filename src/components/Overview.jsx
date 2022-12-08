import { Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import formatNumber from "../utils/formatNumber";

const stats = [
  {
    id: 1,
    title: "Total Book Vaksinasi",
    count: 5348,
    color: "softNeutral",
    satuan: 'orang'
  },
  {
    id: 2,
    title: "Total Penerima Vaksin",
    count: 3748,
    color: "softInfo",
    satuan: 'orang'
  },
  {
    id: 3,
    title: "Sesi Vaksinasi Selesai",
    count: 590,
    color: "softSuccess",
    satuan: 'sesi'
  },
  {
    id: 4,
    title: "Sesi Vaksinasi Aktif",
    count: 590,
    color: "softWarning",
    satuan: 'sesi'
  },
];

const Overview = () => {
  return (
    <Stack direction={"row"} spacing={2} sx={{ pt: 2 }}>
      {stats.map(item => {
        const { id, title, count, color, satuan } = item;
        return (
          <Card
            key={id}
            // elevation={3}
            sx={{
              // width: "30%",
              flexBasis: '25%',
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
              <Typography variant="h5" /*color="primary"*/>
                {formatNumber(count)}
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
