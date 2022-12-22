import { Card, CardContent, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DashboardApi from "../apis/dashboard.api";
import formatNumber from "../utils/formatNumber";

const Overview = () => {
  const [booking, setBooking] = useState(0)
  const [patient, setPatient] = useState(0)
  const [sessionDone, setSessionDone] = useState(0)
  const [activeSession, setActiveSession] = useState(0)

  const stats = [
    {
      id: 1,
      title: "Total Book Vaksinasi",
      color: "softNeutral",
      data: booking,
      satuan: "orang",
    },
    {
      id: 2,
      title: "Total Penerima Vaksin",
      color: "softInfo",
      data: patient,
      satuan: "orang",
    },
    {
      id: 3,
      title: "Sesi Vaksinasi Selesai",
      color: "softSuccess",
      data: sessionDone,
      satuan: "sesi",
    },
    {
      id: 4,
      title: "Sesi Vaksinasi Aktif",
      color: "softWarning",
      data: activeSession,
      satuan: "sesi",
    },
  ];

  const fetchData = () =>{
    DashboardApi.fetchBookings()
      .then(res =>{
        setBooking(res.data.data.Booking)
      })
      .catch(err => {throw err})
    DashboardApi.fetchSessionsActive()
      .then(res =>{
        setActiveSession(res.data.data.Active)
      })
      .catch(err => {throw err})
    DashboardApi.fetchSessionsDone()
      .then(res =>{
        setSessionDone(res.data.data.Amount)
      })
      .catch(err => {throw err})
    DashboardApi.fetchUserVaccinated()
      .then(res =>{
        setPatient(res.data.data.Vaccinated)
      })
      .catch(err => {throw err})
  }

  useEffect(() =>{
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Stack direction={"row"} spacing={2} sx={{ pt: 2 }}>
      {stats.map(item => {
        const { id, title, color, data, satuan } = item;
        return (
          <Card
            key={id}
            sx={{
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
                {formatNumber(data)}
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
