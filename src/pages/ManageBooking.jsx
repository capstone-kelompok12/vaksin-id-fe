import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme } from '@mui/material/styles';
import { grey, cyan } from '@mui/material/colors';
import { DataGrid } from "@mui/x-data-grid";
import { Box, Stack } from "@mui/system";
import { Card, TextField } from "@mui/material";

const ManageBooking = () => {
  const columns = [
    { field: "id", headerName: "NIK", width: 200 },
    { field: "name", headerName: "Nama", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "action",
      headerName: "Aksi",
      sortable: false,
      width: 160,
    },
  ];

  const rows = [
    { id: 1234567890, name: "Snow", email: "snow@yuhuu", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const theme = createTheme({
    palette: {
      primary: {
        main: cyan[300],
      },
      secondary: {
        main: grey[300],
      },
    },
  });


  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: 2,
        }}
      >
        <IconButton aria-label="delete" size="large">
          <ArrowBackIcon />
        </IconButton>
        <h2
          style={{
            fontWeight: "lighter",
            marginBottom: 15,
          }}
        >
          AstraZeneca-01
        </h2>
        <Stack
          sx={{
            marginLeft: 45,
            marginTop: -5,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              marginRight: 10,
            }}
          >
            <h6
              style={{
                marginTop: 50,
                marginBottom: -70,
              }}
            >
              Jenis Vaksin
            </h6>
            <h4
              style={{
                marginTop: 70,
              }}
            >
              AstraZeneca
            </h4>
          </Box>
          <Box
            sx={{
              marginRight: 10,
            }}
          >
            <h6
              style={{
                marginTop: 50,
                marginBottom: -70,
              }}
            >
              Tanggal
            </h6>
            <h4
              style={{
                marginTop: 70,
              }}
            >
              15 Desember 2022
            </h4>
          </Box>
          <Box
            sx={{
              marginRight: 10,
            }}
          >
            <h6
              style={{
                marginTop: 50,
                marginBottom: -70,
              }}
            >
              Waktu
            </h6>
            <h4
              style={{
                marginTop: 70,
              }}
            >
              08.00-11.00 WIB
            </h4>
          </Box>
        </Stack>
      </Stack>
      <Stack
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "row",
          borderBlockColor: "black",
          border: 2,
          borderRadius: 2,
          width: 1200,
          height: 80,
        }}
      >
        <Card
          sx={{
            marginRight: 2,
            width: 280,
            height: 50,
            paddingLeft: 2,
            marginTop: 1,
            marginLeft: 2,
            backgroundColor: "#e0e0e0"
          }}
        >
          <h6
            style={{
              marginTop: 3,
            }}
          >
            Total Book Vaksinasi
          </h6>
          <h4
            style={{
              marginTop: -20,
            }}
          >
            500
          </h4>
        </Card>
        <Card
          sx={{
            marginRight: 2,
            marginTop: 1,
            width: 280,
            height: 50,
            paddingLeft: 2,
            backgroundColor: "#BEEAF6"
          }}
        >
          <h6
            style={{
              marginTop: 3,
            }}
          >
            Kapasitas Vaksinasi
          </h6>
          <h4
            style={{
              marginTop: -20,
            }}
          >
            100
          </h4>
        </Card>
        <Card
          sx={{
            marginRight: 2,
            marginTop: 1,
            width: 280,
            height: 50,
            paddingLeft: 2,
            backgroundColor: "#CEFFAC"
          }}
        >
          <h6
            style={{
              marginTop: 3,
            }}
          >
            Book Vaksinasi Diterima
          </h6>
          <h4
            style={{
              marginTop: -20,
            }}
          >
            27
          </h4>
        </Card>
        <Card
          sx={{
            marginRight: 2,
            marginTop: 1,
            width: 280,
            height: 50,
            paddingLeft: 2,
            backgroundColor: "#FFE082"
          }}
        >
          <h6
            style={{
              marginTop: 3,
            }}
          >
            Sisa Kapasitas Vaksinasi
          </h6>
          <h4
            style={{
              marginTop: -20,
            }}
          >
            73
          </h4>
        </Card>
      </Stack>
      <TextField
        sx={{
          marginTop: 5,
        }}
        id="input-with-icon-textfield"
        label="Cari"
        placeholder="Cari data dalam tabel.."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <div style={{ height: 400, width: 1000, marginTop: 10 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default ManageBooking;
