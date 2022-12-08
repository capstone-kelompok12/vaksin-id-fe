import React, { useState } from "react";
import 
  { Box, 
    Stack,
  } from "@mui/material";
import ModalAddEditStock from "../components/ModalAddEditStock";
import ModalDeleteVaksin from "../components/ModalDeleteVaksin";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {field: 'num', headerName: 'No.', width: 120, align: 'center', headerAlign: 'center'},
  {field: 'nama', headerName: 'Nama Vaksin', width: 220, align: 'center', headerAlign: 'center'},
  {field: 'dosis', headerName: 'Dosis', width: 200, align: 'center', headerAlign: 'center'},
  {
    field: 'stok', 
    headerName: 'Stok Vaksin', 
    width: 220,
    align: 'center', 
    headerAlign: 'center',
    renderCell: (props) =>{
      const {stok} = props.row
      return `${stok} dosis`
    }
  },
  {
    field: 'aksi', 
    headerName: 'Aksi', 
    width: 220,
    align: 'center', 
    headerAlign: 'center',
    renderCell: (props) =>{
      const {id, nama, dosis, stok} = props.row
      return(
        <Stack direction='row' spacing={1}>
          <ModalDeleteVaksin />
          <ModalAddEditStock edit={true} data={{id, nama, dosis, stok}} />
        </Stack>
      )
    }
  },
]

const rows = [
  {
    id: 1,
    num: 1,
    nama: 'Sinovac',
    dosis: 'Pertama',
    stok: 120
  },
  {
    id: 2,
    num: 2,
    nama: 'AstraZeneca',
    dosis: 'Pertama',
    stok: 46
  },
  {
    id: 3,
    num: 3,
    nama: 'Pfizer',
    dosis: 'Pertama',
    stok: 92
  },
  {
    id: 4,
    num: 4,
    nama: 'Janssen',
    dosis: 'Pertama',
    stok: 102
  },
  {
    id: 5,
    num: 5,
    nama: 'Moderna',
    dosis: 'Pertama',
    stok: 200
  },
];

const VaccineStock = () => {
  const [pageSize, setPageSize] = useState(10)

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
          sx={{
            justifyContent: 'space-between', 
            alignItems: 'center',
            width: '100%', 
          }}
        >
          <ModalAddEditStock />
        </Stack>
        <Stack
          sx={{
            width: '100%',
            maxWidth: 1000,
            // height: '100vh',
            // p: 3,
          }}
        >
          <DataGrid 
            autoHeight
            columns={columns}
            rows={rows}
            pageSize={pageSize}
            onPageSizeChange={(val) => setPageSize(val)}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
          />
        </Stack>
      </Box>
    </>
  );
};

export default VaccineStock;
