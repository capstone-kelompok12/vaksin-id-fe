import React, { useState } from "react";
import 
  { 
    // InputLabel, 
    // MenuItem, 
    // FormControl, 
    // Select,
    Box, 
    Typography, 
    Stack,
  } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: 'num',
    headerName: 'No.',
    width: 120,
    // headerClassName: 'super-app-theme--header',
    hideable: false,
    align: 'center',
    headerAlign: 'center',
  },{
    field: 'name',
    headerName: 'Nama',
    width: 560,
    // headerClassName: 'super-app-theme--header',
    hideable: false,
    align: 'center',
    headerAlign: 'center'
  }
]

const rows = [
  {
    id: 1,
    num: 1,
    name: 'Sinovac',
  },{
    id: 2,
    num: 2,
    name: 'Astrazeneca',
  },{
    id: 3,
    num: 3,
    name: 'Pfizer',
  },{
    id: 4,
    num: 4,
    name: 'Janssen',
  },{
    id: 5,
    num: 5,
    name: 'Moderna',
  },{
    id: 6,
    num: 6,
    name: 'Sinopharm',
  },{
    id: 7,
    num: 7,
    name: 'Novavax',
  },{
    id: 8,
    num: 8,
    name: 'Sputnik',
  },{
    id: 9,
    num: 9,
    name: 'Janssen',
  },{
    id: 10,
    num: 10,
    name: 'Convidencia',
  },{
    id: 11,
    num: 11,
    name: 'Zifivax',
  }
];


const VaccineList = () => {
  // const [filter, setFilter] = useState("");
  const [size, setSize] = useState(5);

  // const handleChange = (e) => {
  //   setFilter(e.target.value);
  // };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // alignItems: 'center',
          gap: 4,
          p: 3,
        }}
      >
        <Stack 
          direction={'row'} 
          sx={{
            justifyContent: 'space-between', 
            alignItems: 'center',
            width: '100%'
          }}
        >
          <Typography>
            List Vaksin yang sudah terdaftar dan bersertifikat halal
          </Typography>
          {/* <Stack direction={'row'} spacing={2}>
            <Typography sx={{alignSelf: 'center'}}>Stok Vaksin</Typography>
            <FormControl sx={{ m: 1, minWidth: 200}} size="small">
              <InputLabel id='filter-label'>
                Filter Berdasarkan
              </InputLabel>
              <Select
                labelId='filter-label'
                id="filter-table"
                value={filter}
                label="Filter Berdasarkan"
                onChange={(e) =>handleChange(e)}
              >
                {rows.map(({id, name}) => (
                  <MenuItem key={id} value={name}>{name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack> */}
        </Stack>
        <Box 
          sx={{
            height: 371,
            width: 700,
            // '& .super-app-theme--header': {
            //   bgcolor: '#EEF6ED',
            // }
          }}
        >
          <DataGrid
            // loading={true}
            columns={columns}
            rows={rows}
            pageSize={size}
            onPageSizeChange={(pageSize) => setSize(pageSize)}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </Box>
      </Box>
    </>
  )
}

export default VaccineList