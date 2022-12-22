import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, TextField} from '@mui/material'
import AddIcon from "@mui/icons-material/Add";
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { addVaksin, getVaksinList, updateStock } from '../store/features/vaksin/vaksinSlice';
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
  const {name, dose, stock} = formData
  const dispatch = useDispatch()
  const vaksinList = useSelector(state => state.vaksin.data)

  const isExist = vaksinList.filter(val => val.Name === formData.name)
  const disabled = Boolean(
    name === '' || 
    dose === 0 || 
    stock === 0 || 
    // eslint-disable-next-line eqeqeq
    formData.stock == data?.stock
  )
  
  const handleOpen = () => {
    if(edit){
      setFormData(data)
    }
    setOpen(true)
  }
  const handleClose = () => setOpen(false);

  const handleChange = (e) =>{
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (data) =>{
    delete data.id
    data.stock = Number(data.stock)

    dispatch(addVaksin(data))
    setOpen(false)
    setFormData(INITIAL_FORM_DATA)
  }

  const handleEdit = (data) =>{
    data.stock = Number(data.stock)
    dispatch(updateStock(data))
    setOpen(false)
    setFormData(INITIAL_FORM_DATA)
  }

  useEffect(() =>{
    dispatch(getVaksinList())
  },[dispatch])

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
                disabled={edit}
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
                disabled={edit || name === ''}
                id='select-dose'
                name='dose'
                value={dose}
                onChange={handleChange}
              >
                <MenuItem 
                  value={1}
                  disabled={isExist.some(e => e.Dose === 1)}
                >
                  1
                </MenuItem>
                <MenuItem 
                  value={2}
                  disabled={isExist.some(e => e.Dose === 2)}
                >
                  2
                </MenuItem>
                <MenuItem 
                  value={3}
                  disabled={isExist.some(e => e.Dose === 3)}
                >
                  3
                </MenuItem>
              </Select>
            </FormControl>
            <TextField 
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
            disabled={disabled}
            onClick={() => {
              edit
              ? handleEdit(formData)
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