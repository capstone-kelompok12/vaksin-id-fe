import React, { useEffect, useState } from 'react'
import { Breadcrumbs, Button, Chip, IconButton, Link, Stack, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import SessionStats from '../components/SessionStats';
import { DataGrid } from '@mui/x-data-grid';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { getSessionDetail } from '../store/features/session/sessionSlice';

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
      const {statusBook, statusColor} = props.row
      if(statusBook === 'Menunggu'){
        return(
          <Stack direction='row' spacing={2} sx={{px: 1}}>
            <IconButton sx={{border: '1px solid'}} color='primary'><CheckIcon /></IconButton>
            <IconButton sx={{border: '1px solid'}} color='danger'><CloseIcon /></IconButton>
          </Stack>
        )
      }
      return <Chip label={statusBook} color={statusColor} sx={{color: `${statusColor}.text`}}/>
    }
  },
  {field: 'antrian', headerName: 'Antrian', width: 90, align: 'center', headerAlign: 'center'},
  // {
  //   field: 'confirmation',
  //   headerName: 'Terima Book',
  //   width: 130,
  //   align: 'center',
  //   headerAlign: 'center',
  //   renderCell: (props) =>{
  //     const {antrian} = props.row
  //     return(
  //       <Stack direction='row' spacing={1}>
  //         <IconButton sx={{border: '1px solid'}} color='primary' disabled={antrian !== ''}><CheckIcon /></IconButton>
  //         <IconButton sx={{border: '1px solid'}} color='danger' disabled={antrian !== ''}><CloseIcon /></IconButton>
  //       </Stack>
  //     )
  //   }
  // },
  // {
  //   field: 'kehadiran', 
  //   headerName: 'Kehadiran', 
  //   width: 130,
  //   align: 'center',
  //   headerAlign: 'center',
  //   renderCell: (props) =>{ 
  //     const {antrian} = props.row
  //     return (
  //       <Stack direction='row' spacing={1}>
  //         <IconButton sx={{border: '1px solid'}} color='primary' disabled={antrian === ''}><HowToRegIcon /></IconButton>
  //         <IconButton sx={{border: '1px solid'}} color='danger' disabled={antrian === ''}><PersonOffIcon /></IconButton>
  //       </Stack>
  //     )
  //   }
  // },
  
]

const BookDetail = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [pageSize, setPageSize] = useState(10)
  const [SelectedRows, setSelectedRows] = useState([])
  const dispatch = useDispatch()
  const sessionDetail = useSelector(state => state.session.detail)

  const {SessionName, Booking} = sessionDetail

  const rows = Booking.map(val =>{
    return(
      {
      id: 'lorem',
      nik: '33016120920031',
      nama: 'Jonathan Busquets',
      email: 'jo.busquets@gmail.com',
      umur: 27,
      antrian: 32,
      statusBook: 'Telah diterima',
      statusColor: 'softSuccess',
    }
  )})

  const handleSelect = (selectedRow) =>{
    console.log(selectedRow)
    setSelectedRows(selectedRow);
  }
  
  useEffect(() =>{
    dispatch(getSessionDetail(id))
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
            <CheckIcon />
            Terima Semua
          </Button>
          <Button variant='outlined' color='danger' >
            <CloseIcon />
            Tolak Semua
          </Button>
          {/* <Button variant='outlined' >
            <HowToRegIcon />
            Hadir Semua
          </Button>
          <Button variant='outlined' color='danger' >
            <PersonOffIcon />
            Tidak Hadir Semua
          </Button> */}
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
          // onRowClick={({id, row}) => navigate(`/manage-session/${id}`)}
        />
      </Stack>
    </Stack>
  )
}

export default BookDetail