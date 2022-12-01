import { Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import formatNumber from "../utils/formatNumber";

const stats = [
  {
    id: 1,
    title: "Dosis 1",
    count: 5348,
    color: "#BEEAF6",
  },
  {
    id: 2,
    title: "Dosis 2",
    count: 3748,
    color: "#CEFFAC",
  },
  {
    id: 3,
    title: "Dosis 3",
    count: 590,
    color: "#FFE082",
  },
];

const Overview = () => {
  return (
    <Stack direction={"row"} spacing={6} sx={{ pt: 2 }}>
      {stats.map(item => {
        const { id, title, count, color } = item;
        return (
          <Card
            key={id}
            elevation={3}
            sx={{
              width: "30%",
              minWidth: 290,
              backgroundColor: color,
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography variant="h6">{`Total Vaksinasi ${title}`}</Typography>
              <Typography variant="h4" color="primary">
                {formatNumber(count)}
              </Typography>
              <Typography variant="h6">Dosis</Typography>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
};

export default Overview;
