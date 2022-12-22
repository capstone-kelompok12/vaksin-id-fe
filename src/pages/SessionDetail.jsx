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
import { confirmKehadiranMultiple, getSessionDetail } from '../store/features/session/sessionSlice';
import getBookingStatus from '../utils/getBookingStatus';
import moment from 'moment';
import {confirmKehadiran} from '../store/features/session/sessionSlice';

const SessionDetail = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [pageSize, setPageSize] = useState(10)
  const [selectedRows, setSelectedRows] = useState([])
  const dispatch = useDispatch()
  const sessionDetail = useSelector(state => state.session.detail)
  
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
        const {id, kehadiran, attendColor, statusBook} = props.row
        if(kehadiran === '' && statusBook === 'Telah diterima'){
          return(
            <Stack direction='row' spacing={2} sx={{px: 1}}>
              <IconButton 
                sx={{border: '1px solid'}} 
                color='primary'
                onClick={() =>{
                  dispatch(confirmKehadiran({id, status: 'Attended'}))
                }}
              >
                <HowToRegIcon />
              </IconButton>
              <IconButton 
                sx={{border: '1px solid'}} 
                color='danger'
                onClick={() =>{
                  dispatch(confirmKehadiran({id, status: 'Absent'}))
                }}
              >
                <PersonOffIcon />
              </IconButton>
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
  

  const {
    Booking,
    SessionName,
  } = sessionDetail

  const rows = Booking.map((val) =>{
    const {ID: id, Status, Queue: antrian, User, /*IdSession: id_session,*/kehadiran, attendColor } = val
    const {NIK: nik, Fullname: nama, Email: email, BirthDate} = User
    const {statusBook, statusColor} = getBookingStatus(Status)
    const umur = moment().diff(BirthDate, 'years')
    
    return(
      {
        id,
        nik,
        nama,
        email,
        umur,
        antrian: antrian === 0 ? '': antrian,
        statusBook,
        statusColor,
        kehadiran,
        attendColor
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
      }}
      >
        {selectedRows.length > 0 && 
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
          <Button 
            variant='outlined' 
            onClick={() => {
              dispatch(confirmKehadiranMultiple({arrID: selectedRows, status: 'Attended'}))
              setSelectedRows([])
            }}
          >
            <HowToRegIcon />
            Hadir Semua
          </Button>
          <Button 
            variant='outlined' 
            color='danger' 
            onClick={() => {
              dispatch(confirmKehadiranMultiple({arrID: selectedRows, status: 'Absent'}))
              setSelectedRows([])
            }}
          >
            <PersonOffIcon />
            Tidak Hadir Semua
          </Button>
        </Stack>}
        <DataGrid 
          autoHeight
          checkboxSelection
          disableSelectionOnClick
          columns={columns}
          rows={rows}
          isRowSelectable={({row}) => row.kehadiran === '' && row.statusBook === 'Telah diterima'}
          onSelectionModelChange={handleSelect}
          pageSize={pageSize}
          rowsPerPageOptions={[10, 25, 50, 100]}
          onPageSizeChange={(val) => setPageSize(val)}
        />
      </Stack>
    </Stack>
  )
}

export default SessionDetail