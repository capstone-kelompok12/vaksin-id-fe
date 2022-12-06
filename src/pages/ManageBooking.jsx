import React from "react";
import { /*Button, Box, Typography,*/ Card, CardActions, CardContent, Chip, lighten, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FilterBooking from "../components/FilterBooking";
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ManageBooking = () => {
  const navigate = useNavigate()

  return (
    <Stack spacing={3} sx={{p: 3}}>
      <FilterBooking />
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
        {[1,2,3,4,5,6,7,8,9,0].map(val =>{
          const id = val
          return(
            <Card 
              elevation={2}
              key={id} 
              onClick={() =>navigate(`/manage-booking/${id}`)}
              sx={{
                borderRadius: 2, 
                flexBasis: '31%', 
                // bgcolor: '#FBFDF7',
                cursor: 'pointer',
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
                  <Typography>Novavax-01</Typography>
                  <Chip label='Berlangsung' color='softWarning' sx={{color: 'softWarning.text'}} />
                </Stack>
                <Stack sx={{mt: 2}}>
                  <Typography variant='h5'>34 / 125</Typography>
                  <Typography variant='h6' gutterBottom>Novavax</Typography>
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
                    Dosis Pertama
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
                    08.00 - 11.00 WIB
                  </Typography>
                </Stack>
              </CardContent>
              <CardActions 
                sx={{
                  bgcolor: 'softDanger.main', 
                  color: 'softDanger.text',
                  p: 2
                }}
              >
                <Typography>100+ orang belum dikonfirmasi</Typography>
              </CardActions>
            </Card>
          )
        })}
      </Stack>
    </Stack>
  );
};

export default ManageBooking;