import React, { useState } from "react";
import { Card, CardActions, CardContent, Chip, lighten, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FilterBooking from "../components/FilterBooking";
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSessionList } from "../store/features/session/sessionSlice";
import moment from "moment";
import NotFoundImg from '../assets/img/notfound.png'

const INITIAL_SELECTED_FILTER = {
  date: '',
  vaksin: '',
  status: '',
  waktu: '',
  dosis: ''
}

const ManageBooking = () => {
  const [selectedFilter, setSelectedFilter] = useState(INITIAL_SELECTED_FILTER)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {data} = useSelector(state => state.session)

  const sessionList = data.filter(val =>{
    const {date, vaksin, status, waktu, dosis} = selectedFilter
    if(date){
      return val.Date.includes(moment(date).format('YYYY-MM-DD'))
    }
    if(vaksin !== 'Semua' && vaksin !== ''){
      return val.Vaccine.Name === vaksin
    }
    if(status !== 'Semua' && status !== ''){
      return val.status === status
    }
    if(waktu !== ''){
      const [start, , end] = waktu.split(' ')
      return val.StartSession === start && val.EndSession === end
    }
    if(dosis !== ''){
      return val.Dose === dosis
    }
    return val
  })
  
  const resetFilter = () => setSelectedFilter(INITIAL_SELECTED_FILTER)
  const handleFilterDate = (e) =>{
    setSelectedFilter({
      ...INITIAL_SELECTED_FILTER,
      date: moment(e)
    })
  }

  const handleFilterVaksin = (e) =>{
    setSelectedFilter({
      ...INITIAL_SELECTED_FILTER,
      vaksin: e.target.value
    })
  }

  const handleFilterStatus = (e) =>{
    setSelectedFilter({
      ...INITIAL_SELECTED_FILTER,
      status: e.target.value
    })
  }

  const setFilter = (name, value) =>{
    setSelectedFilter({
      ...INITIAL_SELECTED_FILTER,
      [name]: value
    })
  }

  useEffect(() =>{
    dispatch(getSessionList())
  },[dispatch])

  return (
    <Stack spacing={3} sx={{p: 3}}>
      <FilterBooking 
        resetFilter={resetFilter}
        selectedFilter={selectedFilter}
        handleFilterDate={handleFilterDate}
        handleFilterVaksin={handleFilterVaksin}
        handleFilterStatus={handleFilterStatus}
        setFilter={setFilter}
      />

      <Stack
        direction='row'
        sx={{
          width: '100%',
          maxWidth: 1030,
          flexWrap: 'wrap',
          gap: 4,
          '& .MuiDataGrid-row:hover': {
            cursor: 'pointer',
            color: 'primary.main',
          },
        }}
      >
        {sessionList.map(val =>{
          const {
            ID: id, SessionName, Vaccine,
            Capacity, CapacityLeft,
            Dose, EndSession, StartSession,
            Booking, status, color
          } = val
          const unconfirmed = Booking.filter(({Status}) => Status === 'OnProcess')

          return(
            <Card 
              elevation={2}
              key={id} 
              onClick={() =>navigate(`/manage-booking/${id}`)}
              sx={{
                borderRadius: 2, 
                flexBasis: '31%', 
                cursor: 'pointer',
                transition: 'ease .5s',
                '&:hover': {
                  transform: 'scale(1.0175)'
                }
              }}
            >
              <CardContent>
                <Stack 
                  direction={'row'} 
                  sx={{
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                  }}
                >
                  <Typography>{SessionName}</Typography>
                  <Chip label={status} color={color} sx={{color: `${color}.text`}} />
                </Stack>
                <Stack sx={{mt: 2}}>
                  <Typography variant='h5'>{`${Capacity - CapacityLeft}/${Capacity}`}</Typography>
                  <Typography variant='h6' gutterBottom>{Vaccine.Name}</Typography>
                  <Typography 
                    sx={{
                      color: lighten('#000', 0.3), 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: .5, 
                      py: .5
                    }}
                  >
                    <BloodtypeIcon />
                    Dosis {Dose}
                  </Typography>
                  <Typography 
                    sx={{
                      color: lighten('#000', 0.3), 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: .5, 
                      py: .5
                    }}
                  >
                    <AccessTimeIcon />
                    {StartSession} - {EndSession} WIB
                  </Typography>
                </Stack>
              </CardContent>
              <CardActions 
                sx={{
                  bgcolor: unconfirmed.length > 0 ? 'softDanger.main' : 'softSuccess.main', 
                  color: unconfirmed.length > 0 ? 'softDanger.text' : 'softSuccess.text',
                  p: 2
                }}
              >
                <Typography>
                  {!unconfirmed.length
                    ? 'Semua orang telah dikonfirmasi' 
                    : unconfirmed.length < 100 
                      ? `${unconfirmed.length} orang belum dikonfirmasi`
                      : '100+ orang belum dikonfirmasi'
                  } 
                </Typography>
              </CardActions>
            </Card>
          )
        })}
        {sessionList.length < 1 &&
          <Stack 
            alignItems='center' 
            justifyContent='center' 
            width={'100%'}
            sx={{py: 6}}
          >
            <img 
              src={NotFoundImg} 
              alt="not-found" 
              width={260}
            />
            Upss... Sesi yang kamu cari tidak ada
          </Stack>
        }
      </Stack>
    </Stack>
  );
};

export default ManageBooking;