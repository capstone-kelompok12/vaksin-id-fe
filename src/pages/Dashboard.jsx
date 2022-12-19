import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import APIAuth from "../apis/auth.api";
import Overview from "../components/Overview";
import TablePendaftar from "../components/TablePendaftar";
import TableVaksinTersedia from "../components/TableVaksinTersedia";

const Dashboard = () => {
  const [rsName, setRsName] = useState('')

  useEffect(() =>{
    APIAuth.getDetailHF()
    .then(res =>{
      setRsName(res.Name)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <Typography variant='h6'>{rsName}</Typography>
      {<Overview />}
      <TablePendaftar />
      <TableVaksinTersedia />
    </Box>
  );
};

export default Dashboard;
