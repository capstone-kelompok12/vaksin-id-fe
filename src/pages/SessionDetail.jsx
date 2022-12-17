import React, { useState } from 'react'
import { Breadcrumbs, Button, Chip, IconButton, Link, Stack, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate, useParams } from 'react-router-dom';
import SessionStats from '../components/SessionStats';
import { DataGrid } from '@mui/x-data-grid';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSessionDetail } from '../store/features/session/sessionSlice';

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


const SessionDetail = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [pageSize, setPageSize] = useState(10)
  const [SelectedRows, setSelectedRows] = useState([])
  const dispatch = useDispatch()
  const sessionDetail = useSelector(state => state.session.detail)
  
  const {
    Booking,
    SessionName,
  } = sessionDetail

  const rows = Booking.map((val, idx) =>{
    
    return(
      {
        id: idx,
        nik: '33016120920031',
        nama: 'Jonathan Busquets',
        email: 'jo.busquets@gmail.com',
        umur: 27,
        antrian: 32,
        statusBook: 'Telah diterima',
        statusColor: 'softSuccess',
        kehadiran: 'Hadir',
        attendColor: 'softSuccess'
      }
    )
  })

  const handleSelect = (selectedRow) =>{
    setSelectedRows(selectedRow);
  }
  
  useEffect(() =>{
    id && dispatch(getSessionDetail(id))
  },[dispatch, id])

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
        <Typography>{SessionName}</Typography>
      </Breadcrumbs>
      <SessionStats showStatus={true} data={sessionDetail}/>
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