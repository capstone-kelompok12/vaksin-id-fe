import React, { useState } from "react";
import {
  Box,
  Typography,
  InputLabel,
  TextField,
  FormControl,
  MenuItem,
} from "@mui/material";

const Sort = () => {
  const [valuesVaksin, setValuesVaksin] = useState([
    "Semua",
    "AstraZeneca",
    "Janssen",
    "Moderna",
    "Novavax",
  ]);

  const [valuesStatus, setValuesStatus] = useState([
    "Semua",
    "Tersedia",
    "Penuh",
    "Selesai",
  ]);

  const [selectedVaksin, setSelectedVaksin] = useState("Semua");

  const [selectedStatus, setSelectedStatus] = useState("Semua");

  function handleChangeVaksin(event) {
    setSelectedVaksin(event.target.value);
  }

  function handleChangeStatus(event) {
    setSelectedStatus(event.target.value);
  }

  return (
    <Box sx={{ py: 5, display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ paddingRight: 2 }}>Vaksin</Typography>
        <FormControl>
          <TextField
            id="outlined-select-vaksin"
            select
            value={selectedVaksin}
            onChange={handleChangeVaksin}
            sx={{ width: "248px" }}
            // inputProps={{
            //   name: "agent",
            //   id: "age-simple",
            // }}
          >
            {valuesVaksin.map((value, index) => {
              return (
                <MenuItem key={index} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </TextField>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ paddingRight: 2 }}>Status</Typography>
        <FormControl>
          <TextField
            id="outlined-select-vaksin"
            select
            value={selectedStatus}
            onChange={handleChangeStatus}
            sx={{ width: "248px" }}
            // inputProps={{
            //   name: "agent",
            //   id: "age-simple",
            // }}
          >
            {valuesStatus.map((value, index) => {
              return (
                <MenuItem key={index} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </TextField>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Sort;
