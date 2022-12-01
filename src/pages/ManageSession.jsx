import React from "react";
import { Button, Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SortingSession from "../components/SortSession";
import CardSessions from "../components/CardSession";

const ManageSession = () => {
  return (
    <Box sx={{ px: 4 }}>
      <Button
        sx={{
          marginTop: 5,
          borderRadius: 4,
          borderColor: "black",
          color: "rgba(0, 109, 57, 1)",
          width: "207px",
          textTransform: "none",
        }}
        variant="outlined"
        startIcon={<AddIcon />}
      >
        <Typography sx={{ fontSize: 20 }}>Tambah Sesi</Typography>
      </Button>
      <SortingSession />
      <CardSessions />
    </Box>
  );
};

export default ManageSession;
