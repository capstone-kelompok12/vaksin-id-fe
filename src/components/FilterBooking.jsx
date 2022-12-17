import React from 'react'
import { Button, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers';
import MoreFilter from './MoreFilter';
import CloseIcon from '@mui/icons-material/Close';
import moment from 'moment';

const FilterBooking = ({
  resetFilter, selectedFilter, handleFilterDate, 
  handleFilterVaksin, handleFilterStatus, setFilter
}) => {
  const {
    date,
    vaksin,
    status,
  } = selectedFilter
  
  return (
    <>
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
            name='tanggal'
            inputFormat='DD/MM/YYYY'
            value={date || moment()}
            onChange={handleFilterDate}
            renderInput={(params) => <TextField size='small' fullWidth {...params} />}
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
            size='small'
            value={vaksin || 'Semua' }
            onChange={handleFilterVaksin}
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
            size='small'
            value={status || 'Semua' }
            onChange={handleFilterStatus}
          >
            <MenuItem value='Semua'>Semua</MenuItem>
            <MenuItem value='Berlangsung'>Berlangsung</MenuItem>
            <MenuItem value='Tersedia'>Tersedia</MenuItem>
            <MenuItem value='Penuh'>Penuh</MenuItem>
          </Select>
        </Stack>
        <MoreFilter 
          selectedFilter={selectedFilter}
          setFilter={setFilter}
        />
      </Stack>
      <Button 
        color='danger' 
        variant='outlined' 
        onClick={resetFilter}
        sx={{
          width: 'max-content',
        }}
        startIcon={<CloseIcon />}
      >
        Reset Filter
      </Button>
    </>
  )
}

export default FilterBooking;