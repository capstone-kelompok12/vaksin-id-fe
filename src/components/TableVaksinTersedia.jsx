import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVaksinList } from "../store/features/dashboard/dashboardSlice";

const cell = [
  {
    id: 1,
    label: "Nama Vaksin",
  },
  {
    id: 2,
    label: "Vaksinasi Dosis 1",
  },
  {
    id: 3,
    label: "Vaksinasi Dosis 2",
  },
  {
    id: 4,
    label: "Vaksinasi Dosis 3",
  },
];

const TableVaksinTersedia = () => {
  const dispatch = useDispatch();

  const { dataVaksin } = useSelector(state => state.dashboard);

  const result = dataVaksin.reduce((acc, item) => {
    const foundDose = acc.find(x => x.name === item.Name);
    if (foundDose) {
      foundDose[`dosis${item.Dose}`] = item.Stock;
    } else {
      acc.push({
        name: item.Name,
        [`dosis${item.Dose}`]: item.Stock,
      });
    }
    return acc;
  }, []);

  result.forEach(item => {
    for (let i = 1; i <= 3; i++) {
      if (!item[`dosis${i}`]) {
        item[`dosis${i}`] = 0;
      }
    }
  });

  useEffect(() => {
    dispatch(getVaksinList());
  }, [dispatch]);

  return (
    <Box sx={{ my: 4 }}>
      <TableContainer>
        <Typography variant="h5">Statistik Vaksin Tersedia</Typography>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#EEF6ED" }} height={52}>
              {cell.map(({ id, label }) => {
                return (
                  <TableCell
                    key={id}
                    sx={{ fontWeight: 700 }}
                    align={
                      label.toLowerCase().includes("dosis") ? "center" : "left"
                    }
                  >
                    {label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {result.map((item, id) => {
              const { name, dosis1, dosis2, dosis3 } = item;
              return (
                <TableRow key={id} height={52}>
                  <TableCell>{name}</TableCell>
                  <TableCell align="center">{dosis1} dosis</TableCell>
                  <TableCell align="center">{dosis2} dosis</TableCell>
                  <TableCell align="center">{dosis3} dosis</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableVaksinTersedia;
