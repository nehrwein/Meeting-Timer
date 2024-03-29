import { useContext } from 'react'
import { AgendaContextType, AgendaItem } from '../@types/agenda'
import { AgendaContext } from '../context/AgendaContext'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const AgendaTable = () => {
  const { agenda, deleteItem } = useContext(AgendaContext) as AgendaContextType;

  return (
    <>
      <TableContainer>
        <Table sx={{minwidth: 650, marginBottom: '16px'}} aria-label="table for Agenda">
          <TableHead sx={{backgroundColor: '#323232'}}>
            <TableRow>
              <TableCell>Subject</TableCell>
              <TableCell align="right">Duration(min)</TableCell>
              <TableCell align="right">IDB</TableCell>
              <TableCell align="right">Responsible</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {agenda.map((item: AgendaItem) => (
              <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="item">{item.subject}</TableCell>
                <TableCell align="right">{item.duration}</TableCell>
                <TableCell align="right">{item.idb}</TableCell>
                <TableCell align="right">{item.responsible}</TableCell>
                <TableCell align="right">
                  <IconButton 
                    aria-label="delete"
                    size='small'
                    onClick={() => deleteItem(item.id)}
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default AgendaTable