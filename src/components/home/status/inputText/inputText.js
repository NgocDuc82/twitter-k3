// import React from 'react'
import './inputText.scss'
import React ,{ useEffect, useState} from 'react';

export default function inputText(props) {
  const {handleClinkInput,changeInputStatus , infoStatus} = props;
  return (
    <div className="inputText" onClick={handleClinkInput} >
        <input type="text" onChange={changeInputStatus}  placeholder="What's happening?" />
    </div>
  )
}
