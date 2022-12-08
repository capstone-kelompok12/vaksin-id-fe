import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Typography } from '@mui/material'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

const ModalDeleteVaksin = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton 
        color='danger'
        onClick={handleOpen}
        aria-label="delete"
        sx={{border: '1px solid'}} 
      >
        <DeleteOutlinedIcon />
      </IconButton>

      <Dialog
        fullWidth
        maxWidth='xs'
        open={open}
        onClose={handleClose}
      > 
        <DialogTitle sx={{display: 'flex', alignItems: 'end', gap: 1}}>
          <ErrorOutlineOutlinedIcon color='danger'fontSize='large' />
          <Typography variant='h5'>Yakin ingin hapus stok vaksin?</Typography>
        </DialogTitle>
          <Divider />
        <DialogContent>
          Data yang dihapus tidak dapat dikembalikan.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Batal</Button>
          <Button onClick={handleClose} color='danger'>Hapus</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ModalDeleteVaksin