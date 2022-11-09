<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useState } from "react";
>>>>>>> ab42ad08a2b373fabe6d8274b78931c8a4bf36dd
// import {useState} from 'react';
import Avatar from "../../common/avatar/avatar";
import InputText from "./inputText/InputText";
import SelectOption from "./selectOption/selectOption";
import BtnTweet from "../../common/button/tweet/BtnTweet";
import SelectViewMode from "./viewMode/selectViewMode/selectViewMode";
import DisplayViewMode from "./viewMode/displayViewMode/displayViewMode";
import { useDispatch,useSelector } from "react-redux";
import {todoRemaningSelector} from '../../../redux/selector/selector'

import {UpTweet, fetchlistTweet } from "./statusSlice";
import "./status.scss";

import Grid from "@mui/material/Grid";

export default function Status() {
  const dispatch = useDispatch();
  const listTweet = useSelector(todoRemaningSelector);
  console.log(listTweet);
  useEffect(() => {
    dispatch(fetchlistTweet());
  },[]);
  const [isMode, setIsMode] = useState(false);
  const [infoStatus, setinfoStatus] = useState({
    text: "",
  });
  const changeInputStatus = (e) => {
    setinfoStatus({ text: e.target.value });
    console.log(infoStatus);
  };
  const handleClinkInput = () => {
    setIsMode(true);
  };
  const handleBtnTweet = () => {
    dispatch(UpTweet(infoStatus));
  };
  return (
    <div className="status">
      <Grid container spacing={2} className="status-wrap">
        <Grid item xs={2} className="status-left">
          <Avatar />
        </Grid>
        <Grid item xs={10} className="status-right">
          {isMode ? <SelectViewMode /> : <> </>}
<<<<<<< HEAD
          <InputText
            infoStatus={infoStatus}
            changeInputStatus={changeInputStatus}
            handleClinkInput={handleClinkInput}
          />
=======
          <InputText handleClinkInput={handleClinkInput} />
>>>>>>> ab42ad08a2b373fabe6d8274b78931c8a4bf36dd
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
