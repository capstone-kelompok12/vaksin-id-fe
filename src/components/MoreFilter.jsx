import React, { useState } from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const MoreFilter = ({selectedFilter, setFilter}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton 
        id='more-filter-button'
        aria-controls={open ? 'more-filter' : undefined}
        aria-haspopup={true}
        aria-expanded={open ? true : undefined}
        onClick={handleClick}
        sx={{
          height: 48, 
          width: 48, 
          alignSelf: 'center'
        }}
      >
        <MoreHorizIcon />
      </IconButton>
      
      <Menu
        id="more-filter"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'more-filter-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <FilterWaktu 
          handleClose={handleClose} 
          selectedFilter={selectedFilter}
          setFilter={setFilter}
        />
        <FilterDosis 
          handleClose={handleClose} 
          selectedFilter={selectedFilter}
          setFilter={setFilter}
        />
      </Menu>
    </>
  )
}

export default MoreFilter;

const FilterWaktu = ({handleClose, selectedFilter, setFilter}) =>{
  const {waktu} = selectedFilter
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  return(
    <>
      <MenuItem 
        selected={open}
        id='button-filter-waktu'
        aria-controls={open ? 'menu-filter-waktu' : undefined}
        aria-haspopup={true}
        aria-expanded={open ? true : undefined}
        onClick={handleClick}
        sx={{
          width: 160, 
          justifyContent: 'space-between', 
          p: 1
        }}
      >
        Waktu
        <ArrowRightIcon />
      </MenuItem>
      <Menu
        id="menu-filter-waktu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'button-filter-waktu',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}        
      >
        <MenuItem
          selected={waktu === '08.00 - 11.00 WIB'} 
          onClick={() =>{
            setFilter('waktu', '08.00 - 11.00 WIB')
            setAnchorEl(null)
            handleClose()
          }}
        >
          08.00 - 11.00 WIB
        </MenuItem>
        <MenuItem
          selected={waktu === '13.00 - 16.00 WIB'} 
          onClick={() =>{
            setFilter('waktu', '13.00 - 16.00 WIB')
            setAnchorEl(null)
            handleClose()
          }}
        >
          13.00 - 16.00 WIB
        </MenuItem>
      </Menu>
    </>
  )
}

const FilterDosis = ({handleClose, selectedFilter, setFilter}) =>{
  const {dosis} = selectedFilter
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return(
    <>
      <MenuItem 
        selected={open}
        id='button-filter-dosis'
        aria-controls={open ? 'menu-filter-dosis' : undefined}
        aria-haspopup={true}
        aria-expanded={open ? true : undefined}
        onClick={handleClick}
        sx={{
          width: 160, 
          justifyContent: 'space-between', 
          p: 1
        }}
      >
        Dosis
        <ArrowRightIcon />
      </MenuItem>
      <Menu
        id="menu-filter-dosis"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'button-filter-dosis',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}        
      >
        <MenuItem 
          selected={dosis === 1}
          onClick={() =>{
            setFilter('dosis', 1)
            setAnchorEl(null)
            handleClose()
          }}
        >
          1
        </MenuItem>
        <MenuItem 
          selected={dosis === 2}
          onClick={() =>{
            setFilter('dosis', 2)
            setAnchorEl(null)
            handleClose()
          }}
        >
          2
        </MenuItem>
        <MenuItem 
          selected={dosis === 3}
          onClick={() =>{
            setFilter('dosis', 3)
            setAnchorEl(null)
            handleClose()
          }}
        >
          3
        </MenuItem>
      </Menu>
    </>
  )
}