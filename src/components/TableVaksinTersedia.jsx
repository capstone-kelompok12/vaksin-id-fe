import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const cell = [
  {
    id: 1,
    label: 'Nama Vaksin'
  },
  {
    id: 2,
    label: 'Vaksinasi Dosis 1'
  },
  {
    id: 3,
    label: 'Vaksinasi Dosis 2'
  },
  {
    id: 4,
    label: 'Vaksinasi Dosis 3'
  },
]

const rows = [
  {
    id: 1,
    name: 'Moderna',
    dosis1: 74,
    dosis2: 36,
    dosis3: 143,
  },
  {
    id: 2,
    name: 'Sinovac',
    dosis1: 23,
    dosis2: 98,
    dosis3: 423,
  },
  {
    id: 3,
    name: 'Pfizer',
    dosis1: 42,
    dosis2: 21,
    dosis3: 123,
  }
]

const TableVaksinTersedia = () => {
  return (
    <Box sx={{my: 4}}>
      <TableContainer>
        <Typography variant='h5'>Statistik Vaksin Tersedia</Typography>
        {/* <Typography variant='subtitle2' gutterBottom>Update: Januari 2022</Typography> */}
        <Table>
          <TableHead>
            <TableRow sx={{backgroundColor: '#EEF6ED'}} height={52}>
              {cell.map(({id, label}) =>{
                return <TableCell key={id} sx={{fontWeight: 700}} align= {label.toLowerCase().includes('dosis') ? 'center' : 'left'}>{label}</TableCell>
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(({id, name, dosis1, dosis2, dosis3}) =>{
              return (
              <TableRow key={id} height={52}>
                <TableCell>{name}</TableCell>
                <TableCell align='center'>{dosis1} dosis</TableCell>
                <TableCell align='center'>{dosis2} dosis</TableCell>
                <TableCell align='center'>{dosis3} dosis</TableCell>
              </TableRow> 
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default TableVaksinTersedia;