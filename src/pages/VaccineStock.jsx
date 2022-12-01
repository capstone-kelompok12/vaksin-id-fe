import React, { useState } from "react";
import 
  { Paper, 
    Table, 
    TableBody, 
    TableContainer, 
    TableHead, 
    TableRow, 
    InputLabel, 
    MenuItem, 
    FormControl, 
    Select,
    Box, 
    Typography, 
    Stack
  } from "@mui/material";
import ModalAddEditStock from "../components/ModalAddEditStock";
import ModalDeleteVaksin from "../components/ModalDeleteVaksin";
import { StyledTableCell, StyledTableRow } from "../components/StyledTable";

const cells = [
  {
    id: 1,
    label: 'No.'
  },
  {
    id: 2,
    label: 'Nama'
  },
  {
    id: 3,
    label: 'Stock'
  },
  {
    id: 4,
    label: 'Aksi'
  },
]

const VaccineStock = () => {

  const rows = [
    {
      id: 1,
      name: 'Sinovac',
      stock: 120
    },
    {
      id: 2,
      name: 'Astrazeneca',
      stock: 46
    },
    {
      id: 3,
      name: 'Pfizer',
      stock: 92
    },
    {
      id: 4,
      name: 'Janssen',
      stock: 102
    },
    {
      id: 5,
      name: 'Moderna',
      stock: 200
    },
  ];

  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          p: 3,
        }}
      >
        <Stack 
          direction={'row'} 
          sx={{
            justifyContent: 'space-between', 
            alignItems: 'center',
            width: '100%', 
          }}
        >
          <ModalAddEditStock />
          <Stack direction={'row'} spacing={2}>
            <Typography sx={{alignSelf: 'center'}}>Stok Vaksin</Typography>
            <FormControl sx={{ m: 1, minWidth: 200}} size="small">
              <InputLabel id='filter-label'>
                Filter Berdasarkan
              </InputLabel>
              <Select
                labelId='filter-label'
                id="filter-table"
                value={filter}
                label="Filter Berdasarkan"
                onChange={(e) =>handleChange(e)}
              >
                {rows.map(({id, name}) => (
                  <MenuItem key={id} value={name}>{name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Stack>
        <TableContainer
          elevation={3}
          sx={{
            width: '100%',
          }}
          component={Paper}
        >
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                {cells.map(({id, label}) =>{
                  return <StyledTableCell key={id} align="center">{label}</StyledTableCell>
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(({id, name, stock}, idx) => {
                return(
                <StyledTableRow key={id}>
                  <StyledTableCell align="center">{idx + 1}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">
                    {name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {stock} Botol
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{display: 'flex', gap: 2, justifyContent: 'center'}}>
                    <ModalDeleteVaksin />
                    <ModalAddEditStock edit={true} />
                  </StyledTableCell>
                </StyledTableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default VaccineStock;
