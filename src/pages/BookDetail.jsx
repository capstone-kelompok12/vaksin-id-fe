import React, { useEffect, useState } from 'react'
import { Breadcrumbs, Button, Chip, IconButton, Link, Stack, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import SessionStats from '../components/SessionStats';
import { DataGrid } from '@mui/x-data-grid';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { confirmBooking, getSessionDetail } from '../store/features/session/sessionSlice';
import getBookingStatus from '../utils/getBookingStatus';
import moment from 'moment/moment';
import Auth from '../utils/Auth';
import { toast } from 'react-toastify';

const BookDetail = () => {
  const {id} = useParams()
  const navigate = useNavigate()
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
      field: 'statusBook', 
      headerName: 'Status Book',
      width: 160,
      renderCell: (props) =>{ 
        const {id: booking_id, nik, id_session,  statusBook, statusColor} = props.row
        if(statusBook === 'Menunggu'){
          return(
            <Stack direction='row' spacing={2} sx={{px: 1}}>
              <IconButton 
                sx={{border: '1px solid'}} 
                color='primary'
                onClick={() =>{
                  dispatch(confirmBooking([{
                    booking_id,
                    nik,
                    id_session,
                    status: 'Accepted'
                  }]))
                }}
              >
                <CheckIcon />
              </IconButton>
              <IconButton 
                sx={{border: '1px solid'}} 
                color='danger'
                onClick={() =>{
                  dispatch(confirmBooking([{
                    booking_id,
                    nik,
                    id_session,
                    status: 'Rejected'
                  }]))
                }}
              >
                <CloseIcon />
              </IconButton>
            </Stack>
          )
        }
        return <Chip label={statusBook} color={statusColor} sx={{color: `${statusColor}.text`}}/>
      }
    },
    {field: 'antrian', headerName: 'Antrian', width: 90, align: 'center', headerAlign: 'center'},
  ]

  const {SessionName, Booking, CapacityLeft} = sessionDetail

  const rows = Booking.map(val =>{
    const {ID: id, Status, Queue: antrian, User, IdSession: id_session } = val
    const {NIK: nik, Fullname: nama, Email: email, BirthDate} = User
    const {statusBook, statusColor} = getBookingStatus(Status)
    const umur = moment().diff(BirthDate, 'years')

    return({
      id,
      nik,
      nama,
      email,
      umur,
      antrian: antrian === 0 ? '': antrian,
      statusBook,
      statusColor,
      id_session
    }
  )})

  const handleSelect = (selectedRow) =>{
    const body = selectedRow.map(id => {
      const selected = Booking
        .filter(val => val.ID === id)
        .map(val =>{
          const {ID, IdSession, User} = val
          
          return({
            booking_id: ID,
            nik: User.NIK,
            id_session: IdSession,
            status: ''
          })
        })
      return selected
    })
    setSelectedRows(body.flat());
  }
  
  const handleConfirmMultiple = (updatedStatus) =>{
    const data = selectedRows.map(val =>{
      return({...val, status: updatedStatus})
    })
    selectedRows.length > CapacityLeft
    ? toast.error('Jumlah booking melebihi kapasitas maksimal!')
    : dispatch(confirmBooking(data))
    setSelectedRows([])
  }

  useEffect(() =>{
    // store rs_name to cookie
    Auth.storeRSName()
    dispatch(getSessionDetail(id))
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
        <Link color={'inherit'} underline='hover' sx={{cursor: 'pointer'}} onClick={() => navigate('/manage-booking')}>Manage Booking</Link>
        <Typography>{SessionName}</Typography>
      </Breadcrumbs>
      <SessionStats showStatus={false} data={sessionDetail}/>
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
            onClick={() => handleConfirmMultiple('Accepted')}
            >
            <CheckIcon />
            Terima Semua
          </Button>
          <Button 
            variant='outlined' 
            color='danger' 
            onClick={() => handleConfirmMultiple('Rejected')}
            >
            <CloseIcon />
            Tolak Semua
          </Button>
        </Stack>}
        <DataGrid 
          autoHeight
          checkboxSelection
          disableSelectionOnClick
          isRowSelectable={({row}) => row.antrian === ''}
          onSelectionModelChange={handleSelect}
          columns={columns}
          rows={rows}
          pageSize={pageSize}
          rowsPerPageOptions={[10, 25, 50, 100]}
          onPageSizeChange={(val) => setPageSize(val)}
        />
      </Stack>
    </Stack>
  )
}

export default BookDetail