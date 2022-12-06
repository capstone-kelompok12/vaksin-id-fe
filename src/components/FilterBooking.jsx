import React from 'react'
import { MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers';
import MoreFilter from './MoreFilter';

const FilterBooking = () => {
  return (
    <Stack direction={'row'} spacing={2}>
      <Stack 
        direction={'row'} 
        sx={{
          alignItems: 'center',
          flexBasis: '30%'
        }} 
        spacing={1}
      >
        <Typography>Tanggal</Typography>
        <DesktopDatePicker
          // label='Tanggal'
          disablePast
          name='tanggal'
          inputFormat='DD/MM/YYYY'
          // value={formData.tanggal}
          // onChange={(e) => handlePickDate(e)}
          renderInput={(params) => <TextField fullWidth {...params} />}
        />
      </Stack>

      <Stack 
        direction={'row'} 
        sx={{
          alignItems: 'center',
          flexBasis: '30%'
        }} 
        spacing={1}
      >
        <Typography>Vaksin</Typography>
        <Select
          fullWidth
          defaultValue={'Semua'}
        >
          <MenuItem value='Semua'>Semua</MenuItem>
          <MenuItem value='AstraZeneca'>AstraZeneca</MenuItem>
          <MenuItem value='Janssen'>Janssen</MenuItem>
          <MenuItem value='Moderna'>Moderna</MenuItem>
          <MenuItem value='Sinovac'>Sinovac</MenuItem>
          <MenuItem value='Novavax'>Novavax</MenuItem>
          <MenuItem value='Sputnik'>Sputnik</MenuItem>
          <MenuItem value='Pfizer'>Pfizer</MenuItem>
        </Select>
      </Stack>

      <Stack 
        direction={'row'} 
        sx={{
          alignItems: 'center',
          flexBasis: '30%'
        }} 
        spacing={1}
      >
        <Typography>Status</Typography>
        <Select
          fullWidth
          defaultValue={'Semua'}
        >
          <MenuItem value='Semua'>Semua</MenuItem>
          <MenuItem value='Berlangsung'>Berlangsung</MenuItem>
          <MenuItem value='Tersedia'>Tersedia</MenuItem>
          <MenuItem value='Penuh'>Penuh</MenuItem>
        </Select>
      </Stack>
      <MoreFilter />
    </Stack>
  )
}

export default FilterBooking