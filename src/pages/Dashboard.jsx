import { Box } from "@mui/material";
import React from "react";
import Overview from "../components/Overview";
import TablePendaftar from "../components/TablePendaftar";
import TableVaksinTersedia from "../components/TableVaksinTersedia";

const Dashboard = () => {
  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      {/* <Typography variant='h6'>Selamat datang Admin!</Typography> */}
      {<Overview />}
      <TablePendaftar />
      <TableVaksinTersedia />
    </Box>
  );
};

export default Dashboard;
