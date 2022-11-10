// import React from 'react'
import './inputText.scss'
import React ,{ useEffect, useState} from 'react';

export default function inputText({handleClinkInput}) {
  
  return (
    <div className="inputText" onClick={handleClinkInput} >
        <input type="text"  placeholder="What's happening?" />
    </div>
  )
}
