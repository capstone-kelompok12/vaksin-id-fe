import React, { useState } from "react";
import { /*Button, Box, Typography,*/ Chip, Stack } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
// import AddIcon from "@mui/icons-material/Add";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ModalAddSession from "../components/ModalAddSession";
import { useNavigate } from "react-router-dom";
// import SortingSession from "../components/SortSession";
// import CardSessions from "../components/CardSession";

const columns = [
  {field: 'tanggal', headerName: 'Tanggal', width: 120},
  {field: 'waktu', headerName: 'Waktu', width: 160},
  {field: 'namaSesi', headerName: 'Nama Sesi', width: 160},
  {field: 'vaksin', headerName: 'Vaksin', width: 120},
  {field: 'kapasitas', headerName: 'Kapasitas', width: 120},
  {field: 'dosis', headerName: 'Dosis', width: 90},
  {
    field: 'status', 
    headerName: 'Status', 
    width: 160,
    renderCell: (props) =>{
      const {/*id, tanggal, waktu, dosis, namaSesi, vaksin, kapasitas,*/ status, color } = props.row
      // console.log({id, tanggal, waktu, dosis, namaSesi, vaksin, kapasitas, status })
      return <Chip label={status} color={color} sx={{color: `${color}.text`}} />
    },
  },{
    field: 'aksi',
    headerName: '',
    width: 30,
    renderCell: () =>{
      return <ArrowRightIcon />
    }
  }
]

const rows = [
  {
    id: 1,
    tanggal: '02/12/2022',
    waktu: '08.00 - 11.00 WIB',
    namaSesi: 'Sinovac-02',
    vaksin: 'Sinovac',
    kapasitas: '80/100',
    dosis: 'Kedua',
    status: 'Berlangsung',
    color: 'softWarning'
  },
  {
    id: 2,
    tanggal: '02/12/2022',
    waktu: '08.00 - 11.00 WIB',
    namaSesi: 'Sinovac-01',
    vaksin: 'Sinovac',
    kapasitas: '93/100',
    dosis: 'Pertama',
    status: 'Berlangsung',
    color: 'softWarning'
  },
  {
    id: 3,
    tanggal: '02/12/2022',
    waktu: '13.00 - 16.00 WIB',
    namaSesi: 'Sinopharm-01',
    vaksin: 'Sinopharm',
    kapasitas: '99/100',
    dosis: 'Pertama',
    status: 'Berlangsung',
    color: 'softWarning'
  },
  {
    id: 4,
    tanggal: '02/12/2022',
    waktu: '13.00 - 16.00 WIB',
    namaSesi: 'Sinopharm-02',
    vaksin: 'Sinopharm',
    kapasitas: '89/100',
    dosis: 'Kedua',
    status: 'Berlangsung',
    color: 'softWarning'
  },
  {
    id: 5,
    tanggal: '16/12/2022',
    waktu: '13.00 - 16.00 WIB',
    namaSesi: 'AstraZeneca-02',
    vaksin: 'AstraZeneca',
    kapasitas: '100/100',
    dosis: 'Kedua',
    status: 'Penuh',
    color: 'softDanger'
  },
  {
    id: 6,
    tanggal: '16/12/2022',
    waktu: '13.00 - 16.00 WIB',
    namaSesi: 'Sputnik-02',
    vaksin: 'Sputnik',
    kapasitas: '76/100',
    dosis: 'Kedua',
    status: 'Tersedia',
    color: 'softInfo'
  },
  {
    id: 7,
    tanggal: '18/12/2022',
    waktu: '08.00 - 11.00 WIB',
    namaSesi: 'Moderna-02',
    vaksin: 'Moderna',
    kapasitas: '30/120',
    dosis: 'Kedua',
    status: 'Tersedia',
    color: 'softInfo'
  },
  {
    id: 8,
    tanggal: '18/12/2022',
    waktu: '08.00 - 11.00 WIB',
    namaSesi: 'Moderna-03',
    vaksin: 'Moderna',
    kapasitas: '44/100',
    dosis: 'Ketiga',
    status: 'Tersedia',
    color: 'softInfo'
  },
  {
    id: 9,
    tanggal: '20/12/2022',
    waktu: '08.00 - 11.00 WIB',
    namaSesi: 'Pfizer-03',
    vaksin: 'Pfizer',
    kapasitas: '76/100',
    dosis: 'Ketiga',
    status: 'Tersedia',
    color: 'softInfo'
  },
  {
    id: 10,
    tanggal: '23/12/2022',
    waktu: '13.00 - 16.00 WIB',
    namaSesi: 'Pfizer-01',
    vaksin: 'Pfizer',
    kapasitas: '150/150',
    dosis: 'Pertama',
    status: 'Penuh',
    color: 'softDanger'
  },
  {
    id: 11,
    tanggal: '17/11/2022',
    waktu: '13.00 - 16.00 WIB',
    namaSesi: 'Moderna-03',
    vaksin: 'Moderna',
    kapasitas: '139/150',
    dosis: 'Ketiga',
    status: 'Selesai',
    color: 'softNeutral'
  },
  {
    id: 12,
    tanggal: '22/11/2022',
    waktu: '08.00 - 11.00 WIB',
    namaSesi: 'Sinovac-01',
    vaksin: 'Sinovac',
    kapasitas: '115/120',
    dosis: 'Pertama',
    status: 'Selesai',
    color: 'softNeutral'
  },
  {
    id: 13,
    tanggal: '22/11/2022',
    waktu: '08.00 - 11.00 WIB',
    namaSesi: 'Sinovac-02',
    vaksin: 'Sinovac',
    kapasitas: '120/120',
    dosis: 'Kedua',
    status: 'Selesai',
    color: 'softNeutral'
  },
  {
    id: 14,
    tanggal: '22/11/2022',
    waktu: '08.00 - 11.00 WIB',
    namaSesi: 'Pfizer-03',
    vaksin: 'Pfizer',
    kapasitas: '76/90',
    dosis: 'Ketiga',
    status: 'Selesai',
    color: 'softNeutral'
  },
]

const ManageSession = () => {
  const [pageSize, setPageSize] = useState(10)
  const navigate = useNavigate()
  
  return (
    <Stack
      spacing={2}
      sx={{
        width: '100%',
        maxWidth: 1030,
        // height: '100vh',
        p: 3,
        '& .MuiDataGrid-row:hover': {
          cursor: 'pointer',
          color: 'primary.main',
        },
      }}
    >
      <ModalAddSession />
      <DataGrid 
        autoHeight
        columns={columns}
        rows={rows}
        pageSize={pageSize}
        rowsPerPageOptions={[10, 25, 50, 100]}
        onPageSizeChange={(val) => setPageSize(val)}
        onRowClick={({id, row}) => navigate(`/manage-session/${id}`)}
      />
    </Stack>
  );
};

export default ManageSession;
