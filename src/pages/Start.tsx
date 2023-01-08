import AgendaTable from '../components/AgendaTable';
import { Typography, Box, Paper, Container } from '@mui/material';
import AddItem from '../components/AddItem';

const Start = () => {
  return (
    <>
    <Box>
      <Paper 
        elevation={1} 
        sx={{
          height: '100vh', 
          padding: '0.5rem'
          }}
      >
        <Paper 
          elevation={5} 
          sx={{padding: '0.5rem'}}
        >
          <Typography 
            variant="h6" 
            component="h2" 
            gutterBottom  
          >
            Add subject
          </Typography>
          <AddItem />
        </Paper>
      <Box mt={5}>
        <Paper 
          elevation={7} 
          sx={{padding: '0.5rem'}}
        >
          <Typography 
            variant="h6" 
            component="h1" 
            gutterBottom
          >
            Agenda
          </Typography>
          <AgendaTable />
        </Paper>
      </Box>
      </Paper>
    </Box>
    </>
  )
}

export default Start