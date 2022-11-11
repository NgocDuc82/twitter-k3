import React, { useState } from "react"
// import {useState} from 'react';
import Avatar from "../../common/avatar/avatar"
import InputText from "./inputText/inputText"
import SelectOption from "./selectOption/selectOption"
import BtnTweet from "../../common/button/tweet/btnTweet"
import SelectViewMode from "./viewMode/selectViewMode"
import "./status.scss"
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid"
export default function Status() {
  const [isMode, setIsMode] = useState(false)

  const handleClinkInput = () => {
    setIsMode(true)
  }

  return (
    <div className="status">
      <Grid container spacing={2} className="status-wrap">
        <Grid item xs={2} className="status-left">
          <Avatar />
        </Grid>
        <Grid item xs={10} className="status-right">
          {isMode ? <SelectViewMode /> : <> </>}
          <div className="bt-tweet">
            <InputText handleClinkInput={handleClinkInput} />
            <BtnTweet />
          </div>
          {isMode ? <SelectOption /> : <> </>}
        </Grid>
      </Grid>
    </div>
  )
}

// export default status ;
