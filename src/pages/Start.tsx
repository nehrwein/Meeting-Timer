import AgendaTable from '../components/AgendaTable';
import { Stack, Typography } from '@mui/material';
import { DeleteButton } from '../components/Buttons';


const Start = () => {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Agenda
      </Typography>
      <AgendaTable />
      <Stack direction="row" spacing={2}>
        <DeleteButton />
      </Stack>
    </>
  )
}

export default Start