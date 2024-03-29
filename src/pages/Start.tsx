import AgendaTable from '../components/AgendaTable';
import { Typography, Box, Paper, Button } from '@mui/material';
import AddItem from '../components/AddItem';
import DeleteAllEntries from '../components/DeleteAllEntries';
import { Link } from 'react-router-dom';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


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
          <Box 
            sx={{ 
              display: 'flex',
              justifyContent: 'space-between'
              }}
          >
            <Typography 
              variant="h6" 
              component="h2" 
              gutterBottom  
            >
              Add subject
            </Typography>
            <Box sx={{ 
              color: '#0099bb',
              marginRight: '0.4rem'
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" viewBox="0 0 1921 575">
                <path d="M333.36 331.15h-52.64l-59.86 166.13C214 517 199 526.82 177.69 526.82h-17.31c-20.72 0-35.13-9.85-42-29.54L57.91 331.15H5.3L68 505.48c15.57 43.07 47.8 64.41 97.88 64.41h6.23c50.08 0 82.33-21.34 97.86-64.41zm290.37 238.72L561 395.55c-15.55-43.08-47.81-64.41-97.86-64.41h-6.82c-50.08 0-82.31 21.33-97.86 64.41l-63.34 174.32h52.81l59.86-166.12c6.91-19.69 21.87-29.54 43.16-29.54h17.69c20.73 0 35.14 9.86 42 29.54l27.28 75H412.47l-12.05 43.06h153.21l17.49 48.08zm920.99-219.42c-14.35-12.71-30.36-18.88-48.4-18.88h-221.91v238.74h221.91c19.27 0 36.08-6.16 49.63-18s20.1-27.49 20.1-46.37V396c0-17.66-6.97-32.84-21.33-45.55zm-23.8 155.45c0 14.37-8.19 21.34-24.6 21.34h-177.19v-153h177.19c6.15 0 11.48 2 16.82 6.56s7.78 9.42 7.78 15.17zm-283.21 0V331.57h-45.13v97.21h-175.14c-16.41 0-24.62-7.38-24.62-21.72v-75.49h-45.11v75.49c0 19.28 7 34.86 20.51 46.76s29.94 17.64 49.22 17.64h175.14v34.44c0 14.37-8.18 21.34-24.61 21.34H960v43.07h208c19.3 0 35.69-6.16 49.23-18s20.51-27.49 20.51-46.37M906.32 374.25v-42.68H711.45c-18 0-34.06 6.17-48.4 18.88s-21.33 27.89-21.33 45.55v11.89c0 18.88 7 34.46 20.51 46.35s29.95 17.65 49.22 17.65l141.93.4c16.39 0 24.6 7 24.6 21.34v12.27c0 6.15-2.45 11.08-7.79 15.59-5.33 4.1-10.66 6.15-16.81 6.15H669.06v42.67h184.32c18 0 34-6.16 48.41-18.87 14.34-12.31 21.33-27.48 21.33-45.54v-12.29q0-28.32-20.94-46.77c-13.12-11.48-29.53-17.22-48.8-17.22l-141.93-.42c-16.41 0-24.61-7-24.61-21.33V396c0-5.75 2.46-10.66 7.79-15.17s10.66-6.56 16.82-6.56zM1701.27 434a80 80 0 0056.53-136.53l-56.5-56.54-56.3 56.25A80 80 0 001701.27 434zm-28.21-108.49l28.16-28.15 28.25 28.27a40 40 0 11-56.41-.12zm28.22-321.2a80 80 0 00-56.53 136.53l56.49 56.53 56.31-56.3a80 80 0 00-56.27-136.76zm28.2 108.48L1701.32 141l-28.25-28.27a40 40 0 1156.41.11zm186.61 106.34a80 80 0 00-136.53-56.53L1723 219.1l56.29 56.31a80 80 0 00136.77-56.28zm-108.48 28.21l-28.15-28.16 28.26-28.25a40 40 0 11-.11 56.41zm-321.16-28.22A80 80 0 001623 275.65l56.53-56.49-56.29-56.31a80 80 0 00-136.77 56.27zm108.48-28.2l28.16 28.16-28.27 28.25a40 40 0 11.11-56.41z"></path>
              </svg>
            </Box>
          </Box>
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
            sx={{
              display: 'inline-block'
              }}
          >
            Agenda
          </Typography>
          <DeleteAllEntries />
          <Button
           component={Link} to="/timer"
           sx={{
              color: '#0099bb',
              marginLeft: '25px',
              marginBottom: '2px'
            }}
            startIcon={<AccessAlarmIcon fontSize='large'/>}
          >
            Start
          </Button>
          <AgendaTable />
        </Paper>
      </Box>
      </Paper>
    </Box>
    </>
  )
}

export default Start