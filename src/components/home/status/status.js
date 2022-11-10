import React, { useState, useEffect } from "react";
// import {useState} from 'react';
import Avatar from "../../common/avatar/avatar";
import InputText from "./inputText/InputText";
import SelectOption from "./selectOption/selectOption";
import BtnTweet from "../../common/button/tweet/BtnTweet";
import SelectViewMode from "./viewMode/selectViewMode/selectViewMode";
import DisplayViewMode from "./viewMode/displayViewMode/displayViewMode";

import { useDispatch } from "react-redux";
import moment from "moment";

import { addNewStatus } from "../tweets/tweetsSlice";
import "./status.scss";

import Grid from "@mui/material/Grid";

export default function Status() {
  const dispatch = useDispatch();
  const createAt = moment().toDate();
  const [isMode, setIsMode] = useState(false);
  const [infoStatus, setinfoStatus] = useState({
    authorAvatar:
      "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/290871619_3366032726974521_1476253907354503719_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=os2PEUKt7_EAX--gmp6&_nc_ht=scontent.fhan2-5.fna&oh=00_AfCSWoaQ2fbqch3AHFSe2nY-jVaDAVro5E20Z1FKcUbI4Q&oe=636A4312",
    authorId: "@ngocduc82",
    authorName: "Nguyen Ngoc Duc",
    content: "",
    crateAt: createAt,
    photo:
      "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/290871619_3366032726974521_1476253907354503719_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=os2PEUKt7_EAX--gmp6&_nc_ht=scontent.fhan2-5.fna&oh=00_AfCSWoaQ2fbqch3AHFSe2nY-jVaDAVro5E20Z1FKcUbI4Q&oe=636A4312",
  });
  const changeInputStatus = (e) => {
    const { content, ...press  }  = infoStatus
    setinfoStatus({content: e.target.value , ...press})
  };

  const handleClinkInput = () => {
    setIsMode(true);
  };
  const handleBtnTweet = () => {
    // dispatch 1 thuk-action
    dispatch(addNewStatus(infoStatus));
  };
  return (
    <div className="status">
      <Grid container spacing={2} className="status-wrap">
        <Grid item xs={2} className="status-left">
          <Avatar />
        </Grid>
        <Grid item xs={10} className="status-right">
          {isMode ? <SelectViewMode /> : <> </>}
          <InputText
            infoStatus={infoStatus}
            changeInputStatus={changeInputStatus}
            handleClinkInput={handleClinkInput}
          />
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
