import { Button } from '@mui/material';
import { useContext } from 'react'
import { AgendaContextType, AgendaItem } from '../@types/agenda'
import { AgendaContext } from '../context/AgendaContext'

const DeleteAllEntries = () => {
  const { clearList } = useContext(AgendaContext) as AgendaContextType;

  return (
    <>
       <Button
          onClick={() => clearList()}
          sx={{
            color: '#0099bb',
            marginLeft: '25px',
            marginBottom: '2px'
          }}
        >
          new
        </Button>
    </>
  )
}

export default DeleteAllEntries