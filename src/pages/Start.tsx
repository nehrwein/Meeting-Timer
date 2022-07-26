import React, { useState } from 'react';
import { TextField, MenuItem } from '@mui/material';

const speakers = [
  {
    value: 'Joel',
    label: 'Joel',
  },
  {
    value: 'Brittney',
    label: 'Brittney',
  },
  {
    value: 'Karl Gustav',
    label: 'Karl Gustav',
  },
];

const Start = () => {
  const [speaker, setSpeaker] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeaker(event.target.value)
  }

  return (
    <>
      <h1>Please fill in the agenda</h1>
      <form>
      <TextField
          required
          id="speaker"
          select
          label="Speaker"
          value={speaker}
          onChange={handleChange}
          helperText="Please select the speaker"
        >
          {speakers.map((option) => (
            <MenuItem 
              key={option.value} 
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="subject"
          label="Subject"
        />
      </form>
    </>
  )
}

export default Start