import AgendaTable from '../components/AgendaTable';
import { Typography } from '@mui/material';
import AddItem from '../components/AddItem';

const Start = () => {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Agenda
      </Typography>
      <AgendaTable />
      <AddItem />
    </>
  )
}

export default Start