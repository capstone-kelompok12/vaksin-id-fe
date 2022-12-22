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
import { fetchUserStatic } from "../store/features/dashboard/dashboardSlice";

const cell = [
  {
    id: 1,
    label: "Kelompok Usia",
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

const TablePendaftar = () => {
  const dispatch = useDispatch();

  const { data: DataDashboard } = useSelector(
    state => state.dashboard
  );

  useEffect(() => {
    dispatch(fetchUserStatic());
  }, [dispatch]);

  return (
    <Box sx={{ my: 4 }}>
      <TableContainer>
        <Typography variant="h5">Statistik Pendaftar Vaksin</Typography>
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
            {DataDashboard?.RegisteredStat?.map((item, id) => {
              const { Name, DoseOne, DoseTwo, DoseThree } = item;
              return (
                <TableRow key={id} height={52}>
                  <TableCell>{Name}</TableCell>
                  <TableCell align="center">{DoseOne} dosis</TableCell>
                  <TableCell align="center">{DoseTwo} dosis</TableCell>
                  <TableCell align="center">{DoseThree} dosis</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TablePendaftar;
