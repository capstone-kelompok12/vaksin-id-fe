import { Box, Chip, lighten, Stack, Typography } from '@mui/material'
import React from 'react'

const SessionStats = () => {
  return (
    <Stack spacing={2}>
      <Stack direction={'row'} spacing={2}>
        <Box width={'19%'}>
          <Typography variant='subtitle1' color={lighten('#000', 0.3)}>Jenis Vaksin</Typography>
          <Typography variant='h6'>AstraZeneca</Typography>
        </Box>
        <Box width={'19%'}>
          <Typography variant='subtitle1' color={lighten('#000', 0.3)}>Dosis</Typography>
          <Typography variant='h6'>Pertama</Typography>
        </Box>
        <Box width={'19%'}>
          <Typography variant='subtitle1' color={lighten('#000', 0.3)}>Tanggal</Typography>
          <Typography variant='h6'>15 Desember 2022</Typography>
        </Box>
        <Box width={'19%'}>
          <Typography variant='subtitle1' color={lighten('#000', 0.3)}>Waktu</Typography>
          <Typography variant='h6'>08.00 - 11.00 WIB</Typography>
        </Box>
        <Box width={'19%'}>
          <Typography variant='subtitle1' color={lighten('#000', 0.3)}>Status</Typography>
          <Chip label='Berlangsung' color='softWarning' sx={{color: 'softNeutral.text'}}/>
        </Box>
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
          <Typography variant='h6'>500</Typography>
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
          <Typography variant='h6'>100 / 100</Typography>
        </Stack>
        <Stack
          sx={{
            bgcolor: 'softSuccess.main',
            flexBasis: '25%',
            borderRadius: 1,
            p: 2
          }}
        >
          <Typography variant='subtitle2' color={lighten('#000', 0.3)}>Penerima Vaksin Hadir</Typography>
          <Typography variant='h6'>2</Typography>
        </Stack>
        <Stack
          sx={{
            bgcolor: 'softDanger.main',
            flexBasis: '25%',
            borderRadius: 1,
            p: 2
          }}
        >
          <Typography variant='subtitle2' color={lighten('#000', 0.3)}>Penerima Vaksin Tidak Hadir</Typography>
          <Typography variant='h6'>1</Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default SessionStats