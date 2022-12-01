import React, { useState } from 'react'
import { Box, Button, IconButton, Modal, TextField, Typography } from '@mui/material'
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  width: 767,
  p: 4,
};

const ModalAddEditStock = ({edit}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  // const [stock, setStock] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {edit
      ? <IconButton
        onClick={handleOpen}
        aria-label="edit"
        sx={{backgroundColor: 'success.light', borderRadius: 2, '&:hover': {backgroundColor: 'success.main'}}}
      >
        <EditIcon />
      </IconButton>
      : <Button
        sx={{
          borderRadius: 2,
        }}
        variant="outlined"
        onClick={handleOpen}
        startIcon={<AddIcon />}
      >
        Tambah Vaksin
      </Button>}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={{
            backgroundColor: "#EEF6ED"
          }}
          sx={style}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {edit ? 'Edit Vaksin' : 'Tambah Vaksin'}
          </Typography>
          <TextField
            sx={{
              marginTop: 5,
              width: 360,
            }}
            id="outlined-basic"
            label="Nama Vaksin"
            variant="outlined"
            placeholder="Masukkan Nama"
          />
          <TextField
            sx={{
              marginTop: 4,
              width: 360,
            }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            helperText={!value ? "" : "Masukkan Stok Vaksin"}
            label="Stok Vaksin"
            variant="outlined"
            placeholder="Masukkan Stok"
          />
          <Box
            sx={{
              marginTop: 10,
              marginLeft: 65,
            }}
          >
            <Button variant="outlined">Batal</Button>
            <Button variant="contained" sx={{ml: 2}}>Tambah</Button>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default ModalAddEditStock