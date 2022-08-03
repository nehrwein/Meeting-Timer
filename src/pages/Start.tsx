import AgendaTable from '../components/AgendaTable';
import { Typography, Box } from '@mui/material';
import AddItem from '../components/AddItem';

const Start = () => {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Agenda
      </Typography>
      <AgendaTable />
      <Box mt={5}>
        <Typography variant="h6" component="h2" gutterBottom>
          Add subject
        </Typography>
        <AddItem />
      </Box>

    </>
  )
}

export default Start