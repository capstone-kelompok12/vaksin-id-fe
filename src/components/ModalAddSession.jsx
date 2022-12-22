import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, Stack, TextField} from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import AddIcon from "@mui/icons-material/Add";
import { hideScroller } from '../styles/customStyle';
import moment from 'moment'
import { vaksinNames } from '../mock/vaksinNames';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getVaksinList } from '../store/features/vaksin/vaksinSlice';
import { addSession } from '../store/features/session/sessionSlice';
import validateInput from '../utils/validateInput';

const INITIAL_FORM_DATA = {
  id_vaccine: '',
  session_name: '',
  vaccine_name: '',
  date: moment(),
  time: '',
  start: '',
  end: '',
  dose: '',
  capacity: 0
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

const ModalAddSession = () => {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)
  const [maxCapacity, setMaxCapacity] = useState(0)
  const [error, setError] = useState('')
  const vaksinData = useSelector(state => state.vaksin.data)
  const dispatch = useDispatch()

  const vaksinAvailability = (name) =>{
    return vaksinData.some(val => val.Name === name)
  }

  const doseAvailability = (dose) =>{
    return vaksinData.some(({Name, Dose}) => Name === formData.vaccine_name && Dose === dose)
  }

  const isValid = () =>{
    const {namaVaksin, vaccine_name, date, time, dose, capacity} = formData
    return Boolean(
      namaVaksin === '' ||
      vaccine_name === '' ||
      date === moment() ||
      time === '' ||
      dose === 0 ||
      // eslint-disable-next-line eqeqeq
      capacity == 0
    )    
  }
  
  const handleChange = (e) =>{
    const {name, value} = e.target
    const {errorMsg} = validateInput(e)
    if(name === 'vaccine_name'){
      if(errorMsg){
        setError(errorMsg)
      }
      setFormData({
        ...formData, 
        [name]: value,
        dose: ''
      })  
    }else{
      setFormData({...formData, [name]: value})
    }
  }

  const handlePickDate = (e) =>{
    const selectedDate = moment(e)
    setFormData({...formData, date: selectedDate})
  }

  const handleSubmit = () =>{
    const [start, , end] = formData.time.split(' ')
    const willBeDeleted = ['dose', 'time', 'vaccine_name']
    willBeDeleted.forEach(val => delete formData[val])

    dispatch(addSession({
      ...formData, 
      date: moment(formData.date).format('YYYY-MM-DD'),
      capacity: Number(formData.capacity),
      start,
      end
    }))
    setOpen(false)
    setFormData(INITIAL_FORM_DATA)
  }

  useEffect(() =>{
    dispatch(getVaksinList())
  },[dispatch])

  useEffect(() => {
    const { vaccine_name, dose} = formData
    if(vaccine_name && dose){
      const [selectedVaccine] = vaksinData.filter(({Name, Dose}) => Name === vaccine_name && Dose === dose)
      setFormData({
        ...formData,
        id_vaccine: selectedVaccine.ID
      })
    }

    // eslint-disable-next-line array-callback-return
    vaksinData.map(({Name, Dose, Stock}) =>{
      const {vaccine_name, dose} = formData
      if(Name === vaccine_name && Dose === dose){ 
        setMaxCapacity(Stock)
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.vaccine_name, formData.dose, vaksinData])

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
        maxWidth='xs'
        fullWidth
        aria-labelledby='dialog-add-session'
        onClose={() => setOpen(false)}
      >
        <DialogTitle align='center'>Tambah Sesi</DialogTitle>
        <DialogContent
          sx={{
            ...hideScroller,
          }}
        >
          <Stack>
            <FormControl fullWidth>
              <Stack spacing={2} sx={{mt: 1}}>
                <TextField 
                  name='session_name' 
                  label='Nama Sesi' 
                  helperText={error}
                  error={error !== ''}
                  value={formData.session_name} 
                  onChange={handleChange} 
                />
                <DesktopDatePicker
                  label='Tanggal'
                  disablePast
                  name='date'
                  inputFormat='DD/MM/YYYY'
                  value={formData.date}
                  onChange={(e) => handlePickDate(e)}
                  renderInput={(params) => <TextField {...params} />}
                />
                <FormControl fullWidth>
                  <InputLabel id='dropdown-jenis-vaksin-label'>Jenis Vaksin</InputLabel>
                  <Select
                    id="dropdown-jenis-vaksin"
                    labelId='dropdown-jenis-vaksin-label'
                    label='Jenis Vaksin'
                    name='vaccine_name'
                    value={formData.vaccine_name}
                    onChange={handleChange}
                    MenuProps={MenuProps}
                  >
                    {vaksinNames.map(({name}, idx) =>{
                      return(
                        <MenuItem 
                          key={idx} 
                          value={name}
                          disabled={!vaksinAvailability(name)}
                        >
                          {name}
                        </MenuItem>    
                      )
                    })}
                  </Select>
                </FormControl>
                
                <FormControl>
                  <InputLabel id='dropdown-time-vaksin-label'>Waktu</InputLabel>
                  <Select
                    id="dropdown-time-vaksin"
                    labelId='dropdown-time-vaksin-label'
                    label='Waktu'
                    name='time'
                    value={formData.time}
                    onChange={handleChange}
                  >
                    <MenuItem value='08.00 - 11.00 WIB'>08.00 - 11.00 WIB</MenuItem>
                    <MenuItem value='13.00 - 16.00 WIB'>13.00 - 16.00 WIB</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id='dropdown-dose-vaksin-label'>Dosis</InputLabel>
                  <Select
                    id="dropdown-dose-vaksin"
                    labelId='dropdown-dose-vaksin-label'
                    label='Dosis'
                    name='dose'
                    value={formData.dose}
                    onChange={handleChange}
                    disabled={formData.vaccine_name === ''}
                  >
                    {[1,2,3].map((val) =>{
                      return(
                        <MenuItem value={val} key={val} disabled={!doseAvailability(val)}>{val}</MenuItem>    
                      )
                    })}
                  </Select>
                </FormControl>
                <TextField 
                  error={formData.capacity > maxCapacity}
                  name='capacity' 
                  label='Kapasitas' 
                  value={formData.capacity} 
                  type='number'
                  onChange={handleChange}
                  helperText={maxCapacity > 0 && `Kapasitas maks. ${maxCapacity}`}
                />
              </Stack>
            </FormControl>
          </Stack>          
        </DialogContent>
        <DialogActions sx={{p: 4}}>
          <Button variant='outlined' onClick={() => setOpen(false)}>Batal</Button>
          <Button 
            variant='contained' 
            onClick={handleSubmit} 
            disabled={isValid() || formData.capacity > maxCapacity}
          >
            Tambah
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ModalAddSession;