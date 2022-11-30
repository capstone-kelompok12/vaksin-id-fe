import React from "react";
import { Box, IconButton, Modal, Typography, TextField } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const VaccineStock = () => {
  function createData(no, name, stock, carbs, protein) {
    return { no, name, stock, carbs, protein };
  }

  const rows = [
    createData(1, "Sinovac", 120),
    createData(2, "Astra Zeneca", 46),
    createData(3, "Pfizer", 92),
  ];

  const theme = createTheme({
    palette: {
      secondary: {
        main: teal[300],
      },
    },
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

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

  const [value, setValue] = useState("");

  return (
    <>
      <Button
        sx={{
          marginLeft: 4,
          marginTop: 5,
          borderRadius: 2,
        }}
        variant="contained"
        onClick={handleOpen1}
        startIcon={<AddIcon />}
      >
        Tambah Vaksin
      </Button>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            TAMBAH VAKSIN
          </Typography>

          <TextField
            sx={{
              marginTop: 10,
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
              marginTop: 30,
              marginLeft: 70,
            }}
          >
            <Button variant="text">Batal</Button>
            <Button variant="text">Simpan</Button>
          </Box>
        </Box>
      </Modal>
      <Box
        sx={{
          marginLeft: 4,
          marginTop: 5,
        }}
      >
        <Paper
          sx={{
            backgroundColor: "#00897b",
            width: 1000,
            height: 400,
          }}
          elevation={6}
        >
          <TableContainer
            sx={{
              width: 1000,
            }}
            component={Paper}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead
                sx={{
                  fontWeight: "bold",
                }}
              >
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell align="center">Nama Vaksin</TableCell>
                  <TableCell align="center">Stok Vaksin</TableCell>
                  <TableCell align="center">Aksi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.no}
                    </TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.stock} Botol</TableCell>
                    <TableCell align="center">
                      <IconButton
                        onClick={handleOpen}
                        aria-label="delete"
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        onClick={handleOpen3}
                        aria-label="edit"
                        color="primary"
                      >
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                HAPUS VAKSIN
              </Typography>
              <TextField
                sx={{
                  marginTop: 10,
                  width: 360,
                }}
                id="outlined-basic"
                label="Nama Vaksin"
                variant="outlined"
                placeholder="Masukkan Nama"
              ></TextField>
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
                  marginTop: 30,
                  marginLeft: 70,
                }}
              >
                <Button variant="text">Batal</Button>
                <Button variant="text" onClick={handleOpen2}>
                  Hapus
                </Button>
              </Box>
              <Box>
                <Modal
                  hideBackdrop
                  open={open2}
                  onClose={handleClose2}
                  aria-labelledby="child-modal-title"
                  aria-describedby="child-modal-description"
                >
                  <Box
                    sx={{
                      ...style,
                      width: 400,
                      textAlign: "center",
                      borderRadius: 8,
                    }}
                  >
                    <h3>Hapus Vaksin</h3>
                    <p>Apakah Anda yakin menghapus vaksin?</p>
                    <Button onClick={handleClose2} variant="outlined">
                      Cancel
                    </Button>
                    <Button variant="outlined">Hapus</Button>
                  </Box>
                </Modal>
              </Box>
            </Box>
          </Modal>
          <Modal
            open={open3}
            onClose={handleClose3}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                EDIT VAKSIN
              </Typography>

              <TextField
                sx={{
                  marginTop: 10,
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
                  marginTop: 30,
                  marginLeft: 70,
                }}
              >
                <Button variant="text">Batal</Button>
                <Button variant="text">Simpan</Button>
              </Box>
            </Box>
          </Modal>
        </Paper>
      </Box>
    </>
  );
};

export default VaccineStock;
