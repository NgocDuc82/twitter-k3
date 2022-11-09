import React, {useState} from 'react';
// import {useState} from 'react';
import Avatar from "../../common/avatar/avatar";
import InputText from "./inputText/inputText";
import SelectOption from "./selectOption/selectOption";
import BtnTweet from "../../common/button/tweet/btnTweet";
import SelectViewMode from "./viewMode/selectViewMode/selectViewMode";
import DisplayViewMode from "./viewMode/displayViewMode/displayViewMode";
import { useDispatch } from "react-redux";
import { upStatus ,UpTweet } from "./statusSlice"
import "./status.scss";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
export default function Status() {
  const dispatch = useDispatch()
  const [isMode, setIsMode] = useState(false);
  const [infoStatus, setinfoStatus] = useState({
    text: '',
    photoUrl: ''
  })
  const changeInputStatus = (e) => {
    // console.log(e.target.value);
    setinfoStatus({text: e.target.value})
    console.log(infoStatus);
  }
  const handleClinkInput = () => {
    setIsMode(true);
  };
  const handleBtnTweet = () => {
    // dispatch(upStatus(infoStatus))
    dispatch(UpTweet(infoStatus))
  }
  return (
    <div className="status">
      <Grid container spacing={2} className="status-wrap">
        <Grid item xs={2} className="status-left">
          <Avatar />
        </Grid>
        <Grid item xs={10} className="status-right">
          {isMode ? <SelectViewMode /> : <> </>}
          <InputText infoStatus={infoStatus} changeInputStatus={changeInputStatus}   handleClinkInput={handleClinkInput} />
          {isMode ? <DisplayViewMode /> : <> </>}

          <div className="bottom">
            <SelectOption />
            <BtnTweet handleBtnTweet={handleBtnTweet} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

// export default status ;
