import React, { useState } from "react";
import { Chip, Stack } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ModalAddSession from "../components/ModalAddSession";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { closeSession, getSessionList } from "../store/features/session/sessionSlice";
import moment from "moment/moment";

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
      const { status, color } = props.row
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

const ManageSession = () => {
  const [pageSize, setPageSize] = useState(10)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {data: sessionList, loading} = useSelector(state => state.session)
  
  const rows = sessionList.map(val =>{
    const {
      ID: id, 
      Date,
      StartSession, 
      EndSession, 
      SessionName: namaSesi, 
      Capacity, 
      CapacityLeft,
      Dose: dosis,
      Vaccine,
      status,
      color
    } = val
    
    return(
      {
        id,
        tanggal: moment(Date).format('DD/MM/YYYY'),
        waktu: `${StartSession} - ${EndSession} WIB`,
        namaSesi,
        vaksin: Vaccine.Name,
        kapasitas: `${Capacity - CapacityLeft}/${Capacity}`,
        dosis,
        status,
        color
      }
    )
  })

  useEffect(() =>{
    dispatch(getSessionList())
  },[dispatch])

  useEffect(() =>{
    // eslint-disable-next-line array-callback-return
    sessionList.map(val =>{
      const {ID, EndSession, Date, IsClose } = val
      const end = moment(Date).set('hour', Number(EndSession.slice(0,2)))
      if(moment().isAfter(end) && !IsClose){
        dispatch(closeSession(ID))
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispatch])

  return (
    <Stack
      spacing={2}
      sx={{
        width: '100%',
        maxWidth: 1030,
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
        loading={loading}
        pageSize={pageSize}
        rowsPerPageOptions={[10, 25, 50, 100]}
        onPageSizeChange={(val) => setPageSize(val)}
        onRowClick={({id, row}) => navigate(`/manage-session/${id}`)}
      />
    </Stack>
  );
};

export default ManageSession;
