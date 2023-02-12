import { Typography } from '@mui/material'
import React from 'react'
import ProgressBar from 'react-customizable-progressbar'
import "./Timer.css"

const Timer = () => {
  return (
    <>
      <Typography variant="h4" component="h2" gutterBottom>
        Headline
      </Typography>
      <div className='timer-container'>
        <ProgressBar 
          radius={100} 
          progress={100} 
          strokeColor='#0099bb'
          strokeWidth={28}
          strokeLinecap="butt"
          trackStrokeWidth={14}
          trackStrokeLinecap="butt"
          cut={120}
          rotate={-210}
        />
      </div>
    </>
  )
}

export default Timer