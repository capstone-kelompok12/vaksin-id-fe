import React, { useEffect, useState } from "react";
import 
  { Box, 
    Stack,
  } from "@mui/material";
import ModalAddEditStock from "../components/ModalAddEditStock";
import ModalDeleteVaksin from "../components/ModalDeleteVaksin";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getVaksinList } from "../store/features/vaksin/vaksinSlice";
import formatNumber from '../utils/formatNumber'

const columns = [
  {field: 'num', headerName: 'No.', width: 120, align: 'center', headerAlign: 'center'},
  {field: 'name', headerName: 'Nama Vaksin', width: 220, align: 'center', headerAlign: 'center'},
  {field: 'dose', headerName: 'Dosis', width: 200, align: 'center', headerAlign: 'center'},
  {
    field: 'stock', 
    headerName: 'Stok Vaksin', 
    width: 220,
    align: 'center', 
    headerAlign: 'center',
    renderCell: (props) =>{
      const {stock} = props.row
      return `${formatNumber(stock)} dosis`
    }
  },
  {
    field: 'aksi', 
    headerName: 'Aksi', 
    width: 220,
    align: 'center', 
    headerAlign: 'center',
    renderCell: (props) =>{
      const {id, name, dose, stock} = props.row
      return(
        <Stack direction='row' spacing={1}>
          <ModalDeleteVaksin id={id}/>
          <ModalAddEditStock edit={true} data={{id, name, dose, stock}} />
        </Stack>
      )
    }
  },
]

const VaccineStock = () => {
  const [pageSize, setPageSize] = useState(10)
  const dispatch = useDispatch()
  const {loading, data: vaksinList} = useSelector(state => state.vaksin)
  
  const rows = vaksinList.map((item, idx) =>{
    const {ID: id, Name: name, Dose: dose, Stock: stock} = item
    return {
      id,
      num: idx + 1,
      name,
      dose,
      stock
    }
  })

  useEffect(() =>{
    dispatch(getVaksinList())
  },[dispatch])

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
          }}
        >
          <DataGrid 
            autoHeight
            loading={loading}
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
