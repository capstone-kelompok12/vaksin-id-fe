import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const cell = [
  {
    id: 1,
    label: 'Kelompok Usia'
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
    range: '12-17 tahun',
    dosis1: 602,
    dosis2: 383,
    dosis3: 0,
  },
  {
    id: 2,
    range: '18-59 tahun',
    dosis1: 3286,
    dosis2: 2476,
    dosis3: 465,
  },
  {
    id: 3,
    range: '> 59 tahun',
    dosis1: 1460,
    dosis2: 925,
    dosis3: 125,
  }
]

const TablePendaftar = () => {
  return (
    <Box sx={{my: 4}}>
      <TableContainer>
        <Typography variant='h5'>Statistik Pendaftar Vaksin</Typography>
        <Typography variant='subtitle2' gutterBottom>Update: Januari 2022</Typography>
        <Table>
          <TableHead>
            <TableRow sx={{backgroundColor: '#EEF6ED'}} height={52}>
              {cell.map(({id, label}) =>{
                return <TableCell key={id} sx={{fontWeight: 700}} align= {label.toLowerCase().includes('dosis') ? 'center' : 'left'}>{label}</TableCell>
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(({id, range, dosis1, dosis2, dosis3}) =>{
              return (
              <TableRow key={id} height={52}>
                <TableCell>{range}</TableCell>
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

export default TablePendaftar