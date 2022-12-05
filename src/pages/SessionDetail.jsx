import React, { useState } from 'react'
import { Breadcrumbs, Chip, Link, Stack, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';
import SessionStats from '../components/SessionStats';
import { DataGrid } from '@mui/x-data-grid';

const columns =[
  {field: 'nik', headerName: 'NIK', width: 200},
  {field: 'nama', headerName: 'Nama', width: 200},
  {field: 'email', headerName: 'Email', width: 180},
  {field: 'umur', headerName: 'Umur', width: 90, align: 'center', headerAlign: 'center'},
  {field: 'antrian', headerName: 'Antrian', width: 90, align: 'center', headerAlign: 'center'},
  {
    field: 'statusBook', 
    headerName: 'Status Book', 
    width: 160,
    renderCell: (props) =>{ 
      const {statusBook, statusColor} = props.row
      return <Chip label={statusBook} color={statusColor} sx={{color: `${statusColor}.text`}}/>
    }
  },{
    field: 'kehadiran', 
    headerName: 'Kehadiran', 
    width: 160,
    renderCell: (props) =>{ 
      const {kehadiran, attendColor} = props.row
      return kehadiran !== '' && <Chip label={kehadiran} color={attendColor} sx={{color: `${attendColor}.text`}}/>
    }
  },
]

const rows =[
  {
    id: 1,
    nik: '33016120920031',
    nama: 'Jonathan Busquets',
    email: 'jo.busquets@gmail.com',
    umur: 27,
    antrian: 32,
    statusBook: 'Telah diterima',
    statusColor: 'softSuccess',
    kehadiran: 'Hadir',
    attendColor: 'softSuccess'
  },
  {
    id: 2,
    nik: '33016120920031',
    nama: 'Jonathan Busquets',
    email: 'jo.busquets@gmail.com',
    umur: 23,
    antrian: 33,
    statusBook: 'Telah diterima',
    statusColor: 'softSuccess',
    kehadiran: 'Tidak hadir',
    attendColor: 'softDanger'
  },
  {
    id: 3,
    nik: '33016120920031',
    nama: 'Jonathan Busquets',
    email: 'jo.busquets@gmail.com',
    umur: 39,
    antrian: 35,
    statusBook: 'Telah diterima',
    statusColor: 'softSuccess',
    kehadiran: 'Hadir',
    attendColor: 'softSuccess'
  },
  {
    id: 4,
    nik: '33016120920031',
    nama: 'Jonathan Busquets',
    email: 'jo.busquets@gmail.com',
    umur: 24,
    antrian: 36,
    statusBook: 'Telah diterima',
    statusColor: 'softSuccess',
    kehadiran: 'Tidak hadir',
    attendColor: 'softDanger'
  },
  {
    id: 5,
    nik: '33016120920031',
    nama: 'Jonathan Busquets',
    email: 'jo.busquets@gmail.com',
    umur: 33,
    antrian: 37,
    statusBook: 'Telah diterima',
    statusColor: 'softSuccess',
    kehadiran: 'Tidak hadir',
    attendColor: 'softDanger'
  },
  {
    id: 6,
    nik: '33016120920031',
    nama: 'Jonathan Busquets',
    email: 'jo.busquets@gmail.com',
    umur: 31,
    antrian: 40,
    statusBook: 'Telah diterima',
    statusColor: 'softSuccess',
    kehadiran: 'Tidak hadir',
    attendColor: 'softDanger'
  },
  {
    id: 7,
    nik: '33016120920031',
    nama: 'Jonathan Busquets',
    email: 'jo.busquets@gmail.com',
    umur: 29,
    antrian: 42,
    statusBook: 'Telah diterima',
    statusColor: 'softSuccess',
    kehadiran: 'Hadir',
    attendColor: 'softSuccess'
  },
  {
    id: 8,
    nik: '33016120920031',
    nama: 'Jonathan Busquets',
    email: 'jo.busquets@gmail.com',
    umur: 18,
    antrian: 43,
    statusBook: 'Telah diterima',
    statusColor: 'softSuccess',
    kehadiran: 'Hadir',
    attendColor: 'softSuccess'
  },
  {
    id: 9,
    nik: '33016120920031',
    nama: 'Jonathan Busquets',
    email: 'jo.busquets@gmail.com',
    umur: 43,
    antrian: 44,
    statusBook: 'Telah diterima',
    statusColor: 'softSuccess',
    kehadiran: 'Hadir',
    attendColor: 'softSuccess'
  },
  {
    id: 10,
    nik: '33016120920031',
    nama: 'Jonathan Busquets',
    email: 'jo.busquets@gmail.com',
    umur: 21,
    antrian: '',
    statusBook: 'Telah ditolak',
    statusColor: 'softDanger',
    kehadiran: '',
    attendColor: ''
  },
  {
    id: 11,
    nik: '33016120920031',
    nama: 'Jonathan Busquets',
    email: 'jo.busquets@gmail.com',
    umur: 36,
    antrian: '',
    statusBook: 'Telah ditolak',
    statusColor: 'softDanger',
    kehadiran: '',
    attendColor: ''
  },
  {
    id: 12,
    nik: '33016120920031',
    nama: 'Jonathan Busquets',
    email: 'jo.busquets@gmail.com',
    umur: 25,
    antrian: '',
    statusBook: 'Menunggu',
    statusColor: 'softWarning',
    kehadiran: '',
    attendColor: ''
  },
  {
    id: 13,
    nik: '33016120920031',
    nama: 'Jonathan Busquets',
    email: 'jo.busquets@gmail.com',
    umur: 27,
    antrian: '',
    statusBook: 'Menunggu',
    statusColor: 'softWarning',
    kehadiran: '',
    attendColor: ''
  },
  {
    id: 14,
    nik: '33016120920031',
    nama: 'Jonathan Busquets',
    email: 'jo.busquets@gmail.com',
    umur: 37,
    antrian: '',
    statusBook: 'Dibatalkan',
    statusColor: 'softNeutral',
    kehadiran: '',
    attendColor: ''
  },
  {
    id: 15,
    nik: '33016120920031',
    nama: 'Jonathan Busquets',
    email: 'jo.busquets@gmail.com',
    umur: 42,
    antrian: '',
    statusBook: 'Dibatalkan',
    statusColor: 'softNeutral',
    kehadiran: '',
    attendColor: ''
  },
]

const SessionDetail = () => {
  const navigate = useNavigate()
  const [pageSize, setPageSize] = useState(10)

  return (
    <Stack
      spacing={2}
      sx={{
        width: '100%',
        // maxWidth: 1030,
        // height: '100vh',
        p: 3,
      }}
    >
      <Breadcrumbs
        separator={<NavigateNextIcon />}
      >
        <Link color={'inherit'} underline='hover' sx={{cursor: 'pointer'}} onClick={() => navigate('/manage-session')}>Manage Session</Link>
        <Typography>AstraZeneca-01</Typography>
      </Breadcrumbs>
      <SessionStats />
      <Stack
      spacing={2}
      sx={{
        width: '100%',
        maxWidth: 1090,
        // '& .MuiDataGrid-row:hover': {
        //   cursor: 'pointer',
        //   color: 'primary.main',
        // },
      }}
      >
        <DataGrid 
          autoHeight
          columns={columns}
          rows={rows}
          pageSize={pageSize}
          rowsPerPageOptions={[10, 25, 50, 100]}
          onPageSizeChange={(val) => setPageSize(val)}
          // onRowClick={({id, row}) => navigate(`/manage-session/${id}`)}
        />
      </Stack>
    </Stack>
  )
}

export default SessionDetail