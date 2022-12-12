import React, { useState } from 'react'
import { Breadcrumbs, Button, Chip, IconButton, Link, Stack, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';
import SessionStats from '../components/SessionStats';
import { DataGrid } from '@mui/x-data-grid';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const columns =[
  {field: 'nik', headerName: 'NIK', width: 200},
  {field: 'nama', headerName: 'Nama', width: 200},
  {field: 'email', headerName: 'Email', width: 180},
  {field: 'umur', headerName: 'Umur', width: 90, align: 'center', headerAlign: 'center'},
  {
    field: 'kehadiran', 
    headerName: 'Kehadiran', 
    width: 160,
    renderCell: (props) =>{ 
      const {kehadiran, attendColor, statusBook} = props.row
      if(kehadiran === '' && statusBook === 'Telah diterima'){
        return(
          <Stack direction='row' spacing={2} sx={{px: 1}}>
            <IconButton sx={{border: '1px solid'}} color='primary'><HowToRegIcon /></IconButton>
            <IconButton sx={{border: '1px solid'}} color='danger'><PersonOffIcon /></IconButton>
          </Stack>          
        )
      }
      return kehadiran !== '' && <Chip label={kehadiran} color={attendColor} sx={{color: `${attendColor}.text`}}/>
    }
  },{
    field: 'statusBook', 
    headerName: 'Status Book', 
    width: 160,
    renderCell: (props) =>{ 
      const {statusBook, statusColor} = props.row
      return <Chip label={statusBook} color={statusColor} sx={{color: `${statusColor}.text`}}/>
    }
  },{field: 'antrian', headerName: 'Antrian', width: 90, align: 'center', headerAlign: 'center'},
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
    kehadiran: '',
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
    kehadiran: '',
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
    kehadiran: '',
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
    antrian: 56,
    statusBook: 'Telah diterima',
    statusColor: 'softSuccess',
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
  const [SelectedRows, setSelectedRows] = useState([])

  const handleSelect = (selectedRow) =>{
    console.log(selectedRow)
    setSelectedRows(selectedRow);
  }

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
      <SessionStats showStatus={true}/>
      <Stack
      spacing={2}
      sx={{
        width: '100%',
        maxWidth: 1090,
        position: 'relative',
        py: 6
        // '& .MuiDataGrid-row:hover': {
        //   cursor: 'pointer',
        //   color: 'primary.main',
        // },
      }}
      >
        {SelectedRows.length > 0 && 
        <Stack
          direction={'row'}
          spacing={1}
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            py: 2
          }}
        >
          {/* <Button variant='outlined' >
            <CheckIcon />
            Terima Semua
          </Button>
          <Button variant='outlined' color='danger' >
            <CloseIcon />
            Tolak Semua
          </Button> */}
          <Button variant='outlined' >
            <HowToRegIcon />
            Hadir Semua
          </Button>
          <Button variant='outlined' color='danger' >
            <PersonOffIcon />
            Tidak Hadir Semua
          </Button>
        </Stack>}
        <DataGrid 
          autoHeight
          checkboxSelection
          columns={columns}
          rows={rows}
          isRowSelectable={({row}) => row.kehadiran === '' && row.statusBook === 'Telah diterima'}
          onSelectionModelChange={handleSelect}
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