import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, TextField} from '@mui/material'
import AddIcon from "@mui/icons-material/Add";
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { useEffect } from 'react';

const INITIAL_FORM_DATA = {
  id: '',
  nama: '',
  dosis: '',
  stok: 0
}

const ModalAddEditStock = ({data, edit}) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) =>{
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const {nama, dosis, stok} = formData

  useEffect(() =>{
    if(data){
      setFormData(data)
    }
    return () =>{
      setFormData(INITIAL_FORM_DATA)
    }
  }, [data])
  
  return (
    <>
      {edit
      ? <IconButton 
        color='info'
        onClick={handleOpen}
        aria-label="edit"
        sx={{border: '1px solid'}} 
      >
        <ModeEditOutlinedIcon />
      </IconButton>
      : <Button
        variant="outlined"
        onClick={handleOpen}
        startIcon={<AddIcon />}
      >
        Tambah Stok Vaksin 
      </Button>}

      <Dialog
        fullWidth
        maxWidth='xs'
        open={open}
        onClose={handleClose}
      >
        <DialogTitle sx={{alignSelf: 'center'}}>{edit ? 'Edit' : 'Tambah'} Stok Vaksin</DialogTitle>
        <DialogContent>
          <Stack spacing={3} sx={{py: 2}}>
            <FormControl fullWidth>
              <InputLabel id='label-vaksin'>Vaksin</InputLabel>
              <Select
                label='Vaksin'
                // labelId='label-vaksin'
                id='select-vaksin'
                name='nama'
                value={nama}
                onChange={handleChange}
              >
                <MenuItem value='AstraZeneca'>AstraZeneca</MenuItem>
                <MenuItem value='Novavax'>Novavax</MenuItem>
                <MenuItem value='Sinovac'>Sinovac</MenuItem>
                <MenuItem value='Moderna'>Moderna</MenuItem>
                <MenuItem value='Janssen'>Janssen</MenuItem>
                <MenuItem value='Pfizer'>Pfizer</MenuItem>
                <MenuItem value='Sputnik'>Sputnik</MenuItem>
                <MenuItem value='Sinopharm'>Sinopharm</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id='label-dosis'>Dosis</InputLabel>
              <Select
                label='Vaksin'
                // labelId='label-dosis'
                id='select-dosis'
                name='dosis'
                value={dosis}
                onChange={handleChange}
              >
                <MenuItem value='Pertama'>Pertama</MenuItem>
                <MenuItem value='Kedua'>Kedua</MenuItem>
                <MenuItem value='Ketiga'>Ketiga</MenuItem>
              </Select>
            </FormControl>
            <TextField 
              // labelId='label-stok'
              id='input-stok'
              label='Stok Vaksin'
              type={'number'}
              name='stok'
              value={stok}
              onChange={handleChange}
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{p: 3}}>
          <Button variant='outlined'>Batal</Button>
          <Button variant='contained'>{edit ? 'Simpan' : 'Tambah'}</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ModalAddEditStock