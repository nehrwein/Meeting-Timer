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
      <Typography variant="h6" component="h2" gutterBottom>
        Add subject
      </Typography>
      <AddItem />
    </>
  )
}

export default Start