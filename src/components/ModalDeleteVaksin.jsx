import React, { useState } from 'react'
import { Button, IconButton, Modal, Stack, Typography } from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#EEF6ED",
  boxShadow: 2,
  p: 4,
};

const ModalDeleteVaksin = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton
        onClick={handleOpen}
        aria-label="delete"
        sx={{backgroundColor: 'error.light', borderRadius: 2, '&:hover': {backgroundColor: 'error.main'}}}
      >
        <DeleteIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Stack
          spacing={3}
          sx={{
            ...style,
            width: 400,
            textAlign: "center",
            borderRadius: 4,
          }}
        >
          <Typography variant='h6' gutterBottom>Hapus Vaksin</Typography>
          <Typography>Apakah Anda yakin menghapus vaksin?</Typography>
          <Stack spacing={2} direction='row' sx={{justifyContent: 'center'}}>
            <Button onClick={handleClose} variant="outlined">
              Cancel
            </Button>
            <Button variant="contained">Hapus</Button>
          </Stack>
        </Stack>
      </Modal>
    </>
  )
}

export default ModalDeleteVaksin