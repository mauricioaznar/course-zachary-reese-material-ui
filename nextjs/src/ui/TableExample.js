import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

const TableExample = () => {

  const data = [
    {
      name: 'a',
      date: 'a',
      service: 'a',
      features: 'a',
      complexity: 'a',
      platforms: 'a',
      users: 'a',
      total: 'a'
    }
  ]

  return (
    <TableContainer component={Paper} style={{width: '100%'}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align={'center'}>Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Service</TableCell>
            <TableCell>Features</TableCell>
            <TableCell style={{ width: '20em'}}>Complexity</TableCell>
            <TableCell>Plataforms</TableCell>
            <TableCell>Users</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((row, index) => {
              return <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.service}</TableCell>
                <TableCell>{row.features}</TableCell>
                <TableCell>{row.complexity}</TableCell>
                <TableCell>{row.platforms}</TableCell>
                <TableCell>{row.users}</TableCell>
                <TableCell>{row.total}</TableCell>
              </TableRow>
            })
          }

        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableExample;