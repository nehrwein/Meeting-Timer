import React, {  FC, useContext, useState } from 'react'
import { TextField, MenuItem, Button, FormGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { AgendaContextType, AgendaItem } from '../@types/agenda';
import { AgendaContext } from '../context/AgendaContext';

// const speakers = [
//   {
//     value: 'Joel',
//     label: 'Joel',
//   },
//   {
//     value: 'Brittney',
//     label: 'Brittney',
//   },
//   {
//     value: 'Karl Gustav',
//     label: 'Karl Gustav',
//   },
// ];

const AddItem: FC = () => {
  const { addItem } = useContext(AgendaContext) as AgendaContextType

  const { register, control, handleSubmit, formState: { errors} } = useForm<AgendaItem>();

  const formSubmitHandler: SubmitHandler<AgendaItem> = (data: AgendaItem) => {
    addItem(data)
  }
  // const [speaker, setSpeaker] = useState('')

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSpeaker(event.target.value)
  // }

  return (
    <>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        {/* The Controller controls the Mui-TextField within. The TextField receives the Controllers props via field and then can be additionally customized */}
        <Controller 
          name="subject" 
          control={control} 
          defaultValue=''
          render={({ field }) => (
            <TextField 
              {...field} 
              label='Subject'
              required
              variant='outlined'
              error={!!errors.subject}
              helperText={errors.subject ? errors.subject?.message : ''}
              fullWidth
              margin='dense'
            />
          )} />
        <Controller 
          name="duration" 
          control={control} 
          render={({ field }) => (
            <TextField 
              {...field} 
              type='number'
              required
              label='Duration'
              variant='outlined'
              error={!!errors.duration}
              helperText={errors.duration ? errors.duration?.message : ''}
              margin='dense'
            />
          )} />
        <Controller 
          name="responsible" 
          control={control} 
          defaultValue=''
          render={({ field }) => (
            <TextField 
              {...field} 
              type='text'
              required
              label='Responsible'
              variant='outlined'
              error={!!errors.responsible}
              helperText={errors.responsible ? errors.responsible?.message : ''}
              margin='dense'
            />
          )} />
        <Controller 
          name="idb" 
          control={control} 
          defaultValue=''
          render={({ field }) => (
            <TextField 
              {...field} 
              type='text'
              required
              label='IDB'
              variant='outlined'
              error={!!errors.idb}
              helperText={errors.idb ? errors.idb?.message : ''}
              margin='dense'
            />
          )} />
        <Button 
          type="submit"
          variant='outlined'
        >
          Add
        </Button>
      </form>

      {/* <FormGroup row>
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
                <Button 
          color="secondary" 
          size="large"
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() => {
            alert('clicked');
          }}
        >Add
        </Button>
      </FormGroup> */}
    </>
  )
}

export default AddItem