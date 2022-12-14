import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, TextField} from '@mui/material'
import AddIcon from "@mui/icons-material/Add";
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addVaksin } from '../store/features/vaksin/vaksinSlice';
import { vaksinNames } from '../mock/vaksinNames';

const INITIAL_FORM_DATA = {
  id: '',
  name: '',
  dose: '',
  stock: 0
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const ModalAddEditStock = ({data, edit}) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const dispatch = useDispatch()

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) =>{
    const {name, value} = e.target
    if(name === 'stock'){
      setFormData({
        ...formData,
        [name]: Number(value)
      })  
    }else{
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  const handleSubmit = (data) =>{
    delete data.id
    dispatch(addVaksin(data))
    setOpen(false)
  }

  const {name, dose, stock} = formData

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
                name='name'
                value={name}
                onChange={handleChange}
                MenuProps={MenuProps}
              >
                {vaksinNames.map(({name}, idx) =>{
                  return(
                    <MenuItem key={idx} value={name}>{name}</MenuItem>    
                  )
                })}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id='label-dose'>Dosis</InputLabel>
              <Select
                label='Vaksin'
                // labelId='label-dose'
                id='select-dose'
                name='dose'
                value={dose}
                onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
            <TextField 
              // labelId='label-stok'
              id='input-stok'
              label='Stok Vaksin'
              type={'number'}
              name='stock'
              value={stock}
              onChange={handleChange}
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{p: 3}}>
          <Button variant='outlined' onClick={() => setOpen(false)}>Batal</Button>
          <Button 
            variant='contained' 
            onClick={() => {
              edit
              ? console.log('edit mode')
              : handleSubmit(formData)
            }}
          >
            {edit ? 'Simpan' : 'Tambah'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ModalAddEditStock