import React, { useState } from "react";
import 
  { 
    Box, 
    Typography, 
    Stack,
  } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ListVaccineIllustration from '../assets/img/list-vaccine-illustration.png'

const columns = [
  {
    field: 'num',
    headerName: 'No.',
    width: 120,
    hideable: false,
    align: 'center',
    headerAlign: 'center',
  },{
    field: 'name',
    headerName: 'Nama Vaksin',
    width: 780,
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
  const [size, setSize] = useState(10);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          p: 3,
        }}
      >
        <Stack 
          direction={'row'} 
          spacing={2}
          sx={{
            alignItems: 'center',
            width: '100%'
          }}
        >
          <img 
            src={ListVaccineIllustration} 
            alt="list-vaccine-illustration" 
            width={200}
          />
          <Box>
            <Typography variant="h6" color='primary'>
              Daftar Vaksin COVID-19 yang tersedia di Indonesia
            </Typography>
            <Typography>
              Vaksin yang disediakan adalah vaksin yang sudah dipastikan keamanan dan keefektivitasannya.
            </Typography>
          </Box>
        </Stack>
        <Box 
          sx={{
            width: '100%',
            maxWidth: 920,
          }}
        >
          <DataGrid
            autoHeight
            columns={columns}
            rows={rows}
            pageSize={size}
            onPageSizeChange={(pageSize) => setSize(pageSize)}
            rowsPerPageOptions={[5, 10, 25, 50]}
          />
        </Box>
      </Box>
    </>
  )
}

export default VaccineList