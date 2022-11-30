import React from "react";
import { Box, IconButton, Modal, Typography, TextField } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const VaccineStock = () => {
  function createData(no, name, stock) {
    return { no, name, stock };
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

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#EEF6ED",
      color: theme.palette.common.black,
      fontWeight: "bold",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

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

  const [stock, setStock] = React.useState("");

  const handleChange = (event) => {
    setStock(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Button
          sx={{
            marginLeft: 4,
            marginTop: 5,
            borderRadius: 2,
          }}
          variant="outlined"
          onClick={handleOpen1}
          startIcon={<AddIcon />}
        >
          Tambah Vaksin
        </Button>
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 87,
            marginTop: 6,
          }}
        >
          Stok Vaksin
        </Typography>
        <Box sx={{ minWidth: 120 }}>
          <FormControl sx={{ m: 1, minWidth: 200, marginTop: 5 }} size="small">
            <InputLabel id="demo-simple-select-label">
              Urut Berdasarkan
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={stock}
              label="Age"
              onChange={handleChange}
            >
              {rows.map((row) => (
                <MenuItem>{row.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
        style={{
          backgroundColor: "#EEF6ED"
        }}
        sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            TAMBAH VAKSIN
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
            <Button variant="contained">Tambah</Button>
          </Box>
        </Box>
      </Modal>
      <Box
        sx={{
          marginLeft: 4,
          marginTop: 5,
        }}
      >
        <TableContainer
          elevation={6}
          sx={{
            width: 1160,
          }}
          component={Paper}
        >
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">No.</StyledTableCell>
                <StyledTableCell align="center">Nama</StyledTableCell>
                <StyledTableCell align="center">Stock</StyledTableCell>
                <StyledTableCell align="center">Aksi</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="center">{row.no}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.stock} Botol
                  </StyledTableCell>
                  <StyledTableCell align="center">
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
                  </StyledTableCell>
                </StyledTableRow>
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
                marginTop: 10,
                marginLeft: 65,
              }}
            >
              <Button variant="outlined">Batal</Button>
              <Button variant="contained" onClick={handleOpen2}>
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
                    marginTop: 10,
                  }}
                >
                  <h3>Hapus Vaksin</h3>
                  <p>Apakah Anda yakin menghapus vaksin?</p>
                  <Button onClick={handleClose2} variant="outlined">
                    Cancel
                  </Button>
                  <Button variant="contained">Hapus</Button>
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
                marginTop: 10,
                marginLeft: 65,
              }}
            >
              <Button variant="outlined">Batal</Button>
              <Button variant="contained">Simpan</Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default VaccineStock;
