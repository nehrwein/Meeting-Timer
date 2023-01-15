import React, {  FC, useContext, useEffect, useRef, useState } from 'react'
import { TextField, MenuItem, IconButton, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { AgendaContextType, AgendaItem } from '../@types/agenda';
import { AgendaContext } from '../context/AgendaContext';


const AddItem: FC = () => {
  const { addItem } = useContext(AgendaContext) as AgendaContextType

  const initialState = {
    id: 0,
    duration: '',
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

  const duration = [
    {
      value: 5,
      label: '5min'
    },
    {
      value: 10,
      label: '10min'
    },
    {
      value: 15,
      label: '15min'
    },
    { 
      value: 20,
      label: '20min'
    },
    {
      value: 25,
      label: '25min'
    },
    {
      value: 30,
      label: '30min'
    },
    {
      value: 45,
      label: '45min'
    },
    {
      value: 60,
      label: '1h'
    },
    {
      value: 90,
      label: '1.5h'
    },
    {
      value: 120,
      label: '2h'
    }
  ]
  const inputRef = useRef<HTMLInputElement>(null);

  const { register, control, handleSubmit, reset, formState: { isSubmitSuccessful, errors} } = useForm<AgendaItem>();

  const formSubmitHandler: SubmitHandler<AgendaItem> = (data: AgendaItem) => {
    addItem(data)
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(initialState)
      if (inputRef.current != null) {
        inputRef.current.focus();
      }
    }
  }, [isSubmitSuccessful])

  return (
    <>
      <form>
        {/* The Controller controls the Mui-TextField within. The TextField receives the Controllers props via field and then can be additionally customized */}
        <Box 
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
              inputRef={inputRef}
              autoFocus
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
          defaultValue=''
          render={({ field }) => (
            <TextField 
              {...field}
              
              type='number'
              required
              select
              label='Duration'
              variant='standard'
              error={!!errors.duration}
              helperText={errors.duration ? 'Please fill out' : ''}
              sx={{
                mr: 2,
                mb: 2, 
                width: 1/6
              }}
            >
              {duration.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </ TextField> 
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
                width: 1/6
              }}
            />
          )} />
          <IconButton 
            aria-label='add'
            type='submit'
            onClick={handleSubmit(formSubmitHandler)}
            sx={{
              color: '#0099bb',
              marginLeft: '25px',
              marginTop: '15px'
            }}
            >
            <AddIcon />
          </IconButton>
        </Box>
      </form>
    </>
  )
}

export default AddItem