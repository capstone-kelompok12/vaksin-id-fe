import React from 'react'
import { Box, Chip, lighten, Stack, Typography } from '@mui/material'
import moment from 'moment/moment'

const SessionStats = ({showStatus, data}) => {

  const{
    Booking,
    Capacity,
    CapacityLeft,
    Date,
    Dose,
    StartSession,
    EndSession,
    Vaccine,
    status,
    color
  } = data

  const hadir = Booking.filter(val => val.Status === 'Attended')
  const tidakHadir = Booking.filter(val => val.Status === 'Absent')
  const diterima = Booking.filter(val => val.Status === 'Accepted')
  // const ditolak = Booking.filter(val => val.Status === 'Rejected')
  
  return (
    <Stack spacing={2}>
      <Stack direction={'row'} spacing={2}>
        <Box width={showStatus ? '20%' : '25%'}>
          <Typography variant='subtitle1' color={lighten('#000', 0.3)}>Jenis Vaksin</Typography>
          <Typography variant='h6'>{Vaccine.Name}</Typography>
        </Box>
        <Box width={showStatus ? '20%' : '25%'}>
          <Typography variant='subtitle1' color={lighten('#000', 0.3)}>Dosis</Typography>
          <Typography variant='h6'>{Dose}</Typography>
        </Box>
        <Box width={showStatus ? '20%' : '25%'}>
          <Typography variant='subtitle1' color={lighten('#000', 0.3)}>Tanggal</Typography>
          <Typography variant='h6'>{moment(Date).format('DD MMMM YYYY')}</Typography>
        </Box>
        <Box width={showStatus ? '20%' : '25%'}>
          <Typography variant='subtitle1' color={lighten('#000', 0.3)}>Waktu</Typography>
          <Typography variant='h6'>{`${StartSession} - ${EndSession} WIB`}</Typography>
        </Box>
        {showStatus && <Box width={'19%'}>
          <Typography variant='subtitle1' color={lighten('#000', 0.3)}>Status</Typography>
          <Chip label={status} color={color} />
        </Box>}
      </Stack>

      <Stack direction={'row'} spacing={2}>
        <Stack
          sx={{
            bgcolor: 'softNeutral.main',
            flexBasis: '25%',
            borderRadius: 1,
            p: 2
          }}
        >
          <Typography variant='subtitle2' color={lighten('#000', 0.3)}>Total Book Vaksinasi</Typography>
          <Typography variant='h6'>{Booking.length}</Typography>
        </Stack>
        <Stack
          sx={{
            bgcolor: 'softInfo.main',
            flexBasis: '25%',
            borderRadius: 1,
            p: 2
          }}
        >
          <Typography variant='subtitle2' color={lighten('#000', 0.3)}>Kapasitas Vaksinasi</Typography>
          <Typography variant='h6'>{`${Capacity - CapacityLeft} / ${Capacity}`}</Typography>
        </Stack>
        <Stack
          sx={{
            bgcolor: 'softSuccess.main',
            flexBasis: '25%',
            borderRadius: 1,
            p: 2
          }}
        >
          <Typography variant='subtitle2' color={lighten('#000', 0.3)}>
            {showStatus ? 'Penerima Vaksin Hadir' : 'Book Vaksinasi Diterima'}
          </Typography>
          <Typography variant='h6'>
            {showStatus ? hadir.length : diterima.length}
          </Typography>
        </Stack>
        <Stack
          sx={{
            bgcolor: showStatus ? 'softDanger.main' : 'softWarning.main',
            flexBasis: '25%',
            borderRadius: 1,
            p: 2
          }}
        >
          <Typography variant='subtitle2' color={lighten('#000', 0.3)}>
            {showStatus ? 'Penerima Vaksin Tidak Hadir' : 'Sisa Kapasitas Vaksinasi'}
          </Typography>
          <Typography variant='h6'>
            {showStatus ? tidakHadir.length : CapacityLeft > 0 ? CapacityLeft : 0}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default SessionStats