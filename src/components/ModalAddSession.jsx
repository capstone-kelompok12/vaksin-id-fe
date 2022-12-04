import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, Stack, TextField} from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import AddIcon from "@mui/icons-material/Add";
import { hideScroller, modalStyle } from '../styles/customStyle';
import moment from 'moment'

const INITIAL_FORM_DATA = {
  namaSesi: '',
  jenisVaksin: '',
  tanggal: moment(),
  // .format('DD/MM/YYYY'),
  waktu: '',
  dosis: '',
  kapasitas: 0
}

const ModalAddSession = () => {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)

  const handleChange = (e) =>{
    const {name, value} = e.target

    setFormData({...formData, [name]: value})
  }

  const handlePickDate = (e) =>{
    const selectedDate = moment(e)
    // .format('DD/MM/YYYY')
    // console.log(selectedDate)
    setFormData({...formData, tanggal: selectedDate})
  }

  return (
    <>
      <Button 
        variant="outlined" 
        startIcon={<AddIcon />}
        onClick={() => setOpen(true)}
        sx={{width: 'max-content'}}
      >
        Tambah Sesi
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        // sx={{zIndex: 9999}}
      >
        <DialogTitle align='center'>Tambah Sesi</DialogTitle>
        <DialogContent
          sx={{
            ...hideScroller,
          }}
        >
          <Stack 
            sx={{
              ...modalStyle,
              ...hideScroller,
            }}
          >
            <FormControl fullWidth>
              <Stack spacing={2}>
                <TextField 
                  error={formData.namaSesi === ''}
                  name='namaSesi' 
                  label='Nama Sesi' 
                  value={formData.namaSesi} 
                  onChange={handleChange} 
                />
                <DesktopDatePicker
                  label='Tanggal'
                  disablePast
                  name='tanggal'
                  inputFormat='DD/MM/YYYY'
                  value={formData.tanggal}
                  onChange={(e) => handlePickDate(e)}
                  renderInput={(params) => <TextField {...params} />}
                />
                <FormControl fullWidth>
                  <InputLabel id='dropdown-jenis-vaksin-label'>Jenis Vaksin</InputLabel>
                  <Select
                    id="dropdown-jenis-vaksin"
                    labelId='dropdown-jenis-vaksin-label'
                    label='Jenis Vaksin'
                    name='jenisVaksin'
                    value={formData.jenisVaksin}
                    onChange={handleChange}
                  >
                    <MenuItem value='AstraZeneca'>AstraZeneca</MenuItem>
                    <MenuItem value='Sinovac'>Sinovac</MenuItem>
                    <MenuItem value='Moderna'>Moderna</MenuItem>
                    <MenuItem value='Pfizer'>Pfizer</MenuItem>
                    <MenuItem value='Sputnik'>Sputnik</MenuItem>
                  </Select>
                </FormControl>
                
                <FormControl>
                  <InputLabel id='dropdown-waktu-vaksin-label'>Waktu</InputLabel>
                  <Select
                    id="dropdown-waktu-vaksin"
                    labelId='dropdown-waktu-vaksin-label'
                    label='Waktu'
                    name='waktu'
                    value={formData.waktu}
                    onChange={handleChange}
                  >
                    <MenuItem value='08.00 - 11.00 WIB'>08.00 - 11.00 WIB</MenuItem>
                    <MenuItem value='13.00 - 16.00 WIB'>13.00 - 16.00 WIB</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id='dropdown-dosis-vaksin-label'>Dosis</InputLabel>
                  <Select
                    id="dropdown-dosis-vaksin"
                    labelId='dropdown-dosis-vaksin-label'
                    label='Dosis'
                    name='dosis'
                    value={formData.dosis}
                    onChange={handleChange}
                  >
                    <MenuItem value='Pertama'>Pertama</MenuItem>
                    <MenuItem value='Kedua'>Kedua</MenuItem>
                    <MenuItem value='Ketiga'>Ketiga</MenuItem>
                  </Select>
                </FormControl>
                <TextField 
                  error={formData.kapasitas === 0}
                  name='kapasitas' 
                  label='Kapasitas' 
                  value={formData.kapasitas} 
                  onChange={handleChange}
                  helperText='Kapasitas maks. 500'
                />
              </Stack>
            </FormControl>
          </Stack>          
        </DialogContent>
        <DialogActions sx={{p: 4}}>
          <Button variant='outlined' onClick={() => setOpen(false)}>Batal</Button>
          <Button variant='contained'>Tambah</Button>
        </DialogActions>
      </Dialog>
      {/* <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // sx={{zIndex: 9999}}
      >
        <Stack sx={{...modalStyle}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Tambah Sesi
          </Typography>
          <FormControl fullWidth>
            <Stack spacing={2}>
              <TextField id='namaSesi' label='Nama Sesi' />
              <InputLabel id='dropdown-jenis-vaksin-label'>Jenis Vaksin</InputLabel>
              <Select
                id="dropdown-jenis-vaksin"
                labelId='dropdown-jenis-vaksin-label'
                label='Jenis Vaksin'
                placeholder='Jenis Vaksin'
                value={formData.jenisVaksin}
                onChange={(e) =>setFormData({...formData, jenisVaksin: e.target.value})}
              >
                <MenuItem value='AstraZeneca'>AstraZeneca</MenuItem>
                <MenuItem value='Sinovac'>Sinovac</MenuItem>
                <MenuItem value='Moderna'>Moderna</MenuItem>
                <MenuItem value='Pfizer'>Pfizer</MenuItem>
                <MenuItem value='Sputnik'>Sputnik</MenuItem>
              </Select>
              <TextField id='kapasitas' label='Kapasitas' />
            </Stack>
          </FormControl>
        </Stack>
      </Modal> */}
    </>
  )
}

export default ModalAddSession