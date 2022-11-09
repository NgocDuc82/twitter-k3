import React from 'react'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import './header.scss'

export default function header() {
  return (
    <div className='header'>
        <div>
            <a>Home</a>
        </div>
        <div className='icon'>
            <AutoAwesomeIcon/> 
        </div>
    </div>
  )
}
