import React, {  FC, useContext, useEffect } from 'react'
import { TextField, MenuItem, Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { AgendaContextType, AgendaItem } from '../@types/agenda';
import { AgendaContext } from '../context/AgendaContext';


const AddItem: FC = () => {
  const { addItem } = useContext(AgendaContext) as AgendaContextType

  const initialState: AgendaItem = {
    id: 0,
    duration: 0,
    subject: '',
    idb: '',
    responsible: ''
  }
  
  const IDB = [
    {
      value: 'I',
      label: 'Information'
    }, 
    {
      value: 'D',
      label: 'Diskussion'
    }, 
    {
      value: 'B',
      label: 'Beslut'
    }
  ]

  const { register, control, handleSubmit, reset, formState: { isSubmitSuccessful, errors} } = useForm<AgendaItem>();

  const formSubmitHandler: SubmitHandler<AgendaItem> = (data: AgendaItem) => {
    addItem(data)
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(initialState)
    }
  }, [isSubmitSuccessful])

  console.log('hi: ', errors)

  return (
    <>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        {/* The Controller controls the Mui-TextField within. The TextField receives the Controllers props via field and then can be additionally customized */}
        <Box 
          component="form"
          mb={4}
        >
        <Controller 
          {...register("subject", { required: true })} 
          control={control} 
          defaultValue=''
          render={({ field }) => (
            <TextField 
              {...field}
              label='Subject'
              required
              variant='standard'
              error={!!errors.subject}
              helperText={errors.subject ? 'Please fill out' : ''}
              sx={{
                mr: 2,
                mb: 2,  
                width: 1/3
              }}
            />
          )} />
        <Controller 
          {...register("duration", { required: true })} 
          control={control}
          render={({ field }) => (
            <TextField 
              {...field}
              
              type='number'
              required
              label='Duration'
              variant='standard'
              error={!!errors.duration}
              helperText={errors.duration ? 'Please fill out' : ''}
              sx={{
                mr: 2,
                mb: 2, 
                width: 1/6
              }}
            />
          )} />
        <Controller 
          {...register("idb", { required: true })} 
          control={control} 
          defaultValue=''
          render={({ field }) => (
            <TextField 
              {...field} 
              type='text'
              select
              required
              label='IDB'
              variant='standard'
              error={!!errors.idb}
              helperText={errors.idb ? 'Please fill out' : ''}
              sx={{
                mr: 2,
                mb: 2, 
                width: 1/6
              }}
            >
              {IDB.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </ TextField>  
          )} />
        <Controller 
          {...register("responsible", { required: true })}  
          control={control} 
          defaultValue=''
          render={({ field }) => (
            <TextField 
              {...field} 
              type='text'
              required
              label='Responsible'
              variant='standard'
              error={!!errors.responsible}
              helperText={errors.responsible ? 'Please fill out' : ''}
              sx={{
                width: 0.3
              }}
            />
          )} />
        </Box>
        <Button 
          type="submit"
          variant='contained'
          size='small'
          color='primary'
        >
          Add
        </Button>
      </form>
    </>
  )
}

export default AddItem